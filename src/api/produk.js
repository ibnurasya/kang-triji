import config from "../config";
import httpReq from "./http";

const produkAPI = {
  getProdukList: (token) => {
    return httpReq(
      "api/produk",
      "GET",
      {},
      { Authorization: `Bearer ${token}` }
    ).then((res) => {
      const produk = res.data.map((item) => {
        return {
          id: item.id,
          jenis: "Snack",
          nama: item.nama,
          image: `${config.apiUrl}storage/${item.picture}`,
          harga: item.harga,
          deskripsi: item.deskripsi,
          topseller: Boolean(item.topseller),
          rating: item.rating,
          weight: item.berat,
          expired: item.kadaluarsa,
          ingredients: [
            {
              id: "4",
              name: "telur",
              image: require("../../assets/Bahan/telur.png"),
            },
            {
              id: "2",
              name: "tepung",
              image: require("../../assets/Bahan/tepung.jpg"),
            },
            {
              id: "1",
              name: "susu",
              image: require("../../assets/Bahan/susu.jpg"),
            },
          ],
        };
      });

      console.log(produk);

      return produk;
    });
  },
};

export default produkAPI;
