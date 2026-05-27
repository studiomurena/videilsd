document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById('crazy-logo');
    const videos = document.querySelectorAll('video');

    // --- LOGICA LOGO LSD ---
    function viaggioLogo() {
        // Posizione casuale nello schermo
        const x = Math.random() * 80 + 10; // 10% - 90% vw
        const y = Math.random() * 80 + 10; // 10% - 90% vh

        // Trasformazioni estreme
        const scale = Math.random() * 2.5 + 0.2; // Da minuscolo a enorme
        const rotate = Math.random() * 720 - 360;
        const skewX = Math.random() * 60 - 30;
        const skewY = Math.random() * 60 - 30;

        // Effettistica colore e glitch
        const hue = Math.random() * 360;
        const invert = Math.random() > 0.85 ? 1 : 0; // 15% di probabilità di invertirsi
        const blur = Math.random() > 0.9 ? Math.random() * 15 : 0; // Sfocature improvvise
        const opacity = Math.random() > 0.2 ? (Math.random() * 0.7 + 0.3) : 0; // Spesso visibile, a volte scompare di colpo

        // Esplosione (sovrascrive le altre trasformazioni momentaneamente)
        const isExploding = Math.random() > 0.95; // 5% di probabilità di esplodere
        
        if (isExploding) {
            logo.style.transform = `translate(-50%, -50%) scale(8) rotate(${rotate * 2}deg)`;
            logo.style.filter = `blur(20px) brightness(5) invert(1)`;
            logo.style.opacity = '0';
        } else {
            // Applica il viaggio normale
            logo.style.left = `${x}vw`;
            logo.style.top = `${y}vh`;
            logo.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${rotate}deg) skew(${skewX}deg, ${skewY}deg)`;
            logo.style.filter = `hue-rotate(${hue}deg) invert(${invert}) blur(${blur}px) drop-shadow(5px 5px 0px #ff00ff) drop-shadow(-5px -5px 0px #00ffff)`;
            logo.style.opacity = opacity;
        }

        // Richiama se stessa con un timer irregolare per dare un ritmo imprevedibile
        const nextTick = isExploding ? 800 : Math.random() * 600 + 50;
        setTimeout(viaggioLogo, nextTick);
    }

    // Fai partire il viaggio del logo
    viaggioLogo();

    // --- LOGICA ALTERAZIONE VIDEO ---
    // Ogni tot secondi, prende un video a caso e ne altera la velocità di riproduzione
    setInterval(() => {
        const randomVideo = videos[Math.floor(Math.random() * videos.length)];
        // Velocità random tra 0.2 (lentissimo) e 3.0 (frenetico)
        randomVideo.playbackRate = Math.random() * 2.8 + 0.2; 
        
        // Raramente manda il video in pausa per un istante (micro-stuttering)
        if(Math.random() > 0.8) {
            randomVideo.pause();
            setTimeout(() => randomVideo.play(), Math.random() * 200 + 50);
        }
    }, 1500);
});
