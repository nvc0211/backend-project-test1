import db from "../models/index"
import CRUDservice from "../services/CRUDservice";

let getHomePage = async (req, res) => {
    // return res.send("welcome to HomePage");
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }

}
let getAboutme = (req, res) => {
    return res.render('./test/about.ejs');
}
let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}
let postCRUD = async (req, res) => {
    let message = await CRUDservice.createNewUser(req.body);
    console.log(message)
    return res.send('post crud from server');
}
let displayGetCRUD = async (req, res) => {
    let data = await CRUDservice.getAllUser();
    console.log('.......................');
    console.log(data)
    console.log('.......................');

    return res.render('displayCRUD.ejs', {
        dataTable: data
    });
}
let getEditCRUD = async (req, res) => {
    let userId = await req.query.id;
    if (userId) {
        let userData = await CRUDservice.getUserInfoById(userId);
        //return res.send(userData.email)
        return res.render('editCRUD.ejs', { userData: userData })

    } else {
        return res.send('user not found!')
    }

    return res.send('Hello guy. Your id is:' + userId);
}
let putEditCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDservice.updateUserData(data)
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    });
}
module.exports = {
    getHomePage: getHomePage,
    getAboutme: getAboutme,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putEditCRUD: putEditCRUD,
}