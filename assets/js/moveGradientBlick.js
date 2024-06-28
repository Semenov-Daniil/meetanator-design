let cntGradientBottom = [...document.getElementsByClassName('cnt-gradient-b'), ...document.getElementsByClassName('cnt-gradient-t')];
console.log('test')
cntGradientBottom.forEach(cnt => {
    cnt.addEventListener('mousemove',  (event) => {
        const blick = cnt.getElementsByClassName('grd-cnt-blick')[0];

        if (blick) {
            const rect = cnt.getBoundingClientRect();
            const cursoreX = event.clientX - rect.left;
            const cursoreY = event.clientY - rect.top;
            
            const cntWidth = cnt.offsetWidth;
            const cntHeight = cnt.offsetHeight;
    
            const centerX = cntWidth/2;
            const centerY = cntHeight/2;
    
            if (cnt.classList.contains('cnt-gradient-b')) {
                let angle = (Math.atan2(cursoreY, cursoreX-centerX) * 180 / Math.PI) - 90;
                blick.style.setProperty('--gradient-angle', angle + 'deg');
            } else {
                let angle = (Math.atan2(cursoreY-cntHeight, cursoreX-centerX) * 180 / Math.PI) - 90;
                blick.style.setProperty('--gradient-angle', angle + 'deg');
            }
        }
        
    });
});