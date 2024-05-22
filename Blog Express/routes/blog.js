const express = require('express');
const path = require("path");
const blogs = require("../data/blogs");

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');  // Render the 'home' view
});

router.get('/blog', (req, res) => {
    
    res.render('blogHome', {
        blogs: blogs
    });  // Pass the blogs data to 'blogHome' view
});



router.get('/blogpost/:slug', (req, res) => {
  myBlog = blogs.filter((e)=>{
    return  e.slug == req.params.slug
  })

  res.render('blogpage', {
    title: myBlog[0].title,
    content: myBlog[0].content
});

//   res.sendFile(path.join(__dirname, '../views/blogpage.html'))
});

module.exports = router;
