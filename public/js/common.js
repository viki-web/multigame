var socket = io();
var x_chance;
socket.on('chat message', function (data) {
    
    var color = (data.val == 'o' ? "yellow" : "blue");
    x_chance = (data.user_chance == 'x'? true : false)
    
    $('#' + data.id).addClass('disable ' +color).text(data.val)
});

// JavaScript Document
$(document).ready(function () {
    var x = "x"
    var o = "o"
    var count = 0;
    var o_win = 0;
    var x_win = 0;

    var one = $('#one');
    var two = $('#two');
    var three = $('#three');
    var four = $('#four');
    var five = $('#five');
    var six = $('#six');
    var seven = $('#seven');
    var eight = $('#eight');
    var nine = $('#nine');

    $('.game li').click(function () {
        if (!$(this).text()) {


            if (x_chance) {
                socket.emit('chat message', {
                    id: $(this).attr('id'),
                    val: x,
                    user_chance: o,
                });

            } else {

                socket.emit('chat message', {
                    id: $(this).attr('id'),
                    val: o,
                    user_chance: x,
                });

            }


        } else {
            alert('already selected');
        }
    })
});