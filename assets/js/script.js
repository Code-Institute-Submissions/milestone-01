$(document).ready(function () {

    'use strict';



    // ========================================================================= //
    // Close the collapse-menu after selection 
    // (works when menu is collapse or when hamburger menu is active)
    // from stackoverflow.com discussion
    // https://stackoverflow.com/questions/21240594/how-to-hide-my-collapse-bootstrap-3-navbar-with-click-on-body-when-collapse-is
    // ========================================================================= //

    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
        // console.log('clicked!!!');
    });



    // ========================================================================= //
    // Typed Js
    // https://mattboldt.com/demos/typed-js/
    // ========================================================================= //

    var typed = new Typed('.typed', {
        strings: [
            "Singer",
            "Songwriter",
            "Born in Canada",
            "Youtube sensation",
        ],
        typeSpeed: 100,
        loop: true,
    });


    // ========================================================================= //
    // Form Validation, original script from w3schools.com
    // https://www.w3schools.com/bootstrap4/bootstrap_forms.asp
    // ========================================================================= //
    (function () {
        // 'use strict';
        window.addEventListener('load', function () {
            // Get the forms we want to add validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();

})//end of document ready