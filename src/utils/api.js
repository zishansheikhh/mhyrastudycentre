// const API = 'http://localhost:8000/customer';
const API = 'https://api.saiyedfarhan.com/customer';


//user authentication

async function httpLogInUser (userCred) {
    const response = await fetch(`${API}/login`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userCred)
    })
    return await response.json()
}

async function httpCreateUserAccount (userCred) {
    const response = await fetch(`${API}/createaccount`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userCred)
    })
    return await response.json()
}



//get all blogs
async function httpGetAllBlogs () {
    const response = await fetch(`${API}/blogs`, {
        method: "get"
    })
    return await response.json()
}

async function httpGetAllCaseStudies () {
    const response = await fetch(`${API}/casestudies`, {
        method: "get"
    })
    return await response.json()
}

async function httpGetAllBlogComments (BlogId) {
    const response = await fetch(`${API}/blogs/comments/${BlogId}`, {
        method: "get"
    })
    return await response.json()
}

async function httpGetAllBlogCommentReplies (CommentId) {
    const response = await fetch(`${API}/blogs/comments/replies/${CommentId}`, {
        method: "get"
    })
    return await response.json()
}

async function httpPostCommentOnBlog (commentDetails) {
    const response = await fetch(`${API}/blogs/comments`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(commentDetails)
    })
    return await response.json()
}

async function httpPostReplyOnBlogComment (replyDetails) {
    const response = await fetch(`${API}/blogs/comments/replies`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(replyDetails)
    })
    return await response.json()
}

//contact Me

async function httpPostContactDetails (formDetails) {
    const response = await fetch(`${API}/contactme`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails)
    })
    return await response.json()
}



export {
    httpLogInUser,
    httpCreateUserAccount,
    httpGetAllBlogs,
    httpGetAllCaseStudies,
    httpGetAllBlogComments,
    httpGetAllBlogCommentReplies,
    httpPostCommentOnBlog,
    httpPostReplyOnBlogComment,
    httpPostContactDetails,
    
}