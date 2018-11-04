import UserValidation from "../utils/userValidation";

describe("userValidation", () => {

  it("returns false for invalid username", () => {
    let username = "jon$^$Q%T$^do432e";
    expect(UserValidation.validateUsername(username)).toEqual(false);
  });

  it("returns true for valid username", () => {
    let username = "JohnDoe";
    expect(UserValidation.validateUsername(username)).toEqual(true);
  });
});
