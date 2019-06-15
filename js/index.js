$(function(){
	var timer;
	var num = 0;
	
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
			$('#abouts .nav-tabs').addClass('abouts-animate1');
			$('#abouts .tab-content').addClass('abouts-animate2');
		}
		if(num==2){
			$('#services .section-title').addClass('services-animate1');
			$('#services .services-box').addClass('services-animate2');
		}
		if(num==3){
			$('#solutions .section-title').addClass('services-animate1');
			$('#solutions .solutions-box:nth-child(1)').addClass('solutions-animate1');
			$('#solutions .solutions-box:nth-child(2)').addClass('solutions-animate1');
			$('#solutions .solutions-box:nth-child(3)').addClass('solutions-animate1');
			$('#solutions .solutions-box:nth-child(4)').addClass('solutions-animate1');
			$('#solutions .solutions-box:nth-child(5)').addClass('solutions-animate2');
			$('#solutions .solutions-box:nth-child(6)').addClass('solutions-animate2');
			$('#solutions .solutions-box:nth-child(7)').addClass('solutions-animate2');
			$('#solutions .solutions-box:nth-child(8)').addClass('solutions-animate2');
		}
		if(num==4){
			$('#clients .section-title').addClass('services-animate1');
			$('#clients .clients-box').addClass('client-animate1');
		}
		if(num==5){
			$('#contact .section-title').addClass('services-animate1');
			$('#contact .contact-box').addClass('contact-animate1');
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
			$('#abouts .nav-tabs').addClass('abouts-animate1');
			$('#abouts .tab-content').addClass('abouts-animate2');
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
				$('#abouts .nav-tabs').addClass('abouts-animate1');
				$('#abouts .tab-content').addClass('abouts-animate2');
			}
			if(num==2){
				$('#services .section-title').addClass('services-animate1');
				$('#services .services-box').addClass('services-animate2');
			}
			if(num==3){
				$('#solutions .section-title').addClass('services-animate1');
				$('#solutions .solutions-box:nth-child(1)').addClass('solutions-animate1');
				$('#solutions .solutions-box:nth-child(2)').addClass('solutions-animate1');
				$('#solutions .solutions-box:nth-child(3)').addClass('solutions-animate1');
				$('#solutions .solutions-box:nth-child(4)').addClass('solutions-animate1');
				$('#solutions .solutions-box:nth-child(5)').addClass('solutions-animate2');
				$('#solutions .solutions-box:nth-child(6)').addClass('solutions-animate2');
				$('#solutions .solutions-box:nth-child(7)').addClass('solutions-animate2');
				$('#solutions .solutions-box:nth-child(8)').addClass('solutions-animate2');
			}
			if(num==4){
				$('#clients .section-title').addClass('services-animate1');
				$('#clients .clients-box').addClass('client-animate1');
			}
			if(num==5){
				$('#contact .section-title').addClass('services-animate1');
				$('#contact .contact-box').addClass('contact-animate1');
			}
			$('section').animate({'top':-100*num+'%'},350);
			$('.navbar-list li').eq(num).addClass('active').siblings('li').removeClass('active');
		},100)
	})
	
	
	//services放大——缩小动画效果
	$('.row .services-box:nth-child(1)').hover(function(){
		$('.row .services-box:nth-child(1) .services-text2').toggleClass('big');
	})
	$('.row .services-box:nth-child(2)').hover(function(){
		$('.row .services-box:nth-child(2) .services-text2').toggleClass('big');
	})
	$('.row .services-box:nth-child(3)').hover(function(){
		$('.row .services-box:nth-child(3) .services-text2').toggleClass('big');
	})
	$('.row .services-box:nth-child(4)').hover(function(){
		$('.row .services-box:nth-child(4) .services-text2').toggleClass('big');
	})
	$('.row .services-box:nth-child(5)').hover(function(){
		$('.row .services-box:nth-child(5) .services-text2').toggleClass('big');
	})
	$('.row .services-box:nth-child(6)').hover(function(){
		$('.row .services-box:nth-child(6) .services-text2').toggleClass('big');
	})
	$('.row .services-box:nth-child(7)').hover(function(){
		$('.row .services-box:nth-child(7) .services-text2').toggleClass('big');
	})
	$('.row .services-box:nth-child(8)').hover(function(){
		$('.row .services-box:nth-child(8) .services-text2').toggleClass('big');
	})
	
	//solution放大——缩小动画效果
	$('.row .solutions-box:nth-child(1)').hover(function(){
		$('.row .solutions-box:nth-child(1) .services-text2').toggleClass('big');
	})
	$('.row .solutions-box:nth-child(2)').hover(function(){
		$('.row .solutions-box:nth-child(2) .services-text2').toggleClass('big');
	})
	$('.row .solutions-box:nth-child(3)').hover(function(){
		$('.row .solutions-box:nth-child(3) .services-text2').toggleClass('big');
	})
	$('.row .solutions-box:nth-child(4)').hover(function(){
		$('.row .solutions-box:nth-child(4) .services-text2').toggleClass('big');
	})
	$('.row .solutions-box:nth-child(5)').hover(function(){
		$('.row .solutions-box:nth-child(5) .services-text2').toggleClass('big');
	})
	$('.row .solutions-box:nth-child(6)').hover(function(){
		$('.row .solutions-box:nth-child(6) .services-text2').toggleClass('big');
	})
	$('.row .solutions-box:nth-child(7)').hover(function(){
		$('.row .solutions-box:nth-child(7) .services-text2').toggleClass('big');
	})
	$('.row .solutions-box:nth-child(8)').hover(function(){
		$('.row .solutions-box:nth-child(8) .services-text2').toggleClass('big');
	})
})
