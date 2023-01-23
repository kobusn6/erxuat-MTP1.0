 ( function( d ) {
   'use strict';

   var str = d.getElementById( 'starter' ), 
       pyr = d.getElementById( 'player' );

   str.classList.remove( 'hide' );

   str.addEventListener( 'click', 
      function() { 
                  pyr.play();
                  str.classList.add( 'hide' );
                 }, false );

   pyr.addEventListener( 'ended', 
      function() { 
                  pyr.load();
                  str.classList.remove( 'hide' );
                 }, false );

 }( document ));