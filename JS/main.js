$(function () {
    console.log('Ready!')
    $("#search").click(function () {
        var apikey = 'qCTweoTLPCLppqQ6z3Wz4z2DBnV0Tfzj';
        var q = $('#q').val();
        var limit = $('#limit').val();
        var rating = $('#rating').val();
        console.log('Clicked!', apikey, q, limit, rating)
        $("#status").text("Searching...")
        $.ajax({
            url: 'https://api.giphy.com/v1/gifs/search?api_key=' + apikey + '&q=' + q + '&limit=' + limit + ' &offset=0&rating=' + rating + '&lang=en',
            method: 'GET',
            success: function (data) {

                $("#status").text('Enjoy ;)!')

                for (i = 0; i < limit; i++) {
                    var $img = $("<img>");
                    var $div = $("<div>");
                    var $rating = $("<h6>");
                    var gifObj = data.data[i];
                    var gif = gifObj.images;

                    // Image builder object
                    $img.attr({
                        // "width": "200px",
                        src: gif.fixed_height_still.url,
                        "data-animate": gif.fixed_height.url,
                        "data-still": gif.fixed_height_still.url,
                        "data-state": "still",
                        class: "gif"
                    });
                    // $div.attr("id", "gif-" + i);
                    $div.addClass("gif-box");
                    $rating.text("Rating: " + gifObj.rating);
                    $div.append($img, $rating);
                    $("#output").append($div);
                }

                $(".gif").on("click", function () {
                    var state = $(this).attr("data-state");
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                });

            }
        });

    })
});