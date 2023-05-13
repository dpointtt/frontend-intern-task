function getDateTime() {
    let date = new Date();
    let min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let month = date.getMonth()+1 < 10 ? "0" + (date.getMonth()+1) : date.getMonth()+1;
    return day + "." + month + "." + date.getFullYear() + " " + hour + ":" + min;
}

function getImageCount(){
    return document.getElementsByClassName("image").length.toString();
}

document.getElementById("date-text").innerHTML = getDateTime();
document.getElementById("image-count").innerHTML = getImageCount();