const express = require('express');
const router = express.Router();
const Yup = require("yup");

const formSchema = Yup.object({
    username: Yup.string()
        .required("กรุณาใส่ Username!")
        .min(6, "Username สั้นเกินไป!")
        .max(28, "Username ยาวเกินไป!"),
    password: Yup.string()
        .required("กรุณาใส่Password!")
        .min(6, "Password สั้นเกินไป!")
        .max(28, "Password ยาวเกินไป!"),
});

router.post("/login", (req, res))


module.exports = router;
