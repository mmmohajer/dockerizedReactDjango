(() => {
  'use strict';
  var e,
    t = {
      9509: (e, t, r) => {
        r.r(t);
        var a = r(9526),
          n = r(3961),
          s = r(8446),
          o = r(6292),
          u = r(9902),
          i =
            (r(1955),
            function (e, t) {
              localStorage && localStorage.setItem(e, JSON.stringify(t));
            }),
          l = function (e) {
            var t;
            return null !== (t = localStorage) && void 0 !== t && t.getItem(e)
              ? JSON.parse(localStorage.getItem(e))
              : '';
          },
          c = r(8811),
          d = (0, c.oM)({
            name: 'isAuthenticated',
            initialState: !1,
            reducers: {
              authenticated: function (e, t) {
                return !0;
              },
              notAuthenticated: function (e, t) {
                return !1;
              }
            }
          }),
          m = d.actions,
          f = m.authenticated,
          p = m.notAuthenticated;
        const v = d.reducer;
        var y = function (e) {
            e(f());
          },
          h = (0, c.oM)({
            name: 'profile',
            initialState: [],
            reducers: {
              getProfile: function (e, t) {
                return t.payload;
              },
              removeProfile: function (e, t) {
                return {};
              }
            }
          }),
          g = h.actions,
          E = g.getProfile;
        g.removeProfile;
        const b = h.reducer;
        var S = r(3755),
          w = r(107),
          x = r.n(w),
          Z = r(2868),
          k = r.n(Z),
          I = (0, c.oM)({
            name: 'loading',
            initialState: !1,
            reducers: {
              isLoading: function (e, t) {
                return !0;
              },
              isLoaded: function (e, t) {
                return !1;
              }
            }
          }),
          q = I.actions,
          O = q.isLoading,
          A = q.isLoaded;
        const _ = I.reducer;
        var R = r(240);
        function M(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, a);
          }
          return r;
        }
        var L = {
            addNotification: function (e, t) {
              var r = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? M(Object(r), !0).forEach(function (t) {
                        (0, R.Z)(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                    : M(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                      });
                }
                return e;
              })({}, t.payload);
              (r.isActive = !0), e.push(r);
            },
            removeNotification: function (e, t) {
              return e.filter(function (e) {
                return e.key !== t.payload.key;
              });
            },
            deactivateNotification: function (e, t) {
              return (
                e.forEach(function (e) {
                  e.key === t.payload.key && (e.isActive = !1);
                }),
                e
              );
            },
            clearNotifications: function (e, t) {
              return [];
            }
          },
          P = (0, c.oM)({ name: 'notifications', initialState: [], reducers: L }),
          C = P.actions,
          T = C.addNotification,
          N = C.removeNotification,
          j = C.deactivateNotification;
        C.clearNotifications;
        const H = P.reducer;
        var D = function (e, t) {
            e(j({ key: t })),
              setTimeout(function () {
                e(N({ key: t }));
              }, 500);
          },
          F = function (e, t, r) {
            var a = (function () {
              for (
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16,
                  t = '',
                  r =
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?.><,=-)(*&^%$#@!~',
                  a = r.length,
                  n = 0;
                n < e;
                n++
              )
                t += r.charAt(Math.floor(Math.random() * a));
              return t;
            })();
            e(T({ key: a, message: t, type: r })),
              setTimeout(function () {
                D(e, a);
              }, 1e4);
          },
          W = function (e, t) {
            e &&
              null != e &&
              e.data &&
              Object.keys(e.data).forEach(function (r) {
                e.data[r] &&
                  (Array.isArray(e.data[r])
                    ? e.data[r].forEach(function (e) {
                        F(t, e, 'error');
                      })
                    : F(t, e.data[r], 'error'));
              });
          };
        const B = function (e) {
          var t = e.sendReq,
            r = e.setSendReq,
            n = e.method,
            u = e.url,
            i = e.bodyData,
            c = e.headers,
            d = e.useDefaultHeaders,
            m = void 0 === d || d,
            f = e.showLoading,
            p = void 0 !== f && f,
            v = e.showErrorMessage,
            y = void 0 === v || v,
            h = (0, s.I0)(),
            g = (0, a.useState)(),
            E = (0, o.Z)(g, 2),
            b = E[0],
            w = E[1],
            Z = (0, a.useState)(),
            I = (0, o.Z)(Z, 2),
            q = I[0],
            _ = I[1];
          return (
            (0, a.useLayoutEffect)(
              function () {
                var e = (function () {
                  var e = (0, S.Z)(
                    x().mark(function e() {
                      var t, a, s;
                      return x().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (Boolean(parseInt('0')) &&
                                    (u = ''
                                      .concat('MISSING_ENV_VAR'.API_BASE_URL_WITHOUT_DOCKER)
                                      .concat(u)),
                                  (t = l('access_token')),
                                  m &&
                                    t &&
                                    (c
                                      ? (c.Authorization = ''.concat('JWT', ' ').concat(t))
                                      : (c = { Authorization: ''.concat('JWT', ' ').concat(t) })),
                                  (e.prev = 3),
                                  p && h(O()),
                                  'get' !== n.toLowerCase())
                                ) {
                                  e.next = 11;
                                  break;
                                }
                                return (e.next = 8), k().get(u, c && { headers: c });
                              case 8:
                                (s = e.sent), (e.next = 33);
                                break;
                              case 11:
                                if ('post' !== n.toLowerCase()) {
                                  e.next = 17;
                                  break;
                                }
                                return (e.next = 14), k().post(u, i && i, c && { headers: c });
                              case 14:
                                (s = e.sent), (e.next = 33);
                                break;
                              case 17:
                                if ('put' !== n.toLowerCase()) {
                                  e.next = 23;
                                  break;
                                }
                                return (e.next = 20), k().put(u, i && i, c && { headers: c });
                              case 20:
                                (s = e.sent), (e.next = 33);
                                break;
                              case 23:
                                if ('patch' !== n.toLowerCase()) {
                                  e.next = 29;
                                  break;
                                }
                                return (e.next = 26), k().patch(u, i && i, c && { headers: c });
                              case 26:
                                (s = e.sent), (e.next = 33);
                                break;
                              case 29:
                                if ('delete' !== n.toLowerCase()) {
                                  e.next = 33;
                                  break;
                                }
                                return (e.next = 32), k().delete(u, i && i, c && { headers: c });
                              case 32:
                                s = e.sent;
                              case 33:
                                null !== (a = s) && void 0 !== a && a.data && w(s.data),
                                  h(A()),
                                  (e.next = 42);
                                break;
                              case 37:
                                (e.prev = 37),
                                  (e.t0 = e.catch(3)),
                                  _(e.t0.response),
                                  h(A()),
                                  y && W(e.t0.response, h);
                              case 42:
                                r(!1);
                              case 43:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[3, 37]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
                t && e();
              },
              [t]
            ),
            { data: b, error: q }
          );
        };
        var V = r(1081),
          z = r(4403),
          U = r.n(z),
          J = r(7272);
        const G = function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, null, t);
          },
          K = function () {
            return a.createElement(
              G,
              null,
              a.createElement(
                J.ZC,
                null,
                a.createElement(J.nv, null, 'This is the homepage for your new app!'),
                a.createElement(J.nv, null, 'Test env var ', 'Mohammad Mahdi')
              ),
              a.createElement(J.ZC, { className: 'footer' }, 'Footer')
            );
          };
        var Y = [
            { type: 'required', message: 'First name is required' },
            {
              type: 'minRequired',
              message: 'First name must be at least 3 characters',
              minRequired: 3
            },
            {
              type: 'maxRequired',
              message: 'First name must be at less than 5 characters',
              maxRequired: 100
            }
          ],
          X = [
            { type: 'required', message: 'Last name is required' },
            {
              type: 'minRequired',
              message: 'Last name must be at least 3 characters',
              minRequired: 3
            },
            {
              type: 'maxRequired',
              message: 'Last must be at less than 5 characters',
              maxRequired: 100
            }
          ],
          Q = [
            { type: 'required', message: 'Email is required' },
            { type: 'email', message: 'Must be a valid email address' }
          ],
          $ = [
            { type: 'required', message: 'Password required' },
            {
              type: 'minRequired',
              message: 'Password must be at least 3 characters',
              minRequired: 3
            }
          ];
        const ee = function () {
            var e = (0, s.I0)(),
              t = (0, a.useState)(''),
              r = (0, o.Z)(t, 2),
              n = r[0],
              u = r[1],
              i = (0, a.useState)(''),
              l = (0, o.Z)(i, 2),
              c = l[0],
              d = l[1],
              m = (0, a.useState)(''),
              f = (0, o.Z)(m, 2),
              p = f[0],
              v = f[1],
              y = (0, a.useState)(''),
              h = (0, o.Z)(y, 2),
              g = h[0],
              E = h[1],
              b = (0, a.useState)(!1),
              S = (0, o.Z)(b, 2),
              w = S[0],
              x = S[1],
              Z = (0, a.useState)(''),
              k = (0, o.Z)(Z, 2),
              I = k[0],
              q = k[1],
              O = (0, a.useState)(!1),
              A = (0, o.Z)(O, 2),
              _ = A[0],
              R = A[1],
              M = (0, a.useState)(''),
              L = (0, o.Z)(M, 2),
              P = L[0],
              C = L[1],
              T = (0, a.useState)(!1),
              N = (0, o.Z)(T, 2),
              j = N[0],
              H = N[1],
              D = (0, a.useState)(''),
              W = (0, o.Z)(D, 2),
              V = W[0],
              z = W[1],
              U = (0, a.useState)(!1),
              G = (0, o.Z)(U, 2),
              K = G[0],
              ee = G[1],
              te = (0, a.useState)(''),
              re = (0, o.Z)(te, 2),
              ae = re[0],
              ne = re[1],
              se = (0, a.useState)(!1),
              oe = (0, o.Z)(se, 2),
              ue = oe[0],
              ie = oe[1],
              le = [
                {
                  input_name: 'first_name',
                  validators: Y,
                  errorMessageHandler: q,
                  errorActivateHandler: R
                },
                {
                  input_name: 'last_name',
                  validators: X,
                  errorMessageHandler: C,
                  errorActivateHandler: H
                },
                {
                  input_name: 'email',
                  validators: Q,
                  errorMessageHandler: z,
                  errorActivateHandler: ee
                },
                {
                  input_name: 'password',
                  validators: $,
                  errorMessageHandler: ne,
                  errorActivateHandler: ie
                }
              ],
              ce = (0, a.useState)(!1),
              de = (0, o.Z)(ce, 2),
              me = de[0],
              fe = de[1],
              pe = B({
                sendReq: me,
                setSendReq: fe,
                method: 'POST',
                url: '/api/auth/users/',
                bodyData: { first_name: n, last_name: c, email: p, password: g }
              }),
              ve = pe.data;
            pe.error,
              (0, a.useLayoutEffect)(
                function () {
                  ve &&
                    (x(!0),
                    F(e, 'Please check your inbox to validate your email address.', 'success'));
                },
                [ve]
              );
            var ye = (0, a.useState)(!1),
              he = (0, o.Z)(ye, 2),
              ge = he[0],
              Ee = he[1],
              be = B({
                sendReq: ge,
                setSendReq: Ee,
                method: 'POST',
                url: '/api/resend-activation-email/',
                bodyData: { email: p }
              }),
              Se = be.data;
            return (
              be.error,
              (0, a.useLayoutEffect)(
                function () {
                  Se && F(e, 'Please check your inbox to validate your email address.', 'success');
                },
                [Se]
              ),
              a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  J.l0,
                  {
                    className: 'textWhite py1',
                    toBeValidatedFields: le,
                    onSubmit: function () {
                      return fe(!0);
                    }
                  },
                  a.createElement(
                    J.__,
                    { className: 'textBlack', htmlFor: 'sample' },
                    'First Name'
                  ),
                  a.createElement(J.II, {
                    type: 'text',
                    name: 'first_name',
                    placeholder: 'Type your first name',
                    value: n,
                    onChange: function (e) {
                      u(e.target.value), R(!1), q('');
                    },
                    errorMessage: I,
                    errorIsActive: _
                  }),
                  a.createElement(J.II, {
                    type: 'text',
                    name: 'last_name',
                    placeholder: 'Type your last name',
                    value: c,
                    onChange: function (e) {
                      d(e.target.value), H(!1), C('');
                    },
                    errorMessage: P,
                    errorIsActive: j
                  }),
                  a.createElement(J.II, {
                    type: 'text',
                    name: 'email',
                    placeholder: 'Type your email',
                    value: p,
                    onChange: function (e) {
                      v(e.target.value), ee(!1), z('');
                    },
                    errorMessage: V,
                    errorIsActive: K
                  }),
                  a.createElement(J.II, {
                    type: 'password',
                    name: 'password',
                    placeholder: 'Type your password',
                    value: g,
                    onChange: function (e) {
                      E(e.target.value), ie(!1), ne('');
                    },
                    errorMessage: ae,
                    errorIsActive: ue
                  }),
                  a.createElement(J.II, { type: 'submit', value: 'Submit' })
                ),
                w &&
                  a.createElement(
                    J.ZC,
                    null,
                    a.createElement(
                      J.zx,
                      {
                        onClick: function () {
                          return Ee(!0);
                        }
                      },
                      'Resend Email'
                    )
                  )
              )
            );
          },
          te = function () {
            return a.createElement(G, null, a.createElement(ee, null));
          };
        var re = [
            { type: 'required', message: 'Email is required' },
            { type: 'email', message: 'Must be a valid email address' }
          ],
          ae = [{ type: 'required', message: 'Password required' }];
        const ne = function () {
            var e = (0, s.I0)(),
              t = (0, a.useState)(''),
              r = (0, o.Z)(t, 2),
              n = r[0],
              u = r[1],
              l = (0, a.useState)(''),
              c = (0, o.Z)(l, 2),
              d = c[0],
              m = c[1],
              f = (0, a.useState)(''),
              p = (0, o.Z)(f, 2),
              v = p[0],
              h = p[1],
              g = (0, a.useState)(!1),
              E = (0, o.Z)(g, 2),
              b = E[0],
              S = E[1],
              w = (0, a.useState)(''),
              x = (0, o.Z)(w, 2),
              Z = x[0],
              k = x[1],
              I = (0, a.useState)(!1),
              q = (0, o.Z)(I, 2),
              O = q[0],
              A = q[1],
              _ = [
                {
                  input_name: 'email',
                  validators: re,
                  errorMessageHandler: h,
                  errorActivateHandler: S
                },
                {
                  input_name: 'password',
                  validators: ae,
                  errorMessageHandler: k,
                  errorActivateHandler: A
                }
              ],
              R = (0, a.useState)(!1),
              M = (0, o.Z)(R, 2),
              L = M[0],
              P = M[1],
              C = B({
                sendReq: L,
                setSendReq: P,
                method: 'POST',
                url: '/api/auth/jwt/create/',
                bodyData: { email: n, password: d }
              }),
              T = C.data;
            return (
              C.error,
              (0, a.useLayoutEffect)(
                function () {
                  T &&
                    (i('access_token', T.access),
                    i('refresh_token', T.refresh),
                    y(e),
                    F(e, 'You have successfully logged in.', 'success'));
                },
                [T]
              ),
              a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  J.l0,
                  {
                    className: 'textWhite py1',
                    toBeValidatedFields: _,
                    onSubmit: function () {
                      return P(!0);
                    }
                  },
                  a.createElement(J.II, {
                    type: 'text',
                    name: 'email',
                    placeholder: 'Type your email',
                    value: n,
                    onChange: function (e) {
                      u(e.target.value), S(!1), h('');
                    },
                    errorMessage: v,
                    errorIsActive: b
                  }),
                  a.createElement(J.II, {
                    type: 'password',
                    name: 'password',
                    placeholder: 'Type your password',
                    value: d,
                    onChange: function (e) {
                      m(e.target.value), A(!1), k('');
                    },
                    errorMessage: Z,
                    errorIsActive: O
                  }),
                  a.createElement(J.II, { type: 'submit', value: 'Submit' })
                )
              )
            );
          },
          se = function () {
            return a.createElement(G, null, a.createElement(ne, null));
          };
        var oe = r(1778);
        const ue = function () {
            var e = (0, s.I0)(),
              t = (0, u.lr)(),
              r = (0, o.Z)(t, 1)[0],
              n = (0, a.useState)(''),
              i = (0, o.Z)(n, 2),
              l = i[0],
              c = i[1],
              d = (0, a.useState)(''),
              m = (0, o.Z)(d, 2),
              f = m[0],
              p = m[1],
              v = (0, a.useState)(!1),
              y = (0, o.Z)(v, 2),
              h = y[0],
              g = y[1],
              E = B({
                sendReq: h,
                setSendReq: g,
                method: 'POST',
                url: '/api/activate-user/',
                bodyData: { userId: f, token: l }
              }),
              b = E.data;
            return (
              E.error,
              (0, a.useLayoutEffect)(
                function () {
                  if (null != r && r.get('token')) {
                    var e = r.get('token');
                    c(e);
                  }
                },
                [r]
              ),
              (0, a.useLayoutEffect)(
                function () {
                  if (l) {
                    var t, r, a;
                    try {
                      a = (0, oe.Z)(l);
                    } catch (e) {
                      a = !1;
                    }
                    null !== (t = a) &&
                    void 0 !== t &&
                    t.exp &&
                    Date.now() <= 1e3 * a.exp &&
                    null !== (r = a) &&
                    void 0 !== r &&
                    r.user_id
                      ? p(a.user_id)
                      : F(
                          e,
                          'Sorry, we are unable to activate your registration. That might be because your token has been expired.',
                          'error'
                        );
                  }
                },
                [l]
              ),
              (0, a.useLayoutEffect)(
                function () {
                  l && f && g(!0);
                },
                [l, f]
              ),
              (0, a.useLayoutEffect)(
                function () {
                  b &&
                    b.is_activated &&
                    F(
                      e,
                      'Congrats! you have successfully activated your registration with us! you can now login with your new credentials.',
                      'success'
                    );
                },
                [b]
              ),
              a.createElement(a.Fragment, null, a.createElement(J.ZC, null, 'ActivateUser'))
            );
          },
          ie = function () {
            return a.createElement(G, null, a.createElement(ue, null));
          };
        var le = [
            { type: 'required', message: 'Email is required' },
            { type: 'email', message: 'Must be a valid email address' }
          ],
          ce = [
            { type: 'required', message: 'Password required' },
            {
              type: 'minRequired',
              message: 'Password must be at least 3 characters',
              minRequired: 3
            }
          ];
        const de = function () {
            var e = (0, s.I0)(),
              t = (0, u.lr)(),
              r = (0, o.Z)(t, 1)[0],
              n = (0, a.useState)(''),
              i = (0, o.Z)(n, 2),
              l = i[0],
              c = i[1],
              d = (0, a.useState)(''),
              m = (0, o.Z)(d, 2),
              f = m[0],
              p = m[1],
              v = (0, a.useState)(''),
              y = (0, o.Z)(v, 2),
              h = y[0],
              g = y[1],
              E = (0, a.useState)(''),
              b = (0, o.Z)(E, 2),
              S = b[0],
              w = b[1],
              x = (0, a.useState)(''),
              Z = (0, o.Z)(x, 2),
              k = Z[0],
              I = Z[1],
              q = (0, a.useState)(!1),
              O = (0, o.Z)(q, 2),
              A = O[0],
              _ = O[1],
              R = (0, a.useState)(''),
              M = (0, o.Z)(R, 2),
              L = M[0],
              P = M[1],
              C = (0, a.useState)(!1),
              T = (0, o.Z)(C, 2),
              N = T[0],
              j = T[1],
              H = [
                {
                  input_name: 'email',
                  validators: le,
                  errorMessageHandler: I,
                  errorActivateHandler: _
                }
              ],
              D = [
                {
                  input_name: 'password',
                  validators: ce,
                  errorMessageHandler: P,
                  errorActivateHandler: j
                }
              ],
              W = (0, a.useState)(!1),
              V = (0, o.Z)(W, 2),
              z = V[0],
              U = V[1],
              G = B({
                sendReq: z,
                setSendReq: U,
                method: 'POST',
                url: '/api/send-reset-password-email/',
                bodyData: { email: l }
              }),
              K = G.data;
            G.error,
              (0, a.useLayoutEffect)(
                function () {
                  K && F(e, 'Please check your inbox to validate your email address.', 'success');
                },
                [K]
              ),
              (0, a.useLayoutEffect)(
                function () {
                  if (null != r && r.get('token')) {
                    var e = r.get('token');
                    g(e);
                  }
                },
                [r]
              ),
              (0, a.useLayoutEffect)(
                function () {
                  if (h) {
                    var t, r, a;
                    try {
                      a = (0, oe.Z)(h);
                    } catch (e) {
                      a = !1;
                    }
                    null !== (t = a) &&
                    void 0 !== t &&
                    t.exp &&
                    Date.now() <= 1e3 * a.exp &&
                    null !== (r = a) &&
                    void 0 !== r &&
                    r.user_id
                      ? w(a.user_id)
                      : F(
                          e,
                          'Sorry, we are unable to reset your password. That might be because your token has been expired.',
                          'error'
                        );
                  }
                },
                [h]
              );
            var Y = (0, a.useState)(!1),
              X = (0, o.Z)(Y, 2),
              Q = X[0],
              $ = X[1],
              ee = B({
                sendReq: Q,
                setSendReq: $,
                method: 'POST',
                url: '/api/reset-password/',
                bodyData: { userId: S, token: h, password: f }
              }),
              te = ee.data;
            return (
              ee.error,
              (0, a.useLayoutEffect)(
                function () {
                  te && F(e, 'Congrats! you have successfully reset your password!', 'success');
                },
                [te]
              ),
              a.createElement(
                a.Fragment,
                null,
                h
                  ? a.createElement(
                      J.l0,
                      {
                        className: 'textWhite py1',
                        toBeValidatedFields: D,
                        onSubmit: function () {
                          return $(!0);
                        }
                      },
                      a.createElement(J.II, {
                        type: 'password',
                        name: 'password',
                        placeholder: 'Type your password',
                        value: f,
                        onChange: function (e) {
                          p(e.target.value), j(!1), P('');
                        },
                        errorMessage: L,
                        errorIsActive: N
                      }),
                      a.createElement(J.II, { type: 'submit', value: 'Submit' })
                    )
                  : a.createElement(
                      J.l0,
                      {
                        className: 'textWhite py1',
                        toBeValidatedFields: H,
                        onSubmit: function () {
                          return U(!0);
                        }
                      },
                      a.createElement(J.II, {
                        type: 'text',
                        name: 'email',
                        placeholder: 'Type your email',
                        value: l,
                        onChange: function (e) {
                          c(e.target.value), _(!1), I('');
                        },
                        errorMessage: k,
                        errorIsActive: A
                      }),
                      a.createElement(J.II, { type: 'submit', value: 'Submit' })
                    )
              )
            );
          },
          me = function () {
            return a.createElement(G, null, a.createElement(de, null));
          },
          fe = function () {
            return a.createElement(G, null, a.createElement(J.ZC, null, 'Unknown404'));
          },
          pe = function () {
            return a.createElement(
              V.Z5,
              null,
              a.createElement(V.AW, { exact: !0, path: '/', element: a.createElement(K, null) }),
              a.createElement(V.AW, { path: '/register', element: a.createElement(te, null) }),
              a.createElement(V.AW, { path: '/login', element: a.createElement(se, null) }),
              a.createElement(V.AW, { path: '/activate-user', element: a.createElement(ie, null) }),
              a.createElement(V.AW, {
                path: '/reset-password',
                element: a.createElement(me, null)
              }),
              a.createElement(V.AW, { exact: !0, path: '*', element: a.createElement(fe, null) })
            );
          },
          ve = function () {
            return a.createElement(
              J.ZC,
              {
                className:
                  'flex flex--jc--center flex--ai--center w-per-100 text-center height-vh-full pos-fix z-10 bgSilver'
              },
              a.createElement(
                J.ZC,
                {
                  className:
                    'flex flex--jc--center flex--ai--center w-px-200 height-px-200 br-rad-per-50 bgBlue textRed'
                },
                'Loading'
              )
            );
          },
          ye = function () {
            var e = (0, s.I0)(),
              t = (0, s.v9)(function (e) {
                return e.notifications;
              });
            return a.createElement(
              a.Fragment,
              null,
              a.createElement(
                J.bZ,
                null,
                t.map(function (t) {
                  return a.createElement(
                    J.Cv,
                    {
                      key: t.key,
                      isActive: t.isActive,
                      className: U()(
                        'm1 p1',
                        'success' === (null == t ? void 0 : t.type) && 'bgSuccess',
                        'error' === (null == t ? void 0 : t.type) && 'bgWarning',
                        'danger' === (null == t ? void 0 : t.type) && 'bgDanger'
                      )
                    },
                    a.createElement(
                      J.ZC,
                      {
                        className: 'w-per-100',
                        type: 'flex',
                        direction: 'horizontal',
                        distributedBetween: !0
                      },
                      a.createElement(J.nv, null, t.message),
                      a.createElement(
                        J.ZC,
                        {
                          className: 'textRed bgWhite mouse-hand',
                          onClick: function () {
                            return D(e, t.key);
                          }
                        },
                        'X'
                      )
                    )
                  );
                })
              )
            );
          },
          he = function () {
            var e = (0, s.I0)(),
              t = (0, s.v9)(function (e) {
                return e.loading;
              }),
              r = (0, s.v9)(function (e) {
                return e.isAuthenticated;
              }),
              n = (0, a.useState)(l('access_token')),
              c = (0, o.Z)(n, 2),
              d = c[0],
              m = c[1],
              f = (0, a.useState)(l('refresh_token')),
              v = (0, o.Z)(f, 2),
              h = v[0],
              g = v[1],
              b = (0, a.useState)(!1),
              S = (0, o.Z)(b, 2),
              w = S[0],
              x = S[1],
              Z = (0, a.useState)(!1),
              k = (0, o.Z)(Z, 2),
              I = k[0],
              q = k[1],
              O = B({
                sendReq: I,
                setSendReq: q,
                method: 'POST',
                url: '/api/auth/jwt/refresh/',
                bodyData: { refresh: h },
                showLoading: !1,
                showErrorMessage: !1
              }),
              A = O.data,
              _ =
                (O.error, B({ sendReq: w, setSendReq: x, method: 'GET', url: '/api/profile/me/' })),
              R = _.data;
            return (
              _.error,
              (0, a.useLayoutEffect)(function () {
                d
                  ? y(e)
                  : (function (e) {
                      e(p());
                    })(e);
              }, []),
              (0, a.useLayoutEffect)(
                function () {
                  r &&
                    (m(l('access_token')),
                    g(l('refresh_token')),
                    x(!0),
                    setInterval(function () {
                      q(!0), q(!1);
                    }, 27e4));
                },
                [r]
              ),
              (0, a.useLayoutEffect)(
                function () {
                  R &&
                    (function (e, t) {
                      e(E(t));
                    })(e, R);
                },
                [R]
              ),
              (0, a.useLayoutEffect)(
                function () {
                  A && i('access_token', A.access);
                },
                [A]
              ),
              a.createElement(
                u.VK,
                null,
                t && a.createElement(ve, null),
                a.createElement(ye, null),
                a.createElement(pe, null)
              )
            );
          },
          ge = (0, r(2669).UY)({ loading: _, notifications: H, isAuthenticated: v, profile: b });
        var Ee = (0, c.xC)({ reducer: ge });
        n.render(
          a.createElement(s.zt, { store: Ee }, a.createElement(he, null)),
          document.querySelector('#app')
        );
      }
    },
    r = {};
  function a(e) {
    var n = r[e];
    if (void 0 !== n) return n.exports;
    var s = (r[e] = { exports: {} });
    return t[e](s, s.exports, a), s.exports;
  }
  (a.m = t),
    (e = []),
    (a.O = (t, r, n, s) => {
      if (!r) {
        var o = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [r, n, s] = e[c], u = !0, i = 0; i < r.length; i++)
            (!1 & s || o >= s) && Object.keys(a.O).every((e) => a.O[e](r[i]))
              ? r.splice(i--, 1)
              : ((u = !1), s < o && (o = s));
          if (u) {
            e.splice(c--, 1);
            var l = n();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      s = s || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > s; c--) e[c] = e[c - 1];
      e[c] = [r, n, s];
    }),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (a.d = (e, t) => {
      for (var r in t)
        a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      var e = { 179: 0 };
      a.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var n,
            s,
            [o, u, i] = r,
            l = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (n in u) a.o(u, n) && (a.m[n] = u[n]);
            if (i) var c = i(a);
          }
          for (t && t(r); l < o.length; l++) (s = o[l]), a.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return a.O(c);
        },
        r = (self.webpackChunkreact_webpack = self.webpackChunkreact_webpack || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var n = a.O(void 0, [940], () => a(9509));
  (n = a.O(n)), (module.exports = n);
})();
