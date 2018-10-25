$(function(){
    $("#search-btn").on('click',function(){
        //alert(1);
        //alert( $(this).siblings('input').val());
       var keyword= $(this).siblings('input').val();
        if(keyword){
            keyArr.push(keyword)
            localstorage.setItem('keyArr',JSON.stringify(keyArr));
            location.href = "seach-result.html?keyword=" + keyword;

        }else{

            alert('请输入商品的关键字');
        }

    })
})

