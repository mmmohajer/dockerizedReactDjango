import React, { useEffect } from 'react';
import cx from 'classnames';
import { Div, TextArea as BaseTextArea, Label } from 'basedesign-iswad';

import styles from './TextArea.module.scss';

const TextArea = ({
  labelText,
  val,
  setVal,
  errorHandler,
  isRequired,
  errorMessage,
  onChange,
  className,
  ...props
}) => {
  useEffect(() => {
    console.log(errorMessage);
  }, [errorMessage]);
  return (
    <>
      <Div className={cx('mainInputContainer', className)}>
        {labelText && (
          <Div className={cx('labelForInputContainer')}>
            <Label className={cx(isRequired && 'required', 'labelForInput')}>{labelText}</Label>
          </Div>
        )}

        <Div className={cx('inputFieldContainer')}>
          <BaseTextArea
            className={cx('textAreaField')}
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
              errorHandler('');
              if (onChange) {
                onChange(e);
              }
            }}
            {...props}
          />

          {errorMessage && (
            <Div
              className={cx(
                'iswad_input_errorMessage',
                errorMessage && 'iswad_input_errorMessage_active'
              )}>
              {errorMessage}
            </Div>
          )}
        </Div>
      </Div>
    </>
  );
};

export default TextArea;
