
$(function () {
    $('#button1').click(function () {
        var existingIframe = $('#ASimpleGame');
        if (!$('#ASimpleGame').length) {
            $('#iframeHolder').html('<iframe id="ASimpleGame" frameborder="0" src="https://itch.io/embed-upload/7363400?color=000000" allow="autoplay" allowfullscreen="" width="960" height="660"><a href="https://shmamsey03.itch.io/a-simple-game">Play A Simple Game on itch.io</a></iframe>');
        } else {
            existingIframe.remove();
        }
    });
});
