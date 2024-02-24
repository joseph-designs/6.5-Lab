// Add JavaScript below
window. onload = function() {
    ScrollReveal().reveal('.Image1', {delay: 400});
    ScrollReveal().reveal('.Image2', {delay: 400, origin: 'bottom', rotate: {
        x: 90,
        y: 0,
        z: 0,}, 
        viewOffset: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 1000,}} );
    ScrollReveal().reveal('.Image3', {delay: 400, opacity: 0, rotate: {
        x: 0,
        y: 90,
        z: 0,}, 
        viewOffset: {
            top: 0,
            right: 1000,
            bottom: 0,
            left: 0,}} );
    ScrollReveal().reveal('.Image4', {delay: 400, interval: 5, rotate: {
        x: 0,
        y: 0,
        z: 90,}, 
        viewOffset: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 1000,}} );
    ScrollReveal().reveal('.Image5', {delay: 400, easing: 'cubic-bezier(0.5, 0, 0, 1)'});

}
