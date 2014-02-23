$(document).ready(function () {
    $("#pass_check").hide();

    $("#signup").click(function () {
        var password01 = $("#password01").val();
        var password02 = $("#password02").val();

        if (password01 == password02)
        { return true; }
        else { $("#pass_check").show(); return false; }
    });

    $('#email_confirm_check').click(function () {

        var email = $('#check_email').val();

        $.getJSON("/user/verify_email?email=" + email, function (data) {
            if (data) {
                $('#email_confirm_result').html("<span class='glyphicon glyphicon-thumbs-up'></span>");
            }
            else {
                $('#email_confirm_result').html("<span class='glyphicon glyphicon-thumbs-down'></span>");
            }
        });

        return false;
    });

    $('#submit_question').click(function () {
        var text = $("#text_question").val();
        if (text == "")
            return false;

        return true;
    });

});

function sort(keyword) {
    $.getJSON("/question/sort/?keyword=" + keyword, function (data) {
        $("#searched_results").html("");
        $.each(data, function (i, item) {
            if (data != null) {
                $("#searched_results").append("<blockquote><a href='/question/show/" + item.Id + "'><p>" + item.text + "</p></a></blockquote><hr />");
            }
            else {
                alert("Data Not Found");
            }
            
        });
    });

    return false;
}