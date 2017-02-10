$(function() {
$('#button').on('click', function(event){
        event.preventDefault();

        var hashtag = $('#hashtag').val();

        $.ajax({
              method: 'GET',
              url: 'https://api.instagram.com/v1/tags/'+ hashtag +'/media/recent?access_token=347099814.78d962b.04dfb03f22d1480e8e90bbc4c4502a65'
        })
        .done(function(instaData) {
           console.log(instaData);
          })
          .fail(function(){
            console.log(arguments);
        });
      });
    });
