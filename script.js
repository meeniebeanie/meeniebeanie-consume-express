$(function() {
  var $name = $('#name');
  var $age = $('#age');
  var $email = $('#email');
  var $about_me = $('#about_me');

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
      $about_me.text(data.about_me);
    }

    function failFunction(request, textStatus, errorThrown) {
      $name.html('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
      console.log(errorThrown);
    }

});
