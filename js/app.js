/**
 * Created by lmarkus on 1/10/14.
 */
$(function(){
   $(window).resize(function(){
       if($( window ).width() > 640){
           $('.nav').show();
           $('.toggler').hide();
       }
       else {
           $('.nav').hide();
           $('.toggler').show();
       }
   });

    $('.toggler').click(function(){
        $('.nav').toggle();
    })

    $('.nav li').click(function(){
        $('.nav').hide();
    });
});