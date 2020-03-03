/*!
 * Bootstrap-select v1.13.2 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2018 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function (a0) {
      return (factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(root["jQuery"]);
  }
}(this, function (jQuery) {

(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Nic nen铆 vybr谩no',
    noneResultsText: '沤谩dn茅 v媒sledky {0}',
    countSelectedText: 'Ozna膷eno {0} z {1}',
    maxOptionsText: ['Limit p艡ekro膷en ({n} {var} max)', 'Limit skupiny p艡ekro膷en ({n} {var} max)', ['polo啪ek', 'polo啪ka']],
    multipleSeparator: ', ',
    selectAllText: 'Vybrat V拧e',
    deselectAllText: 'Odzna膷it V拧e'
  };
})(jQuery);


}));