// �����û���Ϣ
var userINfo=null;
$.ajax({
    url:'/user/queryUserMessage',
    type:'get',
    async: false,
    success:function(res){
        console.log(res);
        /// �û�û�е�¼
        if(res.error &&res.error==400){
              location.href="login.html";
        }
        userINfo=res;
    }

});

/**
 * �˳���¼
 * 1.��ȡ���˳���¼��ť����ӵ���¼�
 * 2.�����˳���¼�ӿ�ʵ�� �˳���¼
 * 3.����˳��ɹ� ��ת����ҳ
 */
$(function(){
    $('#logout').on('click', function(){
        $.ajax({
            url: '/user/logout',
            type: 'get',
            success: function(res){
                if(res.success){
                    mui.toast("�˳���¼�ɹ�");
                    setTimeout(function(){
                        location.href = "index.html";
                    },2000)
                }
            }
        })

    })
});

