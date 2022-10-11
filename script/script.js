$(document).ready(function(){
    $('#top_bt').click(function(){
        $('body,html').animate({'scrollTop':'0'},1)
    })
    $('.slide_btn1').click(function(){
        $(this).css({'background-color':'#fef100'}).siblings('.slide_btn1').css({'background-color':'#fff'})
        $('#slide_img').animate({'left':$(this).index()*-100+'%'})
    })
    $('#sns_menu>li:nth-child(1)').click(function(){
        $(this).css({'background-color':'#223a6a','color':'#fff'}).siblings().css({'background-color':'#ebeff1','color':'#666666'})
        $('#sns_content1').show().siblings().hide()
    })
    $('#sns_menu>li:nth-child(2)').click(function(){
        $(this).css({'background-color':'#223a6a','color':'#fff'}).siblings().css({'background-color':'#ebeff1','color':'#666666'})
        $('#sns_content2').show().siblings().hide()
    })
    $('#sns_menu>li:nth-child(3)').click(function(){
        $(this).css({'background-color':'#223a6a','color':'#fff'}).siblings().css({'background-color':'#ebeff1','color':'#666666'})
        $('#sns_content3').show().siblings().hide()
    })
    $('.btn_a').click(function(){
        $(this).css({'background-color':'#fef100'}).siblings('.btn_a').css({'background-color':'#fff'})
    })
    $('#event1_btn>li:nth-child(1)').click(function(){
        $('#event1_slide').animate({'left':'0'},500)
    })
    $('#event1_btn>li:nth-child(2)').click(function(){
        $('#event1_slide').animate({'left':'-600px'},500)
    })
    $('#event1_btn>li:nth-child(3)').click(function(){
        $('#event1_slide').animate({'left':'-1200px'},500)
    })
    $('#event1_btn>li:nth-child(4)').click(function(){
        $('#event1_slide').animate({'left':'-1800px'},500)
    })
    $('#event2_btn>li:nth-child(1)').click(function(){
        $('#event2_slide').animate({'left':'0px'},500)
    })
    $('#event2_btn>li:nth-child(2)').click(function(){
        $('#event2_slide').animate({'left':'-300px'},500)
    })
    $('#event2_btn>li:nth-child(3)').click(function(){
        $('#event2_slide').animate({'left':'-600px'},500)
    })
})