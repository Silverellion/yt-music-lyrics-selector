function makeLyricsSelectable() {
  const style = document.createElement("style");
  style.textContent = `
    ytmusic-description-shelf-renderer .non-expandable.description,
    ytmusic-description-shelf-renderer .non-expandable.description * {
      user-select: text !important;
      -webkit-user-select: text !important;
      cursor: text !important;
    }
  `;
  document.head.appendChild(style);

  const observer = new MutationObserver(() => {
    const lyricsElement = document.querySelector(
      "ytmusic-description-shelf-renderer .non-expandable.description"
    );

    if (lyricsElement) {
      if (lyricsElement instanceof HTMLElement) {
        lyricsElement.style.userSelect = "text";
        lyricsElement.style.webkitUserSelect = "text";
        lyricsElement.style.cursor = "text";
      }

      const childElements = lyricsElement.querySelectorAll("*");
      childElements.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.userSelect = "text";
          element.style.webkitUserSelect = "text";
          element.style.cursor = "text";
        }
      });
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", makeLyricsSelectable);
} else {
  makeLyricsSelectable();
}
