import { ValidationError } from 'yup';

export default function getValidationErrors(err) {
    const ValidationErrors = {};

    err.inner.forEach(error => {
        ValidationErrors[error.path] = error.message;
    });

    return ValidationErrors
}