$(function() {
  var $name = $('#name');
  var $age = $('#age');
  var $email = $('#email');

  $.ajax({
    url:'https://guarded-mountain-34245.herokuapp.com/',
    type: 'GET',
    dataType: 'JSON',
    crossDomain: true,
  }).done(successFunction)
    .fail(failFunction);

    function successFunction(data){
      $name.text(data.name);
      $age.text(data.age);
      $email.text(data.email);
    }

    function failFunction(request, textStatus, errorThrown) {
      $name.html('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
      console.log(errorThrown);
    }

});
