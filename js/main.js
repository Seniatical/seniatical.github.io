// Some nice little events to spice up your experience
const digit = () => `${Math.round(Math.random() * 255)}`;
const color = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

document.querySelector('#MainHeader').onclick = function() {
    this.classList.add('animate__animated', 'animate__tada');

    let list = [];
    for (var i = 0; i < 3; i++) {
        list.push(digit());
    }
    var rgb = color(...list);

    document.documentElement.style.setProperty('--main-colour', rgb);
}

document.querySelector('#MainHeader').addEventListener("animationend", function() {
    this.classList.remove('animate__animated', 'animate__tada')
})
