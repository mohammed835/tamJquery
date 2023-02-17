
$(function(){
    

    $('.header').height($(window).height());

    $(window).resize(function(){

        $('.header').height($(window).height());

    });

    $('.links li ').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });


    $('.links li a').click(function(){
        $('html , body').animate({
            scrollTop : $('.'+ $(this).data('value')).offset().top,
        },1500);

    });

    // auto slider 

    $(function autoSlider(){
        $('.slider .active').each(function(){
            if (!$(this).is(':last-child')){

                $(this).delay(1000).fadeOut(1000,function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn(1000);
                    autoSlider();
                });
            }
            else {
                $(this).delay(1000).fadeOut(1000,function(){
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn(1000);
                    autoSlider();
                });
            }
        })
    });
    $('.projects ul li').click(function(){
        
        $(this).siblings().removeClass('active');

        $(this).addClass('active');
     });


     // scroll to top 
     $(window).scroll(function(){
        if($(window).scrollTop() > 1000 ){
            
            $('.up img').fadeIn(500)
    
            } else {
                $('.up img').fadeOut(500)
            }

            $('.up img').click(function(){

                $(window).scrollTop(0);
             })
     })

     
     
    
 
    var mixer = mixitup('#container');

    var mixer = mixitup(containerEl);

    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 300
        }
    });

    

});


