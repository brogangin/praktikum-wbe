var User = require("../models/User");
const knex = require("../../db/knex");
const bcrypt = require("bcrypt");
exports.get = async function (req, res) {
  try {
    let users = await User.query();
    if (users.length > 0) {
      res.status(200).json({
        success: true,
        data: users,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Data tidak detmukan!",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.create = async function (req, res) {
  try {
    const data = req.body;
    bcrypt.hash(data.password, 10).then(async (hashedPassword) => {
      await User.query()
        .insert({
          nama: data.nama,
          username: data.username,
          telp: data.telp,
          email: data.email,
          password: hashedPassword,
        })
        .returning(["id", "username", "nama", "email", "telp"])
        .then(async (users) => {
          res.status(200).json({
            success: true,
            message: "Anda Berhasil Terdaftar di Sistem Praktikum! ",
            data: {
              username: users.username,
              nama: users.nama,
              email: users.email,
              telp: users.telp,
            },
          });
        })
        .catch((error) => {
          console.log("ERR:", error);
          res.json({
            success: false,
            message: `Registrasi Gagal, ${error.nativeError.detail} `,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Registrasi Gagal, Internal server error !",
    });
  }
};

// exports.get = async function (req, res) {
//   res.status(200).json({
//     success: true,
//     message: "Endpoint GET User",
//   });
// };

// exports.create = async function (req, res) {
//   res.status(200).json({
//     success: true,
//     message: "Endpoint Create User",
//   });
// };

exports.getById = async function (req, res) {
  const { id } = req.params;
  res.status(200).json({
    success: true,
    message: "Endpoint GET User By Id",
    id: id,
  });
};

exports.update = async function (req, res) {
  const { id } = req.params;
  res.status(200).json({
    success: true,
    message: "Endpoint Update User",
    id: id,
  });
};
exports.delete = async function (req, res) {
  const { id } = req.params;
  res.status(200).json({
    success: true,
    message: "Endpoint Delete User",
    id: id,
  });
};
