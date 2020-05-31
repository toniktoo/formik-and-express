import React from 'react';
import { ErrorMessage } from 'formik';
import { Typography } from 'antd';
import { Checkbox } from 'formik-antd';
import className from 'classnames/bind';
import styles from './Form.module.css';

const cx = className.bind(styles);
const { Text } = Typography;

const FieldAccept = () => (
  <div className={cx('fieldColumn', 'acceptWrap')}>
    <div>
      <Text>AcceptTerms: </Text>
      <Checkbox name="acceptTerms" type="checkbox" />
    </div>
    <ErrorMessage name="acceptTerms" component="div">
      {(msg) => <Text type="danger">{msg}</Text>}
    </ErrorMessage>
  </div>
);

export default FieldAccept;
