import * as yup from 'yup';

export const schemaValidate = yup.object().shape({
  name: yup.string().max(50, 'не более 50 символов').required('Заполните имя'),
  password: yup
    .string()
    .required('Введите пароль')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Пароль от 8 до 40 символов, как минимум одна цифра и одна заглавная буква'
    ),
  confirmPassword: yup.string().when('password', {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароли не совпадают')
      .required('Повторите пароль'),
  }),
  email: yup.string().email('Не правильный email').required('Введите email'),
  website: yup.string().url('Не правильный url'),
  age: yup
    .number()
    .min(18, 'не менее 18')
    .max(65, 'не более 65')
    .required('Введите age'),
  skills: yup.array(),
  acceptTerms: yup.bool().oneOf([true], 'Нужно принять правила'),
});
