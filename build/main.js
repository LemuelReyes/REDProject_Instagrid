$(function(){var a="",i=$(".grid");$("button").on("click",function(){event.preventDefault(),i.hide(),$(".main-hub").css("height","auto");var n=$("#hashtag").val();$.ajax({dataType:"jsonp",method:"GET",url:"https://api.instagram.com/v1/tags/"+n+"/media/recent?count=12&client_id=71e21c4bf4294a8498860283067eb682"}).done(function(n){$.each(n.data,function(i,n){a+="<li>",a+='<div class="list-container">',a+='<a href=" '+n.link+'"><img src="'+n.images.standard_resolution.url+'" /></a>',a+='<div class="username-container">',a+='<div class="profile-container">',a+='<a href=" '+n.link+'"><img src="'+n.caption.from.profile_picture+'" /></a>',a+="</div>",a+='<div class="social-media-container">',a+="<p>"+n.caption.from.username+"</p>",a+='<p><i class="fa fa-comments">'+n.comments.count+"</i></p>",a+='<p><i class="fa fa-heart">'+n.likes.count+"</i></p>",a+="</div>",a+="</div>",a+="</div>",a+="</li>"}),i.empty().append(a).slideDown(),a=""})})});