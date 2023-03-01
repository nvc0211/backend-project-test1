
let getHomePage = (req, res) => {
    // return res.send("welcome to HomePage");
    return res.render('homepage.ejs');
}
let getAboutme = (req, res) => {
    return res.render('./test/about.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    getAboutme: getAboutme,
}