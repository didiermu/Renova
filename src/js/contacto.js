$(document).ready(function() {
    if (
        window.location.pathname == "/" ||
        window.location.pathname == "/renova-industrial/" ||
        window.location.pathname == "/RenovaIndustrial/" ||
        window.location.pathname == "/nos-destacamos-por.html" ||
        // STAGE
        window.location.pathname == "/stage/" ||
        window.location.pathname == "/stage/nos-destacamos-por.html"
    ) {
        $("body").addClass("body-contacto");

        if (window.location.hash == "#wpcf7-f93-o1") {
            $("#modalGracias").modal("show");
        }

        $("#comboAyuda option").first().text("¿En qué te podemos ayudar?");
        $("#comboAyuda option").first().attr("hidden");

        $(".input__group").on("click", function() {
            $(this).find("input, textarea").focus();
        });

        $(".input__group input, .input__group textarea").each(function() {
            $(this).on("focus", function() {
                $(this).parents(".input__group").addClass("lleno");
            });

            $(this).on("blur", function() {
                if ($(this).val().length < 1 || $(this).val() == " ") {
                    //console.log("no llenos");
                    $(this).parents(".input__group").removeClass("lleno");
                } else {
                    //console.log("ññeno");
                    $(this).parents(".input__group").addClass("lleno");
                }
            });
        });

        $("#modalGracias .btn, #modalGracias .close").on("click", function() {
            location.hash = "";
            history.replaceState("", "", location.pathname);
        });
    }
});