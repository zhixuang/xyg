$(function(){

    // �ָ�AԪ�ص���ת
    $('body').on('tap', 'a', function(){

        mui.openWindow({
            url: $(this).attr('href')
        });

    });

});
