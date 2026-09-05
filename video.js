const dialog = document.querySelector('.video-dialog');
const openButton = document.querySelector('[data-video-open]');
const closeButton = document.querySelector('[data-video-close]');
const player = dialog.querySelector('video');

function openVideo() {
  dialog.showModal();
  player.currentTime = 0;
  player.play().catch(() => {});
}

function closeVideo() {
  player.pause();
  player.currentTime = 0;
  dialog.close();
}

openButton.addEventListener('click', openVideo);
closeButton.addEventListener('click', closeVideo);

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) closeVideo();
});

dialog.addEventListener('close', () => {
  player.pause();
  player.currentTime = 0;
  openButton.focus();
});
