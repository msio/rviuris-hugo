function placeSocialNav() {
	var container = $(".container").css("width");
	if ((container == "970px") || (container == "1170px") || (container == "750px")) {
		if ($("footer").find(".social-nav").length > 0) {
			var temp = $(".social-nav").clone();
			$("footer").find(".social-nav").remove();
			if (!$(".container-header").find(".social-nav").length > 0) {
				temp.removeClass("social-nav-mobile");
				temp.addClass("col-sm-offset-4 col-sm-3");
				$(".container-header .row .col-sm-5").after(temp);
			}
		}
	} else {
		if ($(".container-header").find(".social-nav").length > 0) {
			var temp = $(".social-nav").clone();
			$(".social-nav").remove();
			if (!$("footer").find(".social-nav").length > 0) {
				temp.remove("col-sm-3");
				temp.addClass("social-nav-mobile");
				$(".col-footer-nav").after(temp);
			}
		}
	}
}

function placeFooterAtBottom() {
	var container = $(".container").css("width");
	if ((container != "970px") || (container != "1170px") || (container != "750px")) {
		var docHeight = $(window).height();
		var footerHeight = $("footer").height();
		var footerTop = $("footer").position().top + footerHeight;
		if (footerTop < docHeight) {
			$("footer").css("margin-top", 37 + (docHeight - footerTop) + "px");
		} else {
			$("footer").css("margin-top", 0);
		}
	}
}

function toggleLinks() {
	$(".service-details").hide();
	$("#service1").click(function() {
		$("#obchodne_pravo_a_pravo_obchodnych_spolocnosti").toggle(1000);
	});
	$("#service2").click(function() {
		$("#obcianske_pravo").toggle(1000);
	});
	$("#service3").click(function() {
		$("#rodinne_pravo").toggle(1000);
	});
	$("#service4").click(function() {
		$("#spravne_pravo").toggle(1000);
	});
	$("#service5").click(function() {
		$("#pracovne_pravo").toggle(1000);
	});
	$("#service6").click(function() {
		$("#trestne_pravo").toggle(1000);
	});
}

function replaceImgSVGWithInlineSVG() {
	$('img.svg').each(function() {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg');

			// Add replaced image's ID to the new SVG
			if ( typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if ( typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});
}
function news(){
	var index = -1;
	var element =  $(".triangle-news");
	element.eq(index % element.length).fadeIn(500).delay(500).fadeOut(500,news); 
}

$(function() {
	news();
	placeFooterAtBottom();
	placeSocialNav();
	toggleLinks();
	//replaceImgSVGWithInlineSVG();
	$(window).on("resize", function() {
		placeSocialNav();
		placeFooterAtBottom();
	});
	/*$(".service").on("click", function() {
	 placeFooterAtBottom();
	 });
	 */
});
