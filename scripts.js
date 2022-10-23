document.addEventListener("DOMContentLoaded", onDomLoad);
window.addEventListener("load", onLoad);


console.time("DomLoad")
console.time("Load")


function onDomLoad() {
    console.timeEnd("DomLoad");    
}

function onLoad() {
    console.timeEnd("Load");
}