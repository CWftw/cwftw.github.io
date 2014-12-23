$(document).ready(function () {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: "/public/images/projects/birdHunt_title.PNG",
            w: 1286,
            h: 749,
            title: "A Duck Hunt-style game built using XNA where the player is tasked with shooting birds (and bees)"
    },
        {
            src: "/public/images/projects/birdHunt_action.PNG",
            w: 1286,
            h: 749,
            title: "The main action screen for Bird Hunt"
    }
];

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
});