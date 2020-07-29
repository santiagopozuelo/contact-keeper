const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');

//@route    POST api/users
//@desc     Register user
//@access   Public

router.post('/', [
    check('name', 'name is required').not().isEmpty(),
    check('email','please include valid email').isEmail(),
    check('password', 'please enter password with 6 or more characters').isLength({ min: 6})
], (req,res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }
    res.send('passed');
})

module.exports = router;