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

    $('.checklist_limit').each(function(){
        var $checkbox = $(this).find('.checkbox_limit');
        var $limit = $(this).data('limit');
        $checkbox.on('change',function(){
            if($checkbox.filter(":checked").length > $limit){
                this.checked = false;
                alert('해당 투표항목은 최대 '+ $limit+ '개까지 선택할 수 있습니다.')
            }
        });
    })

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




//레이어 팝업 닫기
function close_popup(target){
    var $this = $(target);
    $this.parents('.layer_popup').removeClass('on');
}

//레이어 팝업 열기
function open_popup(target){
    let popupName = $(target).data('popup');
    $('.layer_popup.'+popupName).addClass('on');
}


//글자수 체크
function countChar(val,limit) {
    var len = val.value.length;
    if (len >= limit) {
        val.value = val.value.substring(0, limit);
        $(val).siblings('.limit_info').find('.current').html(limit);
    } else {
        $(val).siblings('.limit_info').find('.current').html(len);
    }
};