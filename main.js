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
// hashtag is in the searchbar html id#
//search wrapper add css heiht auto
      var hashtag = $('#hashtag').val();

    $.ajax({
            dataType: "jsonp",
            method: 'GET',
            url: "https://api.instagram.com/v1/tags/"+hashtag+"/media/recent?count=12&client_id=71e21c4bf4294a8498860283067eb682"
          })
     .done(function(response) {
            //console.log(pictureData);

    $.each(response.data, function( index, value ) {
      instagridPics+='<li>';
      instagridPics+='<a href=" '+ value.link+'"><img src="'+value.images.standard_resolution.url+'" /></a>';
      instagridPics+='</li>';

      //instagridPics='';

                });
      $results.empty().append(instagridPics).slideDown();
          }); //ends done function
      });
});


/*             .done(function(instaData) {
               console.log(instaData);
              })
              .fail(function(){
                console.log(arguments);
            }); */
