$(document).ready(function($){
    //
    var sliding_delay = 200;
    var color = 'purple';

    function generatePixels()
    {
        var pixelbg = document.getElementById('pixelbg');
        $('.block').hide();
        for (var i=0; i<12*10; i++)
            {
                var newblock = document.createElement('div');
                newblock.classList.add('col','s1',color,'block');
                var random = Math.random() * (4 - 1) + 1;
                random = Math.round(random);
                newblock.classList.add('lighten-'+random);

                pixelbg.appendChild(newblock);

            }
    }

    setInterval(function(){  generatePixels(); }, sliding_delay);

});