function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsList = document.getElementById("memberSkillsList");
    var memberSkillsListItems = document.getElementsByClassName("memberSkillsListItem");

    if (memberSkills.style.display === "none") {
        memberSkills.style.display = "block";
        memberSkillsList.style.display = "block";
        memberSkillsList.style.animation = "fadeIn 1s";
        memberSkillsList.style.animationFillMode = "forwards";
        member.style.height = "auto";
    } else {
        memberSkills.style.display = "none";
        memberSkillsList.style.display = "none";
        member.style.height = "100px";
    }
}