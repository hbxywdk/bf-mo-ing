window.onload=function(){
	var windowST=$(window).scrollTop();
	var index1=index2=index3=index4=false;
	everyAnimate(windowST)
	$(window).scroll(function(){
		windowST=$(window).scrollTop();
		//console.log(windowST)
		everyAnimate(windowST)
	});
	function autoPlus(){
		var plusNub=$('.animaNub');
		var nub=0;
		var plus=function(){
			nub++;
			plusNub.text(nub)
			if (nub>=76) {
				clearInterval(timer)
			}
		}
		timer=setInterval(plus,10)
	}
	function cover(){
		$('.area19 .img2 .cover').animate({
			'width':0
		},1000,function(){
			$('.area19 .img1 .cover').animate({
				'width':0
			},1000)
		})
	}
	function everyAnimate(scroll){
		var video=$(".norical").get(0);
		var video2=$("#video2").get(0);
		var video3=$("#video3").get(0);
		if (scroll>=1000&&scroll<=1700) {
			$('.area2 .text').animate({
				'opacity':1
			});
		}
		if (scroll>=2000&&scroll<=2800) {
			$('.area4 .text').animate({
				'opacity':1
			});
		}
		if (scroll>=3300&&scroll<=4100) {
			$('.area6 .text').animate({
				'opacity':1
			});
		}
		if (scroll>=4300&&scroll<=5000) {
			if (!index1) {
				autoPlus();
				index1=true;
			}
		}
		if (scroll>=5300&&scroll<=5900) {
			if (!index2) {
				video.play();
				index2=true;
			}
		}
		if (scroll>=6500&&scroll<=7100) {
			$('.product').animate({
				'marginTop':'50px'
			},'swing');
		}
		if (scroll>=7200&&scroll<=7800) {
			if (!index3) {
				video2.play();
				index3=true;
			}
		}
		if (scroll>=9600&&scroll<=10400) {
			$('.left15').animate({
				'left':'-150px',
				'opacity':1
			},600,'swing');
		}
		if (scroll>=11500&&scroll<=12000) {
			$('.tj').addClass('tjMove');
		}
		if (scroll>=12000&&scroll<=12500) {
			cover();
		}
		if (scroll>=15300&&scroll<=15800) {
			if (!index4) {
				video3.play();
				index4=true;
			}
		}
	}
	var leftB=$('.area22 .left');
	var rightB=$('.area22 .right');
	var posi=$('.midWrap');
	leftB.click(function(){
		movePic('left');
	});
	rightB.click(function(){
		movePic('right');
	});
	function movePic(way){
		if (way=='left') {
			var now=parseInt(posi.css('left'));
			now+=740;
			//alert(now)
			if (now<=0) {
				posi.animate({
					'left':now+'px'
				});
				if (now==0) {
					leftB.hide();
				}
				rightB.show();
			}else{

			}

		}
		else if (way=='right') {
			var now=parseInt(posi.css('left'));
			now-=740;
			//alert(now)
			if (now>=-1480) {
				posi.animate({
					'left':now+'px'
				});
				if (now==-1480) {
					rightB.hide();
				}
				leftB.show();
			}

		}
	}

}
function to_top(){
	$("body,html").animate({scrollTop:"0px"},5000);
}
