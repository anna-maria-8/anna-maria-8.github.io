document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
                .scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelectorAll('.skills-list li').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.style.transform = 'scale(1.1)';
        skill.style.transition = 'transform 0.3s ease';
    });
    skill.addEventListener('mouseleave', () => {
        skill.style.transform = 'scale(1)';
    });
});

document.querySelectorAll('.project h3').forEach(title => {
    title.style.cursor = 'pointer'; 
    title.addEventListener('click', () => {
        const fullDesc = title.nextElementSibling.nextElementSibling; 
        if (fullDesc.style.display === 'none') {
            fullDesc.style.display = 'block';
        } else {
            fullDesc.style.display = 'none';
        }
    });
});
