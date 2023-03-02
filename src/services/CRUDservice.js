import bcrypt from 'bcryptjs';
import db from '../models';
const salt = bcrypt.genSaltSync(10);



let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hasPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hasPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                image: data.roleID,
                roleID: data.roleID,
            })
            resolve("OK! Create a new user sucs");
        } catch (error) {
            reject(error);
        }
    })

}

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.User.findAll();
            resolve(users);

        } catch (error) {
            reject(error);
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (error) {
            reject(error);
        }

    })
}

module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
}