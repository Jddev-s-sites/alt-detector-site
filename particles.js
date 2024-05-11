const colors = ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff"]
particlesJS("particles", {
    particles: {
        number: {
            value: 52,
            density: {
                enable: true,
                value_area: 631.3280775270874,
            },
        },
        color: {
            value: colors,
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#FFFFFF",
            },
            polygon: {
                nb_sides: 5,
            },
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: false,
                speed: 10,
                size_min: 0.1,
                sync: true,
            },
        },
        line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 0,
            width: 20,
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "bottom",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: true,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false,
                mode: "bubble",
            },
            onclick: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 0.5,
                },
            },
            bubble: {
                distance: 400,
                size: 4,
                duration: 0.3,
                opacity: 1,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});