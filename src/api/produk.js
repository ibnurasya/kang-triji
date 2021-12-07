import httpReq from "./http";

const authAPI = {
    login: (username, password) => {
        return httpReq("api/auth/login", "POST", {
            email: username,
            password,
        });
    },
    getProdukList: () => {
        return httpReq("api/produk", "GET", {},
            { Authorization: `Bearer ${token}` }
        );
    },
    deleteProduk: (id) => {
        return httpReq(`api/produk/${id}`, "DELETE", {},
            { Authorization: `Bearer ${token}` }
        );
    }
};

export default authAPI;
