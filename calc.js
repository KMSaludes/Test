/** load the function after the html page is ready */
$(document).ready(function(){

    /**when a number is clicked, do the ff. */
    $('num_button').click(function()   {
        /** get the value on the display */
        var current = $("#da_display").val();
        /** check if zero */
        if(current == '0') {
            current="";
         }
         /** change the display */
        $("#da_display").val( current + $(this) .text());
     });
});