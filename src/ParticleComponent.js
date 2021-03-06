import React from "react";
import Particles from "react-particles-js";

class ParticleComponent extends React.Component {
    render() {
        return (
            <div style = {
                {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }
            }
            >
            <Particles params = {
                {
                    particles: {
                        number: {
                            value: 15,
                            density: {
                                enable: true,
                                value_area: 1200
                            }
                        },
                        color: {
                            value: "#ffffff"
                        },
                        shape: {
                            type: "image",
                            stroke: {
                                width: 2,
                                color: "#007E88"
                            },
                            polygon: {
                                nb_sides: 4
                            },
                            image: {
                                src: "data:image/png;base64,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",
                                width: 700,
                                height: 700
                            }
                        },
                        opacity: {
                            value: 0.4008530152163807,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                        size: {
                            value: 30,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        line_linked: {
                            enable: true,
                            distance: 0,
                            color: "#ffffff",
                            opacity: 0.3687847739990702,
                            width: 0.6413648243462091
                        },
                        move: {
                            enable: true,
                            speed: 6,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: "window",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            },
                            onclick: {
                                enable: false,
                                mode: "bubble"
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    },
                    retina_detect: true
                }
            }
            />
            </div>
        );
    }
}

export default ParticleComponent;