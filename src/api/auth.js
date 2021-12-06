import httpReq from "./http";

const authAPI = {
  login: (username, password) => {
    return httpReq("api/auth/login", "POST", {
      email: username,
      password,
    });
  },
  register: ({ nama, nohp, email, password }) => {
    return httpReq("api/auth/register", "POST", {
      name: nama,
      email: email,
      password: password,
      confirm_password: password,
      no_hp: nohp,
    });
  },
};

export default authAPI;
