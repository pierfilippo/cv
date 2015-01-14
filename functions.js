function dessinerTout() {
        var can = document.getElementById('myCanvas');
        var ctx = can.getContext('2d');
        
        ctx.translate(50,50); // just to get it away from the edge

        //var greenPart = ctx.createLinearGradient(0,0,0,100);
        var greenPart = ctx.createRadialGradient(75,50,5,90,60,100);
        //greenPart.addColorStop(0, 'palegreen');
        greenPart.addColorStop(0, 'yellow');
        greenPart.addColorStop(1, 'red');
        
        var whitePart = ctx.createLinearGradient(0,0,0,100);
        whitePart.addColorStop(0, 'white');
        whitePart.addColorStop(1, 'lightgray');
        
        var width = 20;
        ctx.lineWidth = width;
        
        // First we make a clipping region for the left half
        ctx.save();
        ctx.beginPath();
        ctx.rect(-width, -width, 50+width, 100 + width*2);
        ctx.clip();
        
        /* Shadow left */
        ctx.shadowBlur=20;
        ctx.shadowColor="black";
        
        // Then we draw the left half
        ctx.strokeStyle = greenPart;
        ctx.beginPath();
        ctx.arc(50,50,50,0,Math.PI*2, false);
        ctx.stroke();
        
        ctx.restore(); // restore clipping region to default
        
        // Then we make a clipping region for the right half
        ctx.save();
        ctx.beginPath();
        ctx.rect(50, -width, 50+width, 100 + width*2);
        ctx.clip();
        //ctx.fill();
        
        /* Shadow right */
        //ctx.shadowBlur=20;
        //ctx.shadowColor="red";
        ctx.ombre = function(spread,color) {
            this.shadowBlur=spread;
            this.shadowColor=color;
        }

        ctx.ombre(20,"red");
        
        // Then we draw the right half
        ctx.strokeStyle = whitePart;
        ctx.beginPath();
        ctx.arc(50,50,50,0,Math.PI*2, false);
        ctx.stroke();
        
        ctx.restore(); // restore clipping region to default
}