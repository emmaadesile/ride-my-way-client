import jwt from "jsonwebtoken";
import userIsloggedIn from "../utils/userIsLoggedIn";
import userIsLoggedIn from "../utils/userIsLoggedIn";

describe("userIsLoggedIn", () => {
  // eslint-disable-next-line
  let user;
  beforeEach(() => {
    const token = jwt.sign({ id: 1 }, "secret", { expiresIn: "24h" });
    user = {
      id: 1,
      name: "John Doe",
      token
    };
  });

  it('should return a boolean', () => {
    expect(typeof userIsloggedIn()).toBe('boolean');
  });

  it('should return false if user is not set', () => {
    expect(userIsloggedIn()).toEqual(false);
  });

  it('should return false if token cannot be decoded', () => {
    const wrongToken = 'som.useless.token';
    window.localStorage.setItem('token', wrongToken);
    expect(userIsloggedIn()).toEqual(false)
  });

  it('should return true if token is not expired', () => {
    const token = jwt.sign({ id: 1 }, 'secret', { expiresIn: '24h' });
    window.localStorage.setItem('token', token)
    expect(userIsloggedIn()).toEqual(true);
  });

  it('should return false if token is expired', () => {
    const expiredToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTM3ODc3MTk1LCJleHAiOjE1Mzc4NzcxOTZ9.peXgmzR1Any3D-MVcXmwPYr_imS4BwVYZbxKyHsb2pc';
    window.localStorage.setItem('token', expiredToken)
    expect(userIsLoggedIn()).toEqual(false);
  })
});
