// print button
if (document.getElementById("printButton")) {
    document.getElementById("printButton").addEventListener("click", function () {
      var printContents = document.getElementById("contentToPrint").innerHTML;
      var originalContents = document.body.innerHTML;
  
      document.body.innerHTML = printContents;
  
      window.print();
  
      document.body.innerHTML = originalContents;
    });
  }