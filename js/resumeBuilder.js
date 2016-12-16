var bio = {
	"name" : "Peter Mayor",
	"role" : "Engineer",
	"welcomeMessage" : "A-hoy hoy!",
	"biopic" : "images/biopic.jpg",
	"contacts" : {
		"mobile" : "555-5555",
		"email" : "petem14@gmail.com",
		"github" : "tamburkey",
		"location" : "Mishawaka, IN"
		},
	"skills" : [
		"Music",
		"Drumming",
		"HTML",
		"CSS",
		"JS",
		"Python"
		],
	display : function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").append(formattedName);
	
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").append(formattedRole);
	
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcome);
	
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedPic)
	
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile)
		$("#footerContacts").append(formattedMobile);
	
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email)
		$("#footerContacts").append(formattedEmail);

		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github)
		$("#footerContacts").append(formattedGithub);

		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location)
		$("#footerContacts").append(formattedLocation);

		$("#header").append(HTMLskillsStart);
		if (bio.skills.length > 0) {
			for (i = 0; i < bio.skills.length; i++) {
				var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkills)
			}
		}
	}
}

bio.display();

var work = {
	"jobs" : [
		{
			"employer" : "Universal Bearings",
			"title" : "Quality Engineer / Assistant Manager of Quality Control",
			"location" : "Bremen, IN",
			"dates" : "2011 - 2015",
			"description" : [
				"Primary contact for multiple customers and projects regarding APQP, PPAP, and customer concerns.",
				"Evaluated returned non-conforming products, determined root-causes, and implemented corrective actions.",
				"Created and maintained control documents.",
				"Determined final inspection requirements.",
				"Trained machine operators on proper gage usage.",
				"Created work instructions.",
				"Managed two quality engineers’ training and workload."
				]
		}, 
		{
			"employer" : "Nyloncraft",
			"title" : "Quality Engineer",
			"location" : "Mishawaka, IN",
			"dates" : "2015 - 2016",
			"description" : [
				"Created vibration welding inspection standard for Toyota tonneau cover.",
				"Streamlined quality inspection data acquisition process.",
				"Primary contact for Toyota regarding APQP, PPAP, and customer concerns."
				]
		}
	],
	display : function(){
		for (i = 0; i < work.jobs.length; i++) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			$(".work-entry:last").append(formattedDates);
			
			if (work.jobs[i].description.length > 0) {
				$(".work-entry:last").append(HTMLworkDescriptionStart)
				for (j = 0; j < work.jobs[i].description.length; j++) {
					var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description[j]);
					$(".description-entry:last").append(formattedDescription);
				}
			}
		}
	}
}

work.display();

var projects = {
	"projects" : [
		{
			"title" : "Injection Molding",
			"dates" : "2015 - 2016",
			"description" : "Quality engineer for a tier 1 automotive injection molding facility.",
			"images" : [
				"images/injection_molder.png", 
				"images/pellets.jpg"
				]
		},
		{
			"title" : "Roller Bearings",
			"dates" : "2011 - 2015",
			"description" : "Assistant manager of quality control for a tier 1 automotive bearing manufacturing facility.",
			"images" : [
				"images/bearings.png", 
				"images/plan_gear.jpg"
				]
		}
	],
	display : function() {
		for (i = 0; i < projects.projects.length; i++) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[i].images.length > 0) {
				for (j = 0; j < projects.projects[i].images.length; j++) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j])
					$(".project-entry:last").append(formattedImage)
				}
			}
		}
	}
}

projects.display();

var education = {
	"schools" : [
		{
			"name" : "Georgia Tech",
			"location" : "Atlanta, GA",
			"degree" : "B.S.",
			"dates" : "2011",
			"url" : "gatech.edu",
			"majors" : [
				"Mechanical Engineering"
				]
		}
	],
	"onlineCourses" : [
		{
		"title" : "Intro to Programming Nanodegree",
		"school" : "Udacity",
		"dates" : "2016",
		"url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000",
		},
		{
		"title" : "Javascript",
		"school" : "Codecademy",
		"dates" : "2016",
		"url" : "https://www.codecademy.com/learn/learn-javascript",
		},
		{
		"title" : "Python",
		"school" : "Codecademy",
		"dates" : "2015",
		"url" : "https://www.codecademy.com/learn/python",
		}
	],
	display : function() {
		for (i = 0; i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedNameAndDegree = formattedName + formattedDegree;
			$(".education-entry:last").append(formattedNameAndDegree);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location)
			$(".education-entry:last").append(formattedLocation);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			$(".education-entry:last").append(formattedDates);
			if (education.schools[i].majors.length > 0) {
				for (j = 0; j < education.schools[i].majors.length; j++) {
					var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j])
					$(".education-entry:last").append(formattedMajor)
				}
			}
		}
		$("#education").append(HTMLonlineClasses);
		for (i = 0; i < education.onlineCourses.length; i++) {
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			var formattedTitleAndSchool = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedTitleAndSchool);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
			$(".education-entry:last").append(formattedURL);
		}
	}
}

education.display()

function inName() {
	var finalName = bio.name;
    var nameArray = finalName.split(' ');
    var firstName = nameArray[0];
    var lastName = nameArray[1];
    lastName = lastName.toUpperCase();
    var firstLetter = finalName.slice(0,1);
    firstLetter = firstLetter.toUpperCase();
    var endString = firstName.slice(1);
    endString = endString.toLowerCase();
    firstName = firstLetter + endString;
    finalName = firstName + ' ' + lastName;
    return finalName;
};

$("#main").append(internationalizeButton); 
$("#mapDiv").append(googleMap);


