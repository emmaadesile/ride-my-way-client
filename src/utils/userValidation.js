class UserValidation {

  static validateUsername = user => {
    const testUser = /^([a-zA-Z0-9_]+)$/;
    return testUser.test(user);
  }

  static validateEmail = (email) => {
    const testEmail = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return testEmail.test(email);
  };
}


export default UserValidation;