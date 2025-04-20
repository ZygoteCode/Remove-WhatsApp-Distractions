// ==UserScript==
// @name         WhatsApp Remove Distractions
// @namespace    http://tampermonkey.net/
// @version      7.0
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
            document.querySelector("img[src='https://static.whatsapp.net/rsrc.php/v3/y6/r/wa669aeJeom.png']").parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("div[title='Community']").parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("div[aria-label='Casella di testo per la ricerca']").parentElement.parentElement.parentElement.parentElement.remove();
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

            var element = document.querySelector("div[class='']");

            if (element.innerText == 'Tutte')
            {
                 document.querySelector("div[class='']").parentElement.parentElement.parentElement.remove();
            }
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("div[title='Dettagli profilo']").parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("button[aria-label='Cerca o inizia una nuova chat']").parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("button[aria-label='Lista delle chat']").parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("span[data-icon='chats-filled']").parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("span[data-icon='new-chat-outline']").parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("div[title='Info messaggio']").parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("button[aria-label='Archiviate ']").remove();
        }
        catch (e)
        {

        }

        try
        {
            var elements = document.querySelectorAll("div[role='gridcell']");

            for (var i = 0; i < elements.length; i++)
            {
                elements[i].remove();
            }
        }
        catch (e)
        {

        }

        try
        {
            document.title = "WhatsApp";
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("button[aria-pressed=false]").parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            var theElementsToRemove = document.querySelectorAll("[style='visibility: visible;']");

            for (var j = 0; j < theElementsToRemove.length; j++)
            {
                theElementsToRemove[j].remove();
            }
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("div[style='width: 82px; height: 82px;']").parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("span[title='YOUR_NAME']").parentElement.remove();
        }
        catch (e)
        {

        }

        try
        {
            var theElementsToRemove = document.querySelectorAll("span[data-icon='default-group']");

            for (var j = 0; j < theElementsToRemove.length; j++)
            {
                theElementsToRemove[j].remove();
            }

        }
        catch (e)
        {

        }

        try
        {
            var theElementsToRemove = document.querySelectorAll("span[data-icon='default-user']");

            for (var j = 0; j < theElementsToRemove.length; j++)
            {
                theElementsToRemove[j].remove();
            }

        }
        catch (e)
        {

        }

        try
        {
            document.querySelector("div[role='tooltip']").parentElement.remove();
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

        try
        {
            document.querySelector("div[role='dialog']").parentElement.remove();
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
