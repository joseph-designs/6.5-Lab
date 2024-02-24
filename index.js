// Add JavaScript below
window. onload = function() {
    ScrollReveal().reveal('.Image1', {delay: 400});
    ScrollReveal().reveal('.Image2', {delay: 400, origin: 'bottom', rotate: {
        x: 90,
        y: 0,
        z: 0,}, 
        scale: 5,} );
    ScrollReveal().reveal('.Image3', {delay: 400, opacity: 0, rotate: {
        x: 0,
        y: 90,
        z: 0,}, 
        scale: 1,} );
    ScrollReveal().reveal('.Image4', {delay: 400, interval: 5, rotate: {
        x: 0,
        y: 0,
        z: 90,}
        ,reset: true,
        useDelay: 'always',} )
    ScrollReveal().reveal('.Image5', {delay: 400, easing: 'cubic-bezier(0.5, 0, 0, 1)'});

}
