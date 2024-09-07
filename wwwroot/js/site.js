// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.onscroll = function () {
    console.log("Window.innerHeight: " + window.innerHeight);
    console.log("Window.srollY: " + window.scrollY);
    console.log("document.body.clientHeight: " + document.body.clientHeight);
    if (window.innerHeight + window.scrollY > document.body.clientHeight) {
        console.log(document.getElementById('arrow'));
        document.getElementById('arrow').setAttribute('style', 'display:none !important');
    } else {
        document.getElementById('arrow').removeAttribute('style', 'display:none !important');
    }
}