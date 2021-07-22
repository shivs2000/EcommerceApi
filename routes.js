const router = require("express").Router();
const postOrder=require('./controllers/postOrder');
const getOrders=require('./controllers/getOrders');
const getUser=require('./controllers/getUser');
const login=require('./controllers/login');
const logOut=require('./controllers/logOut')
const signUp=require('./controllers/signUp');
const adminRegistration=require('./controllers/adminRegistration');
const {body}=require('express-validator');
const adminLogout = require("./controllers/adminLogout");
const adminLogin=require('./controllers/adminLogin');
const postProducts = require("./controllers/postProducts");
const getProducts = require("./controllers/getProducts");
const confirmOrder = require("./controllers/confirmOrder");
const viewOrders = require("./controllers/viewOrders");

router.get('/viewOrders',viewOrders);
router.post('/confirmOrder',confirmOrder);
router.get('/getUser',getUser);
router.get('/getProducts',getProducts);
router.post('/postProducts',postProducts);
router.post('/postOrder',postOrder);
router.get('/getOrders',getOrders);
router.post('/adminRegistration',[
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
        
],adminRegistration);

router.post('/signUp',[
    body("name", "The name must be of minimum 4 characters in  length")
        .notEmpty()
        .escape()
        .trim()
        .isLength({ min: 4 }),
        body("address", "address should be provided")
        .notEmpty()
        .escape()
        .trim(),
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
router.post('/adminLogin',[
    body("name", "The name must be of minimum 4 characters in  length")
        .notEmpty()
        .escape()
        .trim()
        .isLength({ min: 4 }),
    
    body("password", "The Password must be of minimum 8 characters length")
        .notEmpty()
        .trim()
        .isLength({ min: 8 })
        
],adminLogin);
router.post('/logOut',logOut);
router.post('/adminLogout',adminLogout);

module.exports =router;