

$('#submit').click(function(e) {
    let $textareaData = $('#somedata').val();
    console.log($textareaData)
    e.preventDefault();
    
    $.ajax({
        type: "POST",
        url: "/upload_json",
        data: {data: $textareaData }
      });


});