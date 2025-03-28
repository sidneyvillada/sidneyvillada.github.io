document.getElementById("btn-freefire").addEventListener("click", function () {
    window.location.href = "freefire://"; // Intenta abrir Free Fire

    setTimeout(function () {
        // Si no se abre en 3 segundos, redirige a la página oficial
        window.location.href = "https://ff.garena.com/";
    }, 3000);
});
