const cancelBtn = document.querySelector(".btn-cancel");
const mainBox = document.querySelector(".main-box");

const closeModal = function () {
  mainBox.classList.toggle("hidden");
};

cancelBtn.addEventListener("click", closeModal);
