

$('#submit').click(function() {
    let $textareaData = $('#textarea').val();
    
    $.ajax({
        type: "POST",
        url: "/upload_json",
        data: $textareaData 
        // success: success,
        // dataType: dataType
      });


});