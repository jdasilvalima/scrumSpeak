const teamMembers = ["firstName 1", "firstName 2", "firstName 3", "firstName 4", "firstName 5"];

document.addEventListener("DOMContentLoaded", function () {
  const selectButton = document.getElementById("ss-select-button");
  const selectedMemberParagraph = document.getElementById("selectedMember");

  selectButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * teamMembers.length);
    const selectedMember = teamMembers[randomIndex];

    selectedMemberParagraph.textContent = "Selected Team Member: " + selectedMember;
  });
});
