import React from 'react';

import {
  getIn, Field, ErrorMessage, FieldArray,
} from 'formik';
import { Input } from 'formik-antd';
import { Button, Typography } from 'antd';
import styles from './Form.module.css';


const { Text } = Typography;
let count = 0;

const FieldArrayComponent = (arrayHelpers) => (
  <div>
    {arrayHelpers.form.values.skills.map((objSkill, index) => {
      count += 1;
      const handleAdd = () => {
        arrayHelpers.push('');
      };
      return (
        <div key={count} className={styles.fieldRow}>
          <Field name={`skills.${index}`}>
            {({ field, form: { touched, errors } }) => {
              const error = getIn(errors, field.name);
              const touch = getIn(touched, field.name);
              return (
                <div className={styles.skiilsWrap}>
                  <Input
                    type="text"
                    name={field.name}
                    onChange={field.onChange}
                    placeholder="Enter skill..."
                    style={{ height: '35px' }}
                  />
                  {touch && error ? <p>{error}</p> : null}
                </div>
              );
            }}
          </Field>
          <ErrorMessage name={`skills.${index}`} />
          <Button
            type="primary"
            style={{ height: '35px' }}
            onClick={() => handleAdd()}
          >
            +
          </Button>
        </div>
      );
    })}
  </div>
);

const FieldSkills = () => (
  <div className={styles.item}>
    <Text>Skills: </Text>
    <FieldArray name="skills" component={FieldArrayComponent} />
  </div>
);

export default FieldSkills;
