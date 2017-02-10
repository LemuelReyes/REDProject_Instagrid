// 'use strict';

//token 347099814.ea93cc6.090dcae0f75f4781a04135c47713db52
// old client id : ea93cc6f34664c448d18a4ac9fef1722

/*
    curl -F 'client_id=71e21c4bf4294a8498860283067eb682' \
    -F 'client_secret=a20be5cbd24a46d58afd84e44555f646' \
    -F 'grant_type=authorization_code' \
    -F 'redirect_uri=http://www.redacademy.com' \
    -F 'code=7929910bddd74abeb670840e5e7f4f7c' \
    https://api.instagram.com/oauth/access_token */


$(function() {

var instagridPics = '',
$results = $('.grid');

//on click run this
    $('button').on('click', function(){
      event.preventDefault();
      $results.hide();

// takes header and shoves it to the top

    $(".main-hub").css("height", "auto");
// hashtag is in the searchbar html id#

      var hashtag = $('#hashtag').val();

    $.ajax({
            dataType: "jsonp",
            method: 'GET',
            url: "https://api.instagram.com/v1/tags/"+hashtag+"/media/recent?count=12&client_id=78d962b5eff44a3586c05025e1070616"
          })
     .done(function(response) {
            //console.log(response);

    $.each(response.data, function( index, value ) {


      instagridPics+='<li>'; //this li wraps everything under it
      instagridPics+='<div class="list-container">';
      instagridPics+='<a href=" '+ value.link+'"><img src="'+value.images.standard_resolution.url+'" /></a>'; // grid pictures
      instagridPics+='<div class="username-container">'; //container of the profile and social media
      instagridPics+='<span class="profpic-cont"><div class="profile-container">'; //controls the profile pic
      instagridPics+='<a href=" '+ value.link+'"><img src="'+value.caption.from.profile_picture+'" /></a>'; //profile pic thumbnail
      instagridPics+='</div></span>'; //ends profile container
      instagridPics+='<div class="social-media-container">'; //controls comments, like, comment, and icons section
      instagridPics+='<p class="username-text">'+value.caption.from.username+'</p>';
      instagridPics+='<p class="comments-inline"><i class="fa fa-comments">'+value.comments.count+'</i></p>';
      instagridPics+='<p class="likes-inline"><i class="fa fa-heart">'+value.likes.count+'</i></p>';

      instagridPics+='</div>'; //ends social-media container
      instagridPics+='</div>'; //ends username container
      instagridPics+='</div>'; //ends div class list-container
      instagridPics+='</li>'; //this li ends the first li
      });

      $results.empty().append(instagridPics).slideDown();
      instagridPics= '';

          }); //ends done function
      });
});
