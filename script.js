/**
 * Created by myl17 on 2017/7/27.
 */
$('.tabs-nav ul').on('mouseover','li',function (e) {
    var li = e.currentTarget;
    var $li = $(li);
    var index = $li.index();
    $li.addClass('current').siblings('.current').removeClass('current');
    var $content = $('.tabs-content').children().eq(index);
    $content.addClass('active').siblings('.active').removeClass('active');
})

/**
 * js,jquery 代码必须自己一个字一个字敲出来，拒绝粘贴复制。
 */