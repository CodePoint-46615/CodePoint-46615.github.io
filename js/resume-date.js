// Set last updated date dynamically (optional)
document.getElementById('resume-date').textContent = 'November 10, 2025';

// Optional: simple analytics (logs to console — replace with analytics call)
document.querySelectorAll('a[aria-label*="resume"]').forEach(a => {
    a.addEventListener('click', () => {
        console.log('Resume download clicked:', new Date().toISOString());
        // send fetch to your analytics endpoint here if desired
    });
});
