function bounce() {
    var element = document.getElementById('animation');
    element.classList.remove('swing-tomato');
    element.classList.add('bounce-tomato');

    var text = document.getElementById('text-change');
    text.innerHTML = "...???";
}