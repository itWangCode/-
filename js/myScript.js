/**
 * Created by wangyang on 2019-04-12.
 * itwangyang@gmail.com
 * http://www.itwangyang.xyz
 */

$('[data-fancybox="gallery"]').fancybox({
    titleShow: true,
    titlePosition: 'outside',
    caption: function (instance, item) {
        var caption = $(this).data('caption') || '';
        if (item.type === 'image') {
            caption = (caption.length ? caption + '<br />' : '') + '<a href="' + item.src + '"></a>';
        }
        return caption;
    }
});

