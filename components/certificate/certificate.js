export function certificateComponentFunction(textData) {
	loadCertificateList(textData)
	loadCertificateShowPreview(textData)
}

function loadCertificateList(textData) {
	const certificateContainer = document.querySelector('.certificate-row')
	const titleList = textData.titleList
	const fileNameList = textData.fileNameList
	let certificateListElement = document.createDocumentFragment()
	for (let i = 0; i < titleList.length; i++) {
		const title = titleList[i]
		const fileName = fileNameList[i]

		const colDivElement = document.createElement('div')
		colDivElement.classList.add('certificate-col')
		if (i === 0) colDivElement.classList.add('active-preview')

		const colTimeDivElement = document.createElement('div')
		colTimeDivElement.classList.add('certificate-col-time')
		colTimeDivElement.appendChild(getColTimeHTML(title, fileName))

		const colTitleDivElement = document.createElement('div')
		colTitleDivElement.classList.add('certificate-col-title')
		colTitleDivElement.appendChild(getColTitleHTML(title))

		const colByDivElement = document.createElement('div')
		colByDivElement.classList.add('certificate-col-by')
		colByDivElement.appendChild(getColByHTML(title))

		colDivElement.append(colTimeDivElement, colTitleDivElement, colByDivElement)
		certificateListElement.appendChild(colDivElement)
	}

	if (certificateContainer) {
		certificateContainer.appendChild(certificateListElement)
	}
}

function getColTimeHTML(title, fileName) {
	const spanElement = document.createElement('span')
	spanElement.setAttribute('data-i18n', `certificate.${title}Date`)

	const iconElement = document.createElement('i')
	iconElement.classList.add('fa-solid', 'fa-arrow-up-right-from-square')
	iconElement.setAttribute('onclick', `showCertificatePreview("${fileName}", event)`)

	const frag = document.createDocumentFragment()
	frag.append(spanElement, iconElement)
	return frag
}

function getColTitleHTML(title) {
	const spanElement = document.createElement('span')
	spanElement.setAttribute('data-i18n', `certificate.${title}Title`)
	return spanElement
}

function getColByHTML(title) {
	const span = document.createElement('span')
	span.setAttribute('data-i18n', `certificate.by`)

	const italic = document.createElement('i')
	italic.setAttribute('data-i18n', `certificate.${title}By`)

	const frag = document.createDocumentFragment()
	frag.append(span, italic)
	return frag
}

function loadCertificateShowPreview(textData) {
	const certificatePreviewElement = document.getElementById('certificate-preview')
	if (certificatePreviewElement) {
		const fileName = textData.fileNameList[0]
		const fullPath = `assets/certificate/${fileName}`
		if (certificatePreviewElement?.children[1] && certificatePreviewElement?.children[1]?.children[1]) {
			certificatePreviewElement?.children[1]?.setAttribute('data', fullPath)
			certificatePreviewElement?.children[1]?.setAttribute('aria-label', `PDF Viewer for ${fileName}`)
			certificatePreviewElement?.children[1]?.children[1]?.setAttribute('href', fullPath)
			certificatePreviewElement?.children[1]?.children[1]?.setAttribute('aria-label', `Download ${fileName} PDF`)
		}
	}
}
