document.addEventListener('DOMContentLoaded', function() {
  // Create announcement element
  const announcement = document.createElement('div');
  announcement.id = 'announcement';
  announcement.style.position = 'fixed';
  announcement.style.top = '-100px'; // Start off-screen
  announcement.style.left = '50%';
  announcement.style.transform = 'translateX(-50%)';
  announcement.style.backgroundColor = '#90EE90';
  announcement.style.color = 'black';
  announcement.style.padding = '10px';
  announcement.style.borderRadius = '5px';
  announcement.style.zIndex = '1000';
  announcement.style.display = 'flex';
  announcement.style.alignItems = 'center';
  announcement.style.justifyContent = 'space-between';
  announcement.style.transition = 'top 0.5s ease-in-out'; // Transition effect
  announcement.style.userSelect = 'none'; // Prevent text selection
  announcement.style.webkitUserDrag = 'none'; // Prevent dragging in WebKit browsers
  announcement.style.MozUserSelect = 'none'; // Prevent text selection in Firefox

  // Create tick mark
  const tickMark = document.createElement('img');
  tickMark.src = 'https://www.svgrepo.com/show/405510/flag-for-flag-india.svg';
  tickMark.style.height = '20px';
  tickMark.style.width = '20px';
  tickMark.style.marginRight = '10px';
  tickMark.style.userSelect = 'none'; // Prevent text selection
  tickMark.style.webkitUserDrag = 'none'; // Prevent dragging in WebKit browsers
  tickMark.style.MozUserSelect = 'none'; // Prevent text selection in Firefox


  // Create close button
  const closeButton = document.createElement('img');
  closeButton.src = 'https://raw.githubusercontent.com/testkeen/ico/891168f151578312791b7a99ad0295cb9a536a48/close-cross.svg';
  closeButton.style.height = '20px';
  closeButton.style.width = '20px';
  closeButton.style.cursor = 'pointer';
  closeButton.style.marginLeft = '20px'; // Add margin here
  closeButton.style.userSelect = 'none'; // Prevent text selection
  closeButton.style.webkitUserDrag = 'none'; // Prevent dragging in WebKit browsers
  closeButton.style.MozUserSelect = 'none'; // Prevent text selection in Firefox


  closeButton.addEventListener('click', () => {
    announcement.style.top = '-100px'; // Move off-screen on close
    setTimeout(() => {
      announcement.style.display = 'none'; // Hide after transition
    }, 500); // Match the duration of the transition
  });

  // Append elements
  announcement.appendChild(tickMark);
  announcement.appendChild(document.createTextNode('No tests on Aug 15'));
  announcement.appendChild(closeButton);
  document.body.appendChild(announcement);

  // Delay the appearance of the announcement
  setTimeout(() => {
    announcement.style.top = '25px'; // Move into view
  }, 2000); // 2 seconds delay
});
