const {validationResult}=require('express-validator/check');

exports.getPosts = (req, res, next) => {
    res.status(200).json({
      posts: [
        {
          _id: '1',
          title: 'First Post',
          content: 'This is the first post!',
          imageUrl: 'images/eye1.jpg',
          creator: {
            name: 'Will'
          },
          createdAt: new Date()
        }
      ]
    });
  };
  
  exports.createPost = (req, res, next) => {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(422).json({message:"validation failed"})
    }
    const title = req.body.title;
    const content = req.body.content;
    // Create post in db
    res.status(201).json({
      message: 'Post created successfully!',
      post: { id: new Date().toISOString(), 
        title: title,
         content: content,
        creator:{name:'Will'},
      createdAt: new Date }
    });
  };
  