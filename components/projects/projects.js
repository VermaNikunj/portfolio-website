export function projectsComponentFunction(textData) {
	const componentElement = document.querySelector('#projects-component')
	loadProjectsList(textData, componentElement)
}

function loadProjectsList(textData, componentElement) {
	const titleList = textData.titleList
	const linkList = textData.linkList
	const ariaLabelList = textData.ariaLabelList
	const projectsListElement = document.createElement('div')
	projectsListElement.classList.add('projects-row')
	for (let i = 0; i < titleList.length; i++) {
		const title = titleList[i]
		const link = linkList[i] || textData.defaultLink || ''
		const ariaLabel = ariaLabelList[i] || textData.defaultAriaLabel || 'Project link'

		const colDivElement = document.createElement('div')
		colDivElement.classList.add('projects-col')

		const colContentDivElement = getProjectsContentHTML(title)
		const colLayerDivElement = getProjectsLayerHTML(title, link, ariaLabel)

		colDivElement.append(colContentDivElement, colLayerDivElement)
		projectsListElement.appendChild(colDivElement)
	}

	if (componentElement) {
		componentElement.appendChild(projectsListElement)
	}
}

function getProjectsContentHTML(title) {
	const colContentDivElement = document.createElement('div')
	colContentDivElement.classList.add('projects-content')

	const colTitleDivElement = document.createElement('div')
	colTitleDivElement.classList.add('projects-content-title')
	colTitleDivElement.setAttribute('data-i18n', `projects.${title}Title`)

	const colDescDivElement = document.createElement('div')
	colDescDivElement.classList.add('projects-content-desc')
	colDescDivElement.appendChild(getColDescHTML(title))

	const colTechDivElement = document.createElement('div')
	colTechDivElement.classList.add('projects-content-tech')
	colTechDivElement.setAttribute('data-i18n', `projects.${title}Tech`)

	colContentDivElement.append(colTitleDivElement, colDescDivElement, colTechDivElement)
	return colContentDivElement
}

function getProjectsLayerHTML(title, link, ariaLabel) {
	const colLayerDivElement = document.createElement('div')
	colLayerDivElement.classList.add('projects-layer')

	const colLayerTitleElement = document.createElement('h2')
	colLayerTitleElement.setAttribute('data-i18n', `projects.${title}Title`)

	const colLayerLinkElement = document.createElement('a')
	colLayerLinkElement.setAttribute('href', link)
	colLayerLinkElement.setAttribute('target', '_blank')
	colLayerLinkElement.setAttribute('aria-label', ariaLabel)
	const iElement = document.createElement('i')
	iElement.classList.add('fas', 'fa-external-link-alt')
	colLayerLinkElement.appendChild(iElement)

	colLayerDivElement.appendChild(colLayerTitleElement)
	colLayerDivElement.appendChild(colLayerLinkElement)

	return colLayerDivElement
}

function getColDescHTML(title) {
	const descElement = document.createElement('div')
	descElement.classList.add('projects-content-time')
	descElement.setAttribute('data-i18n', `projects.${title}Date`)

	const span = document.createElement('span')
	span.setAttribute('data-i18n', `projects.${title}Desc`)

	const frag = document.createDocumentFragment()
	frag.append(span, descElement)
	return frag
}
