// up and down icon
if (document.getElementById('expandBtn')) {
    $(document).ready(function () {
        $('#expandBtn').click(function () {
            $(this).find('.expand-icon, .collapse-icon').toggle();
        });

        // Hide collapse icon on page load (assuming content is collapsed by default)
        $('.collapse-icon').hide();
    });
}

// tabs and checkboxes
if (document.querySelector('.nav-link.active')) {
    var myTabs = new bootstrap.Tab(document.querySelector('.nav-link.active'));
    myTabs.show();

    var checkboxes = document.querySelectorAll('.progress-checkbox');
    var bar = new ProgressBar.Circle('#progress', {
        color: '#ef0055',
        strokeWidth: 10,
        trailWidth: 10,
        trailColor: '#f3f3f3',
        easing: 'easeInOut',
        duration: 2000,
        text: {
            value: '0%',
            style: {
                color: '#ef0055',
                position: 'absolute',
                left: '50%',
                top: '50%',
                padding: 0,
                margin: 0,
                transform: 'translate(-50%, -50%)'
            }
        }
    });

    var checkboxes = document.querySelectorAll('.progress-checkbox');
    var completionMessage = document.getElementById('completion-message');
    var completionPercent = document.getElementById('completion-percent');
    var congratsButton = document.getElementById('congrats-button');
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            var checkedCheckboxes = document.querySelectorAll('.progress-checkbox:checked').length;
            var progressValue = checkedCheckboxes / checkboxes.length;
            bar.animate(progressValue);
            bar.setText((progressValue * 100).toFixed(0) + '%');
            completionPercent.textContent = (progressValue * 100).toFixed(0) + '%';
            completionMessage.style.display = 'block';
            if (progressValue === 1) {
                congratsButton.style.display = 'block';
                completionMessage.style.display = 'none';

            } else {
                congratsButton.style.display = 'none';
            }
        });
    });
}

// course lessons to open beside
if (document.getElementById("contentDisplay")) {
    document.addEventListener("DOMContentLoaded", function () {
        const linkLists = document.querySelectorAll(".linkList");
        const backButton = document.getElementById("backButton");
        const forwardButton = document.getElementById("forwardButton");
        const contentDisplay = document.getElementById("contentDisplay");

        let currentIndex = -1;
        let links = [];

        linkLists.forEach((linkList, index) => {
            linkList.addEventListener("click", function (event) {
                event.preventDefault();
                updateSelection(event.currentTarget);
                currentIndex = index;
                navigateToLink(event.currentTarget); 
            });

            links.push(linkList.getAttribute("href"));
        });

        backButton.addEventListener("click", function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateSelection(linkLists[currentIndex]);
                navigateToLink(linkLists[currentIndex]);
            }
        });

        forwardButton.addEventListener("click", function () {
            if (currentIndex < links.length - 1) {
                currentIndex++;
                updateSelection(linkLists[currentIndex]);
                navigateToLink(linkLists[currentIndex]);
            }
        });

        function updateSelection(selectedLink) {
            const previousSelected = document.querySelector(".linkList.selected");
            if (previousSelected) {
                previousSelected.classList.remove("selected");
                const liveDot = previousSelected.querySelector(".live-dot");
                if (liveDot) {
                    liveDot.remove();
                }
            }
            selectedLink.classList.add("selected");
        }

        function navigateToLink(selectedLink) {
            const link = selectedLink.getAttribute("href");
            if (link.includes("youtube.com")) {
                contentDisplay.innerHTML = `<iframe width="100%" height="400" src="${link.replace('/watch?v=', '/embed/')}" frameborder="0" allowfullscreen></iframe>`;
            } else if (link.includes("vimeo.com")) {
                const videoId = link.split("/").pop();
                contentDisplay.innerHTML = `<iframe src="https://player.vimeo.com/video/${videoId}" width="100%" height="400" frameborder="0" allowfullscreen></iframe>`;
            }

            // Add live dot to the selected lesson
            const liveDot = document.createElement('div');
            liveDot.classList.add('live-dot');
            selectedLink.appendChild(liveDot);
        }
    });
}


