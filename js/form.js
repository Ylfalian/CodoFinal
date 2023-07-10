document.getElementById('info').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    // Validar el formulario al enviarlo
    if (validateForm()) {
      this.submit(); // Envía el formulario si es válido
    }
  });
  
  function validateForm() {
    var email = document.getElementById('email').value;
    var motivoSelect = document.getElementById('motivo');
    var consultaSelect = document.getElementById('consulta');
    var detalle = document.getElementById('detalle').value;
  
    document.getElementById('emailHelp').textContent = '';
    document.getElementById('motivoHelp').textContent = '';
    document.getElementById('consultaHelp').textContent = '';
    document.getElementById('detalleHelp').textContent = '';
  
    if (email === '') {
      document.getElementById('emailHelp').textContent = 'Por favor, ingresa tu correo electrónico.';
      return false;
    }
  
    if (motivoSelect.value === '') {
      document.getElementById('motivoHelp').textContent = 'Selecciona un motivo de contacto.';
      return false;
    }
  
    if (consultaSelect.value.length === 0) {
      // Verifica si no se ha seleccionado ninguna opción
      document.getElementById('consultaHelp').textContent = 'Selecciona al menos una opción de consulta.';
      return false;
    }
  
    if (detalle === '') {
      document.getElementById('detalleHelp').textContent = 'Por favor, ingresa los detalles de tu consulta.';
      return false;
    }
  
    return true
  }