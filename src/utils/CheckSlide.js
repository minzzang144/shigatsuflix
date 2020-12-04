export default function checkSlide() {
  const slideObj = document.querySelectorAll(".slide-in");
  slideObj.forEach((obj) => {
    const slideInAt =
      window.scrollY + window.innerHeight - obj.clientHeight / 2;
    const objBottom = obj.offsetTop + obj.clientHeight;

    const isHalfShown = slideInAt > obj.offsetTop;
    const isNotScrolledPast = window.scrollY < objBottom;
    // console.log(slideInAt, obj.offsetTop, window.scrollY, objBottom);
    if (!isHalfShown) {
      obj.classList.add("top-position");
    } else {
      obj.classList.remove("top-position");
    }
    if (isHalfShown && isNotScrolledPast) {
      obj.classList.add("active");
    } else {
      obj.classList.remove("active");
    }
    if (!isNotScrolledPast) {
      obj.classList.add("bottom-position");
    } else {
      obj.classList.remove("bottom-position");
    }
  });
}
