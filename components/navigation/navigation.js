export function navigationComponentFunction(textData) {
	loadNavList(textData)
	loadLanguageOptions(textData)
}

function loadNavList(textData) {
	const navigationTag = document.querySelector('nav')

	const navigationListElement = document.createDocumentFragment()
	navigationListElement.appendChild(getLeftULHTML(textData))
	navigationListElement.appendChild(getRightULHTML(textData))

	if (navigationTag) {
		navigationTag.appendChild(navigationListElement)
	}
}

function getLeftULHTML(textData) {
	const { leftNavList, leftNavIconList } = textData
	const leftULElement = getLIElements(leftNavList, leftNavIconList, true)
	return leftULElement
}

function getRightULHTML(textData) {
	const { rightNavList, rightNavIconList } = textData
	const rightULElement = getLIElements(rightNavList, rightNavIconList, false)
	return rightULElement
}

function getLIElements(navList = [], navIconList, isLeft) {
	const ulElement = document.createElement('ul')
	for (let i = 0; i < navList?.length; i++) {
		const title = navList[i]
		const icon = navIconList[i]

		const liElement = document.createElement('li')
		if (!isLeft) liElement.classList.add('nav-item-right')

		if (title === 'settings') {
			liElement.id = 'settings-btn'
			liElement.setAttribute('onclick', 'openSettingMenu()')
			liElement.appendChild(getIconText(icon, title))
		} else {
			const element = document.createElement('a')
			element.setAttribute('href', `#${title}`)
			element.classList.add('nav-item')
			element.setAttribute('aria-label', `nav ${title}`)
			element.appendChild(getIconText(icon, title))
			liElement.appendChild(element)
		}
		ulElement.appendChild(liElement)
	}
	return ulElement
}

function loadLanguageOptions(textData) {
	const settingMenu = document.getElementById('setting-menu')
	const { languageOptionsKeyList, languageOptionsValueList } = textData
	const languageSelect = settingMenu?.children[1]
	for (let i = 0; i < languageOptionsKeyList.length; i++) {
		const key = languageOptionsKeyList[i]
		const value = languageOptionsValueList[i]
		const option = document.createElement('option')
		option.setAttribute('value', value)
		option.setAttribute('data-i18n', `navigation.${key}`)
		languageSelect.appendChild(option)
	}
}

function getIconText(icon, title) {
	const i = document.createElement('i')
	i.classList.add('fa-solid', icon)

	const spanElement = document.createElement('span')
	spanElement.setAttribute('data-i18n', `navigation.${title}`)

	const frag = document.createDocumentFragment()
	frag.append(i, spanElement)
	return frag
}
