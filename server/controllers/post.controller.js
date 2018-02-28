const mongoose = require('mongoose')

/** Import the Module */
const Post = require('../models/Post')

/**
 * Gets all the posts
 * @func
 */
function getPosts(req, res) {
  Post.find()
    .exec((err, posts) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(200)
      res.json(posts)
    })
}

/**
 * Adds new post with the body response
 * @func
 * @return {error} 
 */

function addPost(request, response) {
  console.log(request.body)
  let post = new Post();
  post.title = request.body.title;
  post.content = request.body.content;

  //Saves the new post and checks for errors
  post.save(function (error) {
    //Checks if an error happened
    if (error) {
        //An error happened. It sends the error
        response.send(`An error occurred: ${error}`)
    }
    response.json(post)
  });
}

function deletePost(req, res){
  Post.remove({
      _id: req.params.post_id
    }, function (err, post) {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Successfully deleted' });
    }
  )
}

function updatePost(req, res) {
    // use our bear model to find the bear we want
    Post.findById(req.params.post_id, function(err, post) {
        if (err)
          res.send(err);

        post.title = req.body.title;  // update the bears info
        post.content = req.body.content;

        // save the bear
        post.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Post updated!' });
        });
    });
}

/** Module Export */
module.exports = {
  getPosts,
  addPost,
  deletePost,
  updatePost,
}
