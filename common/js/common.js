function SetNum(obj){
    val=obj.value;
    re=/[^0-9]/gi;
    obj.value=val.replace(re,"");
}

function zeroPad(src) {
    var args = arguments;
    var size = 2;
    if(args.length > 1) {
        size = args[1];
    }
    var strLen = (isNaN(src) ? src.length : src.toString().length);
    size -= strLen;
    var zero = "";
    for(var i=0; i < size; i++) {
        zero += "0";
    }
    return zero + src;
}

function dateFormat(date) {
    var args = arguments;
    var sep = "-";
    if(args.length > 1) {
        sep = args[1];
    }
    return date.getFullYear() + sep + zeroPad(date.getMonth() + 1) + sep + zeroPad(date.getDate());
}

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



    winH();
    $(window).on('load resize scroll',function(){
        winH();
    });


    var mv = new Swiper('.mv',{
        speed:600,
        slidesPerView:3,
        loop:true,
        autoplay: {
            delay: 4500,
            disableOnInteraction:false
        },
        navigation: {
            nextEl: '.mv_next',
            prevEl: '.mv_prev'
        },
        pagination: {
            clickable:true,
            el: '.mv_pagination'
        },
        breakpoints: {
            1024: {
                slidesPerView:1
            }
        }

    });

    var audio_slide = new Swiper('.main_audio_slide',{
        slidesPerView:"auto",
        spaceBetween: 40,
        loop:true,
        speed: 600,
        freeMode: true,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction:false
        // },

        breakpoints: {
            1024: {

            },
            767: {
                spaceBetween: 20,

            }
        }
    });



    var article_slide = new Swiper('.main_article_slide',{
        slidesPerView: "auto",
        spaceBetween: 40,
        loop:true,
        speed: 600,
        //freeMode: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction:false
        },
        breakpoints: {
            1024: {

            },
            767: {
                spaceBetween: 20,
            }
        }
    });

    resizeCont();
    $(window).on('load resize',function(){
        resizeCont();
    });

    $(window).on('load',function(){
        if($('.audio_player').hasClass('on')){
            $('#content').addClass('audio_play');
        }else{
            $('#content').removeClass('audio_play');
        }
    });





    $('.toggle_tab').on('click',function(){
        var $tabs = $(this).parents('.select_sticker').find('.tabs');
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $tabs.removeClass('on');
        }else{
            $(this).addClass('on');
            $tabs.addClass('on');
        }
    });

    $('.tab_btn').on('click',function(){
        var $idx = $(this).index();
        //console.log($idx);
        $(this)
            .addClass('on')
            .siblings('.tab_btn')
            .removeClass('on');
        $(this)
            .parents('.tabs')
            .find('.sticker_set')
            .eq($idx)
            .addClass('on')
            .siblings('.sticker_set')
            .removeClass('on');
    });

    $('.btn_reply').on('click',function(){
        var $reply_set = $(this).parents('.comment_set').find('.comment_reply');
        if($reply_set.hasClass('on')){
            $reply_set.removeClass('on')
        }else{
            $reply_set.addClass('on')
        }

    });

});


function resizeCont(){
    let ovH = $('.oc_vid_area').outerHeight();
    $('.oc_list_area_inner').outerHeight(ovH);


    let mtvH = $('.main_tv_vid_area').outerHeight();
    $('.main_tv_list_area_inner').outerHeight(mtvH);
}


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

