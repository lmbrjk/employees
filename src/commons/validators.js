const REQUIRED_ERROR_TEXT = 'Поле обязательно для заполнения';

export const requiredValidator = value => value ? undefined : REQUIRED_ERROR_TEXT;

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);
