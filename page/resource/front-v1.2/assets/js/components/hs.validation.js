var isEmpty=function(c){return/^function[^{]+\{\s*\}/m.test(c.toString())};
(function(c){c.HSCore.components.HSValidation={_baseConfig:{errorElement:"div",errorClass:"invalid-feedback",rules:{},onkeyup:function(a){c(a).valid()},errorPlacement:function(){},highlight:function(){},unhighlight:function(){}},pageCollection:c(),init:function(a,b){this.collection=a&&c(a).length?c(a):c();if(c(a).length)return this.config=b&&c.isPlainObject(b)?c.extend({},this._baseConfig,b):this._baseConfig,this.config.itemSelector=a,this.initValidation(),this.pageCollection},initValidation:function(){var a=
this,b=a.config,d=a.pageCollection;this.collection.each(function(g,f){var e=c(f);e.hasClass("js-step-form")?c.validator.setDefaults({ignore:":hidden:not(.active select)"}):c.validator.setDefaults({ignore:":hidden:not(select)"});e.validate({errorElement:b.errorElement,errorClass:b.errorClass,rules:b.rules,onkeyup:b.onkeyup,errorPlacement:isEmpty(b.errorPlacement)==!0?a.errorPlacement:b.errorPlacement,highlight:isEmpty(b.highlight)==!0?a.highlight:b.highlight,unhighlight:isEmpty(b.unhighlight)==!0?
a.unHighlight:b.unhighlight,submitHandler:b.submitHandler});c("select").change(function(){c(this).valid()});d=d.add(e)})},errorPlacement:function(a,b){var d=c(b).data("msg-classes");a.addClass(d);a.appendTo(b.parents(".js-form-message"))},highlight:function(a){var a=c(a),b=a.data("error-class"),d=a.data("success-class");a.parents(".js-form-message").removeClass(d).addClass(b)},unHighlight:function(a){var a=c(a),b=a.data("error-class"),d=a.data("success-class");a.parents(".js-form-message").removeClass(b).addClass(d)}}})(jQuery);