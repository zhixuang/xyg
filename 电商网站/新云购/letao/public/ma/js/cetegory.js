mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
//获取一级分类
$.ajax({
    url: '/category/queryTopCategory',
    type: 'get',
    success: function(response){
        var html = template('category-first', {result: response.rows});


        $('.links').html(html);
        // 如果一级分类有数据的话
        if(response.rows.length){
       // 给第一个一级分类添加选中状态
             $('.links').find('a').eq(0).addClass('avtive');
            var id=response.rows[0].id;
            // 根据一级分类ID获取二级分类
            //getSecondCategory(id);


        }
    }
});
// 根据一级分类ID获取二级分类

// 1.一级分类添加点击事件

$("#leftCate").on('click','a',function(){

    var id=$(this).attr('data-id');
    console.log(id);
    $(this).addClass('active').siblings().removeClass('active');
    getSecondCategory(id);

})
function getSecondCategory(id){
$.ajax({
    url:'/category/querySecondCategory',
    type:'get',
    data: {id: id},
    success:function(response){
        //console.log(response)
    var html=template('rightCateTpl',response);

        $('.brand-list').html(html);

    }

})
}