
$(document).ready(function() {
  	console.log("Ready");
	$(".wym_box").remove();
    tinyMCE.init({
      mode: 'textareas',
      selector: ".wymeditor"
    });
    setTimeout(function() {
      $(".mce-tinymce").show();
      $(".mce-tinymce").css("visibility", "visible");
    }, 1000);

});

