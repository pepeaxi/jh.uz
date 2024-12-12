document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for register button
    const registerBtn = document.querySelector('.register-btn');
    
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            // Add your registration logic here
            console.log('Registration button clicked');
        });
    }

    // Add hover effect to stats
    const statItems = document.querySelectorAll('.stat-item');
    
    statItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Scroll Animation Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    // Elements to animate on scroll
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.observe(element);
    });
});