(function(b){b.HSCore.components.HSShowAnimation={_baseConfig:{afterShow:function(){}},pageCollection:b(),init:function(a,c){this.collection=a&&b(a).length?b(a):b();if(b(a).length)return this.config=c&&b.isPlainObject(c)?b.extend({},this._baseConfig,c):this._baseConfig,this.config.itemSelector=a,this.initShowEffect(),this.pageCollection},initShowEffect:function(){var a=this,c=a.config,d=a.pageCollection;this.collection.each(function(g,j){var e=b(j),k=e.data("link-group"),f=b(e.data("target")),h=f.data("target-group"),
i=e.data("animation-in");e.on("click",function(d){d.preventDefault();b(this).hasClass("active")||(b('[data-link-group="'+k+'"]').removeClass("active"),e.addClass("active"),i?a.addAnimation(f,h,i,c):a.hideShow(f,h,c))});d=d.add(e)})},hideShow:function(a,c,d){b('[data-target-group="'+c+'"]').hide().css("opacity",0);a.show().css("opacity",1);d.afterShow()},addAnimation:function(a,c,d,g){b('[data-target-group="'+c+'"]').hide().css("opacity",0).removeClass("animated "+d);a.show();g.afterShow();setTimeout(function(){a.css("opacity",
1).addClass("animated "+d)},50)}}})(jQuery);