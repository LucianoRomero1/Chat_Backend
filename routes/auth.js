/**
 * path: api/login
 */
const { Router } = require("express");
const { check } = require("express-validator");
const { registerUser } = require("../controllers/auth");
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

router.post("/register", [
    check('name', 'The name is required').not().isEmpty(),
    check('password', 'The password is required').not().isEmpty(),
    check('email', 'The email is required').isEmail(),
    validateFields
] ,registerUser);

module.exports = router;
