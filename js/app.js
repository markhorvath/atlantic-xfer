$(".nav li").on("click", function(){
    alert('success');
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

$( document ).on( 'click', '.navbar-nav li', function ( e ) {
    $( this ).addClass( 'active' ).siblings().removeClass( 'active' );
} );