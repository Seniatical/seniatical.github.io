document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#TypeWriter", {
        loop: true
    })
    .type(" Pythonista")
    .pause(1000)
    .delete()
    .type(" software developer")
    .pause(1000)
    .move(-10)
    .delete(8)
    .type('backend')
    .pause(1000)
    .go()
});