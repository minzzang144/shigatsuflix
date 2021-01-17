export const closeTrailer = () => {
  const triggers = document.querySelectorAll(".triggers > .trailerList");
  triggers.forEach((trigger) =>
    trigger.classList.remove("trigger-enter", "trigger-enter-active")
  );
};
