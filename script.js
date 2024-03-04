(function(){

    'use strict';

    document.getElementById('convert').addEventListener('submit', function( event ) {
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);
        const answer = document.getElementById( 'answer' );
        
        if(distance){
            const conversion =(distance  * 1.60934).toFixed(3);
            
            answer.innerHTML = `<h2>${distance} Distance miles convert to ${conversion} kilometer</h2>`

        }
        else{
            answer.innerHTML = '<h2>Please prvoide a number</h2>'
        }
    });
})();