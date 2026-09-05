const dialog = document.querySelector('.video-dialog');
const openButton = document.querySelector('[data-video-open]');
const closeButton = document.querySelector('[data-video-close]');
const player = dialog.querySelector('iframe');

function openVideo() {
  player.src = player.dataset.videoSrc;
  dialog.showModal();
}

function closeVideo() {
  dialog.close();
  player.removeAttribute('src');
}

openButton.addEventListener('click', openVideo);
closeButton.addEventListener('click', closeVideo);

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) closeVideo();
});

dialog.addEventListener('close', () => {
  player.removeAttribute('src');
  openButton.focus();
});
