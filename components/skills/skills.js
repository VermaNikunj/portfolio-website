export function skillsComponentFunction(textData) {
	const componentElement = document.querySelector('#skills-component')
	loadSkillsList(textData, componentElement)
}

function loadSkillsList(textData, componentElement) {
	const skillsList = textData.skillsList
	const skillsListElement = document.createElement('div')
	skillsListElement.classList.add('skills-row')
	for (let key in skillsList) {
		const title = key
		const list = skillsList[key]

		const colDivElement = document.createElement('div')
		colDivElement.classList.add('skills-col')

		const colTitleDivElement = getColTitleHTML(title)
		const colContentDivElement = getColContentHTML(list)
		colDivElement.append(colTitleDivElement, colContentDivElement)

		skillsListElement.appendChild(colDivElement)
	}

	if (componentElement) {
		componentElement.appendChild(skillsListElement)
	}
}

function getColTitleHTML(title) {
	const parentElement = document.createElement('div')
	parentElement.classList.add('skills-col-title')

	const element = document.createElement('span')
	element.setAttribute('data-i18n', `skills.${title}`)
	parentElement.appendChild(element)
	return parentElement
}

function getColContentHTML(list) {
	const parentElement = document.createElement('div')
	parentElement.classList.add('skills-col-content')
	for (let i = 0; i < list.length; i++) {
		const element = document.createElement('span')
		element.innerText = list[i]
		parentElement.appendChild(element)
	}
	return parentElement
}
