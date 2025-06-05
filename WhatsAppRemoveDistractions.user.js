// ==UserScript==
// @name         WhatsApp Remove Distractions
// @namespace    http://tampermonkey.net/
// @version      9.0
// @description  Remove all the WhatsApp distractions to get concentrated on what's really important
// @author       ZygoteCode
// @match        https://www.whatsapp.com/*
// @match        https://whatsapp.com/*
// @match        https://web.whatsapp.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=whatsapp.com
// @updateURL    https://github.com/ZygoteCode/Remove-WhatsApp-Distractions/raw/main/WhatsAppRemoveDistractions.user.js
// @downloadURL  https://github.com/ZygoteCode/Remove-WhatsApp-Distractions/raw/main/WhatsAppRemoveDistractions.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Funzione per applicare il CSS personalizzato
    const addCustomStyle = () => {
        const style = document.createElement('style');
        style.innerHTML = `
            /* Background e testo generale */
            body, .landing-header, .landing-wrapper, .landing-window {
                background-color: #000000 !important; /* Sfondo nero per tutta la schermata */
                color: #ffffff !important; /* Testo bianco */
            }
        `;
        document.head.appendChild(style);
    };

    // Ricarica il CSS quando si aggiorna la pagina
    const observer = new MutationObserver(() => {
        addCustomStyle();
    });

    // Inizia a osservare cambiamenti nella struttura della pagina
    observer.observe(document.body, { childList: true, subtree: true });

    // Applica lo stile all'inizio
    addCustomStyle();
})();

(function()
{
    function asyncLoop()
    {
        try
        {
            document.querySelector("img[src='https://static.whatsapp.net/rsrc.php/v4/y6/r/wa669aeJeom.png']").parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("span[data-icon='new-chat-outline']").parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("header").remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("div[title='Chat']").parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("div[role='tablist']").remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("span[data-icon='lock-small-v2']").parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("path[d='M5.00847986,1.6 C6.38255462,1.6 7.50937014,2.67435859 7.5940156,4.02703389 L7.59911976,4.1906399 L7.599,5.462 L7.75719976,5.46214385 C8.34167974,5.46214385 8.81591972,5.94158383 8.81591972,6.53126381 L8.81591972,9.8834238 C8.81591972,10.4731038 8.34167974,10.9525438 7.75719976,10.9525438 L2.25767996,10.9525438 C1.67527998,10.9525438 1.2,10.4731038 1.2,9.8834238 L1.2,6.53126381 C1.2,5.94158383 1.67423998,5.46214385 2.25767996,5.46214385 L2.416,5.462 L2.41679995,4.1906399 C2.41679995,2.81636129 3.49135449,1.68973395 4.84478101,1.60510326 L5.00847986,1.6 Z M5.00847986,2.84799995 C4.31163824,2.84799995 3.73624912,3.38200845 3.6709675,4.06160439 L3.6647999,4.1906399 L3.663,5.462 L6.35,5.462 L6.35111981,4.1906399 C6.35111981,3.53817142 5.88169076,2.99180999 5.26310845,2.87228506 L5.13749818,2.85416626 L5.00847986,2.84799995 Z']").parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            var elements = document.querySelectorAll("div[style='height: 49px; width: 49px;']");

            for (var i = 0; i < elements.length; i++)
            {
                elements[i].parentElement.parentElement.remove();
            }
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("div[style='height: 100%; transform: translateX(0%);']").parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        setTimeout(async function()
        {
            await asyncLoop();
        },
        500);
    }

    window.addEventListener('load', function () {
      setTimeout(function () {
          asyncLoop();
      }, 2000);
    });
})();
