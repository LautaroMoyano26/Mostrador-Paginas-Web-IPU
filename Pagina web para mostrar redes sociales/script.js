function openWifiModal() {
    document.getElementById('wifiModal').style.display = 'block';
}

function closeWifiModal() {
    document.getElementById('wifiModal').style.display = 'none';
}

function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        // Mostrar feedback
        const btn = event.target.closest('.copy-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
        btn.style.background = '#4CAF50';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
        }, 2000);
    });
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('wifiModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
