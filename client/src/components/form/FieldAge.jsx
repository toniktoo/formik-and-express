import React from 'react';
import { ErrorMessage } from 'formik';
import { Typography } from 'antd';
import { InputNumber } from 'formik-antd';
import styles from './Form.module.css';

const { Text } = Typography;

const FieldAge = () => (
  <div className={styles.fieldColumn}>
    <Text>Age: </Text>
    <InputNumber
      name="age"
      type="text"
      placeholder="Enter age..."
      style={{ width: '100%' }}
    />
    <ErrorMessage name="age">
      {(msg) => <Text type="danger">{msg}</Text>}
    </ErrorMessage>
  </div>
);

export default FieldAge;
