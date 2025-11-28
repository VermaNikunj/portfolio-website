export function educationComponentFunction(textData) {
	const componentElement = document.querySelector('#education-component')
	loadEducationList(textData, componentElement)
}

function loadEducationList(textData, componentElement) {
	const titleList = textData.titleList
	const educationListElement = document.createElement('div')
	educationListElement.classList.add('education-row')
	for (let i = 0; i < titleList.length; i++) {
		const title = titleList[i]

		const colDivElement = document.createElement('div')
		colDivElement.classList.add('education-col')

		const colTitleDivElement = document.createElement('div')
		colTitleDivElement.classList.add('education-col-title')
		colTitleDivElement.appendChild(getColTitleHTML(title))

		const colFromDivElement = document.createElement('div')
		colFromDivElement.classList.add('education-col-from')
		colFromDivElement.appendChild(getColFromHTML(title))

		colDivElement.append(colTitleDivElement, colFromDivElement)
		educationListElement.appendChild(colDivElement)
	}

	if (componentElement) {
		componentElement.appendChild(educationListElement)
	}
}

function getColTitleHTML(title) {
	const spanElement = document.createElement('span')
	spanElement.setAttribute('data-i18n', `education.${title}Title`)
	
	const marksSpanElement = document.createElement('span')
	marksSpanElement.classList.add('education-col-marks')
	marksSpanElement.setAttribute('data-i18n', `education.${title}Marks`)

	const frag = document.createDocumentFragment()
	frag.append(spanElement, marksSpanElement)
	return frag
}

function getColFromHTML(title) {
	const i = document.createElement('i')
	i.setAttribute('data-i18n', `education.${title}From`)
	const spanElement = document.createElement('span')
	spanElement.appendChild(i)
	return spanElement
}
