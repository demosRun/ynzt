function scrollShow (showEL, posEL) {
    showEL.style.transition = 'opacity 0.6s'
    window.onscroll = function (e) {
        if (document.documentElement.scrollTop >= posEL.offsetTop) {
            showEL.style.opacity = 1
        } else {
            showEL.style.opacity = 0
        }
    }
    if (document.documentElement.scrollTop >= posEL.offsetTop) {
        showEL.style.opacity = 1
    } else {
        showEL.style.opacity = 0
    }
}