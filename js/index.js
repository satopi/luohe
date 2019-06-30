$(function(){

	var timer;
	var num = 0;
	function add(a,b,c,d){
		$(a).addClass(b);
		$(c).addClass(d);
	}
	
	//点击导航事件
	$('.navbar-list li').click(function(event){
		num = $(this).index();
		if(num==0){
				$('.navbar-default').removeClass('navbar-luohe1');
				$('.navbar-default').addClass('navbar-luohe');
		}else{
			$('.navbar-default').removeClass('navbar-luohe');
			$('.navbar-default').addClass('navbar-luohe1');
		}
		if(num==1){
			add('#abouts .nav-tabs','abouts-animate1','#abouts .tab-content','abouts-animate2');
		}
		if(num==2){
			add('#services .section-title','services-animate1','#services .services-box','services-animate2');
		}
		if(num==3){
			$('#solutions .section-title').addClass('services-animate1');
			for(var i = 1;i<=4;i++){
				$('#solutions .solutions-box:nth-child('+i+')').addClass('solutions-animate1');
			}
			for(var j = 4;j<=8;j++){
				$('#solutions .solutions-box:nth-child('+j+')').addClass('solutions-animate2');
			}
		}
		if(num==4){
			add('#clients .section-title','services-animate1','#clients .clients-box','client-animate1');
		}
		if(num==5){
			add('#contact .section-title','services-animate1','#contact .contact-box','contact-animate1');
		}
		$('section').animate({'top':-100*num+'%'},350);
		$(this).addClass('active').siblings('li').removeClass('active');
	});
	
	//点击下页按钮事件
	$('.scroll-down').click(function(){
		num = $(this).index();
		$('section').animate({'top':-100+'%'},350);
		$('.navbar-list li').eq(num).addClass('active').siblings('li').removeClass('active');
		if(num==1){
			add('#abouts .nav-tabs','abouts-animate1','#abouts .tab-content','abouts-animate2');
		}
	})
	
	//导航监听
	$(document).mousewheel(function(e,d){
		//alert(d)
		//向下滚动时:d=-1  向上滚动时：d=1
		//setInterval(function(){},500)
		//setTimeout(function(){},500)一次性定时器，隔500毫秒执行且只执行一次函数内容
		clearTimeout(timer);
		timer= setTimeout(function(){
			num=num-d;
			if(num<0){num = 0}
			if(num>5){num = 5}
			if(num==0){
				$('.navbar-default').removeClass('navbar-luohe1');
				$('.navbar-default').addClass('navbar-luohe');
			}else{
				$('.navbar-default').removeClass('navbar-luohe');
				$('.navbar-default').addClass('navbar-luohe1');
			}
			if(num==1){
				add('#abouts .nav-tabs','abouts-animate1','#abouts .tab-content','abouts-animate2');
			}
			if(num==2){
				add('#services .section-title','services-animate1','#services .services-box','services-animate2');
			}
			if(num==3){
				$('#solutions .section-title').addClass('services-animate1');
				for(var i = 1;i<=4;i++){
				$('#solutions .solutions-box:nth-child('+i+')').addClass('solutions-animate1');
				}
				for(var j = 4;j<=8;j++){
					$('#solutions .solutions-box:nth-child('+j+')').addClass('solutions-animate2');
				}
			}
			if(num==4){
				add('#clients .section-title','services-animate1','#clients .clients-box','client-animate1');
			}
			if(num==5){
				add('#contact .section-title','services-animate1','#contact .contact-box','contact-animate1');
			}
			$('section').animate({'top':-100*num+'%'},350);
			$('.navbar-list li').eq(num).addClass('active').siblings('li').removeClass('active');
		},100)
	})
	
	
	
	
	//services放大——缩小动画效果
	$('.row .services-box').hover(function(){
		var j = $(this).index()+1;
		var a = '.row .services-box:nth-child('+j+')'+' .services-text2';
		$(a).toggleClass('big');
	})
	
	//solution放大——缩小动画效果
	$('.row .solutions-box').hover(function(){
		var j = $(this).index()+1;
		var a = '.row .solutions-box:nth-child('+j+')'+' .services-text2';
		$(a).toggleClass('big');
	})
})

	