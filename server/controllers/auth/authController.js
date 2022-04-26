const mysql = require("mysql");
const configDb = require("../../configDb");
const db = mysql.createConnection(configDb);

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
        "SELECT iduser,password,username,status FROM user WHERE email=?",
        [email],
        (err, result) => {
            if (err) res.send({ message: err });
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
                                    message: "sikeres bejelentkezés!",
                                    username: result[0].username,
                                    userId: result[0].iduser,
                                
                                });
                            }else
                                res.status(401).send({
                                    message:
                                        "Szükséges a fiok aktiválása! emailben el lett küldve az aktiválási link!",
                                });
                        else
                            res.status(401).send({
                                message: "hibás email/jelszó páros!",
                            });
                    }
                );
            } else res.status(401).send({ message: "nem létező email cím!" });
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
                    console.log("insert error:", err);
                    res.send({ message: `Error-insert:${err}` });
                }
                if (result) {
                    console.log("Sikeres insert!", result.insertId);
                    //email küldés TwilioSendGrid segítségével
                    /*const msg = {
                        to: email,
                        from: process.env.VERIFIED_EMAIL, // Use the email address or domain you verified above
                        subject: "Email Activation",
                        text: "and easy to do anywhere, even with Node.js",
                        html: "<strong>and easy to do anywhere, even with Node.js</strong>",
                    };
                    //ES8
                    (async () => {
                        try {
                            await sgMail.send(msg);
                        } catch (error) {
                            console.error(error);

                            if (error.response) {
                                console.error(error.response.body);
                            }
                        }
                    })();
                    sendConfirmationEmail(username, email, token);*/
                    res.send({
                        message:
                            "Kattintson az emailben érkezett aktiváló linkre!",
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
                        console.log("Sikeres fiok aktiválás!");
                        res.send({ message: "Sikeres fiok aktiválás!" });
                    }
                }
            );
        }
    );
};

module.exports = { checkEmail, checkUsername, login, register, verifyUser };
