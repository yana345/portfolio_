$(function() { 
  $('.course-item a').click(function() {
          var imgSrc = $(this).children().attr('src');
          $('.bigimg').children().attr('src', imgSrc);
          $('.modal').fadeIn();
          $('body,html').css('overflow-y', 'hidden');
          return false
        });
  
  $('.close-btn').click(function() {
          $('.modal').fadeOut();
          $('body,html').css('overflow-y', 'visible');
          return false
        });
  });

  /*Googleフォーム*/
  let $form = $( '#js-form' )
  $form.submit(function(e) {
    $.ajax({
     url: $form.attr('action'),
     data: $form.serialize(),
     type: "POST",
     dataType: "xml",
     statusCode: {
        0: function() {
          //送信に成功したときの処理
          $form.slideUp()
          $('#js-success').slideDown()
        }, 
        200: function() {
          //送信に失敗したときの処理
          $form.slideUp()
          $('#js-error').slideDown()
        }
      }
    });
    return false;
  });