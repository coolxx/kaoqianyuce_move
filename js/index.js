$(function(){
	var $height=$('.nav_bg').position().top
	$(document).scroll(function(){
		var $top=$(document).scrollTop();
		if($top>=$height){
			$('.nav_bg').css({'position':'fixed','top':0,'zIndex':99999999});
			$('.nav_th').css('display','block')
		}
	})
	$(document).scroll(function(){
		var $top=$(document).scrollTop();
		if($top<=$height){
			$('.nav_bg').css('position','');
			$('.nav_th').css('display','none')
		}
	})
	$('.chcol a').each(function(index){
		$(this).click(function(){
			$('.chcol a').css({'color':'#000','textDecoration':'none'});
			$(this).css({'color':'#ff2b1b','textDecoration':'underline'});
		})
	})
})