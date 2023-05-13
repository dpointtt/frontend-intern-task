function deleteButtonsEventListener() {
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', () => {
            const imageDiv = button.parentElement;
            imageDiv.remove();
            setImageCount()
            const imageSrc = imageDiv.getElementsByTagName("img")[0].getAttribute("src");
            console.log(imageSrc)
            localStorage.setItem(`deleted-image-${imageSrc}`, 'true');
        });
    });
}

const restoreButton = document.querySelector('.restore-btn button');

function restoreButtonEventListener(){
    restoreButton.addEventListener('click', () => {
        for (let i = localStorage.length-1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (key.startsWith('deleted-image-')) {
                const imageSrc = key.split('-')[2];
                localStorage.removeItem(key);
                let alt = imageSrc.replace(/^\D+/g, '');
                document.getElementsByClassName('wrapper')[0].innerHTML += `<div class="image"><img src="${imageSrc}" alt="${alt}"><button class="delete-btn">X</button></div>`;
                setImageCount();
                imageViewListener();
            }
        }
        deleteButtonsEventListener();
    });
}

deleteButtonsEventListener();
restoreButtonEventListener();
