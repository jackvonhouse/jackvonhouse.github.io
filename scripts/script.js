function highlightProjects(element) {
	var project = document.getElementsByClassName('project');

	for (var i = 0; i < project.length; i++) {
		if (project[i] === element) {
			project[i].classList.add('active');
		} else {
			project[i].classList.add('inactive');
		}
	}
}

function resetHighlight() {
	var projects = document.getElementsByClassName('project');

	for (var i = 0; i < projects.length; i++) {
		var project = projects[i];

		if (project.classList.contains('inactive')) {
			project.classList.remove('inactive');
		} else if (project.classList.contains('active')) {
			project.classList.remove('active');
		}
	}
}