$(function () {
    console.log('Ready!')
    var apikey = 'qCTweoTLPCLppqQ6z3Wz4z2DBnV0Tfzj';
    var q = $('#q');
    var limit = $('#limit');
    var rating = $('#rating');

    $( "#search" ).click(function () {
        console.log('Clicked!')
        $("#output").text("Searching...") 
        $.getJSON('https://api.giphy.com/v1/gifs/search?api_key=qCTweoTLPCLppqQ6z3Wz4z2DBnV0Tfzj&q=nuke&limit=25&offset=0&rating=g&lang=en', function(data){
            console.log(data)
        })

    })
});