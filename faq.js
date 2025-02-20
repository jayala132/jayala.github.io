document.getElementById("searchInput").addEventListener("input", function () {
  let searchValue = this.value.toLowerCase();
  let content = document.getElementById("content");
  let paragraphs = content.getElementsByTagName("p");

  for (let p of paragraphs) {
    let text = p.innerText;
    let regex = new RegExp(`(${searchValue})`, "gi");
    let highlightedText = text.replace(
      regex,
      '<span class="highlight">$1</span>'
    );
    p.innerHTML = highlightedText;
  }
});
