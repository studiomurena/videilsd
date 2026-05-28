document.addEventListener("DOMContentLoaded", () => {
    const startScreen = document.getElementById('start-screen');
    const startBtn = document.getElementById('start-btn');
    const logo = document.getElementById('crazy-logo');
    const videos = document.querySelectorAll('video');

    // Sblocca i video al click (Risolve il problema del "non si vede nulla")
    startBtn.addEventListener('click', () => {
        videos.forEach(v => {
            v.play().catch(e => console.error("Errore autoplay:", e));
        });
        startScreen.style.display = 'none';
        viaggioLogo(); // Fai partire il logo solo dopo lo start
    });

    // --- LOGICA LOGO ---
    function viaggioLogo() {
        // Coordinate grezze
        const x = Math.random() * 80 + 10; 
        const y = Math.random() * 80 + 10; 
        
        // Deformazioni
        const scale = Math.random() * 2 + 0.5; 
        const skewX = Math.random() * 40 - 20;

        // Effetti visivi brutalisti (niente sfocature CSS che appesantiscono)
        const invert = Math.random() > 0.8 ? 'invert(1)' : 'invert(0)';
        const hue = `hue-rotate(${Math.floor(Math.random() * 360)}deg)`;
        
        // Sparizione improvvisa (flicker)
        const isVisible = Math.random() > 0.15; // L'85% del tempo è visibile

        if (!isVisible) {
            logo.style.opacity = '0';
        } else {
            logo.style.opacity = '1';
            logo.style.left = `${x}vw`;
            logo.style.top = `${y}vh`;
            logo.style.transform = `translate(-50%, -50%) scale(${scale}) skewX(${skewX}deg)`;
            logo.style.filter = `${invert} ${hue} contrast(200%)`;
        }

        // Ritmo nevrotico
        setTimeout(viaggioLogo, Math.random() * 400 + 100);
    }

    // --- ALTERAZIONE VELOCITÀ VIDEO ---
    setInterval(() => {
        const randomVideo = videos[Math.floor(Math.random() * videos.length)];
        // Va da rallentato (0.5) a super veloce (2.5)
        randomVideo.playbackRate = Math.random() * 2 + 0.5; 
    }, 2000);
});
