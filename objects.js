var playlist = new Object({ artistName: 'song name'})

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle
  return playlist
}

