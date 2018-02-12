var hoverables = document.getElementsByClassName('hoverable');

for (var i=0; i<hoverables.length; i++)
    {
        // setting image
        var get_img = hoverables[i].getAttribute('data-img');
        hoverables[i].style.backgroundImage = 'url('+get_img+')';

        // setting text and create nodes
        var get_text = hoverables[i].getAttribute('data-text');
        var curtain = document.createElement('div');
        curtain.classList.add('curtain');
        var par = document.createElement('p');
        var hover_text = document.createTextNode(get_text);
        par.appendChild(hover_text);
        curtain.appendChild(par);
        hoverables[i].appendChild(curtain);

        //setting color
        var get_color = hoverables[i].getAttribute('data-color');
        curtain.style.backgroundColor = get_color;

        //setting text color
        var get_text_color = hoverables[i].getAttribute('data-text-color');
        par.style.color = get_text_color;
    }