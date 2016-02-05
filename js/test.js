$(function() {
$('#button').on('click', function(event){
        event.preventDefault();

        var hashtag = $('#hashtag').val();

        $.ajax({
              method: 'GET',
              url: 'https://api.instagram.com/v1/tags/'+ hashtag +'/media/recent?access_token=347099814.ea93cc6.090dcae0f75f4781a04135c47713db52'
        })
        .done(function(instaData) {
           console.log(instaData);
          })
          .fail(function(){
            console.log(arguments);
        });
      });
    });
