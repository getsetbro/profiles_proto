var app = (function() {
  "use strict";

  //category select changes

  var $cat_chx = $('[name="cat-x"]');
  var $cat_rdo = $('[name="cat-y"]');
  var $bdy = $(document.body);

  $cat_chx.change(function(e) {
    $cat_rdo.prop("checked", false);
    $bdy.addClass('chk');
    $bdy.removeClass('owner');
  });

  $cat_rdo.change(function(e) {
    $cat_chx.prop("checked", false);
    $bdy.addClass('owner');
    $bdy.removeClass('chk');
  });

  return {
    a: 0
  };
})();
