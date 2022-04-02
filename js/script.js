 // Jeda video saat modal ditutup
 $(document).on('click', '.hanging-close, .modal-backdrop, .modal', function (event) {
    // Hapus src sehingga pemutar itu sendiri dihapus, karena ini adalah
    // satu-satunya cara yang andal untuk memastikan video berhenti diputar di IE
    $("#trailer-video-container").empty();
});
// Mulai putar video setiap kali modal trailer dibuka
$(document).on('click', '.show-video', function (event) {
    var trailerYouTubeId = $(this).attr('data-trailer-youtube-id')
    var sourceUrl = 'http://www.youtube.com/embed/' + trailerYouTubeId + '?autoplay=1&html5=1';
    $("#trailer-video-container").empty().append($("<iframe ></iframe>", {
      'id': 'trailer-video',
      'type': 'text-html',
      'src': sourceUrl,
      'frameborder': "0"
    }));
});
// Animasi tampilan movie saat halaman dimuat
$(document).ready(function () {
  $('.movie-tile').hide().first().show("slow", function showNext() {
    $(this).next("div").show("slow", showNext);
  });
});



