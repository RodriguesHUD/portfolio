const linksInternos = document.querySelectorAll('.list a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  const topo = section.offsetTop;
  window.scrollTo({
    top: topo,
    behavior: "smooth",
  });
  console.log();
}
linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

const toggleBtn = document.querySelector(".burguerBtn");
const toggleBtnIcon = document.querySelector(".burguerBtn img");
const dropDownMenu = document.querySelector(".list-mobile");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
};

function changeIcon() {
  var iconList = document.getElementById("iconList");
  var iconX = document.getElementById("iconX");

  iconList.classList.toggle("hidden");
  iconX.classList.toggle("hidden");
}
