$(function(){
    var $footer_policy = $('.footer_policy');
    $('.btn_policy').on('click',function(){
        if($footer_policy.hasClass('on')){
            $footer_policy.removeClass('on');
            $footer_policy.find('.txt_box').slideUp(200);
        }else{
            $footer_policy.addClass('on');
            $footer_policy.find('.txt_box').slideDown(200);
        }
    });


    $('.btn_setting').on('click',function(){
        var $setting_box = $(this).parent('.setting_set').find('.setting_box');
        if($setting_box.hasClass('on')){
            $setting_box.removeClass('on');
        }else{
            $setting_box.addClass('on');
        }
    });


    var $tab_btn = $('.tab_set .tab_btns .tab_btn');
    $tab_btn.on('click',function(){
        var $idx = $(this).index();
        var $tab_cont = $(this).parents('.tab_set').find('.tab_cont');
        //console.log($idx);
        $(this).addClass('on').siblings('.tab_btn').removeClass('on');
        $tab_cont.eq($idx).addClass('on').siblings('.tab_cont').removeClass('on');
    });

    winH();

    $(window).on('load resize scroll',function(){
        winH();
    });



    $('.byteLimit').on('keyup', function(){
        var thisObject = $(this);
        var limit = thisObject.attr("limitbyte"); //제한byte를 가져온다.
        var str = thisObject.val();
        var strLength = 0;
        var strTitle = "";
        var strPiece = "";
        var check = false;

        if(str){
            for (i = 0; i < str.length; i++){
                var code = str.charCodeAt(i);
                var ch = str.substr(i,1).toUpperCase();
                //체크 하는 문자를 저장
                strPiece = str.substr(i,1)

                code = parseInt(code);

                if ((ch < "0" || ch > "9") && (ch < "A" || ch > "Z") && ((code > 255) || (code < 0))){
                    strLength = strLength + 3; //UTF-8 3byte 로 계산
                }else{
                    strLength = strLength + 1;
                }

                if(strLength>limit){ //제한 길이 확인
                    check = true;
                    break;
                }else{
                    strTitle = strTitle+strPiece; //제한길이 보다 작으면 자른 문자를 붙여준다.
                }
                    $(this).siblings('.byte_out').html(
                        '<span class="fc_purple">'+strLength+'</span> / '+limit+'byte'
                    );
                }

            }else{
                $(this).siblings('.byte_out').html(
                    '<span class="fc_purple">0</span> / '+limit+'byte'
                );
            }



        if(check){
            alert("최대 "+limit+"byte 까지 입력 가능합니다.");
        }
        thisObject.val(strTitle);

    });


});

function winH(){
    $('.wihH').outerHeight($(window).height());
    $('.minWihH').css({'min-height':$(window).height() - 130});
}

function filebox(target){
    var $this = $(target);
    var $val = $this.val();
    $this.parents('.file_box').find('.file_box_txt').val($val);
    if($this.is('#upload_bg')){
        $('#btn_upload_bg').data('bg',$val);
    }
    if($this.is('#upload_cha')){
        $('#btn_upload_cha').data('chaImg',$val);
    }
}

function li_edit(target){
    var $this = $(target);
    var $li_edit_box = $this.parents('.li_edit_box');

    if($li_edit_box.hasClass('on')){
        $li_edit_box.removeClass('on');
    }else{
        $('.li_edit_box').removeClass('on');
        $li_edit_box.addClass('on');
    }

    $(document).click(function(e) {
        if (!$(e.target).is('.li_edit_box, .li_edit_box *')) {
            $('.li_edit_box').removeClass('on');
        }
    });
}

function close_li_edit(target){
    var $this = $(target);
    var $li_edit_box = $this.parents('.li_edit_box');
    $li_edit_box.removeClass('on');
}

function close_setting_set(target){
    var $this = $(target);
    var $setting_set = $this.parents('.setting_box');
    $setting_set.removeClass('on');
}

function edit_name(target){
    var $this = $(target);
    $('.name_set').removeClass('on');
    if($this.is(":checked")){
        $('.name_set.ty_nickname').addClass('on');
    }else{
        $('.name_set.ty_name').addClass('on');
    }
}

