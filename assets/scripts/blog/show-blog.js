const blogContainer = require("./blogs-container.js");

let generateBlog = () => {
  let blog = [];
  $("button[id^='blog-']").on("click", event => {
    for (let index = 0; index < blogContainer.blogs.length; index++) {
      if (
        blogContainer.blogs[index]._id == event.target.id.replace("blog-", "")
      ) {
        blog.push(blogContainer.blogs[index]);
      }
    }
    $("#blog-HeaderImage").attr("src", blog[0].logo);
    $("#blog-title").text(blog[0].title);
    console.log(blog);
    blog = [];
  });
};
module.exports = generateBlog;
