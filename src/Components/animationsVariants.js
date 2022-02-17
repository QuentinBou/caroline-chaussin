export const simplyFade = {
    hidden: {
        opacity: 0,
        transition: { type: "spring", duration: 2.75}
    },
    visible: {
        opacity: 1,
        transition: { type: "spring", duration: 2.75}
    },
    view: {
        once: true,
        margin: "70px"
    }
}

export const fadeFromLeft = {
    hidden: {
        opacity: 0,
        x: -100,
        transition: { type: "spring", duration: 1.25}
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: "spring", duration: 1.25, bounce: .2}
    },
    view: {
        once: true,
        margin: "70px"
    }
}

export const fadeFromRight = {
    hidden: {
        opacity: 0,
        x: 100,
        transition: { type: "spring", duration: 1.25}
    },
    visible: {
        x:0,
        opacity: 1,
        transition: { type: "spring", duration: 1.25, bounce: .2}
    },
    view: {
        once: true,
        margin: "70px"
    }
}

export const scaleIn = {
    hidden: {
        scale: 0,
        transition: { type: "spring", duration: 1.25}
    },
    visible: {
        scale: 1,
        transition: { type: "spring", duration: 1.25, bounce: .2}
    },
    view: {
        once: true,
        margin: "70px"
    }
}

export const fadeFromTop = {
    hidden: {
        y: -100,
        opacity: 0,
        transition: { type: "spring", duration: 1.25, bounce: .25}
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", duration: 1.25, bounce: .25}
    },
    view: {
        once: true,
        margin: "70px"
    }
}

export const fadeFromBottom = {
    hidden: {
        y: 100,
        opacity: 0,
        transition: { type: "spring", duration: 1.25, bounce: .25}
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", duration: 1.25, bounce: .25}
    },
    view: {
        once: true,
        margin: "70px"
    }
}

export const fadeFromTopImg = {
    hidden: {
        y: -100,
        opacity: 0,
        transition: { type: "spring", duration: 1.25, bounce: .25}
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", duration: 1.25, bounce: .25, delay: .75}
    },
    view: {
        once: true,
    }
}

export const fadeFromBottomImg = {
    hidden: {
        y: 100,
        opacity: 0,
        transition: { type: "spring", duration: 1.25, bounce: .25}
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", duration: 1.25, bounce: .25, delay: .75}
    },
    view: {
        once: true,
    }
}