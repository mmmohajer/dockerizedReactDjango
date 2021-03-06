import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getLocalStorage, setLocalStorage, removeLocalStorage } from 'Utils/auth';
import { authenticated, notAuthenticated } from 'Services/auth';
import { getProfile } from 'Services/profile';
import useApiCalls from 'Hooks/useApiCalls';
import { ACCESS_TOKEN_CHEANGE_TIME } from 'Constants/vars';
import {
  REFRESH_TOKEN_API_ROUTE,
  MY_PROFILE_API_ROUTE,
  AUTHENTICATE_USER_API_ROUTE
} from 'Constants/apiRoutes';

import AppRoutes from './AppRoutes';
import Loading from 'BaseComponents/Loading';
import Alert from 'BaseComponents/Alert';
import BaseTemplate from 'BaseComponents/BaseTemplate';

function App() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [accessToken, setAccessToken] = useState(getLocalStorage('access_token'));
  const [refreshToken, setRefreshToken] = useState(getLocalStorage('refresh_token'));
  const [sendGetCurUserReq, setSendGetCurUserReq] = useState(false);
  const [sendAuthenticatedReq, setSendAuthenticatedReq] = useState(false);
  const [sendrefreshTokenReq, setSendRefreshTokenReq] = useState(false);

  const { data: refreshData, error: refreshError } = useApiCalls({
    sendReq: sendrefreshTokenReq,
    setSendReq: setSendRefreshTokenReq,
    method: 'POST',
    url: REFRESH_TOKEN_API_ROUTE,
    bodyData: { refresh: refreshToken },
    showLoading: false,
    showErrorMessage: false
  });

  const { data: authenticatedData, error: authenticatedError } = useApiCalls({
    sendReq: sendAuthenticatedReq,
    setSendReq: setSendAuthenticatedReq,
    method: 'GET',
    url: AUTHENTICATE_USER_API_ROUTE,
    showLoading: false,
    showErrorMessage: false
  });

  const { data: profileData, error: profileError } = useApiCalls({
    sendReq: sendGetCurUserReq,
    setSendReq: setSendGetCurUserReq,
    method: 'GET',
    url: MY_PROFILE_API_ROUTE,
    showLoading: false,
    showErrorMessage: false
  });

  useEffect(() => {
    if (accessToken) {
      setSendAuthenticatedReq(true);
    }
  }, []);

  useEffect(() => {
    if (authenticatedData) {
      if (authenticatedData?.Authenticated) {
        authenticated(dispatch);
      } else {
        notAuthenticated(dispatch);
        removeLocalStorage('access_token');
        removeLocalStorage('refresh_token');
      }
    }
  }, [authenticatedData]);

  useEffect(() => {
    if (authenticatedError?.data) {
      notAuthenticated(dispatch);
      removeLocalStorage('access_token');
      removeLocalStorage('refresh_token');
    }
  }, [authenticatedError]);

  useEffect(() => {
    if (isAuthenticated) {
      setAccessToken(getLocalStorage('access_token'));
      setRefreshToken(getLocalStorage('refresh_token'));
      try {
        setSendGetCurUserReq(true);
        setInterval(() => {
          setSendRefreshTokenReq(true);
          setSendRefreshTokenReq(false);
        }, ACCESS_TOKEN_CHEANGE_TIME);
      } catch (err) {
        console.log(err);
      }
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (profileData) {
      getProfile(dispatch, profileData);
    }
  }, [profileData]);

  useEffect(() => {
    if (refreshData) {
      setLocalStorage('access_token', refreshData['access']);
    }
  }, [refreshData]);

  return (
    <BrowserRouter>
      {loading && <Loading />}
      <Alert />
      <BaseTemplate>
        <AppRoutes />
      </BaseTemplate>
    </BrowserRouter>
  );
}

export default App;
