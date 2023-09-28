document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('input[type="radio"][name="envio"]');
    const direccion = document.querySelector('.direccion');
    
    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'direccion') {
                direccion.style.display = 'block';
            } else {
                direccion.style.display = 'none';
            }
        });
    });
});
