document.addEventListener('DOMContentLoaded', function() {
    const btnSi = document.getElementById('btnSi');
    const btnNo = document.getElementById('btnNo');
    const mensajeDiv = document.getElementById('mensaje');
    
    const messages = {
        positive: "Si gustas siempre estare en lo que wue necesites , recuerda que eres una chica increíble, y si no existe nada perfecto, eres lo más cercano a esa palabra ❤️",
        negative: "Entiendo que NO recuerda que vales muchísimo, y mereces muchísimo,yo desde la sombrita siempre te apoyare con todo el corazón 😊"
    };
    
    btnSi.addEventListener('click', function() {
        showMessage(messages.positive);
        animateButton(this);
    });
    
    btnNo.addEventListener('click', function() {
        showMessage(messages.negative);
        animateButton(this);
    });
    
    function showMessage(text) {
        mensajeDiv.textContent = text;
        mensajeDiv.style.display = 'block';
        
        // Smooth scroll to message
        mensajeDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    function animateButton(button) {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300);
    }
    
    // Keyboard accessibility
    [btnSi, btnNo].forEach(btn => {
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});

