$(function(){
    /**
     * 获取用户存储的收货地址
     */

    // 存储收货地址
    var address=null;
    $.ajax({
        url:'/address/queryAddressTree',
        type:'GET',
        success:function(res){
            //console.log(res);
             address=res;
            var html =template('addressTpl',{result:res});
            $('#address-box').html(html);
        }


    })

    /**
     * 删除收货地址
     * 1.给删除按钮添加点击事件
     * 2.弹出一个删除确认框
     * 3.如果用户点击确认 删除
     * 4.调用删除收货地址的接口 完成删除功能
     * 5.刷新当前页面
     */
  $('#address-box').on('click','delete-btn',function(){

  })


})
