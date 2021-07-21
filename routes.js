const router = require("express").Router();
const postOrder=require('./controllers/postOrder');
const getOrder=require('./controllers/getOrder');
const getUser=require('./controllers/getUser');
const login=require('./controllers/login');
const logOut=require('./controllers/logOut')
const signUp=require('./controllers/signUp');
const {body}=require('express-validator');

router.get('/getUser',getUser);
router.post('/signUp',[
    body("name", "The name must be of minimum 4 characters in  length")
        .notEmpty()
        .escape()
        .trim()
        .isLength({ min: 4 }),
    body("email", "Invalid email address")
        .notEmpty()
        .escape()
        .trim()
        .isEmail(),
    body("password", "The Password must be of minimum 8 characters length")
        .notEmpty()
        .trim()
        .isLength({ min: 8 })
        
],signUp);

router.post('/postOrder',postOrder);
router.post('/login',[
    body("name", "The name must be of minimum 4 characters in  length")
        .notEmpty()
        .escape()
        .trim()
        .isLength({ min: 4 }),
    
    body("password", "The Password must be of minimum 8 characters length")
        .notEmpty()
        .trim()
        .isLength({ min: 8 })
        
],login);
router.post('/logOut',logOut);

module.exports =router;