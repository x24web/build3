$('#navbar ul li a').click(function (e) {
    e.preventDefault();
    $id = e.target.getAttribute('href')
    $('html, body').animate({ scrollTop: ($($id).offset().top)},500);
})

// Jquery
$('#pagecontent').fullpage();

let spyscroll = _ => { 
    var currentTop = $(window).scrollTop();
    var elems = $('.scrollspy');
    elems.each(function(index){
      var elemTop 	= $(this).offset().top;
      var elemBottom 	= elemTop + $(this).height();
      if(currentTop >= elemTop - 20 && currentTop <= elemBottom - 20){
        var id 		= $(this).attr('id');
        var navElem = $('a[href="#' + id+ '"]');
    navElem.parent().addClass('active').siblings().removeClass( 'active' );
      }
    })
};
setInterval(spyscroll,100);