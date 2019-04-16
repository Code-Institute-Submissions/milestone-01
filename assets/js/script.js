$(document).ready(function () {

    // ========================================================================= //
    // Typed Js
    // https://mattboldt.com/demos/typed-js/
    // ========================================================================= //

    var typed = new Typed('.typed', {
        strings: [
            // "Daniela.",
            // "A Singer.",
            // "A Songwriter.",
            // "A Canadian.",
            // "A Dreamer.",
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

})//end of docment ready