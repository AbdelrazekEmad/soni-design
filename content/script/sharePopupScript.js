var copyText = document.getElementById("myInput");

//package share popup
if (copyText) {
    function myFunction() {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }
}
//end package share popup