//focus on input
$(document).ready(() => {

    $("#search-input").focus(); //auto focus on search input when the page is loaded

    $(".search-container").click(() => {
        $(".search-input").focus();
    });


    $("#search-input").focus(() => {
        $(".search-container").css({
            "background-color": "#303134",
            "box-shadow": "rgba(0, 0, 0, 0.16) 0px 1px 2px, #303134 0px 0px 0px 1px"
        });
    })

    $("#search-input").focusout(() => {
        $(".search-container").css("background", "transparent")
    })

    $(".search-container").hover(() => {
        $(".search-container").css("background-color", "#303134");
    });


    $("#search-btn").click(() => {
        let searchText = $(".search-input").val();
        if (searchText.trim() != "") {
            $(location).attr("href", "//www.google.com/search?q=" + searchText.trim());
        }
    });

    $("#lucky-btn").click(() => {
        $(location).attr("href", "https://www.google.com/doodles");
    });



});

//footer links
const redirectAbout = () => { window.location.href = "https://about.google/" }
const redirectAd = () => { window.location.href = "https://ads.google.com/" }
const redirectBusiness = () => { window.location.href = "https://smallbusiness.withgoogle.com/" }
const redirectHow = () => { window.location.href = "https://www.google.com/search/howsearchworks/" }
const redirectPrivacy = () => { window.location.href = "https://policies.google.com/privacy" }
const redirectTerms = () => { window.location.href = "https://policies.google.com/terms" }


//getting user's country using ipregistry.co
fetch('https://api.ipregistry.co/?key=lsqqr4zosekvcstb')
    .then(function(response) {
        return response.json();
    })
    .then(function(payload) {
        let countryName = payload.location.country.name;
        document.getElementById("location").innerHTML = countryName;
    });
