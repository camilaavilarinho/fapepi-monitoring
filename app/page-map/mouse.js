$(function(){
  /*var city = $(".city");
  $('.city').data(city, "Teste!");*/

  $('.city').mouseover(function (e) {
        //var region_data=$(this).data('region');
        $('<div class="info_panel">'+
            'Testando' + '<br>' +
          	'Population: ' + 'o panel' +
          	'</div>'
         )
        .appendTo('body');
    })
    .mouseleave(function () {
        $('.info_panel').remove();
    })
    .mousemove(function(e) {
        var mouseX = e.pageX, //X coordinates of mouse
            mouseY = e.pageY; //Y coordinates of mouse

        $('.info_panel').css({
            top: mouseY-50,
            left: mouseX - ($('.info_panel').width()/2)
        });
    });
});
