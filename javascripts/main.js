var app = (function() {
  "use strict";

  var $bdy = $(document.body);

  var $cat_chx = $('[name="cat-x"]');
  var $cat_rdo = $('[name="cat-y"]');

  var $debt =    $('#debt');
  var $str_fin = $('#str_fin');
  var $owner =   $('#owner');

  //category select changes
  $cat_chx.change(function(e) {
    if(e.target.checked){
      $cat_rdo.prop("checked", false);
      $bdy.addClass(e.target.id);
      $bdy.removeClass('owner');
    }else{
      $bdy.removeClass(e.target.id);
      if( !$bdy.prop('class') ){
        $cat_rdo.click();
      }
    }
  });

  $cat_rdo.change(function(e) {
    $cat_chx.prop("checked", false);
    $bdy.attr("class", 'owner');

  });


$("select").click(function(e) {
   if ( $(e.target).is('option') ){
    return;
   }
   if ( $(e.target).is('optgroup') ){
     $(e.target).children().attr('selected','selected');
   }

});
  return {
    a: 0
  };
})();
