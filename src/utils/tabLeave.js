export function handleLeave(trailer) {
  const background = document.querySelector(".dropDownBg");

  // Trailer가 존재 시, Trailer Button에서 마우스가 나오는 순간에만 유튜브 동영상 일시정지
  // Trailer가 존재하지 않을 시, Trailer Button에서 마우스가 나와도 동영상이 일시정지 되지 않음 + Trailer가 없어도 Drop Down Box가 적용됨
  if (trailer) {
    if (this.classList.contains("trailerList")) {
      trailer.pauseVideo();
    } else if (this.classList.contains("filmList")) {
      background.classList.remove("open");
    }
  } else {
    if (this.classList.contains("filmList")) {
      background.classList.remove("open");
    }
  }
  this.classList.remove("trigger-enter", "trigger-enter-active");
}
