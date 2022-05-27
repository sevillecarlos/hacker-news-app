export const actionDropDown = () => {
  document.getElementById("drop-content-select").classList.toggle("show");
};

window.onclick = function (e) {
  if (!e.target.matches(".drop-button")) {
    const dropDown = document.getElementById("drop-content-select");
    if (dropDown.classList.contains("show")) {
      dropDown.classList.remove("show");
    }
  }
};
