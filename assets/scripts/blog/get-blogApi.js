const apiUrl = require("../config.js");
const blogContainer = require("./blogs-container.js");
const blogStack = require("./blogs-stack.js");
const createBlogRequest = require("./create-blogRequest.js");
const generateBlog = require("./show-blog.js");
let getBlog = () => {
  $.ajax({
    url: apiUrl.apiUrl + "/blogs",
    method: "GET"
  })
    .then(data => {
      blogContainer.blogs = data;
      blogStack();
      console.log(blogContainer);
      createBlogRequest();
      generateBlog();
    })
    .catch(() => {
      console.log("error");
    });
};

module.exports = getBlog;
