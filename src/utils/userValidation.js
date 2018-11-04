class UserValidation {

  static validateUsername = user => {
    const testUser = /^([a-zA-Z0-9_]+)$/;
    return testUser.test(user);
  }
}


export default UserValidation;