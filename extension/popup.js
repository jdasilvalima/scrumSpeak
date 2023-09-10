const teamMembers = ["Team Member 1", "Team Member 2", "Team Member 3", "Team Member 4", "Team Member 5"];

document.addEventListener("DOMContentLoaded", function () {
  const selectButton = document.getElementById("ss-select-button");
  const selectedMemberParagraph = document.getElementById("selectedMember");

  selectButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * teamMembers.length);
    const selectedMember = teamMembers[randomIndex];

    selectedMemberParagraph.textContent = selectedMember + " !";
  });
});
