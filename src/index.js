console.log("script launcher");
let audio = document.querySelector("audio");
let mainContentEl = document.querySelector(".main-content");
let selectedItem;
let detailsTitle = document.querySelector(".details-title");
let detailsImage = document.querySelector(".details-image");
let anchors = document.querySelectorAll(".thumbnails-anchor");
for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function(event){
        event.preventDefault();
        setDetails(anchors[i]);
        showDetails();
    })
}
function setDetails(anchor){
    console.log("anchor elements was pressed",anchor);
    let hrefVolue = anchor.getAttribute("href");
    detailsImage.setAttribute("src",hrefVolue);
    anchor.parentElement.classList.add("selected");
    if (selectedItem && selectedItem != anchor.parentElement){
        selectedItem.classList.remove("selected");
    }
    selectedItem = anchor.parentElement;
    let thumbnailsTitleSelector = `[href="${hrefVolue}"] .thumbnails-title`;
    let thumbnailsTitleEl = document.querySelector(thumbnailsTitleSelector);
    detailsTitle.textContent = `${thumbnailsTitleEl.textContent}: ${anchor.getAttribute("data-details-title")}`;
}
function showDetails(){
    mainContentEl.classList.remove("hidden");
    audio.removeAttribute("muted");
    setTimeout(function () {audio.addAttribute("muted");},3);
    detailsImage.parentElement.classList.add("is-tiny");
    setTimeout(function () {detailsImage.parentElement.classList.remove("is-tiny");});
}
function hideDetails(){
    mainContentEl.classList.add("hidden");
    if (selectedItem){
        selectedItem.classList.remove("selected");
    }
}