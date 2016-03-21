var cntWd, sldWd, tb;
	$(function() {
		
		cntWd = $('#container').innerWidth();
		tb = $('#thumbs');
		sldWd = tb.outerWidth();
		
		$('#container').mousemove(function(e)
		{
			tb.css({left: ((cntWd - sldWd)*((e.pageX / cntWd).toFixed(3))).toFixed(1) +"px" });
 		});
});
 
var spot;
init();

function init() {
    spot = document.getElementById('tsb-spot');
    
    document.getElementById('container').onmousemove = onMouseMove;
    document.getElementById('container').ontouchmove = function (e) {e.preventDefault(); e.stopPropagation(); onMouseMove({clientX: e.touches[0].clientX, clientY: e.touches[0].clientY});};
    
    onMouseMove({clientX: 300, clientY: 200});
}


function onMouseMove(e) {
    var xm = e.clientX - 600;
    var ym = e.clientY - 350;

    
    xm = e.clientX - 1200;
    ym = e.clientY - 900;
    spot.style.backgroundPosition = xm + 'px ' + ym + 'px';
}