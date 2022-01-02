console.log("script launcher");
let detailsTitle = document.querySelector(".details-title");
let detailsImage = document.querySelector(".details-image");
let anchors = document.querySelectorAll(".thumbnails-anchor");
for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function(event){
        event.preventDefault();
        setDetails(anchors[i]);
    })
}
function setDetails(anchor){
    detailsImage.setAttribute("src",anchor.getAttribute("href"));
    let title = anchor.querySelector(".thumbnails-title");    
    detailsTitle.textContent = title.textContent + " : " + anchor.getAttribute("data-details-title");
}