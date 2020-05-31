import React from 'react';
import { ErrorMessage } from 'formik';
import { Typography } from 'antd';
import { Input } from 'formik-antd';
import styles from './Form.module.css';

const { Text } = Typography;

const FieldEmail = () => (
  <div className={styles.item}>
    <Text>Email: </Text>
    <Input name="email" type="email" placeholder="Enter email..." />
    <ErrorMessage name="email">
      {(msg) => <Text type="danger">{msg}</Text>}
    </ErrorMessage>
  </div>
);

export default FieldEmail;
