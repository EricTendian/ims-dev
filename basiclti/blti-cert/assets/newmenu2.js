 /*********************
//* jQuery Drop Line Menu- By Dynamic Drive: http://web.archive.org/web/20120512055305/http://www.dynamicdrive.com/
//* Last updated: May 9th, 11'
//* Menu avaiable at DD CSS Library: http://web.archive.org/web/20120512055305/http://www.dynamicdrive.com/style/
*********************/
 
  var droplinemenu={

arrowimage: {classname: 'downarrowclass', src: 'http://web.archive.org/web/20120512055305/http://www.imsglobal.org/images/down.gif', leftpadding: 5}, //web.archive.org/web/20120512055305/http://customize down arrow image
animateduration: {over: 200, out: 100}, //web.archive.org/web/20120512055305/http://duration of slide in/ out animation, in milliseconds

buildmenu:function(menuid){
	jQuery(document).ready(function($){
		var $mainmenu=$("#"+menuid+">ul")
		var $headers=$mainmenu.find("ul").parent()
		$headers.each(function(i){
			var $curobj=$(this)
			var $subul=$(this).find('ul:eq(0)')
			this._dimensions={h:$curobj.find('a:eq(0)').outerHeight()}
			this.istopheader=$curobj.parents("ul").length==1? true : false
			if (!this.istopheader)
				$subul.css({left:0, top:this._dimensions.h})
			var $innerheader=$curobj.children('a').eq(0)
			$innerheader=($innerheader.children().eq(0).is('span'))? $innerheader.children().eq(0) : $innerheader //web.archive.org/web/20120512055305/http://if header contains inner SPAN, use that
			$innerheader.append(
				'<img src="'+ droplinemenu.arrowimage.src
				+'" class="' + droplinemenu.arrowimage.classname
				+ '" style="border:0; padding-left: '+droplinemenu.arrowimage.leftpadding+'px" />'
			)
			$curobj.hover(
				function(e){
					var $targetul=$(this).children("ul:eq(0)")
					if ($targetul.queue().length<=1) //web.archive.org/web/20120512055305/http://if 1 or less queued animations
						if (this.istopheader)
							$targetul.css({left: $mainmenu.position().left, top: $mainmenu.position().top+this._dimensions.h})
						if (document.all && !window.XMLHttpRequest) //web.archive.org/web/20120512055305/http://detect IE6 or less, fix issue with overflow
							$mainmenu.find('ul').css({overflow: (this.istopheader)? 'hidden' : 'visible'})
						$targetul.dequeue().slideDown(droplinemenu.animateduration.over)
				},
				function(e){
					var $targetul=$(this).children("ul:eq(0)")
					$targetul.dequeue().slideUp(droplinemenu.animateduration.out)
				}
			) //web.archive.org/web/20120512055305/http://end hover
		}) //web.archive.org/web/20120512055305/http://end $headers.each()
		$mainmenu.find("ul").css({display:'none', visibility:'visible', width:$mainmenu.width()})
	}) //web.archive.org/web/20120512055305/http://end document.ready
}
}
;
/*
     FILE ARCHIVED ON 05:53:05 May 12, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:45:07 Apr 04, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/