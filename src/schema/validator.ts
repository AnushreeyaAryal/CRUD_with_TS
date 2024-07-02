import * as yup from "yup";

export const createSchema = yup.object().shape({
  id: yup.number().positive().required(),
  name: yup.string().required(),
  releaseYear: yup.number().positive().integer(),
  rating: yup.number().positive().integer(),
});

export const updateSchema = yup.object().shape({
  name: yup.string().required(),
  releaseYear: yup.number().positive().integer(),
  rating: yup.number().positive().integer(),
});

