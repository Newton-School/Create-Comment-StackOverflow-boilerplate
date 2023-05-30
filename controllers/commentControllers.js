const Comment   = require("../models/comment.js");
const Blog   = require("../models/blog.js");
const jwt = require("jsonwebtoken");
const JWT_SECRET = 'NEWTONSCHOOL';

/*

request.body = {
    content
    blogId
    token
}

the token here is a JWT token.

1. Create new comment from request body for given blog.
2. Save content, blogId, authorId for every comment.
3. "authorId" is "userId" in payload that we get from the JWT token.

Response :

1. Missing token 

401 Status Code

json = 
{
    status: 'fail',
    message: 'Missing token'
}

2. Invalid token

401 Status Code

json = 
{
    status: 'fail',
    message: 'Invalid token'
}

3. Blog with given blogId doesn't exist.

404 Status Code
json = 
{
    message: "Blog with given blogId doesn't exist",
    status: 'fail'
}

4. Success

200 Status Code

json = 
{
    message: 'Comment added successfully',
    commentId: comment._id, //id of comment that is created.
    status: 'success'
}

5. Fail to do

500 Status Code
json = 
{
    status: 'fail',
    message: error message
}

*/

const createComment = async (req, res) => {

    const {content, blogId, token } = req.body;

    try{
        
        //Write your code here.

    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message
        });
    }
}

module.exports = { createComment };
