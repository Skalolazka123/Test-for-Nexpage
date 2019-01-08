/*
 ***popUp active and inactive
 */
$(".contact-us__button").on("click", function() {
    $(".popup, .popup-content").addClass("active");
    $(".contact-us").removeClass("active");
    if(document.documentElement.clientWidth < 321 ) {
        $(".follow").removeClass("active");
    }

});

$(".close, .popup").on("click", function() {
    $(".popup, .popup-content").removeClass("active");
    $(".contact-us").addClass("active");
    if(document.documentElement.clientWidth < 321 ) {
        $(".follow").addClass("active");
    }
});


/*
 ***blur and error changes for form
 */
$('form :input').focus(function() {

    $(this).removeClass("blur");
    $(this).removeClass("error");

}).blur(function() {

    $(this).addClass("blur");

    // validation block
    var regEx,
        elem = $(this).val(),
        elemId = $(this).attr("id");

    //select regEx depending of input type
    regEx = selectRegEx(elemId, regEx);

    //validation
    if (!regEx.test(elem, regEx)) {
        
        $(this).addClass("error");
        $(this).removeClass("success");
        
        //submit button is disable
        $(".contact-form__button").addClass("disabled");
    } else {
        
        $(this).addClass("success");
        
        if ($("#name").hasClass("success") && $("#email").hasClass("success") && $("#message").hasClass("success")) {
            
            //submit button is active
            $(".contact-form__button").removeClass("disabled");
        }
    }

});


//function select regEx depending of input type
function selectRegEx(id, regExpression) {
    
    if (id == 'name') {
        regExpression = /^[\w0-9_ !/\\+=@#$%ˆ&*(){}|~<>;:]{1,20}$/;
    } 
    else if (id == 'email') {
        regExpression = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    } 
    else if (id == 'message') {
        regExpression = /^[\w0-9_ !/\\+=@#$%ˆ&*(){}|~<>;:]{1,1000}$/;
    }
    
    return regExpression;
}