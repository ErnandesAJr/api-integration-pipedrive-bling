import * as yup from 'yup';

module.exports = yup.object().shape({
  name: yup.string().required(),
  description: yup.string()
});