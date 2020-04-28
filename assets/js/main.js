$('#navbar ul li a').click(function (e) {
    e.preventDefault();
    $id = e.target.getAttribute('href');
    var n;
    if($id == '#home'){
      n = 0;
    }else if($id == '#about'){
      n = 100;
    }else if($id == '#service'){
      n = 200;
    }else{
      n = 300;
    }
    $('#pagecontent > div').css({'height': '100vh','transition': 'all 0.7s ease 0s','transform': 'translateY(-'+n+'%)'})
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