function ar_slider( params )
{
    $( params.el + ' .top li').css('width', params.width+'px');
    $( params.el + ' .top button.next').css('left', params.width+'px');
    $( params.el + ' .top img').css('height', params.height+'px');
    $( params.el + ' .top button').css('height', params.height+'px');

    var slides = $( params.el + ' .top li');
    slides.hide();

    var current = 0;
    slides.eq(current).show();

    function slideForward()
    {
        slides.eq(current).fadeOut();
        if ( current < slides.length-1 )
        {
            current = current + 1;
        }
        else
        {
            current = 0;
        }
        slides.eq(current).fadeIn();
    }
    
    function slideBack()
    {
        slides.eq(current).fadeOut();
        if ( current > 0 )
        {
            current = current - 1;
            console.log(current);
        }
        else
        {
            current = slides.length-1;
            console.log(current);
        }
        slides.eq(current).fadeIn();
    }
    
    function slideTo( n )
    {
        slides.eq(current).fadeOut();
        current = n;
        slides.eq(n).fadeIn();
    }
    
    $( params.el + ' .top button.next').on("click", function(){
        slideForward();
    });

    $( params.el + ' .top button.prev').on("click", function(){
        slideBack();
    });
    
    ///////// panel control
    
    var panel_slides = $( params.el + ' .panel li');
    
    $( params.el + ' .panel li' ).on("click", function(){
        var n = $( params.el + ' .panel li' ).index( this );
        console.log( n );
        slideTo( n );
    });

    
}