(function(){
  "use strict";
}());

var createSongRow = function(songNumber, songName, songLength){
  "use strict";
  var template =
      '<tr class="album-view-song-item">' +
      '  <td class="song-item-number" data-song-number="' +songNumber + '">' + songNumber + '</td>' +
      '  <td class="song-item-title">' + songName + '</td>' + 
      '  <td class="song-item-duration">' + songLength + '</td>' + 
      '</tr>'
  ;
  var $row = $(template);
  var clickHandler = function() {
    var songNumber = parseInt($(this).attr('data-song-number'));
    if (currentlyPlayingSongNumber !== null) {
      var currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber); 
      currentlyPlayingCell.html(currentlyPlayingSongNumber);
    }
    if (currentlyPlayingSongNumber !== songNumber) {
      $(this).html(pauseButtonTemplate);
      setSong(songNumber);
      updatePlayerBarSong();
    } 
    else if (currentlyPlayingSongNumber === songNumber) {
      $(this).html(playButtonTemplate);
      $('.left-controls .play-pause').html(playerBarPlayButton);
      currentlyPlayingSongNumber = null;
      currentSongFromAlbum = null;
    }
  };
  var onHover = function(event){
    var songNumberCell = $(this).find('.song-item-number');
    var songNumber = parseInt(songNumberCell.attr('data-song-number'));
    
    if (songNumber !== currentlyPlayingSongNumber) {
      songNumberCell.html(playButtonTemplate);
    }
    console.log("songNumber type is " + typeof songNumber + "\n and currentlyPlayingSongNumber type is " + typeof currentlyPlayingSongNumber);
  };
  
  var offHover = function (event) {
    var songNumberCell = $(this).find('.song-item-number');
    var songNumber = parseInt(songNumberCell.attr('data-song-number'));
    
    if (songNumber !== currentlyPlayingSongNumber) {
      songNumberCell.html(songNumber);
    }
    console.log("songNumber type is " + typeof songNumber + "\n and currentlyPlayingSongNumber type is " + typeof currentlyPlayingSongNumber);
  };
  $row.find('.song-item-number').click(clickHandler);
  $row.hover(onHover, offHover);
  return $row;
};

function setCurrentAlbum (album) {
  "use strict";
  currentAlbum = album;
  var $albumTitle = $('.album-view-title'),
      $albumArtist = $('.album-view-artist'),
      $albumReleaseInfo = $('.album-view-release-info'),
      $albumImage = $('.album-cover-art'),
      $albumSongList = $('.album-view-song-list');
  $albumTitle.text(album.name);
  $albumArtist.text(album.artist);
  $albumReleaseInfo.text(album.year + ' ' + album.label);
  $albumImage.attr('src', album.albumArtUrl);
  $albumSongList.empty();
  for (var i=0; i< album.songs.length; i++) {
    var $newRow = createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
    $albumSongList.append($newRow);
  }
}
var trackIndex = function(album, song) {
  "use strict";
  return album.songs.indexOf(song);
};

// KEEP TRACKINDEX. BLOC CODE THAT WE ENDED UP NOT USING. MIGHT COME UP AGAIN.
//var trackIndex = function(album, song) {
//  "use strict";   
//  return album.songs.indexOf(song);
// };
function getSongNumberCell(number) {
  "use strict";  
  return $('.song-item-number[data-song-number="' + number + '"]');
}

function setSong(number) {
  "use strict";
  currentlyPlayingSongNumber = parseInt(number);
  currentSongFromAlbum = currentAlbum.songs[number - 1];
}


var nextSong = function() {
  "use strict"; 
  var startingNumber = currentlyPlayingSongNumber;
  var nextIndex = currentAlbum.songs.indexOf(currentSongFromAlbum) === (currentAlbum.songs.length - 1) ? 0 : (currentAlbum.songs.indexOf(currentSongFromAlbum) + 1);
  
  setSong(nextIndex + 1);
  updatePlayerBarSong();
  getSongNumberCell(currentlyPlayingSongNumber).html(pauseButtonTemplate);
  getSongNumberCell(startingNumber).html(startingNumber);
};

var previousSong = function() {
  "use strict";
  
  var startingNumber = currentlyPlayingSongNumber;
  var previousIndex = (currentAlbum.songs.indexOf(currentSongFromAlbum)) === 0 ? currentAlbum.songs.length - 1 : (currentAlbum.songs.indexOf(currentSongFromAlbum) - 1);
  
  setSong(previousIndex + 1);
  updatePlayerBarSong();
  
  getSongNumberCell(currentlyPlayingSongNumber).html(pauseButtonTemplate);
  getSongNumberCell(startingNumber).html(startingNumber);
};
var updatePlayerBarSong = function() {
  "use strict"; 
  $('.currently-playing .song-name').text(currentSongFromAlbum.name);
  $('.currently-playing .artist-name').text(currentAlbum.name);
  $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.name + " - " + currentAlbum.name);
  $('.left-controls .play-pause').html(playerBarPauseButton);
};

var currentAlbum = null;
var currentlyPlayingSongNumber = null;
var currentSongFromAlbum = null;



 var $nextButton = $('.left-controls .next');
 var $previousButton = $('.left-controls .previous');

//Album button templates
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
var playerBarPlayButton = '<i class="ion-play"></i>';
var playerBarPauseButton = '<i class="ion-pause"></i>'; 

// Player bar element selectors
var $previousButton = $('.left-controls .previous');
var $nextButton = $('.left-controls .next');

$(document).ready(function() {
  "use strict";
  setCurrentAlbum(albumPicasso);
  $previousButton.click(previousSong);
  $nextButton.click(nextSong);
//  function switchAlbum(){
//    switch (document.getElementsByClassName('album-view-title')[0].firstChild.nodeValue) {
//      case "The Colors":
//        setCurrentAlbum(albumMarconi);
//        break;
//      case albumMarconi.name:
//        setCurrentAlbum(albumSweetLittle);
//        break;
//      case albumSweetLittle.name:
//        setCurrentAlbum(albumPicasso);
//        break;
//    }
//  }
//  document.getElementsByClassName('album-cover-art')[0].addEventListener('click', switchAlbum);
});