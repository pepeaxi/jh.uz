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
});