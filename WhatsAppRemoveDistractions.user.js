// ==UserScript==
// @name         WhatsApp Remove Distractions
// @namespace    http://tampermonkey.net/
// @version      10.0
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

    asyncLoop();
})();
