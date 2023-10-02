import 'dotenv/config.js'
import '../../config/database.js'
import User from '../User.js'
import bcrypt from 'bcryptjs'

let users = [{
    email: "harold@bomberosbuga.co",
    password: "bomberos1234",
    role: 1,
    photo: "https://i.postimg.cc/fyJsspq8/image.png"
}]
const saltRounds = 10;
users = users.map(user => ({
    ...user,
    password: bcrypt.hashSync(user.password, saltRounds) // Hashea la contraseña
}));
User.insertMany(users)
    .then(() => {
        console.log("Usuarios insertados con contraseñas encriptadas");
    })
    .catch(err => {
        console.error("Error al insertar usuarios:", err);
    });
