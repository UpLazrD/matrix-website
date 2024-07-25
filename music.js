
// <!-- АУДИО БЫЛО ВЗЯТО ИЗ ОТКРЫТОГО ДОСТУПА - ВИДЕОХОСТИНГ ЮТУБ -->
// <!-- UNDERTALE YELLOW (MASTERSWORDREMIX) OST - 096 GUNS BLAZING -->
// <!-- https://www.youtube.com/watch?v=bEOscZCE3IQ -->


var music_played = false;
function let_the_music_play(){
  if (!music_played) {
    audio = new Audio("soundtrack.mp3");
    audio.play();
    music_played = true;
  }
}
document.onclick = let_the_music_play;