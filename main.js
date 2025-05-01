window.onscroll = function () { 
    scrollFunction() 
};

function getProfileElements(ev) {
    const getParentElement = ev.target?.parentElement?.parentElement
    const getProfileElement = getParentElement?.getElementsByClassName('timeline-profile-detail')
    const getDownArrowElement = getParentElement?.getElementsByClassName('timeline-down')
    const getUpArrowElement = getParentElement?.getElementsByClassName('timeline-up')
    return { getProfileElement, getDownArrowElement, getUpArrowElement }
}

function showProfileDetail(event) {
    const { getProfileElement, getDownArrowElement, getUpArrowElement } = getProfileElements(event)
    getProfileElement[0].classList.add('showProfile')
    getDownArrowElement[0].classList.remove('showArrow')
    getUpArrowElement[0].classList.add('showArrow')
}
function hideProfileDetail(event) {
    const { getProfileElement, getDownArrowElement, getUpArrowElement } = getProfileElements(event)
    getProfileElement[0].classList.remove('showProfile')
    getDownArrowElement[0].classList.add('showArrow')
    getUpArrowElement[0].classList.remove('showArrow')
}

function showCertificatePreview(path, event) {
    const certificateColClass = event.target?.parentElement?.parentElement
    if (![...certificateColClass.classList].includes('active-preview')) {
        const fullPath = `/assets/certificate/${path}`
        const getCertiPreviewId = document.getElementById('certificate-preview')
        getCertiPreviewId.children[0].classList.add('active')
        getCertiPreviewId.children[1].setAttribute('data', fullPath)
        const certificateRowClass = certificateColClass?.parentElement?.children
        for (const colClass of certificateRowClass) {
            colClass.classList.remove('active-preview')
        }
        certificateColClass.classList.add('active-preview')
        setTimeout(() => getCertiPreviewId.children[0].classList.remove('active'), 200)
    }
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

function scrollFunction() {
    const mybutton = document.getElementById("goToTopBtn")
    mybutton.style.display = window.scrollY > 500 ? "block" : "none"
}

function downloadCVEvent () {
    const link = document.createElement('a')
    link.href= 'https://drive.google.com/uc?export=download&id=19goSwo0eSap-_SIQWMgE1i2weAquMMzw'
    link.target='_blank'
    link.click()
}

