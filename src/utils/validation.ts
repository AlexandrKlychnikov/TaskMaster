import { nameRegex, passwordRegex } from 'constants/authentication';
import { UseFormWatch } from 'react-hook-form';
import { IFormInputs } from 'types/types';

const validationParams = (fieldName: string, watch?: UseFormWatch<IFormInputs>) => {
  const params = {
    required: {
      value: true,
      message: `*${fieldName} is required`,
    },
    minLength: {
      value: 3,
      message: '*at least 3 characters',
    },
    maxLength: {
      value: 30,
      message: '*maximum of 30 characters',
    },
  };
  if (fieldName === 'login') {
    Object.assign(params, {
      pattern: {
        value: nameRegex,
        message: '*login must contain only Latin characters',
      },
    });
  }
  if (fieldName === 'password') {
    Object.assign(params, {
      minLength: { value: 8, message: '*at least 8 characters' },
      pattern: {
        value: passwordRegex,
        message:
          '*at least one number, one letter (latin only) in upper case and one character such as !@#$%&',
      },
    });
  }

  if (fieldName === 'password_repeat') {
    Object.assign(params, {
      required: {
        value: true,
        message: `*confirm the password`,
      },
      validate: (val: string) => {
        if (watch('password') != val) {
          return '*your passwords do no match';
        }
      },
    });
  }

  return params;
};

export default validationParams;
