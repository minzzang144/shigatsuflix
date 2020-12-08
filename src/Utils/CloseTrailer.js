export default function closeTrailer() {
  const triggers = document.querySelectorAll(".triggers > .trailer__list");
  triggers.forEach((trigger) =>
    trigger.classList.remove("trigger-enter", "trigger-enter-active")
  );
}
