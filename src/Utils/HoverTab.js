export function handleEnter(trailer) {
  const background = document.querySelector(".dropDownBg");
  const dropDown = document.querySelector(".dropdown");
  const nav = document.querySelector(".nav");

  this.classList.add("trigger-enter");
  setTimeout(
    () =>
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    150
  );

  const dropDownCoords = dropDown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    width: dropDownCoords.width,
    height: dropDownCoords.height,
    top: dropDownCoords.top - 50,
    left: dropDownCoords.left - navCoords.left,
  };

  background.style.cssText = `width: ${coords.width}px; height: ${coords.height}px; transform: translate(${coords.left}px, ${coords.top}px);`;

  // Trailer가 존재 시, Trailer Button에 마우스가 들어가는 순간에만 유튜브 동영상 재생
  // Trailer가 존재하지 않을 시, Trailer Button에 마우스가 들어가도 재생되지 않음 + Trailer가 없어도 Drop Down Box가 적용됨
  if (trailer) {
    if (this.classList.contains("trailerList")) {
      trailer.playVideo();
    } else if (this.classList.contains("filmList")) {
      background.classList.add("open");
    }
  } else {
    if (this.classList.contains("filmList")) {
      background.classList.add("open");
    }
  }
}

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
