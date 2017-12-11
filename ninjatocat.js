$(document).ready(function(){
   
    $('img').click(function(){
        var newimg = $(this).attr("ninja");
        var oldimg = $(this).attr("src");
        $(this).attr("src",newimg);
        $(this).attr("ninja", oldimg);
});
});