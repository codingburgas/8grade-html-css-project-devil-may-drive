document.addEventListener("DOMContentLoaded", function () {
    const backLink = document.querySelector('.back-link');
    if (backLink) {
      backLink.addEventListener('click', function (e) {
        e.preventDefault();
        history.back();
      });
    }
  });
