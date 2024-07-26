document.getElementById("search-button").addEventListener("click", () => {
  const query = document.getElementById("search-input").value.toLowerCase();
  const movieCards = document.querySelectorAll(".movie-card");
  movieCards.forEach((card) => {
    const title = card.querySeleter("h3").textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
