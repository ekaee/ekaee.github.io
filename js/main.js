function bounce() {
    var element = document.getElementById('animation');
    element.classList.remove('tomato-swing');
    element.classList.add('tomato-bounce');

    var text = document.getElementById('text-change');
    text.innerHTML = "??????";
}