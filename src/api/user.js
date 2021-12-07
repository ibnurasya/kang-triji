import httpReq from "./http";

const userAPI = {
  userDetail: (token) => {
    return httpReq("api/user", "GET", {}, { Authorization: `Bearer ${token}` });
  },
  resetPassword: (pass, confPass, token) => {
    return httpReq(
      "api/user/reset-password",
      "POST",
      {
        password: pass,
        confirm_password: confPass,
      },
      { Authorization: `Bearer ${token}` }
    );
  },
  
};

export default userAPI;
