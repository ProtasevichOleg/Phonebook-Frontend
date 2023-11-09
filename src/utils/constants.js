export const NAME_CHARACTERS_CHECK_REGEX = /^[a-zA-Z0-9_.-]+$/;
export const NAME_EDGE_CHAR_VALIDATION_REGEX = /^[^-.].*[^-.]$/;
export const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/;
export const PHONE_REGEX = /^\+?\d[\d ()-]{5,14}\d$/;
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d.,-]*$/;
