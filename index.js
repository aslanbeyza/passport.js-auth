require('dotenv').config();

const express = require('express');
const passport= require('passport');
const session = require('express-session');
const GoogleStrategy = require(' passport-google-oauth20 ');


const app = express();

app.use(session({
    secret:"secret",
    
}))
