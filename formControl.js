const resultList = document.getElementById('result');

// store user's entry in local storage
new URLSearchParams(window.location.search).forEach((value, name) => {
  localStorage.setItem(name, value);
});
// retrieve from local storage and show it append to html
for (let [key, value] of Object.entries(localStorage)) {
  console.log(`${key}: ${value}`);
  resultList.innerHTML += `<b>${key}:</b> ${value}</br> `;
}

$(document).ready(function () {
  $('.btn-group').on('click', 'label.btn', function (e) {
    if ($(this).hasClass('active')) {
      setTimeout(
        function () {
          $(this).removeClass('active').find('input').prop('checked', false);
        }.bind(this),
        10
      );
    }
  });
});
