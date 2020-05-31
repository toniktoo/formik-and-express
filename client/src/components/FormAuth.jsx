import React from 'react';
import { Formik } from 'formik';
import { Typography } from 'antd';
import { Form } from 'formik-antd';
import axios from 'axios';
import styles from './form/Form.module.css';

import { schemaValidate } from './form/shema';
import FieldName from './form/FieldName';
import FieldPassword from './form/FieldPassword';
import FieldAccept from './form/FieldAccept';
import FieldAge from './form/FieldAge';
import FieldEmail from './form/FieldEmail';
import FieldWebsite from './form/FieldWebsite';
import FieldSkills from './form/FieldSkills';
import { filtredEmptyFields } from '../utils/filtrerValues';

const { Title } = Typography;

const FormAuth = () => {
  const URL = 'http://localhost:9000/sign-up';

  const initialValues = {
    name: '',
    password: '',
    confirmPassword: '',
    email: '',
    website: '',
    age: '',
    skills: [''],
    acceptTerms: false,
  };

  const handleSubmit = async (values, { setFieldError, setSubmitting }) => {
    const filtred = filtredEmptyFields(values);
    try {
      const response = await axios.post(URL, filtred);
      if (response.status === 200) {
        alert(response.data.message);
      }
    } catch (err) {
      setFieldError('email', 'Пользователь с таким email уже зарегистрирован');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemaValidate}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div className={styles.formWrap}>
            <div className={styles.form}>
              <Title level={3}>Регистрация:</Title>
              <hr />
              <FieldName />
              <FieldPassword />
              <FieldEmail />
              <FieldWebsite error />
              <FieldAge />
              <FieldSkills />
              <FieldAccept />
              <hr />
              <button type="submit" style={{ width: '100%' }}>
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormAuth;
