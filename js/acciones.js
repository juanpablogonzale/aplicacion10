//JavaScript
$(document).ready(function (e){
	$('#principal').height($('#page1').height());
	document.addEventListener("deviceready",function(){
		
		audio=window .plugins .LowLatencyAudio;
		
		audio.preloadFX('do','audio/DO.pm3',function(){},function(e){alert('Error'+e);});
		audio.preloadFX('re','audio/RE.pm3',function(){},function(e){alert('Error'+e);});
		audio.preloadFX('mi','audio/MI.pm3',function(){},function(e){alert('Error'+e);});
		audio.preloadFX('fa','audio/FA.pm3',function(){},function(e){alert('Error'+e);});
		audio.preloadFX('sol','audio/SOL.pm3',function(){},function(e){alert('Error'+e);});
		audio.preloadFX('la','audio/LA.pm3',function(){},function(e){alert('Error'+e);});
		audio.preloadFX('si','audio/SI.pm3',function(){},function(e){alert('Error'+e);});
   
   $('.nota').bind('touchstart',function(){
	   $(this).addClass('tocada');
	   audio.play($(this).attr('id'));
	   
   }).bind('touchend',function(){
	   $(this).removeClass('tocada');
   });
	},false);
});