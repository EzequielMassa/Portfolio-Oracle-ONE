const mainSection = document.querySelector(".about-main-text");
const hardSkillSection = document.querySelector(".hard-skills-container");
const softSkillSection = document.querySelector(".soft-skills-container");
const formationSection = document.querySelector(".formacion__container");
const contactSection = document.querySelector(".contacto__formulario");

export const sectionLoad = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList[0] == "about-main-text") {
        entry.target.classList.remove("hide");
        entry.target.classList.add("slideExpandUp");
      }
      if (entry.target.classList[0] == "hard-skills-container") {
        entry.target.classList.remove("hide");
        entry.target.classList.add("slideRight");
      }
      if (entry.target.classList[0] == "soft-skills-container") {
        entry.target.classList.remove("hide");
        entry.target.classList.add("slideLeft");
      }
      if (entry.target.classList[0] == "formacion__container") {
        entry.target.classList.remove("hide");
        entry.target.classList.add("slideUp");
      }
      if (entry.target.classList[0] == "contacto__formulario") {
        entry.target.classList.remove("hide");
        entry.target.classList.add("fadeIn");
      }
    }
  });
};

const observer = new IntersectionObserver(sectionLoad, {
  root: null,
  rootMargin: "100px 0px 100px 0px",
  threshold: 0.8,
});

observer.observe(mainSection);
observer.observe(hardSkillSection);
observer.observe(softSkillSection);
observer.observe(formationSection);
observer.observe(contactSection);
