var $root = $('html, body');
$('a').click(function() {
    if (this.target != "_blank") {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 1000, function () {
          window.location.hash = href;
      });
      return false;
    }
});