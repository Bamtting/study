window.onload = function () {
    var popupBtnLinks = document.querySelectorAll(".popup-btn a");
    var popupBtn = document.querySelector(".popup-btn");
    var popupText = document.querySelector(".popup-text");

    popupBtnLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        popupBtnLinks.forEach(function (item) {
          item.classList.toggle("active");
        });
        popupBtnIcons.forEach(function (icon) {
          icon.classList.toggle("fa-circle-up");
          icon.classList.toggle("fa-circle-down");
        });
      });
    });
  
    popupBtn.addEventListener("click", function () {
      popupText.style.display =
        popupText.style.display === "none" ? "block" : "none";
    });
  };