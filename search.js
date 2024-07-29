document.getElementById("search-button").addEventListener("click", () => {
  const query = document.getElementById("search-input").value.toLowerCase();
  console.log("검색어:", query);
  const movieCards = document.querySelectorAll(".movie-card");
  console.log("영화 카드 수:", movieCards.length);
  movieCards.forEach((card) => {
    const titleElement = card.querySelector("h3");
    if (titleElement) {
      const title = titleElement.textContent.toLowerCase();
      console.log("영화 제목:", title);
      if (title.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    } else {
      console.error("영화 카드에 <h3> 요소가 없습니다.");
    }
  });
});
