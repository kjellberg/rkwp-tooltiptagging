jQuery(function(e){function s(t){console.log(t);e("#console").append("<li>"+t+"</li>")}var t={x:-1,y:-1},n=[];e(document).mousemove(function(e){t.x=e.pageX;t.y=e.pageY});var r=e("img.rk-img.edit");r.wrap("<div class='rk-image-container'></div>");var i=e(".rk-image-container");i.width(r.width()).height(r.height());r.click(function(){var n,r,i,o,u=e(this);u.x=u.offset().left;u.y=u.offset().top;u.w=u.width();u.h=u.height();n=t.x-u.x;r=t.y-u.y;i=n/u.w;o=r/u.h;var a=Math.floor(Math.random()*6617484)+124315,f=e("<div></div>");f.addClass("rk-tag-dot").attr("id","rk-tag-dot-"+a).css("margin-left",i*u.width()-10).css("margin-top",o*u.height()-10).prependTo(e(this).parent());s("top: "+o);s("left: "+i);s("")})});