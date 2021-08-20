export const validateSignup = (
  name,
  email,
  password,
  repeatPassword,
  checked
) => {
  // Check ckechBox
  if (!checked) {
    return {
      field: "checkBox",
      message: "Molimo vas da se složite sa uslovima korišćenja",
    };
  }
  // Validate name
  if (!/(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{3,30}$/.test(name)) {
    return {
      field: "name",
      message: "Ime nije u odgovarajučem formatu",
    };
  }
  // Validate email
  if (!/\b[\w\.-]+@[\w\.-]+\.\w{2,8}\b/.test(email)) {
    return {
      field: "email",
      message: "Email nije u odgovarajučem formatu",
    };
  }
  // Validate password
  if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)) {
    return {
      field: "password",
      message: "Šifra nije u odgovarajučem formatu",
    };
  }
  // Validate repeatPassword
  if (!(password === repeatPassword)) {
    return {
      field: "repeatPassword",
      message: "Šifre se ne poklapaju",
    };
  }
  return {
    field: "",
    message: "ok",
  };
};
