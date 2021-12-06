const produk = [
    {
        "id": '1',
        "jenis": "Snack",
        "nama": "Putu Belanda",
        "image": require("../assets/putubelanda.jpeg"),
        "harga": 15000,
        "deskripsi": "asdads",
        "topseller": true,
        "rating": 4.6,
        "weight": '20 g',
        "expired": '60 hari',
        ingredients: [
            {
                "id": '4',
                "name": 'telur',
                "image": require("../assets/Bahan/telur.png"),
            },
            {
                "id": '2',
                "name": 'tepung',
                "image": require("../assets/Bahan/tepung.jpg"),
            },
            {
                "id": '1',
                "name": 'susu',
                "image": require("../assets/Bahan/susu.jpg"),
            },
        ],
    },
    {
        "id": '2',
        "jenis": "Snack",
        "nama": "Kriwil",
        "image": require("../assets/kriwil.jpeg"),
        "harga": 25000,
        "deskripsi": "asdads",
        "topseller": false,
        "rating": 4.8,
        "weight": '110 g',
        "expired": '60 hari',
        ingredients: [
            {
                "id": '4',
                "name": 'telur',
                "image": require("../assets/Bahan/telur.png"),
            },
            {
                "id": '2',
                "name": 'tepung',
                "image": require("../assets/Bahan/tepung.jpg"),
            },
            {
                "id": '5',
                "name": 'keju',
                "image": require("../assets/Bahan/keju.jpg"),
            },
        ],
       
    },
    {
        "id": '3',
        "jenis": "Snack",
        "nama": "Almond Crispy",
        "image": require("../assets/almondcrispy.jpeg"),
        "harga": 30000,
        "deskripsi": "Params aren't only useful for passing some data to a new screen, but they can also be useful to pass data to a previous screen too. For example, let's say you have a screen with a create post button, and the create post button opens a new screen to create a post. After creating the post, you want to pass the data for the post back to previous screen.",
        "rating": 5.0,
        "berat": "350gr",
        "kadaluarsa": "60 hari",
        "topseller": false,
        "rating": '5.0',
        "weight": '350 g',
        "expired": '60 hari',
        ingredients: [
            {
                "id": '1',
                "name": 'susu',
                "image": require("../assets/Bahan/susu.jpg"),
            },
            {
                "id": '2',
                "name": 'tepung',
                "image": require("../assets/Bahan/tepung.jpg"),
            },
            {
                "id": '3',
                "name": 'almond',
                "image": require("../assets/Bahan/almond.jpg"),
            },
        ],
       
    },
    {
        "id": '4',
        "jenis": "Makan",
        "nama": "Ayam Bakar",
        "image": require("../assets/Ayambakar.jpeg"),
        "harga": 30000,
        "deskripsi": "asdads",
        "topseller": false,
        "rating": 4.7,
        "weight": '1000 g',
        "expired": '2 hari',
        ingredients: [
            {
                "id": '6',
                "name": 'ayam',
                "image": require("../assets/Bahan/ayam.jpg"),
            },
            {
                "id": '7',
                "name": 'kecap',
                "image": require("../assets/Bahan/kecap.jpeg"),
            },
            {
                "id": '8',
                "name": 'madu',
                "image": require("../assets/Bahan/madu.jpeg"),
            },
        ],
       
    }
];

export default produk;