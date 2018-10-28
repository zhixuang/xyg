$(function(){
    $("#search-btn").on('click',function(){
        //alert(1);
        //alert( $(this).siblings('input').val());
       var keyword= $(this).siblings('input').val();
        if(keyword){
            keyArr.push(keyword);
            localStorage.setItem('keyArr',JSON.stringify(keyArr));
            location.href = "seach-result.html?keyword=" + keyword;

        }else{

            alert('请输入商品的关键字');
        }

    })
    var keyArr=[];
    if( localStorage.getItem('keyArr')){
        keyArr=JSON.parse(localStorage.getItem('keyArr'));
        //console.log(keyArr);
        var html=template('historyTpl',{result:keyArr});
        $('#history-box').html(html);

    }
    //实现清空历史
    //
    //1.给元素添加点击事件
    //2.清空页面中的数据 清空本地存储中的数据

    $('#clearbtn').on('click',function(){
        $('#history-box').html('');
        localStorage.removeItem('keyArr');
    })


})

