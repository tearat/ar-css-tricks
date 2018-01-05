$(document).ready(function($){
    var loader = document.getElementById('loader');
    
    for (i=1; i<9; i++)
    {
        var elem = document.createElement('div');
        elem.classList.add('elem');
        elem.classList.add('e'+i);
        loader.appendChild(elem);
    }
});