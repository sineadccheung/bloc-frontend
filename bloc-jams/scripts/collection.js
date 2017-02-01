var buildCollectionItemTemplate = function() {
  "use strict";
  var template =
        '<div class="collection-album-container column fourth">' +
        '  <img src="assets/images/album_covers/01.png"/>' +
        '  <div class="collection-album-info caption">' +
        '    <p>' +
        '      <a class="album-name" href="#">The Colors</a>' +
        '      <br />' +
        '      X songs' +
        '      <br />' +
        '    </p>' +
        '  </div>' +
        '</div>';
  return $(template);
};
$(window).load(function() {
  "use strict";
  var $collectionContainer = $(".album-covers .clearfix");
  $collectionContainer.empty();
  for (var i = 0; i < 12; i++){
    var $newThumbnail = buildCollectionItemTemplate();
    $collectionContainer.append($newThumbnail);
  }
});

//var collectionItemTemplate = 
//        '<div class="collection-album-container column fourth">' +
//        '  <img src="assets/images/album_covers/01.png"/>' +
//        '  <div class="collection-album-info caption">' +
//        '    <p>' +
//        '      <a class="album-name" href="#">The Colors</a>' +
//        '      <br />' +
//        '      X songs' +
//        '      <br />' +
//        '    </p>' +
//        '  </div>' +
//        '</div>';
//window.onload = function() {
//  var collectionContainer = document.getElementsByClassName('album-covers')[0].childNodes[1];
//  collectionContainer.innerHTML = '';
//  for (var i = 0; i < 12; i++){
//    collectionContainer.innerHTML += collectionItemTemplate;
//  }
//}