import jwtDecode from "jwt-decode";

const userIsLoggedIn = () => {
  const { token } = localStorage;
  // early return if user is not set
  if (!token) {
    return false;
  }

  let decoded;

  try {
    decoded = jwtDecode(token);
    const { exp } = decoded;
    const currentDate = new Date();

    // check if token is still valid
    return exp * 1000 - currentDate.getTime() > 1;
  } catch (error) {
    return false;
  }
};

export default userIsLoggedIn;
