async function importComponent(textData) {
	if (!textData) return

	await import('../components/navigation/navigation.js')
		.then((module) => module.navigationComponentFunction(textData?.navigation))
		.catch((err) => alert(`Error while loading Navigation component: ${err}`))

	await import('../components/about/about.js')
		.then((module) => module.aboutComponentFunction(textData?.about))
		.catch((err) => alert(`Error while loading About component: ${err}`))

	await import('../components/skills/skills.js')
		.then((module) => module.skillsComponentFunction(textData?.skills))
		.catch((err) => alert(`Error while loading Skills component: ${err}`))

	await import('../components/experience/experience.js')
		.then((module) => module.experienceComponentFunction(textData?.experience))
		.catch((err) => alert(`Error while loading Experience component: ${err}`))

	await import('../components/certificate/certificate.js')
		.then((module) => module.certificateComponentFunction(textData?.certificate))
		.catch((err) => alert(`Error while loading Certificate component: ${err}`))

	await import('../components/projects/projects.js')
		.then((module) => module.projectsComponentFunction(textData?.projects))
		.catch((err) => alert(`Error while loading Projects component: ${err}`))

	await import('../components/education/education.js')
		.then((module) => module.educationComponentFunction(textData?.education))
		.catch((err) => alert(`Error while loading Education component: ${err}`))
}
