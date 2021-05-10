/// TEXTO

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

	if (nameInput.val().length < 1) {
		nameInput.siblings("span").remove();
		nameInput.after("<span class='error-input'>Campo requerido");
	}
	
	else {
		nameInput.siblings("span").remove();
		var regEx = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
		var validText = regEx.test(nameInput.val());

		if (!validText) {
			nameInput.siblings("span").remove();
			nameInput.after('<span class="error-input"> No se permiten caracteres especiales </span>');
			nameInput.siblings("span").show();
		} else {
			nameInput.siblings("span").remove();
		}
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
	 }
		
	else{
		var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var validNumbre = regEx.test(nameInput.val());

		if (!validNumbre) {
			nameInput.siblings("span").remove();
			nameInput.after('<span class="error-input"> Verifica el formato de email </span>');
			nameInput.siblings("span").show();
		}

		else{
			nameInput.siblings("span").remove();
		}
	}
}

 /// COMBOS

function valCombos(nameInput){
	var combosContacto = $(nameInput);
	
	combosContacto.each(function () {
		$(this).change(function () {
			if ($(this).val() != null) {
				$(this).siblings("span").remove();
				
			}
		});

		if ($(this).val() == null) {
			$(this).siblings("span").remove();
			$(this).after('<span class="error-input"> Campo requerido </span>');
		}

	});
}

function validacionContacto(){
	$('#enviarContacto').on("click", function() {

        var nombre = $("#nombre"),
            email = $("#email"),
			telefono = $("#telefono")
			comboAyuda = $("#comboAyuda"),
            msj = $("#mensaje");

        valText(nombre);
        valMail(email);
		valNum(telefono);
        valTextNum(msj);
		valCombos(comboAyuda);
        
        // VALIDATE ALL

        if ($('#formContacto .error-input').length == 0) {
            $("#formContacto").submit();
        }

        return false;

    });

}

window.onload = function() {
	validacionContacto();
};