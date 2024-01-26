$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // <!-- load header at #header-->
    $(function(){
        $("#header").load("src/components/header/header.html");
    });

    // <!-- load footer at #footer-->
    $(function(){
        $("#footer").load("src/components/footer/footer.html");
    });

});
