const link = document.querySelectorAll("[data-link-item]");

link.forEach((element) =>
  element.addEventListener("click", (e) => {
    link.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
  })
);

export default link;
