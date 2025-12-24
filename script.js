function openModal(modalId, shadowId) {
  const modal = document.getElementById(modalId);
  const modalBox = modal.querySelector(".modalBox");
  const shadow = document.getElementById(shadowId);

  modal.style.display = "block";

  setTimeout(() => {
    modalBox.classList.add("active");
  }, 50);

  setTimeout(() => {
    shadow.style.opacity = 1;
  }, 550);
}

function closeModal(modalId, shadowId) {
  const modal = document.getElementById(modalId);
  const modalBox = modal.querySelector(".modalBox");
  const shadow = document.getElementById(shadowId);

  modalBox.classList.remove("active");
  shadow.style.opacity = 0;

  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
}

// Open buttons
document.querySelector(".homeDescription2").onclick = function () {
  openModal("experienceModal", "modalBoxShadow");
};

document.querySelector(".homeDescription3").onclick = function () {
  openModal("hobbiesModal", "hobbiesShadow");
};

document.querySelector(".homeDescription4").onclick = function () {
  openModal("projectsModal", "projectsShadow");
};

// Close buttons
document.querySelectorAll(".closeBtn").forEach((btn) => {
  btn.onclick = function () {
    const modalBox = btn.closest(".modalBox");
    const modal = modalBox.parentElement;
    const shadow = modal.querySelector(".modalBoxShadow");
    modalBox.classList.remove("active");
    shadow.style.opacity = 0;
    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  };
});

// Close when clicking outside
window.onclick = function (event) {
  document.querySelectorAll(".modal").forEach((modal) => {
    if (event.target === modal) {
      const modalBox = modal.querySelector(".modalBox");
      const shadow = modal.querySelector(".modalBoxShadow");
      modalBox.classList.remove("active");
      shadow.style.opacity = 0;
      setTimeout(() => {
        modal.style.display = "none";
      }, 500);
    }
  });
};
