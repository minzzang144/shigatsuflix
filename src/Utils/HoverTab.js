export function handleEnter(trailer) {
  this.classList.add("trigger-enter");
  setTimeout(
    () =>
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    150
  );
  // Trailer Button에 마우스가 들어가는 순간에만 유튜브 동영상 재생
  if (this.classList.contains("trailer__list")) {
    trailer.playVideo();
  }
}

export function handleLeave(trailer) {
  // Trailer Button에 마우스가 나오는 순간에만 유튜브 동영상 일시정지
  if (this.classList.contains("trailer__list")) {
    trailer.pauseVideo();
  }
  this.classList.remove("trigger-enter", "trigger-enter-active");
}
