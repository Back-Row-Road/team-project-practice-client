const authenticatedUser = require('../store.js')
const apiUrl = require('../config.js')

const addBlog = () => {
  $("#create-blog").on("submit", event => {
    event.preventDefault();
    let serialization = $("#create-blog").serializeArray();
    $.ajax({
      url: apiUrl.apiUrl + `/blogs`,
      method: "POST",
      headers: {
        Authorization: "Bearer " + authenticatedUser.user.token
      },
      data: {
        blog: {
          title: serialization[0].value,
          headerImage: serialization[1].value,
          logo: serialization[2].value
        }
      }
    })
      .then(data => {
        console.log(data);
      })
      .catch(data => {
        console.log(data);
      });
  });
}

module.exports = addBlog

// var form_data = new FormData($('input[name^='create-blog-logo']'));
// $.each($('input[name^='create-blog-logo']')[0].files, function(i, file) {
//   form_data.append(i, file);
// });
// console.log(form_data);
// console.log(serialization);
// $.ajax({
//   url: apiUrl.apiUrl + `/tasks`,
//   method: 'POST',
// contentType: 'multipart/form-data',
//   headers: {
//     Authorization: 'Bearer=' + authenticatedUser.user.token
//   },
//   data: {
//     task: {
//       title: serialization[0].value,
//       start_date: serialization[1].value,
//       due_date: serialization[2].value,
//       description: serialization[3].value,
//       status: 'In Process',
//       user_id: serialization[4].value
//     }
//   }
// })
//   .then(data => {
//     $('#dashboard-container').html('');
//     loadTasks();
//     modelAlert('Task added succesfully', 'Success');
//     $('#add-task-modal').modal('hide');
//   })
//   .catch(() => {
//     console.log(error);
//   });
//   })
// }
