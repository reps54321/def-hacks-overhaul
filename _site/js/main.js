currentStaff = 0;

var staff = [];
var s1 = {
    name: "Dean Zimberg",
    image: "images/team/dean.jpeg",
    title: "CO-FOUNDER & EXECUTIVE PRESIDENT",
    linkedin: "-",
    twitter: "-",
    email: "-"
}

var s2 = {
    name: "Becca Roskill",
    image: "images/team/becca.jpg",
    title: "CO-FOUNDER & CEO",
    linkedin: "",
    twitter: "-",
    email: "-"
}

var s3 = {
    name: "Robert Epstein",
    image: "images/team/robbie.jpg",
    title: "Co-Founder & Executive Director/Chairman",
    linkedin: "-",
    twitter: "-",
    email: "-"
}

var s4 = {
    name: "Aram Baghdassarian",
    image: "images/team/aram.jpg",
    title: "Co-Founder & Head of Development",
    linkedin: "-",
    twitter: "-",
    email: "-"
}

staff.push(s1);
staff.push(s2);
staff.push(s3);
staff.push(s4);


function leftClick() {
    currentStaff--;
    if(currentStaff < 0) {
        currentStaff = staff.length - 1;
    }

    //alert(staff[currentStaff].name);


    document.getElementById("staffName").innerHTML = staff[currentStaff].name;
    document.getElementById("staffImage").setAttribute("src", staff[currentStaff].image);
    document.getElementById("staffTitle").innerHTML = staff[currentStaff].title;
}

function rightClick() {
    currentStaff++;
    if(currentStaff >= staff.length) {
        currentStaff = 0;
    }

    //alert(staff[currentStaff].name);
    document.getElementById("staffName").innerHTML = staff[currentStaff].name;
    document.getElementById("staffTitle").innerHTML = staff[currentStaff].title;
    document.getElementById("staffImage").setAttribute("src", staff[currentStaff].image);
}
