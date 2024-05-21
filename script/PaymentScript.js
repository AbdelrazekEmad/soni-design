// payment popup
if (document.getElementById('paymentForm')) {
    function openModal() {
      $('#payment').modal('show');
    }
    document.querySelector('#paymentForm').addEventListener('submit', function (event) {
      event.preventDefault();
      openModal();
    });
}
window.onload = function () {
    $('#fawry').modal('show');
    $('#QR').modal('show');
  };
  $(document).ready(function () {
    // Function to handle radio button change event
    $('input[type=radio][name=options]').change(function () {
      if (this.value === 'fawaterak') {
        $('#fawaterakInputDiv').show();
        $('#numberInputDiv').hide();
      } else if (this.value === 'paypal') {
        $('#fawaterakInputDiv').hide();
        $('#numberInputDiv').hide();
      }
      else if (this.value === 'fawry') {
        $('#fawaterakInputDiv').hide();
        $('#numberInputDiv').hide();
      }
    });

    // Function to handle radio button change event for fawaterakOptions
    $('input[type=radio][name=fawaterakOptions]').change(function () {
      if (this.id === 'option3') {
        $('#numberInputDiv').show();
      } else if (this.id === 'mastercard' || this.id === 'visa') {
        $('#numberInputDiv').hide();
      }
    });
  });