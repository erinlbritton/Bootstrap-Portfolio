$(document).ready(function() {

    $(document).on({
        mouseenter: function () {
            document.querySelector("#selfie").innerHTML = '<div class="img-thumbnail pull-left img Splatoon2"></div>';
        },
        mouseleave: function () {
            document.querySelector("#selfie").innerHTML = '<div class="img-thumbnail pull-left img Selfie"></div>';
        }
    }, "#Splatoon");

    $(document).on({
        mouseenter: function () {
            document.querySelector("#selfie").innerHTML = '<div class="img-thumbnail pull-left img AnimalCrossing"></div>';
        },
        mouseleave: function () {
            document.querySelector("#selfie").innerHTML = '<div class="img-thumbnail pull-left img Selfie"></div>';
        }
    }, "#AnimalCrossing");

});