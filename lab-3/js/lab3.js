// Selecgt all tab links and all tab panels
const tabs = document.querySelectorAll('[role="tab"] a');
const panels = document.querySelectorAll('[role="tabpanel"]');

// Function to deactivate all tabs and panels
function resetTabs() {
    document.querySelectorAll('[role="tab"]').forEach(tab => {
        tab.classList.remove('active');
    });

    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// Add click listeners to each tab link
tabs.forEach(tab => {
    tab.addEventListener('click', event => {
        event.preventDefault(); // Stop the page from jumping

        resetTabs(); // clear all active states

        // Activate the clicked tab. just the list item
        event.target.parentElement.classList.add('active');

        const panelId = event.target.getAttribute('href');
        const panel = document.querySelector(panelId);
        panel.classList.add('active')
    });
});

// set the first tab active on page load
tabs[0].parentElement.classList.add('active');
panels[0].classList.add('active');