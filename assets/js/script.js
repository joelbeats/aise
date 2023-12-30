window.onload = function() {

    var canvas = document.getElementById("canvas");

    effectMatrix(canvas);

    function effectMatrix(neo) {

        var screen = window.screen;
        var width = (neo.width = screen.width);
        var height = (neo.height = screen.height);
        var letters = Array(256).join(1).split("");

        var designMatrix = function() {

            neo.getContext("2d").fillStyle = "rgba(0,0,0,.05)";
            neo.getContext("2d").fillRect(0, 0, width, height);

            neo.getContext("2d").fillStyle = "#0F0";

            letters.map(function (position_y, index) {

                var text = String.fromCharCode(48 + Math.random() * 33);
                var position_x = index * 10;
                neo.getContext("2d").fillText(text, position_x, position_y);

                letters[index] = position_y > 758 + Math.random() * 1e4 ? 0 : position_y + 10;
            });        
        }
        setInterval(designMatrix, 60);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function placeLogo(e) {
        // Clear the previous logo
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Adjust for touch event if necessary
        let x = e.clientX || e.touches[0].clientX;
        let y = e.clientY || e.touches[0].clientY;

        // Draw the logo scaled and centered at (x, y)
        ctx.drawImage(logo, x - logoWidth / 2, y - logoHeight / 2, logoWidth, logoHeight);
    }

    canvas.addEventListener('click', placeLogo);
    canvas.addEventListener('touchstart', placeLogo);
    
    
    const ctx = canvas.getContext('2d');
    const logo = new Image();
    logo.src = 'assets/img/logo.png'; 

   
    const logoWidth = 100; // pixels
    const logoHeight = 100; 
    canvas.addEventListener('click', function(e) {
        // Draw the logo scaled and centered at (x, y)
        ctx.drawImage(logo, e.clientX - logoWidth / 2, e.clientY - logoHeight / 2, logoWidth, logoHeight);
    });

});
