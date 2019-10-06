let express = require('express');

let router = express.Router();

const { insertHouse, findHousebyId } = require('../service/house.service');


/* GET house page. */
router.get('/', (req, res) =>{
    
    res.render('house.hbs',
    
        {title: 'House'});
});

router.post('/insert', (req, res)=>{
    
    insertHouse(req.body);
    
    res.render('houseProfile.hbs',
    
        {title:'New House'})
});

router.get('/:id' , (req, res)=>{
    
    const id = parseInt(req.params.id);
    
    res.render('houseProfile.hbs',
    
        {title: "House Інфо",
    
            house: findHousebyId(id)});
});


module.exports = router;
