export const someEmpty = values => values.some(val => !val);

export const errorMessages = type => {
  switch (type) {
    case 'email':
      return 'Invalid email value';
    case 'username':
      return 'Invalid username value';
    case 'password':
      return 'Invalid password value';
    default:
      return `Invalid ${type} value`;
  }
};
