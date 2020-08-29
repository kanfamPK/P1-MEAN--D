const express = require('express');
const app = express();

// app.use((req,res,next)=>{
//   console.log('first middle ware');
//   next();
// });

app.use('/api/posts',(req,res,next)=>{
  console.log('second middle ware');
  let posts = [
    {
      id: 'as234',
      title: 'post1',
      content: 'asdasdasdasd'
    },
    {
      id: 'xyh78',
      title: 'post2',
      content: 'ddddddddddddddd'
    },
    {
      id: 'yui6555',
      title: 'post3',
      content: '456456456'
    }
  ]
  res.json(posts);
});

module.exports = app;
