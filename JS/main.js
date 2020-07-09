$(function () {
    console.log('Ready!')
    $( "#search" ).click(function () {
        var apikey = 'qCTweoTLPCLppqQ6z3Wz4z2DBnV0Tfzj';
        var q = $('#q').val();
        var limit = $('#limit').val();
        var rating = $('#rating').val();
        console.log('Clicked!',apikey, q, limit, rating)
        $("#status").text("Searching...") 
        $.getJSON('https://api.giphy.com/v1/gifs/search?api_key=' + apikey + '&q=' + q+ '&limit=' + limit +' &offset=0&rating=' + rating + '&lang=en', function(data){
            $("#status").text('Enjoy ;)!')
            console.log(data)
        })

    })
});