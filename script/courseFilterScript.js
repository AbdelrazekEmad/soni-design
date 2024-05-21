//filter menu and send data
$(document).ready(function () {
    $('#open-menu-btn').click(function () {
        $('#menu').toggleClass('open');
    });

    $('.close-button').click(function () {
        $('#menu').removeClass('open');
    });

    $('#submit-btn').click(function () {
        // Code to handle the form submission and send the data to the server here
    });
});
// end filter menu and send data

if (document.getElementById('filter0-30')) {
    const timeRanges = {
        '0-30': [0, 30],
        '30-1h': [30, 60],
        '1h-1:30h': [60, 90],
        '2h-5h': [120, 300]
    };
    const time = document.querySelectorAll('input[type="checkbox"]');
    time.forEach(checkbox => {
        checkbox.addEventListener('change', updateFilteredTimeValues);
    });
    function updateFilteredTimeValues() {
        time.forEach(checkbox => {
            if (checkbox.checked) {
                const rangeKey = checkbox.id.replace('filter', '');
                const range = timeRanges[rangeKey];
                const startTime = range[0];
                const endTime = range[1];
                console.log(`Filtered time range: ${startTime} - ${endTime}`);
            }
        });
    }
}