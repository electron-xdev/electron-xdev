$(document).ready(function () {

    var owl = $("#header-slider");

    owl.owlCarousel({
        singleItem: true,
        navigation: true,
        navigationText: ["<i class='ion-ios-arrow-thin-left'></i>", "<i class='ion-ios-arrow-thin-right'></i>"],
        transitionStyle: "fade",
        pagination: true,
    });

    $("#Client_Logo").owlCarousel({
        autoPlay: 5000,
        items: 6,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    $("#blog-post").owlCarousel({
        autoPlay: 5000,
        items: 3,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });


    $(function () {
        $('#mixed-items').mixItUp();
    });


    new WOW().init();

    // DOM Content Load Event Actions;
    $(window).load(function () {
        $('div#loading').remove();
        $('body').removeClass('loading');
    });


    $('.menu').onePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 1200,
        top: 0
    });

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });


    $('.carousel').carousel();


    /**
     * Google Map
     */
    // if ( $('#googleMap').length ) {
    //     var mapProp = {
    //         center: new google.maps.LatLng(51.508742,-0.120850),
    //         zoom:9,
    // scrollwheel: false,
    // navigationControl: false,
    // mapTypeControl: false,
    // scaleControl: false,
    // draggable: false,
    //         mapTypeId: google.maps.MapTypeId.ROADMAP
    //     };
    //     var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
    // }


    /**
     * Google Map
     */
    if ($('#googleMap').length) {

        var position = new google.maps.LatLng(35.6611480, -0.6333350);
        var mapProp = {
            center: position,
            zoom: 16,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);

        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: 'X-Dev lab'
        });


        var infowindow = new google.maps.InfoWindow({
            content: 'Le Lieu est juste a 300 de l\'arret du tram de l\'université de IGMO.\nClicker pour afficher en detail sur Google Maps'
        });

        marker.addListener('click', function () {
            window.open("https://www.google.dz/maps/dir/35.661477,-0.6322778/35.661148,-0.633335/@35.6606005,-0.6353932,16.77z/data=!4m2!4m1!3e2");
        });

        marker.addListener('mouseover', function () {
            infowindow.open(map, this);
        });

        // assuming you also want to hide the infowindow when user mouses-out
        marker.addListener('mouseout', function () {
            infowindow.close();
        });

    }

    // Animated Scrolling
    (function () {
        var topoffset = 0;
        $('#scroll').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - topoffset
                    }, 1000);
                    return false;
                } // target.length
            } //location hostname
        }); //on click

        $.scrollUp({
            scrollDistance: 2000,
            scrollSpeed: 1200,
        });
    }())


    // Email

    $('#submit').click(function () {
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        console.log(name);
        console.log(email);
        console.log(message);

        emailjs.send("gmail", "template_bhooHTBD", {
            from_name: name,
            from_email: email,
            message_html: message
        }).then(function (response) {
            console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
            $('#email-res').html('<p>Votre message a bien été envoyé</p>')
        }, function (err) {
            console.log("FAILED. error=", err);
            $('#email-res').val("FAILED. error=" + err)
        });

    })

});
