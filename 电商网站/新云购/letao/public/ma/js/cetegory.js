mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005
});

$.ajax({
    url:'/category/queryTopCategory',
    type:'get',
    success:function(response){
       console.log(response)
    }
});