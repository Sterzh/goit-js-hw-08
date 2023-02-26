import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');

const player = new Player(iframe, {});

player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);

player.on(
  'timeupdate',
  throttle(function (e) {
    localStorage.setItem(STORAGE_KEY, e.seconds);
  }, 1000)
);
