const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res) => {
    debugger;
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error :' + err));
});

router.route('/:id').get((req,res) => {
    debugger;
    User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error :' + err));
});
router.route('/:id').delete((req,res) => {
    debugger;
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted!'))
    .catch(err => res.status(400).json('Error :' + err));
});
router.route('/add').post((req,res) => {
    debugger;
    const username = req.body.username;
    const newUser = new User({username});
    debugger;
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/update/:id').post((req,res) => {
    debugger;
    User.findById(req.params.id)
    .then(users => {
        users.username = req.body.username;
        users.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: '+ err));
    }).catch(err => res.status(400).json('Error : '+ err));
});
module.exports = router;