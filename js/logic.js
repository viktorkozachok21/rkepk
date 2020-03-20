function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
});
};

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
goToTop();

const goTop = document.getElementById("go-top-btn");
window.onscroll = () => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    goTop.style.display = "block";
  } else {
    goTop.style.display = "none";
  }
};

showContact.onclick = function() {
  document.getElementById("contact").scrollIntoView();
};

async function loadContent(href) {
  fetch(href)
  .then(response => response.text())
  .then(html => {
    document.getElementById("content").scrollIntoView();
    document.getElementById("content").innerHTML = html;
    lazyLoadInstance.update();
  });
};

const modal = document.getElementById("full-image");
const modalImg = document.getElementById("image");

function fullImage(e) {
  modal.style.display = "block";
  modalImg.src = e.src;
}
const span = document.getElementById("close-full");
span.onclick = function() {
  modal.style.display = "none";
}
