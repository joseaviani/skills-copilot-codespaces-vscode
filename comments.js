// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Storage for comments
const commentsByPostId = {};

// Get all comments for a post
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

// Create a comment for a post
app.post('/posts/:id/comments', (req, res) => {
  // Generate a random ID for the comment
  const commentId = randomBytes(4).toString('hex');
  // Get the content for the comment
  const { content } = req.body;
  // Get the comments for the post ID
  const comments = commentsByPostId[req.params.id] || [];
  // Add the new comment to the comments array
  comments.push({ id: commentId, content });
  // Update the comments for the post ID
  commentsByPostId[req.params.id] = comments;
  // Send the new comment
  res.status(201).send(comments);
});

// Start the server
app.listen(4001, () => {
  console.log('Listening on 4001');
});

