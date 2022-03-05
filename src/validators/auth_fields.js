import * as yup from 'yup';

/**
 * Schema validation for the fields of the register form
 */
const registerSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  username: yup.string().required('Username is required'),
  email: yup.string().email('email is not valid').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      'Password must be at least 6 characters and contain at least 1 number, 1 UPPER/lower letter and 1 special char'
    ),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
  dateBirth: yup.date().required('Date of birth is required'),
  gender: yup
    .mixed()
    .oneOf(
      ['male', 'female', 'other', 'not say'],
      'need to be one of value inside option'
    ),
});

/**
 *  Schema validation for fields of login form
 */
const loginSchema = yup.object({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
});

/**
 * Schema validation for fields of email form
 */
const emailSchema = yup.object({
  email: yup.string().required('Email is required'),
});

/**
 * Schema validation for fields of validation code form
 */
const validationCodeSchema = yup.object({
  code: yup
    .string()
    .required('Code is required')
    .min(6, 'Code is too short')
    .max(6, 'Code is too long'),
});

export { registerSchema, loginSchema, emailSchema, validationCodeSchema };
