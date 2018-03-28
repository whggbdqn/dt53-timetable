/**
 * 处理鼠标右击事件
 */

$(function(){
	$(".className,.teacherName,.classInfo").bind("mousedown", (function (e) {
        if (e.which == 3) {

        var    opertionn = {
                name: "",
                offsetX: 2,
                offsetY: 2,
                textLimit: 10,
                beforeShow: $.noop,
                afterShow: $.noop
            };

            var imageMenuData = [
    [{
        text: e.target.cellIndex + ":" + e.target.innerHTML,
        func: function () {
            $(this).css("padding", "10px");
            alert(e.target.innerHTML);
        }
    }, {
        text: "添加",
        func: function () {
            alert(e.target.innerHTML);
        }
    }, {
        text: "复制",
        func: function () {
            $(this).css("background-color", "#beceeb");
        }
    }],
    [{
        text: "再次查询",
        func: function () {
            var src = $(this).attr("src");
            window.open(src.replace("/s512", ""));
        }
    }]
    ,
    [{
        text: "过滤",
        func: function () {
            var src = $(this).attr("src");
            window.open(src.replace("/s512", ""));
        }
    }]
            ]; 
            $('td.td_selected').removeClass('td_selected');
            if ($(e.target).hasClass('td_selected')) {
                $(e.target).removeClass('td_selected');
            } else {
                $(e.target).addClass('td_selected');
            } 
            $(this).smartMenu(imageMenuData, opertionn); 
        } 
    }));
});

