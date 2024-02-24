// Add JavaScript below
window. onload = function() {
    ScrollReveal().reveal('.Image1', {delay: 800});
    ScrollReveal().reveal('.Image2', {delay: 800, origin: 'bottom', rotate: {
        x: 90,
        y: 0,
        z: 0,}});
    ScrollReveal().reveal('.Image3', {delay: 800, opacity: 0, rotate: {
        x: 0,
        y: 90,
        z: 0,}});
    ScrollReveal().reveal('.Image4', {delay: 800, interval: 5, rotate: {
        x: 0,
        y: 0,
        z: 90,}});
    ScrollReveal().reveal('.Image5', {delay: 800, easing: 'cubic-bezier(0.5, 0, 0, 1)'});

}
