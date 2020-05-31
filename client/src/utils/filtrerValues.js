import _ from 'lodash';

//фильтруем values.skills на пустые поля
const filtredEmptySkiils = (values) => {
  const filtredSkiils = values.skills.filter(
    (skill) => skill !== undefined && skill !== ''
  );

  let filtredValues = {
    ...values,
    skills: filtredSkiils,
  };
  return filtredValues;
};
//фильтруем values на пустые поля
export const filtredEmptyFields = (values) => {
  const filtredSkiils = filtredEmptySkiils(values);
  const filtredFields = _.omitBy(filtredSkiils, (k, v) => k === '');
  return filtredFields;
};
