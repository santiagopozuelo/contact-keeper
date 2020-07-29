const express = require('express');
const router = express.Router();

//@route    GET api/contacts
//@desc     get all users contacts
//@access   Private

router.get('/', (req,res)=> {
    res.send('get all contacts')
})

//@route    POST api/contacts
//@desc     add new contact
//@access   Private

router.post('/', (req,res)=> {
    res.send('add contacts')
})

//@route    PUT api/contacts
//@desc     update contact
//@access   Private

router.post('/', (req,res)=> {
    res.send('update contacts')
})

//@route    DELETE api/contacts
//@desc     delete contact
//@access   Private

router.post('/', (req,res)=> {
    res.send('delete contacts')
})
module.exports = router;