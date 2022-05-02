const mysql = require("mysql");
const configDb = require("../../configDb");
const db = mysql.createConnection(configDb);
const sgMail = require('@sendgrid/mail');
const postmark = require('postmark');

const { myToken } = require("../../models/encryption/token");

const bcrypt = require("bcryptjs");

const saltRounds = 10;



const checkEmail = (req, res) => {
    //querie done
    console.log("post....", req.body);
    const { email } = req.body;
    db.query(
        "select count(*) nr from user where email=?",
        [email],
        (err, result) => {
            if (err) console.log("Email hiba: ", err);
            else res.send(result);
        }
    );
};

const checkUsername = (req, res) => {
    console.log("post*************************", req.body);
    const { username } = req.body;

    db.query(
        "select count(*) nr from user where username=?",
        [username],
        (err, result) => {
            res.send(result);
        }
    );
};

const login = (req, res) => {
    console.log("post....", req.body);
    const { email, password } = req.body;
    db.query(
        "SELECT iduser,password,username,status,role FROM user WHERE email=?",
        [email],
        (err, result) => {
            if (err) res.send({ message: err + 'SELECT HIBA' });
            if (result.length == 1) {
                
                bcrypt.compare(
                    password,
                    result[0].password,
                    (error, resultCompare) => {
                        if (error) 
                        console.log(error)
                        if (resultCompare)
                            if (result[0].status == "active"){
                                console.log(result[0])
                                res.send({
                                    message: "successful login!",
                                    username: result[0].username,
                                    userId: result[0].iduser,
                                    role: result[0].role,
                                });
                            }else
                                res.status(401).send({
                                    message:
                                        "The activation link has been sent by e-mail!",
                                });
                        else
                            res.status(401).send({
                                message: "wrong email / password pair",
                            });
                    }
                );
            } else res.status(401).send({ message: "non-existent email address!" });
        }
    );
};

const register = (req, res) => {
    console.log("posttegister....", req.body);
    const { username, email, password } = req.body;
    bcrypt.hash(password, saltRounds, (err, hashedPw) => {
        if (err) console.log(err);
        const regDate = new Date();
        const regDateStr =
            regDate.getFullYear() +
            "." +
            (regDate.getMonth() + 1) +
            "." +
            regDate.getDate();
        const token = myToken();
        //querie done
        db.query(
            "INSERT INTO user (username,email,password,created_at,status,confirmationCode) VALUES (?,?,?,?,?,?)",
            [username, email, hashedPw, regDateStr, "pending", token],
            (err, result) => {
                if (err) {
                    console.log("insert error: ", err);
                    res.send({ message: `A regisztráció már megtörtént!` });
                }
                if (result) {
                    console.log("insert complete: ", result.insertId);
                    //email küldés TwilioSendGrid segítségével
                    const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);
                    const msg = {
                        "To": email,
                        "From": process.env.VERIFIED_EMAIL, // Use the email address or domain you verified above
                        "Subject": "Email Activation",
                        "HtmlBody": `<div>
                        <h1>Email confirmation</h1>
                        <h2>Hello ${username} !</h2>
                        <p>Thank you for...</p>
                        <a href="${process.env.DOMAIN}/authRoute/confirm/${token}">Click here</a>
                    </div>
                `,
                    };
                    //ES8
                    (async () => {
                        try {
                            await client.sendEmail(msg);
                        } catch (error) {
                            console.error(error);

                            if (error.response) {
                                console.error(error.response.body);
                            }
                        }
                    })();
                    //sendConfirmationEmail(username, email, token);
                    res.send({
                        message:
                            "Click on the activation link in the email!",
                    });
                }
            }
        );
    });
};

const verifyUser = (req, res) => {
    //querie done
    console.log("verify user");
    const confirmationCode = req.params.confirmationCode;
    db.query(
        "SELECT count(*) nr from user where confirmationCode=?",
        [confirmationCode],
        (error, results) => {
            if (error)
                res.status(404).send({
                    message: `Error-activation failed:${error}`,
                });
            if (results.nr == 0)
                res.status(404).send({ message: "User Not found." });
            //update: pending->active
            db.query(
                "update user set status=? where confirmationCode=?",
                ["active", confirmationCode],
                (err, result) => {
                    //this is a callback function :what we want to do after insert
                    if (err) {
                        console.log(`Error-activation failed:${err}`);
                        res.send({ message: `Error-activation failed:${err}` });
                    }
                    if (result) {
                        console.log("Successful activation!");
                        res.send({ message: "Successful activation!" });
                    }
                }
            );
        }
    );
};

module.exports = { checkEmail, checkUsername, login, register, verifyUser };
