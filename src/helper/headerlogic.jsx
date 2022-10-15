import $ from 'jquery'

export const headerLogic = () => {

    //search-box
    $(".search-type").on("click", function () {
        $(this).parents(".search-box").addClass("show");
    });
    $(".search-box .icon-close").on("click", function () {
        $(this).parents(".search-box").removeClass("show");
    });

    //app-overlay
    $(".app-btn a").on("click", function () {
        $(".app-btn .app-box").addClass("show");
        $(".app-overlay").addClass("show");
        $('body').css({ 'overflow': 'hidden', });
    });
    $(".app-overlay").on("click", function () {
        $(".app-btn .app-box").removeClass("show");
        $(".app-overlay").removeClass("show");
        $('body').css({ 'overflow': 'auto', });
    });
}
