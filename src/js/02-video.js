import throttle from 'lodash/throttle';
import Player from '@vimeo/player';

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(e) {
  localStorage.setItem(CURRENT_TIME_KEY, e.seconds);
}

setCurrenTime();

function setCurrenTime() {
  const currentTime = localStorage.getItem(CURRENT_TIME_KEY);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
