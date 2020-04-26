const itemNavbar = document.querySelectorAll('#navbar ul li a');

function activeLink(e){
    for(const el of e.target.parentElement.parentElement.children){
        el.classList.remove('active');
    }
    e.target.parentElement.classList.add('active');
}

for(const el of itemNavbar){
    el.addEventListener('click',activeLink);
}

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