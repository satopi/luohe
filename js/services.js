$(function(){
	new WOW().init();
	//滚动监听
	$(window).scroll(function(event){
		var sTop = $(this).scrollTop();
		if(sTop<400){
			$('.backTop').css('opacity','0');
		}else{
			$('.backTop').css('opacity','1');
		}
	})
	
	//动画控制
	$('.footer_p2').css({'animation-duration':'.3s','animation-delay':'1s'});
	 $(window).unload(function(){
    alert("再见！");
  });
})
