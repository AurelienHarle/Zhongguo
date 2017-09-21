// ==UserScript==
// @name        Laura
// @namespace   Utilitaire
// @description :  Ce programme permet de gerer toute l'automatisation de firefox.
//                  Bypass de lien a click, Bypass lien a click + timer
//                  Click sur lien de telechargement
//                  Connexion au compte connu
//                  
// TODO LIST :
//            1. Commentez le scripts et chaque fonctionnalité
//            2. Voir si amelioration possible
//            3. Voir si généralisation possiblement (cheque d'un element ou par tag)
//
// @version     1
// @grant       none
// Liste des sites gerer par laura V1.0 :
//
// @include     about:newtab
// @include     http://www.mediafire.com/file/*
// @include     https://www.dropbox.com/s/*
// @include     https://mega.nz/#F!F1tkHbrK!WuTISeMtf_dPpVTwaQrW8g
// @include     https://mega.nz/*
// @include     https://github.com/*
// @include     https://drive.google.com/file/d/*
// @include     https://e-hentai.org/gallerytorrents.php?gid=*
// @include     https://www.mediafire.com/folder/*
// @include     http://gamestorrent.co/*/
// @exclude     http://gamestorrent.co
// @exclude     http://gamestorrent.co/page/*
// @include     https://www.youtube.com/*

// ==/UserScript==

console.log("Bonjour maitre c'est laura j'automatise la navgigation pour vous");
console.log("Initialisation des données dynamique definit par le maitre");

/**
 * Lien afficher sur le new tab
 * @type {Array}
 */
const LIEN = [];
LIEN[0] =  "http://www.youtube.com/";
LIEN[1] =  "https://outlook.live.com/owa/?path=/mail/junkemail";
LIEN[2] =  "http://gamestorrent.co/";
LIEN[3] =  "http://www.skidrowcrack.com/";
LIEN[4] =  "https://www.skidrowreloaded.com/";
LIEN[5] =  "http://www.youtube.com/";
LIEN[6] =  "http://www.youtube.com/";
LIEN[7] =  "http://www.youtube.com/";
LIEN[8] =  "http://www.youtube.com/";
LIEN[9] =  "http://www.youtube.com/";
LIEN[10] =  "http://www.youtube.com/";
LIEN[11] =  "http://www.youtube.com/";

/**
 * Calleur
 * Apelle les fonctions utiles.
 */
function calleur(){

    console.log("Maitre je lance les procedure stocker");

    var url = window.location;

    console.log("maitre on est sur cette page : " + url);

    switch(url){
        case url.href.startsWith("about:newtab"):
            setTimeout(newTabRemodelleur,1000);
            break;
        case  url.href.startsWith("http://www.mediafire.com/file/") :
            setTimeout(dowloadMediaFire,3500);
            break;
        case  url.href.startsWith("https://www.dropbox.com/s/"):
            setTimeout(downloadDropBox,2500);
            break;
        case  url.href.startsWith("https://mega.nz/") :
            setTimeout(downloadMega,10000);
            break;
        case  url.href.startsWith("https://github.com/"):
            setTimeout(downloadGitHub,1000);
            break;
        case  url.href.startsWith("https://drive.google.com/file/d/"):
            setTimeout(downloadGoogleDrive,1000);
            break;
        case  url.href.startsWith("https://e-hentai.org/gallerytorrents.php"):
            setTimeout(downloadEHentai,1000);
            break;
        case  url.href.startsWith("https://www.mediafire.com/folder/"):
            setTimeout(downloadMediaFireFolder,1000);
            break;
        case  url.href.startsWith("http://gamestorrent.co/"):
            setTimeout(autoScreenshotIGGTorrent,2000);
            break;
        case url.href.startsWith("https://www.youtube.com/"):
            window.addEventListener('resize', modifieMenuYoutube);
            setTimeout(modifieMenuYoutube, 1500);
        default:
            alert('Erreur switch calleur ligne 63');
            break;
    }


}

function closeTab() {

    console.log("Fermeture de la fenetre");
    window.close();

}

/**
 * Ouvre liste des sites.
 * Remplace tout les liens de la fenetre newTab par des liens predefinit (voir tableau constant)
 *
 * TODO :
 *      Reflechir a faire des themes? categorie?
 */
function newTabRemodelleur(){

    console.log("Creation d'un tableau");
    var a = [];

    console.log("Boucle de creation de lien celon LIEN predefinit haut du script");
    for(var i = 0;i < 12;i++){

        a[i] = document.createElement('a');
        a[i].title = LIEN[i];
        a[i].href = LIEN[i];

    }

    console.log("Récupération des liens présent");
    var liens = document.getElementsByTagName('a');

    console.log("Récupération du parent");
    var parent = liens.parentElement();

    console.log("Boucle de remplacement d'enfant avec lien creer boucle precedente");
    for(var x = 0;i < 12;x++){
        parent.replaceChild(liens[x],a[x])
    }

}

function dowloadMediaFire(){

    console.log("Click pour download mediafire");
    while(document.getElementsByClassName('download_link')[0] === undefined){
        document.getElementsByClassName('download_link')[0].getElementsByTagName('a')[0].click();
    }


}

function downloadDropBox(){

    console.log("Ouverture du menu pour download dropbox");
    document.getElementById('bubbleDropdownTarget-38').click();

    setTimeout(suiteDownloadDropBox,500);

}

function suiteDownloadDropBox(){

    console.log("Click pour download dropbox");
    document.getElementsByClassName('bubble-menu-item')[0].click();

}

function downloadMega() {

    console.log("Click pour download mega");
    document.getElementsByClassName('button link-button right fm-download-as-zip')[0].getElementsByTagName('span')[0].click();

}

function downloadGitHub(){

    console.log("Click pour download github");
    document.getElementsByTagName('strong')[1].click();

}

function downloadGoogleDrive(){

    console.log("Click pour download google drive");
    document.getElementsByClassName('drive-viewer-dark-button drive-viewer-custom-button goog-inline-block drive-viewer-button drive-viewer-custom-button-with-icon')[1].click();
    document.getElementsByClassName('drive-viewer-icon drive-viewer-custom-button-icon drive-viewer-download-icon')[0].click();

}

function downloadEHentai(){

    if(document.getElementsByTagName('a')[1] !== undefined){

         console.log("Click pour download E Hentai");
         document.getElementsByTagName('a')[1].click();

    }

    setTimeout(closeTab,1000);

}

function downloadMediaFireFolder(){

    console.log("Click pour download MediaFire Folder");
    document.getElementById('current_folder_download').click();

}

function autoScreenshotIGGTorrent(){

    console.log("Click pour Screenshot IGG Torrent");
    document.getElementById('ui-id-3').click();


}



function modifieMenuYoutube{

    console.log("Vérification de l'ecran");
    var hauteur = window.innerWidth;

    if (hauteur == 1280) {

        console.log("Ouverture du menu");
        document.getElementById('guide-inner-content').style.visibility = "visible";

    }
 
}


console.log("Lancement des function d'automatidation maitre");
setTimeout(calleur,100);