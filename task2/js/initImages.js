function getDeletedImages(){
    let deleted = [];
    for (let i = localStorage.length-1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key.startsWith('deleted-image-')) {
            const imageSrc = key.split('-')[2];
            deleted.push(imageSrc)
        }
    }
    return deleted;
}

function init(){
    let deleted = getDeletedImages();
    console.log(deleted)
    document.querySelectorAll('.image').forEach(imageDiv => {
        if (deleted.includes(imageDiv.getElementsByTagName("img")[0].getAttribute("src"))){
            console.log(imageDiv)
            imageDiv.remove();
            setImageCount();
        }
    })
    imageViewListener();
    deleteButtonsEventListener();
}

init();