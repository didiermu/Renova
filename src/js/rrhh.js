function validacionSesion2(nameCheck, mensaje) {
    if ($(nameCheck).prop("checked") == false) {
        $(nameCheck).parents(".checkboxes").find(".error-input").remove();
        $(nameCheck)
            .parents(".checkboxes")
            .append('<span class="error-input">' + mensaje + "</span>");
    } else {
        $(nameCheck).parents(".checkboxes").find(".error-input").remove();
    }

    $(".check").on("click", function() {

        if ($(this).siblings("input").prop("checked") == false) {
            $(this).siblings("input").prop("checked", true);
        } else {
            $(this).siblings("input").prop("checked", false);
            $(this).siblings(".error-input").remove();
        }
    });
}


function valText(nameInput) {

    var regEx = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    var validText = regEx.test(nameInput.val());

    if (nameInput.val().length < 1) {
        nameInput.siblings("span").remove();
        nameInput.after("<span class='error-input'>Campo requerido");
    } else {
        nameInput.siblings("span").remove();

        if (!validText) {
            nameInput.siblings("span").remove();
            nameInput.after('<span class="error-input"> Solo se aceptan letras </span>');
            nameInput.siblings("span").show();
        } else {
            nameInput.siblings("span").remove();
        }
    }


}


/// TEXTO Y NUMERO

function valTextNum(nameInput) {

    if (nameInput.val().length < 1 || nameInput.val() == " ") {
        nameInput.siblings("span").remove();
        nameInput.after("<span class='error-input'>Campo requerido");
    } else {
        nameInput.siblings("span").remove();
        // var regEx = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
        // var regEx = /^[a-zA-Z\u00C0-\u017F]+$/;

        // var validText = regEx.test(nameInput.val());

        // if (!validText) {
        //     nameInput.siblings("span").remove();
        //     nameInput.after('<span class="error-input"> No se permiten caracteres especiales </span>');
        //     nameInput.siblings("span").show();
        // } else {
        //     nameInput.siblings("span").remove();
        // }
    }


}

/// NUMEROS

function valNum(nameInput) {
    if (nameInput.val().length < 1) {
        nameInput.siblings("span").remove();
        nameInput.after("<span class='error-input'>Campo requerido");
    } else {

        var regEx = /^[0-9]+$/;

        var validEmail = regEx.test(nameInput.val());

        if (!validEmail) {
            nameInput.siblings("span").remove();
            nameInput.after('<span class="error-input"> Solo se permiten numeros </span>');
            nameInput.siblings("span").show();
        } else {
            nameInput.siblings("span").remove();
        }
    }
}

/// EMAIL

function valMail(nameInput) {
    if (nameInput.val().length < 1) {
        nameInput.siblings("span").remove();
        nameInput.after("<span class='error-input'>Campo requerido");
    } else {
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var validNumbre = regEx.test(nameInput.val());

        if (!validNumbre) {
            nameInput.siblings("span").remove();
            nameInput.after('<span class="error-input"> Verifica el formato de email </span>');
            nameInput.siblings("span").show();
        } else {
            nameInput.siblings("span").remove();
        }
    }
}

/// COMBOS

function valCombos(nameInput) {
    var combosContacto = $(nameInput);

    combosContacto.each(function() {
        $(this).change(function() {
            if ($(this).val() != 0) {
                $(this).parents(".combo").siblings("span").remove();
            }
        });

        if ($(this).val() == 0) {
            $(this).parents(".combo").siblings("span").remove();
            $(this).parents(".combo").after('<span class="error-input">Selecciona una opción</span>');
        } else {
            $(this).parents(".combo").siblings("span").remove();
        }

    });
}


function validacionRH() {
    $('#enviar-rhh').on("click", function() {

        var nombreRh = $("#nombre-rh"),
            comboRh = $("#combo-sucursal-rh"),
            edadRh = $("#edad-rh"),
            puestoRh = $("#puesto-rh"),
            domicilioRh = $("#domicilio-rh"),
            msjRh = $("#mensaje-rh"),
            telefonoRh = $("#telefono-rh"),
            emailRh = $("#emal-rh"),
            checkLegales = $("#checkLegale-rh");

        valText(nombreRh);
        valCombos(comboRh);
        valNum(edadRh);
        valTextNum(puestoRh);
        valTextNum(domicilioRh);
        valTextNum(msjRh);
        valNum(telefonoRh);
        valMail(emailRh);

        validacionSesion2(
            checkLegales,
            "Debes aceptar los términos y condiciones."
        );

        // VALIDATE ALL

        if (telefonoRh.val() != "") {
            emailRh.siblings(".error-input").remove();
        }

        if (emailRh.val() != "") {
            telefonoRh.siblings(".error-input").remove();
        }

        if ($('#modal-rrhh .error-input').length == 0) {
            $('#modal-rrhh-send').modal('show');
            // setTimeout(function() {

            // });
            $("#modal-rrhh-send").on('click', function() {
                $("#modal-rrhh form").submit();
            });

            // $('#modal-rrhh-send').modal('show');
            return false;

        } else {
            $('#modal-rrhh').animate({
                scrollTop: 0
            }, 'slow');
            return false;
        }

    });



}

// $(function() {
window.onload = function() {
    // $('#modal-rrhh').modal('show');
    console.log("rh 8");
    // $("#modal-rrhh-send").on('click', function() {
    //     $('#modal-rrhh').modal('hide');
    // });

    if ($("main").hasClass("legales")) {
        $("body").addClass("body-legales");
    }

    // setTimeout(function() {
    //     if (window.location.hash == "#wpcf7-f567-o1" || window.location.hash == "#wpcf7-f567-o2") {
    //         $('#modal-rrhh-send').modal('show');
    //     }
    // }, 1000);


    if (window.location.hash) {
        $("#li-s4").addClass("activo");
        $("#li-s3").removeClass("activo");
    }

    if ($("main").hasClass("home") || $("main").hasClass("destacamos")) {
        $("#modal-rrhh option").first().text("Sucursal");
        $("#modal-rrhh option").first().attr("hidden");

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
    }

    if ($("main").hasClass("destacamos")) {

        $(window).scroll(function() {
            if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                $("section.rrhh").find($(".objetFade")).addClass("transition1");
                $("section.rrhh").removeClass("sectionOn");
                $("section.rrhh").addClass("sectionOn");
            } else {
                $("section.rrhh").find($(".objetFade")).removeClass("transition1");
            }
        });
    }

    $("#label-cv").on("click", function() {
        $("#subir-cv").change(function() {
            let fileName = $("#subir-cv").val().split('\\').pop();
            $("#file-name").css("display", "flex");
            $("#file-name").text(fileName);
            $("#label-cv").text("Cambiar archivo");
        })

    });


    validacionRH();
    // });
};