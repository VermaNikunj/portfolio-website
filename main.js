document.addEventListener("DOMContentLoaded", initialFunction)

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

function getResumePath () {
    return '/assets/resume/Nikunj_Verma_Resume.pdf'
}

function downloadCVEvent () {
    const link = document.createElement('a')
    link.href = getResumePath()
    link.download = 'Nikunj Verma Resume Software Developer.pdf'
    link.click()
}

function themeToggleEvent() {
    const lightThemeElements = document.getElementsByClassName('light-theme-btn')
    const darkThemeElements = document.getElementsByClassName('dark-theme-btn')
    lightThemeElements[0].classList.toggle('active')
    darkThemeElements[0].classList.toggle('active')
    changeTheme()
}

function initialFunction() {
    loadContentComponents()
    getSavedSettings()
    openSettingMenu(true)
}

function getSavedSettings() {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme')
    } else {
        document.body.classList.remove('light-theme')
    }
    if(localStorage.getItem('language')) {
        const selectedLanguage = localStorage.getItem('language')
        loadLanguage(selectedLanguage)
    } else {
        localStorage.setItem('language', 'en')
        loadLanguage('en')
    }
}

function changeTheme() {
    let selectedTheme = 'light'
    if (document.body.classList.contains('light-theme')) {
        selectedTheme = 'dark'
    }
    localStorage.setItem('theme', selectedTheme)
    document.body.classList.toggle('light-theme')
}

function openSettingMenu(inStart = false) {
    const settingMenu = document.getElementById('setting-menu')
    if(inStart) {
        if(settingMenu) settingMenu.style.display = 'none'
    } else {
        if(settingMenu) settingMenu.style.display = (settingMenu.style.display === 'flex') ? 'none' : 'flex'
        const languageSelect = document.getElementById('language')
        if(languageSelect) languageSelect.value = localStorage.getItem('language') || 'en'
    }
}

function languageChangeEvent() {
    const languageSelect = document.getElementById('language')
    const selectedLanguage = languageSelect.value
    localStorage.setItem('language', selectedLanguage)
    loadLanguage(selectedLanguage)
}

// Lazy loading components and language
// function lazyLoadComponents() {
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if(entry.isIntersecting && entry.target.dataset.component) {
//                 loadComponent(entry.target, entry.target.dataset.component)
//                 loadLanguage(localStorage.getItem('language') || 'en')
//                 observer.unobserve(entry.target)
//             }
//         })
//     })

//     document.querySelectorAll('[data-component]').forEach(element => {
//         observer.observe(element)
//     })
// }


function loadContentComponents() {

    document.querySelectorAll('[data-component]').forEach(element => {
        loadComponent(element, element.dataset.component)
    })
}

function loadComponent(parent, component) {
    fetch(`components/${component}`)
        .then (res => {
            return res.text() 
        })
        .then(html => {
            parent.innerHTML = html
    })
}

function loadLanguage(lang) {
    fetch(`language/${lang}.json`)
        .then(res => res.json())
        .then(data => {
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element?.getAttribute('data-i18n')?.split('.') || []
                if(key.length > 1) {
                    const elementText = data[key[0]][key[1]]
                    element.innerHTML = elementText
                }
            })
    })
}