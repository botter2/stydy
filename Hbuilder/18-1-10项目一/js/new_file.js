//$(".nav_li").hover(function(){
//				var i=$(this).index();
//				$(".li_ul").eq(i).stop().slideDown(500);
//			},function(){
//				var i=$(this).index();
//				$(".li_ul").eq(i).stop().slideUp(500);
//			})
$(function(){
	$(".nav_li").hover(function() {
		console.log($(this))
		var a=$(this);
		$(".li_ul",this).stop().slideDown(300,"elasticOut");
		$(".nav_li").eq(a).addClass("now");
	}, function() {
		var a=$(this);
		$(".li_ul",this).stop().slideUp(300);
		$(".nav_li").eq(a).removeClass("now");
	})
	


	$(".nav_ul>li").hover(function(){
		$(this).css("background","");
		console.log()
		$(this).css("background","url(img/nav_now_bg.png) no-repeat bottom center");
	},function(){
		$(this).css("background","");
	})
})