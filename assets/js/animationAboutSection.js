"use strict"

import { getCssStyle } from "./cssStyles.js";

function printChar(element, word, interval) {
    if (element.innerHTML == word) {
        element.innerHTML = "";
    }

    element.innerHTML += word[element.innerHTML.length];

    if (element.innerHTML !== word) {
        setTimeout(() => {
            // printChar(element, word, interval);
        }, interval);
    }
}

window.onload = function() {
    const aboutLogoCnt = document.querySelector(".about-logo-cnt");
    const aboutTitle = document.querySelector(".about-info-title");
    const aboutInfo = document.querySelector(".about-info");
    
    if (aboutLogoCnt) {
        let cssAboutLogoCtn = getCssStyle('.about .about-wrapp .about-logo-cnt');
        
        let colorNumber = 0;
        const color = ['133, 38, 255', '0, 255, 1', '71, 255, 246', '255, 119, 0', '14, 7, 215', ];
        
        const maxMove = 25;

        function changeCordinatesLogo(event) {
            const x = event.layerX;
            const y = event.layerY;
            
            const middleX = aboutLogoCnt.offsetWidth / 2;
            const middleY = aboutLogoCnt.offsetHeight / 2;
            
            const offsetX = ((x - middleX) / middleX) * maxMove;
            const offsetY = ((y - middleY) / middleY) * maxMove;

            cssAboutLogoCtn.style.setProperty('--moveX', `${offsetX}px`);
            cssAboutLogoCtn.style.setProperty('--moveY', `${offsetY}px`);
        }

        aboutLogoCnt.addEventListener('mousemove', changeCordinatesLogo);

        function changeColorLogo() {
            cssAboutLogoCtn.style.setProperty('--bs-main-color-rgb', color[colorNumber]);
            colorNumber++;
        
            if (colorNumber >= color.length) {
                colorNumber = 0;
            }
        }

        aboutLogoCnt.addEventListener('mousedown', (event) => {
            aboutLogoCnt.addEventListener('mouseup', changeColorLogo);
        });
    }

    // if (aboutTitle) {
    //     let aboutTitleAfterStyle = getCssStyle('.about .about-info-title::after');
    //     aboutTitleAfterStyle.style.content = `"${aboutTitle.innerText}"`;

    //     aboutTitle.innerHTML = "";
    //     printChar(aboutTitle, aboutTitle.innerText, 80);
    // }

    // if (aboutInfo) {
    //     const aboutInfoExcretion = document.querySelector(".about-info-excretion");
    //     const aboutInfoText = document.querySelector(".about-info-text");

    //     if (aboutInfoExcretion) {
    //         let aboutInfoExcretionAfterStyle = getCssStyle('.about .about-info .about-info-excretion::after');
    //         aboutInfoExcretionAfterStyle.style.content = `"${aboutInfoExcretion.innerHTML}"`;
    //         printChar(aboutInfoExcretion, aboutInfoExcretion.innerHTML, 20);
    //     }

    //     if (aboutInfoText) {
    //         let aboutInfoTextAfterStyle = getCssStyle('.about .about-info .about-info-text::after');
    //         aboutInfoTextAfterStyle.style.content = `"${aboutInfoText.innerHTML}"`;
    //         printChar(aboutInfoText, aboutInfoText.innerHTML, 20we);
    //     }
    // }
}