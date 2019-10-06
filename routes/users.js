const express = require('express');

const router = express.Router();

const { insertUser, viewAllUsers, findUser, findUserbyId } = require('../service/user.service')

router.get('/', (req, res) =>{
    
    res.render('index.hbs',
        
    {title: viewAllUsers()});
});
// /1
router.get('/:id' , (req, res)=>{
    
    const id = parseInt(req.params.id);
    
    res.render('userProfile.hbs',
        
    {title: "Юзер Інфо",
    
    user: findUserbyId(id)});
});


router.post('/register', (req, res) => {
    
    insertUser(req.body);
    
    res.render('index.hbs',
        
    {title: 'User inserted'});
});

router.post('/login', (req,res) => {
    
    const {password, email} = req.body
    
    if (!findUser(email, password)) {
        
        res.redirect('/login')
        
    
    }
    res.redirect('/users')
}
)

module.exports = router;
