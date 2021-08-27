$('p:eq(1)').attr('id', 'jotain');
$('#fp').remove();
$('#fdiv').css(
    {
        backgroundColor: 'grey',
        color: 'white'
    }
);
/*
function sayHello() {
    $('#jotain').after('<p id="tp">Hello user</p>');
}

$('#nappi').click(sayHello);
*/

$('#nappi').click(function () {
    $('#jotain').after('<p>Hello user</p>');
});

$('#4p').hide();

$('#sdiv').hover(
    function () {
        $('#4p').text('About to select a link …').show();
    },
    function () {
        $('#4p').hide();
    }
)