import React from 'react';
import { ErrorMessage } from 'formik';
import { Typography } from 'antd';
import { Input } from 'formik-antd';
import styles from './Form.module.css';

const { Text } = Typography;

const FieldPassword = () => (
  <>
    <div className={styles.item}>
      <Text>Password: </Text>
      <Input
        name="password"
        type="password"
        placeholder="Enter password..."
      />
      <ErrorMessage name="password">
        {(msg) => <Text type="danger">{msg}</Text>}
      </ErrorMessage>
    </div>
    <div className={styles.item}>
      <Text>ConfirmPassword: </Text>
      <Input
        name="confirmPassword"
        type="password"
        placeholder="Enter password..."
      />
      <ErrorMessage name="confirmPassword">
        {(msg) => <Text type="danger">{msg}</Text>}
      </ErrorMessage>
    </div>
  </>
);

export default FieldPassword;
