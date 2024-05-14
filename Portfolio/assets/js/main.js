/* Alert */

$(document).ready(function(){
    var alert1Clicked = false;
    var alert2Clicked = false;
    var alert3Clicked = false;
    $('#alert1').on('click', function() {
        alert1Clicked = true;
        checkAllAlertsClicked();
        alert('Please ! Click the button 2')
    });
    $('#alert2').on('click', function() {
        alert2Clicked = true;
        checkAllAlertsClicked();
        alert('Please ! Click the button 3')
    });
    $('#alert3').on('click', function() {
        alert3Clicked = true;
        checkAllAlertsClicked();
        alert('Thank you for trying all my bullshit dev :V')
    });
    function checkAllAlertsClicked() {
        if (alert1Clicked && alert2Clicked && alert3Clicked) {
            $('.this-is-popup').fadeIn();
        }
    }
})

/* Upload Image */

$(document).ready(function() {
    $('#upload-button').click(function() {
        $('#file-input').click();
    });
    $('#file-input').change(function(e) {
        var file = e.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#uploaded-image').attr('src', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
    $('.upload-img').on('dragover', function(e) {
            e.preventDefault();
            $(this).addClass('dragover');
    }).on('dragleave drop', function(e) {
            e.preventDefault();
            $(this).removeClass('dragover');
    }).on('drop', function(e) {
        e.preventDefault();
        var file = e.originalEvent.dataTransfer.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#uploaded-image').attr('src', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
});
 
/* Increase/Decrease number */

$(document).ready(function() {
    $('.increase').on('click', function() {
        var currentValue = parseInt($('.number-input').val()) || 0;
        currentValue++;
        $('.number-input').val(currentValue);
    });
    $('.decrease').on('click', function() {
        var currentValue = parseInt($('.number-input').val()) || 0;
        currentValue--;
        $('.number-input').val(currentValue);
    });
});

/* Processing button */

function move(e) {
    $('.front').css('-webkit-clip-path', 'inset(0 0 0 0)')
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width > 100) {
            $('.process-status').text('Love you !');
            $('.message-stage').show();
            clearInterval(id);
        } else {
            $('.process-status').text(width + '/100 Please wait');
            $('.front').css('-webkit-clip-path', 'inset(0 0 0 '+width+'%)')
            $('.message-stage').hide();
            width++;
        }
    }
}
$('.select-service select').on('change', function () {
    $('.tabs-type').hide();
    let id = $(this).val();
    $('#' + id).show();
})
$('#file').on('change', function (event) {
    var files = event.target.files;
    console.log('changed')
    $('.file-infor').show();
    $('.name-file').text(files[0].name);
})
function loadContentCheckbox() {
    $('.tabs-type').hide();
    let id = $('.select-service select').val();
    $('#' + id).show();
}
loadContentCheckbox()