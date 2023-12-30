document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('textCanvas');
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let scale = 0; // Starting scale for the text
    const maxScale = 10; // Maximum scale
    let opacity = 1; // Starting opacity

    function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Update the scale and opacity
        scale += 0.05;
        if (scale > maxScale) {
            opacity -= 0.05;
        }

        // Set font, color, and shadow
        ctx.font = `${scale * 20}px Arial Black`;
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.shadowColor = 'black';
        ctx.shadowBlur = 10;

        // Draw the text
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('PUSH ME!', width / 2, height / 2);

        if (opacity > 0) {
            requestAnimationFrame(animate);
        }
    }

    animate();
});
