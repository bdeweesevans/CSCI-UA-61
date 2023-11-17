$(function() {
    $('.nav').hide().delay(500).fadeIn(1000);

    $('.links').click(function(e) {
        e.preventDefault();

        let index = $('.links').index(this);
        let newContent = '';

        if (index === 0) {
            newContent = '<p>I really like planes! I think they are super cool. I hope to get an internship working with them. <br>Here is a Wikipedia article on one that interests me. It is the same one that is in the background! <a href="https://en.wikipedia.org/wiki/EL/M-2075_Phalcon">Wikipedia</a></p>';
        } else if (index === 1) {
            newContent = '<iframe width="560" height="315" src="https://www.youtube.com/embed/EhhOin2p5Qs?si=voV6ZamNbBhcWn93" frameborder="0" allowfullscreen></iframe>';
        } else if (index === 2) {
            newContent = '<p>Its a little-bird helicopter!</p><img width="560" height="360" src="littlebird.jpg" alt="Space Image">';
        } else if (index === 4) {
            window.open('https://www.flightradar24.com/40.75,-74.04/11', '_blank');
            return;
        }

        if (index === 3) {
            newContent = '<p>It isn’t a plane, but it flies and it sure is scary looking!</p>' +
                         '<div class="tenor-gif-embed" data-postid="18429868" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/shoebill-bird-rain-beautiful-gif-18429868"></a></div>' +
                         '<script type="text/javascript" async src="https://tenor.com/embed.js"></script>';

            $('.mainContent').fadeOut(300, function() {
                $(this).html(newContent).fadeIn(500);

                // Adjusting Gif size
                setTimeout(function() {
                    $('.tenor-gif-embed').css({
                        'width': '560px',
                        'height': 'auto'
                    });
                }, 500); 
            });
        }

        $('.mainContent').fadeOut(300, function() {
            $(this).html(newContent).fadeIn(500);
        });
    });
});
