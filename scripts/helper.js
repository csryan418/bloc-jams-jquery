class Helper {
  playPauseAndUpdate(song) {
    const duration = player.currentlyPlaying.duration;
    $('#time-control .total-time').text (this.prettyTime(duration));
    player.playPause(song);
  };
};
