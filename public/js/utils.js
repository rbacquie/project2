// listener for the drop down buttons
$(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(elems, options);
    });
    // Or with jQuery
    $('.dropdown-trigger').dropdown();
});

// Getting references to our form and inputs
function handleLoginSignup(form, url) {

    //gets the values of the drop down buttons
    var ddvalues = {};

    $(".dropdown-content").on('click', function (e) {
        ddvalues[e.currentTarget.id] = e.target.value
    })



    console.log("where in the utils");
    
    var form = $(form);
    var emailInput = $("input#email");
    var passwordInput = $("input#password");
    var phoneNumberInput = $("input#phoneNumber");
    var companyNameInput = $("input#companyName");
    var NameInput = $("input#name");
    var foodTypeInput = ddvalues["dropdown1"];
    var locationTypeInput = ddvalues["dropdown2"];
    var locationInput = $("input#street-location")
    var cityInput = $("input#city");
    var stateInput = $("input#state");
    var zipcodeInput = $("input#zip");

    // When the form is submitted, we validate there's an email and password entered
    form.on("submit", function (event) {
        event.preventDefault();
        $(".container").hide();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            company: companyNameInput.val().trim(),
            name: NameInput.val().trim(),
            location: locationInput.val().trim(),

            phone: phoneNumberInput.val().trim(),
            foodType: foodTypeInput,
            locationType: locationTypeInput,
            city: cityInput.val().trim(),
            state: stateInput.val().trim(),
            zip_code: zipcodeInput.val().trim(),
        };

        

        const {
            location,
            city,
            state,
            zipcode
        } = userData;

        var geoAddress = `${location} ${city} ${state} ${zipcode}`;


        if (!userData.email || !userData.password) {
            return;
        }
        console.log("about to auth ")

        // If we have an email and password we run the authUser function and clear the form
        authUser(userData.email, userData.password, userData.phone);
        emailInput.val("");
        passwordInput.val("");
    });

    // AUTHUser does a post to the url and if successful, redirects us the the members page
    function authUser(email, password, phone) {
        console.log("spot to hit ", url)
        $.post(url, {
            email: email,
            password: password,
            phone: phone
        }).then(function (data) {
            window.location.replace(data);
            // If there's an error, log the error
        }).catch(handleAuthErr);
    }

    function handleAuthErr(err) {
        $(".container").show();
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
}