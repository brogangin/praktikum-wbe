const express = require("express");
const knex = require("knex");
const PORT = 5000;
const app = express();

// app.get("/ping", (req, res) => {
//   res.send({
//     error: false,
//     message: "Server is healthy",
//   });
// });

// app.listen(PORT, () => {
//   console.log("Server started listening on PORT : " + PORT);
// });

// app.get("/", (req, res) => {
//   res.end("Hello World!");
// });

// app.get("/test-html", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/test-json", (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: [
//       {
//         nim: "2019420005",
//         nama: "Andi",
//         prodi: "Teknik Informatika",
//       },
//     ],
//   });
// });

// app.get("/tugas-html", (req, res) => {
//   res.sendFile(__dirname + "/tugas.html");
// });

// app.get("/tugas-json", (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: [
//       {
//         NIM: "202111420057",
//         Nama: "BimMH",
//         Prodi: "Teknik Informatika",
//         Fakultas: "Fakultas Teknik",
//         NoTelpon: "0812345678",
//         "Alamat Mahasiswa": "Jalan dulu hasil belakangan",
//       },
//     ],
//   });
// });

app.listen(PORT, () => {
  // knex
  //   .raw("select 1=1 as test")
  //   .then((result) => {
  //     console.log("DB CONNECTION: ", result.rows[0].test);
  //   })
  //   .catch((err) => {
  //     console.log("ERROR DB:", err);
  //   });
  console.log("Server started listening on PORT : " + PORT);
});

const bodyParser = require("body-parser");
const morgan = require("morgan");
const routerV1 = require("./routes/v1/index");
app.use(morgan("tiny"));
// parsing the request bodys
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);
// inisialisasi router
app.use("/v1/", routerV1);
