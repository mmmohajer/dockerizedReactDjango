import React, { useState } from 'react';
import cx from 'classnames';
import dayjs from 'dayjs';
import { Div, Form } from 'basedesign-iswad';

import TextBox from 'BaseComponents/TextBox';
import Select from 'BaseComponents/Select';
import DatePicker from 'BaseComponents/DatePicker';
import ImagePicker from 'BaseComponents/ImagePicker';
import TextArea from 'BaseComponents/TextArea';
import Button from 'BaseComponents/Button';

import { passwordValidators } from './validators';

import { PROVINCE_CHOICES } from './constants';

import styles from './TestForm.module.scss';

const TestForm = () => {
  const [password, setPassword] = useState('');
  const [province, setProvince] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [profilePhoto, setProfilePhoto] = useState('');
  const [message, setMessage] = useState('');

  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [provinceErrorMessage, setProvinceErrorMessage] = useState('');
  const [birthDateErrorMessage, setBirthDateErrorMessage] = useState('');
  const [profilePhotoErrorMessage, setProfilePhotoErrorMessage] = useState('');
  const [messageErrorMessage, setMessageErrorMessage] = useState('');

  const toBeValidatedFields = [
    {
      input_name: 'password',
      validators: passwordValidators,
      errorMessageHandler: setPasswordErrorMessage
    }
  ];

  const customValidations = () => {
    let validated = true;
    if (!province) {
      setProvinceErrorMessage('Province is required');
      validated = false;
    }

    if (dayjs().diff(birthDate, 'year') < 18) {
      setBirthDateErrorMessage('You must be more than 18 years old!');
      validated = false;
    }

    if (!profilePhoto) {
      setProfilePhotoErrorMessage('You must pick a profile photo');
      validated = false;
    }

    if (!message) {
      setMessageErrorMessage('You must send a message to us!');
      validated = false;
    }

    return validated;
  };

  const submitHandler = (e) => {
    if (customValidations()) {
      console.log(password);
      console.log(province);
      console.log(birthDate);
      console.log(profilePhoto);
      console.log(message);
    }
  };

  return (
    <>
      <Form
        className="w-per-50 ml-auto mr-auto br-all-solid-1 p2 br-rad-px-10"
        onSubmit={submitHandler}
        toBeValidatedFields={toBeValidatedFields}
        id="testForm">
        <TextBox
          isRequired
          type="password"
          labelText="Password"
          val={password}
          setVal={setPassword}
          errorMessage={passwordErrorMessage}
          errorHandler={setPasswordErrorMessage}
          name="password"
        />
        <Select
          options={PROVINCE_CHOICES}
          val={province}
          setVal={setProvince}
          selectIntialShownText={''}
          placeHolder="Select a Province"
          labelText="Province"
          isRequired
          errorMessage={provinceErrorMessage}
          errorHandler={setProvinceErrorMessage}
        />
        <DatePicker
          labelText="Birth Date"
          isRequired
          chosenDate={birthDate}
          setChosenDate={setBirthDate}
          errorMessage={birthDateErrorMessage}
          errorHandler={setBirthDateErrorMessage}
        />
        <ImagePicker
          labelText="Profile Photo"
          isRequired
          file={profilePhoto}
          setFile={setProfilePhoto}
          errorMessage={profilePhotoErrorMessage}
          errorHandler={setProfilePhotoErrorMessage}
        />
        <TextArea
          isRequired
          labelText="Message"
          val={message}
          setVal={setMessage}
          errorMessage={messageErrorMessage}
          errorHandler={setMessageErrorMessage}
        />
        <Button type="submit" id="testFormSubmit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default TestForm;
