export const formValidation = ( email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);

  const isPasswordValidation = /^(?!.* )(?=.*\d)(?=.*[A-Z]).{8,15}$/.test(password)

  if(!isEmailValid) return "Email Id is not correct"
  if(!isPasswordValidation) return "Password is not correct"

  return null
};

