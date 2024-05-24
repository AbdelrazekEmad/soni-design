var copyText = document.getElementById("myInput");

//package share popup
if (copyText) {
  function copyLink() {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
}
//end package share popup
