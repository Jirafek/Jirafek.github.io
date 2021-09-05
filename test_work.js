$(".cups-img").hide();
$(".imagine-coal-img").hide();
$(".imagine-colb-img").hide();
$(".buy-menu").hide();

$('.text-bar-cup').click(function () {
    $(".buy-menu").show();
    $(".cups-img").hide();
    $(".imagine-coal-img").hide();
    $(".imagine-colb-img").hide();
    $(".text-bar-colb").css("color", "#262626");
    $(".text-bar-coals").css("color", "#262626");
    $(".text-bar-cup").css("color", "#F44336");

});
$('.text-bar-colb').click(function () {
    $(".buy-menu").show();
    $(".cups-img").hide();
    $(".imagine-coal-img").hide();
    $(".imagine-colb-img").hide();
    $(".text-bar-cup").css("color", "#262626");
    $(".text-bar-coals").css("color", "#262626");
    $(".text-bar-colb").css("color", "#F44336");
});
$('.text-bar-coals').click(function () {
    $(".buy-menu").show();
    $(".cups-img").hide();
    $(".imagine-coal-img").hide();
    $(".imagine-colb-img").hide();
    $(".text-bar-cup").css("color", "#262626");
    $(".text-bar-coals").css("color", "#F44336");
    $(".text-bar-colb").css("color", "#262626");
});
$('.text-bar-coals').click(function () {

});
$('.text-logo').click(function () {
    $(".cups-img").hide();
    $(".imagine-coal-img").hide();
    $(".imagine-colb-img").hide();

    $(".text-bar-cup").css("color", "#262626");
    $(".text-bar-coals").css("color", "#262626");
    $(".text-bar-colb").css("color", "#262626");
});



$('.text-bar-colb').hover(function () {
    $(".imagine-colb-img").show();
    
}); 
$('.text-bar-colb').hover(function () {
    $(".cups-img").hide();
    $(".imagine-coal-img").hide();
});

$('.text-bar-cup').hover(function () {
    $(".cups-img").show();
});
$('.text-bar-cup').hover(function () {
    $(".imagine-coal-img").hide();
    $(".imagine-colb-img").hide();
});

$('.text-bar-coals').hover(function () {
    $(".imagine-coal-img").show();
});
$('.text-bar-coals').hover(function () {
    $(".imagine-colb-img").hide();
    $(".cups-img").hide();
});

$('.buy-menu-img').click(function () {
    $(".buy-menu").hide();
});

$('.imagine-text').click(function () {
    $(".buy-menu").hide();
});



