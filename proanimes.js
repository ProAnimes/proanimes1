$(function() {var videohtml5 = $('.videoGallery .videohtml5');
var liHeight = $('.videoGallery li').height();

// BLOGGER
videohtml5.click(function(){
var videoID = $(this).attr('data-videoID');
var videos = $('<div class="meuVideo"><center> <video width="100%" controls="controls" autoplay="true" poster="https://2.bp.blogspot.com/-jbEArgZZumQ/WkJf37eIhtI/AAAAAAAAAoQ/JvwUo_W05i0f8Wzl8XCPklmxGirqRiQqgCLcBGAs/w945-h600-p-k-no-nu/thomas%2Bmiller.png" src="https://www.blogger.com/video-play.mp4?contentId='+ videoID +'" type="video/mp4"></video></center> </div>');

$('.meuVideo, .nowPlaying').remove();
$(this).parents().eq(2).append(videos);

});

// Fechar Videos
$('.close').click(function(){
$('.meuVideo, .nowPlaying').remove();
});
 

})