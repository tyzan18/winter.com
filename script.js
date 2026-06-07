document.addEventListener('DOMContentLoaded', function() {
    const btnSi = document.getElementById('btnSi');
    const btnNo = document.getElementById('btnNo');
    const mensajeDiv = document.getElementById('mensaje');
    
    const messages = {
        positive: "Si gustas siempre estare en lo que que necesites , recuerda que eres una chica increíble, y si no existe nada perfecto, eres lo más cercano a esa palabra ❤️",
        negative: "debes entender que aunque tengamos un mal pasado, no hay que dejarnos atar por el, si no que construir algo único y bonito, tqm"
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

