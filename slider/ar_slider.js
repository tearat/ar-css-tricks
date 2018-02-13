function ar_slider( params )
{
    params.images.forEach(function( index, value ) {
        var new_a = document.createElement('a');
        new_a.setAttribute('href','#');
        var new_li = document.createElement('li');
        var new_img = document.createElement('img');
        new_img.setAttribute('src',index);
        new_li.appendChild(new_img);
        new_a.appendChild(new_li);
        $( params.el + ' .top ul').append(new_a);
    });
    
    params.images.forEach(function( index, value ) {
        var new_li = document.createElement('li');
        var new_img = document.createElement('img');
        new_img.setAttribute('src',index);
        new_li.appendChild(new_img);
        $( params.el + ' .panel ul').append(new_li);
    });
    
    $( params.el + ' .top li').css('width', params.width+'px');
    $( params.el + ' .top button.next').css('left', params.width+'px');
    $( params.el + ' .top img').css('height', params.height+'px');
    $( params.el + ' .top button').css('height', params.height+'px');
    
    $( params.el + ' .panel').css('top', params.height+'px');
    $( params.el + ' .panel').css('width', params.width+'px');
    $( params.el + ' .panel ul').css('width', params.width+'px');
    
    var slides = $( params.el + ' .top li');
    slides.hide();
    
    var panel_slides = $( params.el + ' .panel li');

    var current = 0;
    slides.eq(current).show();
    slideTo( current );

    if ( params.auto )
    {
        setInterval(function(){ slideForward() }, params.interval );
    }
    
    if ( !params.panel )
    {
        $( params.el + ' .panel').hide();
    }

    if ( params.arrows )
    {
        $(document).keydown(function(e) {
            if ( e.which == 37 ) { slideBack(); }
            if ( e.which == 39 ) { slideForward(); }
        });
    }
    
    //////////////////////////////////////////////
    
    function slideForward()
    {
        panel_slides.removeClass('current');
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
        panel_slides.eq(current).addClass('current');
        $( params.el + ' .panel ul').css('margin-left', params.width/2-50-(current*100)+'px');
    }
    
    function slideBack()
    {
        panel_slides.removeClass('current');
        slides.eq(current).fadeOut();
        if ( current > 0 )
        {
            current = current - 1;
        }
        else
        {
            current = slides.length-1;
        }
        slides.eq(current).fadeIn();
        panel_slides.eq(current).addClass('current');
        $( params.el + ' .panel ul').css('margin-left', params.width/2-50-(current*100)+'px');
    }
    
    function slideTo( n )
    {
        panel_slides.removeClass('current');
        slides.eq(current).fadeOut();
        current = n;
        slides.eq(n).fadeIn();
        panel_slides.eq(current).addClass('current');
        $( params.el + ' .panel ul').css('margin-left', params.width/2-50-(current*100)+'px');
    }

    $( params.el + ' .top button.next').on("click", function(){
        slideForward();
    });

    $( params.el + ' .top button.prev').on("click", function(){
        slideBack();
    });
    
    $( params.el + ' .panel li' ).on("click", function(){
        var n = $( params.el + ' .panel li' ).index( this );
        slideTo( n );
    });

    
}