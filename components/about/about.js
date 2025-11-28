export function aboutComponentFunction(textData) {
	loadAboutDescription(textData)
}

function loadAboutDescription(textData) {
	const descriptionContainer = document.querySelector('.about-col-2')
	const numberOfDescriptions = textData.numberOfDescriptions
	const descriptionHTML = document.createElement('div')
	for (let i = 1; i <= numberOfDescriptions; i++) {
		const spanElement = document.createElement('span')
		spanElement.setAttribute('data-i18n', `about.description_${i}`)
		descriptionHTML.appendChild(spanElement)
	}
	if (descriptionContainer) {
		descriptionContainer.appendChild(descriptionHTML)
	}
}
