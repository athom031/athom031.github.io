$(document).ready(function(){
    // <!-- load header at #header-->
    $(function(){
        $("#header").load("src/components/header/header.html");
    });

    // <!-- load footer at #footer-->
    $(function(){
        $("#footer").load("src/components/footer/footer.html");
    });

    $('.navbar ul li a').removeClass('active');
});
