<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"> </script>

$(function () {
    $('search').click(function () {
      
    })   
});

$ (document) .ready(function() {

    var urlGifs = 'api.giphy.com/v1/gifs/search'
    var urlStickers = 'api.giphy.com/v1/stickers/search'
    var key = 'qCTweoTLPCLppqQ6z3Wz4z2DBnV0Tfzj'
});

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=qCTweoTLPCLppqQ6z3Wz4z2DBnV0Tfzj&limit=5");
xhr.done(function (data) { console.log("success got data", data); });
