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
module.exports = {
    getHomePage: getHomePage,
    getAboutme: getAboutme,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
}