function makeLyricsSelectable() {
  const style = document.createElement("style");
  style.textContent = `
    ytmusic-player-page * {
      user-select: text !important;
      -webkit-user-select: text !important;
      cursor: text !important;
    }
  `;
  document.head.appendChild(style);

  const observer = new MutationObserver(() => {
    const lyricsElements = document.querySelectorAll("ytmusic-player-page *");
    lyricsElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.userSelect = "text";
        element.style.webkitUserSelect = "text";
      }
    });
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
