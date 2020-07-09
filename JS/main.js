$(function () {
    console.log('Ready!')
    $( "#search" ).click(function () {
        console.log('Clicked!')
        $("#output").text("Searching...") 
    })
});