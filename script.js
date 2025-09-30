function openModal() {
  const modal = document.getElementById("experienceModal");
  const modalBox = modal.querySelector(".modalBox");
  const shadow = document.getElementById("modalBoxShadow");
  const corner = document.getElementById("curved-corner-bottomright");

  modal.style.display = "block";

  setTimeout(() => {
    modalBox.classList.add("active");
  }, 50);

  setTimeout(() => {
    shadow.style.opacity = 1;
    corner.style.opacity = 1;
  }, 550);
}

function closeModal() {
  const modal = document.getElementById("experienceModal");
  const modalBox = modal.querySelector(".modalBox");
  const shadow = document.getElementById("modalBoxShadow");
  const corner = document.getElementById("curved-corner-bottomright");

  modalBox.classList.remove("active");
  shadow.style.opacity = 0;
  corner.style.opacity = 0;

  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
}

window.onclick = function (event) {
  const modal = document.getElementById("experienceModal");
  if (event.target === modal) {
    closeModal();
  }
};

document.querySelector(".closeBtn").onclick = function () {
  closeModal();
};
