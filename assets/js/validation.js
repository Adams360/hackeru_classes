$(document).ready(function () {

    var nameReg = /^[' a-zא-ת]+(\s[' a-zא-ת]+)*$/i;
    var phoneReg = /^(?:0(?!(5|7))(?:2|3|4|8|9))(?:-?\d){7}$|^(0(?=5|7)(?:-?\d){9})$/;
    var emailReg = /^(?!.*\.\.)[\w.\-#!$%&'*+\/=?^_`{}|~]{1,35}@[\w.\-]+\.[a-zA-Z]{2,15}$/;

    $('input').on('focusin', function () {
        $(this).removeClass('error');
    });

    $("form").submit(function () {
        var formId = '#' + $(this).attr('id');


        $('input').removeClass('error');

        var isValid = true;

        var nf = $(formId + ' ' + "input[name = 'fullname']");
        var pf = $(formId + ' ' + "input[name = 'phone']");
        var ef = $(formId + ' ' + "input[name = 'email']");

        var name = nf.val().trim();
        var phone = pf.val().trim().replace(" ", "");
        var email = ef.val().trim();

        if (name.length < 2 || name.length > 50) {
            isValid = false;
            setTimeout(function () {
                $(nf).val('').addClass('error').attr('placeholder', '* שם לא תקין');
            }, 500);
        }

        if (!nameReg.test(name)) {
            isValid = false;
            setTimeout(function () {
                $(nf).val('').addClass('error').attr('placeholder', '* שם לא תקין');
            }, 500);
        }

        if (!phoneReg.test(phone)) {
            isValid = false;
            setTimeout(function () {
                $(pf).val('').addClass('error').attr('placeholder', '* נא לשים מספר טלפון');
            }, 500);
        }

        if (!emailReg.test(email)) {
            isValid = false;
            setTimeout(function () {
                $(ef).val('').addClass('error').attr('placeholder', '* נא לשים כתובת דוא"ל');
            }, 500);
        }

        if (isValid == true) {
            $(formId + ' .form__btn').val('sending');
            return true;
        } else {
            return false;
        }
    });
});