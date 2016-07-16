$.fn.smartFloat = function (footer,content) {
    var position = function (element, footer,content) {
        //footer 为底部选择器
        //content 为内容选择器
        var topFirst = element.position().top; //当前元素对象element初始距离父级上边缘的距离 
        var top = element.offset().top; //当前元素对象element距离浏览器上边缘的距离 
        var winHeight = $(window).height() //浏览器时下窗口可视区域高度 
        var bodyHeight = $(document).height(); //文档实际高度
        var eleHeight = element.outerHeight();// 元素总高度
        var footerHeight = $(footer).outerHeight(); // 底部高度
        var contentHeight = $(content).outerHeight(); // 底部高度
        if(contentHeight< eleHeight ){
            $(content).css('min-height', eleHeight);
            bodyHeight = $(document).height();
           // footerHeight = $(footer).outerHeight();
        }
       // console.log(footerHeight)
        //   console.log(winHeight);
        //  console.log($(document).height());
        console.log(eleHeight)
        var pos = element.css("position"); //当前元素距离页面document顶部的距离 
        //定义匿名函数方便调用
        float = function () {
            var scrolls = $(this).scrollTop();
        //   console.log(bodyHeight - winHeight - scrolls);
            var scrollsfooter = bodyHeight - winHeight - scrolls;
              if (scrolls > top) { //如果滚动到页面超出了当前元素element的相对页面顶部的高度 
                
                  var smallFixed = scrollsfooter < footerHeight ? scrollsfooter -footerHeight : 0;
                  console.log(smallFixed);
                element.css({ //设置css 
                    position: "fixed", //固定定位,即不再跟随滚动 
                    top: (eleHeight> winHeight ? (scrolls< eleHeight - winHeight ?-scrolls : ( bodyHeight -winHeight - footerHeight < scrolls ? (winHeight - eleHeight  -( footerHeight - scrollsfooter)) : winHeight - eleHeight)  )  :smallFixed) 
                }).addClass("shadow"); //加上阴影样式.shadow 
            } else {
                element.css({ //如果当前元素element未滚动到浏览器上边缘，则使用默认样式 
                    position: pos,
                    top: topFirst
                }).removeClass("shadow");//移除阴影样式.shadow 
            }
        }

        window.onresize = function () {
             winHeight = $(window).height() //浏览器时下窗口可视区域高度 
             float();
            }  

       // console.log($(document.body).height());
        $(window).scroll(function () { //侦听滚动时 
            
             float();
        });
    };
    return $(this).each(function () {
        position($(this),footer,content);
    });
};