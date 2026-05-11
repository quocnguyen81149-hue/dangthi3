// Toggle theme
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function updateThemeButton() {
    const isDarkMode = body.getAttribute('data-theme') === 'dark';
    themeToggle.setAttribute('aria-label', isDarkMode ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
    updateThemeButton();
});

updateThemeButton();

// Show projects section on CTA click
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// Animate skills progress bars
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progresses = entry.target.querySelectorAll('.progress');
            progresses.forEach(progress => {
                const width = progress.getAttribute('data-width');
                progress.style.width = width;
            });
        }
    });
}, { threshold: 0.5 });

observer.observe(skillsSection);