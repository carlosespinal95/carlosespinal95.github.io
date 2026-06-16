const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const filterButtons = document.querySelectorAll(".filter-button");
const portfolioCards = document.querySelectorAll(".portfolio-card");

if (menuToggle && header) {
  menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    portfolioCards.forEach((card) => {
      const showCard = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !showCard);
    });
  });
});
