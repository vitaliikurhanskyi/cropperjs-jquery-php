$( document ).ready(function() {

    /* modal */

    var inputButton = $('input[class=image]');
    var imag = $('#imagemodal');
    var cropper, files, url;

    $('input[class=image]').click(function(){
        $(this).trigger('modal:on');
    }).on('modal:on', function() {
        $('#overlay').fadeIn('400');
    });

    $("#modal_close").click(function(e){
        $('#overlay').fadeOut('400');
        cropper.destroy();
        cropper = null;
        $('#image').attr('src', null);
        $('input[class=image]').trigger('modal:off');
    });

    $('body').on('modal:off', function(){
        console.log('123124');
    });

    var modal_window = $('#modal_window');

    $('#form_wrapper').on('change', '#image', function(event) {
        event.preventDefault();
        var files = event.target.files;
        var done = function(url) {
            image.src = url;
            imag[0].src = image.src;
            cropper = new Cropper(imag[0], {
                aspectRatio: 1,
                viewMode: 3,
                preview: '.preview'
            });
        }

        if (files && files.length > 0) {
            file = files[0];

            if(URL){
                done(URL.createObjectURL(file));
            } else if(FileReader) {
                reader = new FileReader();
            }

        }

    }); /* #form_wrappe */

    $("#crop").click(function() {
        var canvas = cropper.getCroppedCanvas({
            width: 160,
            height: 160,
        });

        canvas.toBlob(function(blob){
            url = URL.createObjectURL(blob);



            var reader = new FileReader();
            reader.readAsDataURL(blob);

            //console.log(reader.result);

            reader.onloadend = function() {
                var base64data = reader.result;
                //console.log(base64data);
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: "upload.php",
                    data: {image: base64data},
                    success: function(data) {
                        console.log('success');
                        console.log(data);
                        //bs_modal.modal('hide');
                        //alert("success upload image");
                    }
                });
            };

            //$('body').prepend("<img style=\"width:100px;height:100px\" src=\""+url+"\">");

        });



        // canvas.toBlob(blob, function(){
        //     console.log
        // });





        // canvas.toBlob(function(blob) {
        //     url = URL.createObjectURL(blob);
        //     var reader = new FileReader();
        //     reader.readAsDataURL(blob);
        //     reader.onloadend = function() {
        //         var base64data = reader.result;

                // $.ajax({
                //     type: "POST",
                //     dataType: "json",
                //     url: "upload.php",
                //     data: {image: base64data},
                //     success: function(data) {
                //         bs_modal.modal('hide');
                //         alert("success upload image");
                //     },
                //     error: function(data) {
                //         console.log('error');
                //         console.log(data);
                //     }
                // });
            //};
    });
    //});


});


