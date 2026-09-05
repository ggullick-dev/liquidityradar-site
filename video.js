const dialog = document.querySelector('.video-dialog');
const openButtons = document.querySelectorAll('[data-video-open]');
const closeButton = document.querySelector('[data-video-close]');
const player = dialog.querySelector('video');
let activeTrigger = openButtons[0];

function openVideo(event) {
  activeTrigger = event.currentTarget;
  dialog.showModal();
  player.currentTime = 0;
  player.play().catch(() => {});
}

function closeVideo() {
  player.pause();
  player.currentTime = 0;
  dialog.close();
}

openButtons.forEach((button) => button.addEventListener('click', openVideo));
closeButton.addEventListener('click', closeVideo);

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) closeVideo();
});

dialog.addEventListener('close', () => {
  player.pause();
  player.currentTime = 0;
  activeTrigger.focus();
});
