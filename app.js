$(document).ready(function() {

    $('#newSpy').on('click', function() {
        $('.container').append('<div class="spyFine" style="background-color: yellow;"><p>This is where a spy would go</p><button id="delete">Delete</button><button id="change">Change</button></div>');
    });


    //           $('.container > button').on('click', function(){
    //             console.log('cmon..');                     //this is where my toggle class would have been if
    //                                                         //I could have figured out how to select the freakin' button..
    //           })
    //
    //           $('#delete').on('click', function(){
    //             console.log('really..');                     //this is where my prepend or remove would have been..
    //                                                       //again if I could have figured out how to select the freakin' button..
    // });

    $('.container').on('click', '#change', function(){        //wasn't until a few minutes before we ended that I finally got it...
  console.log('yo');
    $( 'div').toggleClass( "dangerSpy" );



});

  $('.container').on('click', '#delete', function(){      //fml :P
    console.log('working');
    $('.div').remove();


});

});
