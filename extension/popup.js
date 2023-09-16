const teamMembers = ["Team Member 1", "Team Member 2", "Team Member 3", "Team Member 4", "Team Member 5"];
let count = 0;
const selectButton = document.getElementById("ss-select-button");
const selectedMemberParagraph = document.getElementById("selectedMember");
const exclamationPointText = document.getElementById("exclamationPoint");

document.addEventListener("DOMContentLoaded", function () {
  selectButton.addEventListener("click", function () {
    resetTeamMemberSelection();

    let interval = setInterval(function() {  
      selectRandomTeamMember();
      count += 1;

      if(count >= 7) {
        clearInterval(interval);
        exclamationPointText.textContent = " !";
      }
    }, 400);
  });
});

function selectRandomTeamMember() {
  let randomIndex = Math.floor(Math.random() * teamMembers.length);
  const selectedMember = teamMembers[randomIndex];
  selectedMemberParagraph.textContent = selectedMember;
}

function resetTeamMemberSelection() {
  selectedMemberParagraph.textContent = "";
  exclamationPointText.textContent = "";
  count = 0;
}