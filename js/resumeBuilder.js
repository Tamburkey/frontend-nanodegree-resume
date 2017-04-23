var model = {
    "name": "Peter Mayor",
    "role": "Engineer",
    "welcomeMessage": "Ahoy-hoy!",
    "biopic": "images/biopic.jpg",
    "contacts": {
        "mobile": "555-5555",
        "email": "petem14@gmail.com",
        "github": "tamburkey",
        "location": "Mishawaka, IN"
    },
    "skills": [
        "Music",
        "Drumming",
        "HTML",
        "CSS",
        "JS",
        "Python"
    ],
    "jobs": [{
        "employer": "Universal Bearings",
        "title": "Quality Engineer / Assistant Manager of Quality Control",
        "location": "Bremen, IN",
        "dates": "2011 - 2015",
        "description": [
            "Primary contact for multiple customers and projects regarding APQP, PPAP, and customer concerns.",
            "Evaluated returned non-conforming products, determined root-causes, and implemented corrective actions.",
            "Created and maintained control documents.",
            "Determined final inspection requirements.",
            "Trained machine operators on proper gage usage.",
            "Created work instructions.",
            "Managed two quality engineers’ training and workload."
        ]
    }, {
        "employer": "Nyloncraft",
        "title": "Quality Engineer",
        "location": "Mishawaka, IN",
        "dates": "2015 - 2016",
        "description": [
            "Created vibration welding inspection standard for Toyota tonneau cover.",
            "Streamlined quality inspection data acquisition process.",
            "Primary contact for Toyota regarding APQP, PPAP, and customer concerns."
        ]
    }],
    "projects": [{
        "title": "Injection Molding",
        "dates": "2015 - 2016",
        "description": "Quality engineer for a tier 1 automotive injection molding facility.",
        "images": [
            "images/injection_molder.png",
            "images/pellets.jpg"
        ]
    }, {
        "title": "Roller Bearings",
        "dates": "2011 - 2015",
        "description": "Assistant manager of quality control for a tier 1 automotive bearing manufacturing facility.",
        "images": [
            "images/bearings.png",
            "images/plan_gear.jpg"
        ]
    }],
    "schools": [{
        "name": "Georgia Tech",
        "location": "Atlanta, GA",
        "degree": "B.S.",
        "dates": "2011",
        "url": "gatech.edu",
        "majors": [
            "Mechanical Engineering"
        ]
    }],
    "onlineCourses": [{
        "title": "Intro to Programming Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }, {
        "title": "Javascript",
        "school": "Codecademy",
        "dates": "2016",
        "url": "https://www.codecademy.com/learn/learn-javascript"
    }, {
        "title": "Python",
        "school": "Codecademy",
        "dates": "2015",
        "url": "https://www.codecademy.com/learn/python"
    }]
}

var view = {
    displaybio: function() {
        var formattedName = HTMLheaderName.replace("%data%", model.name);
        $("#header").append(formattedName);

        var formattedRole = HTMLheaderRole.replace("%data%", model.role);
        $("#header").append(formattedRole);

        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", model.welcomeMessage);
        $("#header").append(formattedWelcome);

        var formattedPic = HTMLbioPic.replace("%data%", model.biopic);
        $("#header").append(formattedPic);

        var formattedMobile = HTMLmobile.replace("%data%", model.contacts.mobile);
        $("#footerContacts").append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", model.contacts.email);
        $("#footerContacts").append(formattedEmail);

        var formattedGithub = HTMLgithub.replace("%data%", model.contacts.github);
        $("#footerContacts").append(formattedGithub);

        var formattedLocation = HTMLlocation.replace("%data%", model.contacts.location);
        $("#footerContacts").append(formattedLocation);

        $("#header").append(HTMLskillsStart);
        if (model.skills.length > 0) {
            for (i = 0; i < model.skills.length; i++) {
                var formattedSkills = HTMLskills.replace("%data%", model.skills[i]);
                $("#skills").append(formattedSkills);
            }
        }
    },
    displaywork: function() {
        for (i = 0; i < model.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", model.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", model.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedLocation = HTMLworkLocation.replace("%data%", model.jobs[i].location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDates = HTMLworkDates.replace("%data%", model.jobs[i].dates);
            $(".work-entry:last").append(formattedDates);

            if (model.jobs[i].description.length > 0) {
                $(".work-entry:last").append(HTMLworkDescriptionStart);
                for (j = 0; j < model.jobs[i].description.length; j++) {
                    var formattedDescription = HTMLworkDescription.replace("%data%", model.jobs[i].description[j]);
                    $(".description-entry:last").append(formattedDescription);
                }
            }
        }
    },
    displayproj: function() {
        for (i = 0; i < model.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", model.projects[i].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", model.projects[i].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", model.projects[i].description);
            $(".project-entry:last").append(formattedDescription);

            if (model.projects[i].images.length > 0) {
                for (j = 0; j < model.projects[i].images.length; j++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", model.projects[i].images[j]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    },
    displayedu: function() {
        for (i = 0; i < model.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", model.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", model.schools[i].degree);
            var formattedNameAndDegree = formattedName + formattedDegree;
            $(".education-entry:last").append(formattedNameAndDegree);
            var formattedLocation = HTMLschoolLocation.replace("%data%", model.schools[i].location);
            $(".education-entry:last").append(formattedLocation);
            var formattedDates = HTMLschoolDates.replace("%data%", model.schools[i].dates);
            $(".education-entry:last").append(formattedDates);
            if (model.schools[i].majors.length > 0) {
                for (j = 0; j < model.schools[i].majors.length; j++) {
                    var formattedMajor = HTMLschoolMajor.replace("%data%", model.schools[i].majors[j]);
                    $(".education-entry:last").append(formattedMajor);
                }
            }
        }
        $("#education").append(HTMLonlineClasses);
        for (i = 0; i < model.onlineCourses.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", model.onlineCourses[i].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", model.onlineCourses[i].school);
            var formattedTitleAndSchool = formattedTitle + formattedSchool;
            $(".education-entry:last").append(formattedTitleAndSchool);
            var formattedURL = HTMLonlineURL.replace("%data%", model.onlineCourses[i].url);
            $(".education-entry:last").append(formattedURL);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", model.onlineCourses[i].dates);
            $(".education-entry:last").append(formattedOnlineDates);
        }
    }
}

// function used for internationalize button - changes last name to uppercase
function inName() {
    var finalName = model.name;
    var nameArray = finalName.split(' ');
    var firstName = nameArray[0];
    var lastName = nameArray[1];
    lastName = lastName.toUpperCase();
    var firstLetter = finalName.slice(0, 1);
    firstLetter = firstLetter.toUpperCase();
    var endString = firstName.slice(1);
    endString = endString.toLowerCase();
    firstName = firstLetter + endString;
    finalName = firstName + ' ' + lastName;
    return finalName;
}

function masterDisplay() {
    view.displaybio();
    view.displaywork();
    view.displayproj();
    view.displayedu();
    $("#mapDiv").append(googleMap);
    $("#main").append(internationalizeButton);
}

masterDisplay();