$(function() {
  var $name = $('#name');
  var $age = $('#age');
  var $email = $('#email');

  $.ajax({
    url:'https://guarded-mountain-34245.herokuapp.com/',
    type: 'GET',
    dataType: 'JSON',
    beforeSend: function(xhr) {
      $loader.show();
    },
  }).done(successFunction)
    .fail(failFunction);

    function successFunction(data){
      $loader.hide();
      $(data.name).appendTo($name);
      $(data.age).appendTo($age);
      $(data.email).appendTo($email);
    }

    function failFunction(request, textStatus, errorThrown) {
      $name.html('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
    }

});
