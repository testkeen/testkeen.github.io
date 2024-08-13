window.onload = function() {
    setTimeout(function() {
        let banner = document.getElementById('announcement-banner');
        banner.style.display = 'flex'; // Use flex display for alignment
        setTimeout(function() {
            banner.classList.add('show');
        }, 100); // Small delay to trigger transition
    }, 2000);

    // Close the banner when the close icon is clicked
    document.getElementById('close-banner').onclick = function() {
        let banner = document.getElementById('announcement-banner');
        banner.classList.remove('show');
        setTimeout(function() {
            banner.style.display = 'none';
        }, 500); // Match this delay with the CSS transition duration
    };
};
