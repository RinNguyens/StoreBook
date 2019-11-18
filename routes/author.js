const express = require('express');
const router = express.Router();
const mongoose =  require('mongoose');
const Author = require('../models/author');


// Method Get Author

router.get('/',(req,res,next) => {
    Author.find()
    .then((author) => {
        res.render('author',{authors : author});
    })
    .catch((err) => {
        console.log(err);
    })
});

router.get('/post', (req,res,next) => {
    res.render('author/post');
    
});

router.get('/delete/:id',(req,res) => {
   let id = req.params.id;
   Author.findOneAndDelete(id)
   .then(author => {
       res.redirect('/author');
   })
   .catch(err => {
       console.log(err);
   })
});
// Method Post of Author
router.post('/post', (req,res,next) => {
   const title = req.body.title;
   const nickname = req.body.nickname;

   const newAuthor = new Author({
       title : title,
       nickname : nickname
   });
   console.log(title,nickname);

   newAuthor.save()
   .then((author) => {
        res.redirect('/author');
        
   })
   .catch((err) => {
       console.log(err);
   })
});

router.get('/update/:id',(req,res) => {
    let id = req.params.id;
    Author.findById(id)
    .then(author => {
        res.render(`author/update`,{authors : author});
    })
    .catch(err => {
        console.log(err);
    })
});

router.post('/update/:id',(req,res,next) => {
    // Grab the id of the post : lay id cua bai viiet
    let id = req.params.id;
    // Find the Post By ID from the Databbase
    // Use Trim de loai bo khoang trang, o dau va cuoi 1 string
    Author.findById(id.trim())
    .then(author => {
        author.title = req.body.title;
        author.nickname = req.body.nickname;

        author.save()
        .then(author => {
            res.redirect('/author');
        })
        .catch((err) =>{ 
            console.log(err);
        })
    })

});



module.exports = router;