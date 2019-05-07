

$('#submit').click(function() {
    let $textarea = $('#textarea').val();
    let string = JSON.stringify($textarea);
    console.log(string);
});