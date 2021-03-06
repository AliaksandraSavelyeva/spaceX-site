var instance = new vidbg('.video', {
  mp4: 'video/world.mp4', // URL or relative path to MP4 video
  webm: 'video/world.webm', // URL or relative path to webm video
  poster: 'video/poster.jpg', // URL or relative path to fallback image
  overlay: false, // Boolean to display the overlay or not
});

var rellax = new Rellax('.rocket');

function removeParallax() {
  if (window.innerWidth < 576) {
      rellax.destroy();
  } else {
      rellax.refresh();
  }
}
removeParallax();
addEventListener("resize", removeParallax, false);

AOS.init();

