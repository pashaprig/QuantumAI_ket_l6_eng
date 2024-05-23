// MENU

class App {
  init() {
    this.onButtonPlay();
  }

  constructor() {}

  onButtonPlay() {
    this.iframe = document.querySelector('iframe');
    this.player = new Vimeo.Player(this.iframe);
    this.btnPlay = document.querySelector('#button-play');
    this.screen = document.querySelector('.video__img');
    this.videoWrapper = document.querySelector('.video__wrapper');
    this.video = document.querySelector('.video ');

    const playVideo = () => {
      this.player.play()
      this.btnPlay.style.display = 'none'
      this.screen.style.display = 'none'
      this.videoWrapper.style.minWidth = '100%'
      this.videoWrapper.style.height = 'auto'
      this.video.style.flexDirection = 'column'

    }

    this.btnPlay.addEventListener('click', playVideo);
  }
}

const app = new App();
document.addEventListener('DOMContentLoaded', app.init());
