// JavaScript Document
$(function() {
	$(".contact-form").validate({
		rules : {
			email : {
				required : true,
				email : true
			},
			name : {
				required : true,
				minlength : 3
			},
			subject : {
				required : true,
				minlength : 3
			},
			message : {
				required : true,
				minlength : 5
			}
		},
		messages : {
			email : {
				required : "POVINNÉ",
				email : "EMAIL NIE JE V SPRÁVNOM TVARE"
			},
			name : {
				required : "POVINNÉ",
				minlength : "MENO JE PRÍLIŠ KRÁTKE"
			},
			subject : {
				required : "POVINNÉ",
				minlength : "PREDMET JE PRÍLIŠ KRÁTKY"
			},
			message : {
				required : "POVINNÉ",
				minlength : "VÁŠ OPIS PROBLÉMU JE PRÍLIŠ KRÁTKY"
			}
		},
		errorPlacement : function(label, element) {
			label.addClass("error-form");
			label.insertAfter(element);
		},
		submitHandler : function() {
			$.ajax({
				type : "POST",
				url : "contact_form.php",
				data : $(".contact-form").serialize(),
				success : function(response) {
					if ($(".btn-submit-and-msg-resp-status").find(".msg-resp-status").length) {
						$(".msg-resp-status").remove();
					}
					$(".btn-submit-and-msg-resp-status").append("<div class='col-xs-8 msg-resp-status'></div>");
					if (response == "ok") {
						$(".contact-form").get(0).reset();
						$(".msg-resp-status").append("<p>SPRÁVA BOLA ODOSLANÁ!</p>").fadeOut(4000, function() {
							$(this).remove();
						});
					} else {
						$(".msg-resp-status").append("<p style='color:#e50b0d;'>SPRÁVA NEBOLA ODOSLANÁ! SKÚSTE ZNOVA ALEBO POŠLITE SPRÁVU NA UVEDENÝ EMAIL V KONTAKTOCH</p>").fadeOut(7000, function() {
							$(this).remove();
						});
					}
				},
				error : function() {
					if (!$(".btn-submit-and-msg-resp-status").find(".msg-resp-status").length) {
						$(".btn-submit-and-msg-resp-status").append("<div class='col-xs-8 msg-resp-status'></div>");
						$(".msg-resp-status").append("<p style='color:#e50b0d;'>SPRÁVA NEBOLA ODOSLANÁ! SKÚSTE ZNOVA ALEBO POŠLITE SPRÁVU NA UVEDENÝ EMAIL V KONTAKTOCH</p>").fadeOut(7000, function() {
							$(this).remove();
						});
					}
				}
			});
			return false;
		}
	});
});
