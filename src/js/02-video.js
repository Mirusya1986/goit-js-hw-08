import Player from '@vimeo/player';
import lodash from 'lodash.throttle';

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', lodash(onPlay,1000)); 

function onPlay({seconds}){
    localStorage.setItem(STORAGE_KEY, seconds)
}

setCurrentTime()

function setCurrentTime(){
    if(!localStorage.getItem(STORAGE_KEY)){
        return
    }
    player.setCurrentTime(localStorage.getItem(STORAGE_KEY))
}