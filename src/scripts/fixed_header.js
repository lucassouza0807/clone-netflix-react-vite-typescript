document.addEventListener("DOMContentLoaded", function (event) {
    function fixHeader() {
      let header = document.getElementById("header");
      let sticky = header.offsetTop;

      window.pageYOffset > sticky
        ? header.classList.add("sticky-header")
        : header.classList.remove("sticky-header");
    }

    window.onscroll = function () {
      fixHeader();
    };
  });
