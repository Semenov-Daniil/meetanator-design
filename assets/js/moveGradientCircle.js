let cntGradientBottom = [...document.getElementsByClassName('cnt-gradient-b')];

cntGradientBottom.forEach(cnt => {
    cnt.addEventListener('mousemove',  (event) => {
        const rect = cnt.getBoundingClientRect();
        const cursoreX = event.clientX - rect.left;
        const cursoreY = event.clientY - rect.top;
        const cntWidth = cnt.offsetWidth;
        const cntHeight = cnt.offsetHeight;

        const centerX = cntWidth/2;
        const centerY = 0;

        let angle = (Math.atan2(cursoreY-centerY, cursoreX-centerX) * 180 / Math.PI) - 90;

        cnt.style.setProperty('--gradient-angle', angle + 'deg');
    });
});

function createGrdCircle(cnt) {
    if (!cnt.getElementsByClassName('gradient-circle')[0]) {
        let grdCircl = document.createElement('div');
        grdCircl.className = 'gradient-circle';
        cnt.append(grdCircl);
    }
}

function moveGrdCircle(event, cnt) {
    let grdCircl = cnt.getElementsByClassName('gradient-circle')[0];
    const html = document.getElementsByTagName('html')[0];
    const fontSize = (window.getComputedStyle(html).fontSize).match(/[\d\.]+/g)[0];
    const sndCirclWidth = 20*fontSize;

    if (!grdCircl) {
        let grdCircl = document.createElement('div');
        grdCircl.className = 'gradient-circle';
        cnt.append(grdCircl);
    }

    if (grdCircl) {
        const rect = cnt.getBoundingClientRect();
        const cursoreX = event.clientX - rect.left;
        const cursoreY = event.clientY - rect.top;
        const cntWidth = cnt.offsetWidth;
        const cntHeight = cnt.offsetHeight;
        const percentY = ((cursoreY * 100 / cntHeight) / 100);
        const percentX = ((cursoreX * 100 / cntWidth) / 100);
        
        if (percentX < 0.2 || percentX > 0.8 || percentY > 0.7) {
            grdCircl.style.opacity = 1;
        }

        if (percentY > 0.7) {
            grdCircl.style.left =  `${cursoreX}px`;
            grdCircl.style.top =  `${cursoreY - 1000 * (1 - percentY)}px`;
        } else {
            grdCircl.style.top = `${cursoreY}px`
        }

        if (percentX < 0.2) {
            grdCircl.style.left =  `${cursoreX - 1000 * percentX}px`;
        }

        if (percentX > 0.8) {
            grdCircl.style.left =  `${cursoreX + 1000 * (1 - percentX)}px`;
        }
    }

}

function removeGrdCircle(cnt) {
    let grdCircl = cnt.getElementsByClassName('gradient-circle')[0];
    if (grdCircl) {
        grdCircl.style.opacity = 0;
    }

    cnt.removeEventListener('mousemove',  (event) => {
        moveGrdCircle(event, cnt);
    });
}