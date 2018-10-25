// 获取地址栏中用户输入的关键字
var keyword = getParamsByUrl(location.href, 'keyword');
// 当前页
var page = 1;

// 页面中的数据
var html = "";

// 价格排序规则 升序
var priceSort = 1;

var This = null;

$(function(){

    var keyword=getParamsByUrl( location.href,' keyword');

})

function getParamsByUrl(url, name) {
    var params =url.substr(url.indexOf('?')+1);
    var param=params.substr('&');
    for(var i=0;i<param.length;i++){
        var current=param[1].substr('=');
        console.log(current);
        if(current[0]==name){
          return current[1];

        }

    }
    return null;
}
$(function(){

    mui.init({
        pullRefresh : {
            container: '#refreshContainer',
            up : {
                height:50,
                auto:true,
                contentrefresh : "正在加载",
                contentnomore:'没有更多数据',
                callback: getData
            }
        }
    });



    $('#priceSort').on('click', function(){
        priceSort = priceSort == 1 ? 2 : 1;
        html = "";
        page = 1;
        mui('#refreshContainer').pullRefresh().refresh(true);
        getData();

    });


});
function getData(){
    if(!This){
        This = this;
    }
  $.ajax({
    url:'/product/queryProduct',
    type:'GET',
    data:{
        page:page++,
        pageSize:3,
        proName: keyword,
        price: priceSort
    },
    success:function(response){
          if(response.data.length>0){
          html+=template('searchTpl',response);
              $('#search-box').html(html);
              This.endPullupToRefresh(false);

          }else {


              This.endPullupToRefresh(true);


          }
    }
})
}
