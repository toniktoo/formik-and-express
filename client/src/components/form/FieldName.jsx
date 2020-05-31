import React from 'react';
import { ErrorMessage } from 'formik';
import { Typography } from 'antd';
import { Input } from 'formik-antd';
import styles from './Form.module.css';

const { Text } = Typography;

const FieldName = () => (
  <div className={styles.item}>
    <Text>Name: </Text>
    <Input name="name" type="text" placeholder="Enter name..." />
    <ErrorMessage name="name">
      {(msg) => <Text type="danger">{msg}</Text>}
    </ErrorMessage>
  </div>
);

export default FieldName;
