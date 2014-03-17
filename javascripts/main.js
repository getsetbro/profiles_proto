var app = (function() {
  "use strict";

  //category select changes
  var $cat_chx, $cat_rdo;

  $cat_chx = $("[name=\"cat-x\"]");
  $cat_rdo = $("[name=\"cat-y\"]");

  $cat_chx.change(function(e) {
  $cat_rdo.prop("checked", false);
  });

  $cat_rdo.change(function(e) {
  $cat_chx.prop("checked", false);
  });

  return {
    a: 0
  };
})();
