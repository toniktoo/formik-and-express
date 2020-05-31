import React from 'react';
import { ErrorMessage } from 'formik';
import { Typography } from 'antd';
import { Input } from 'formik-antd';
import styles from './Form.module.css';

const { Text } = Typography;

const FieldWebsite = () => (
  <div className={styles.item}>
    <Text>Website: </Text>
    <Input name="website" type="text" placeholder="Enter website..." />
    <ErrorMessage name="website" />
  </div>
);

export default FieldWebsite;
