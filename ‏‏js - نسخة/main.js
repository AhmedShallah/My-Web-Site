$(function() {
    // adjust slied height
    var winH = $(window).height(),
        upperH = $(".upper-bar").innerHeight(),
        navH = $(".navbar").innerHeight();
    $(".slider, .carousel-item").height(winH - (upperH + navH));

    // fetured work shufile
    $(".fetured-work ul li").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).data("class") === "all") {
            $(".shufile-imges .col-md").css("opacity", 1);
        } else {
            $(".shufile-imges .col-md").css("opacity", 0.3);
            $($(this).data("class")).parent().css("opacity", 1);
        }
    });
});