var book = document.getElementById("bookTitle").innerHTML;

var file = 'texts/' + book + ".txt";

window.onload=loadtext()
    $.ajax({
        async:false,
        url: file,
        dataType: 'text',
        success: function(data) 
        {
        $('element').append(data);
            }
        });
