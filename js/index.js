//footer element
const newFooter = document.createElement("footer");

//add footer to the bottom of HTML
document.body.appendChild(newFooter);

//creating date object
const today = new Date();

//current year
const thisYear = today.getFullYear();

//select footer element from the DOM
const footer = document.querySelector("footer");

//create a new paragraph element
const copyright = document.createElement("p");

//set inner html with name and current year
copyright.innerHTML = `&copy; ${thisYear} Houa`;

//add <p> inside the <footer>
footer.appendChild(copyright);

//an array of my skills
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Adobe Photoshop",
  "Shopify",
  "Klaviyo",
];

//select skills section using id
const skillsSection = document.getElementById("Skills");

//select ul inside the skills selection
const skillsList = skillsSection.querySelector("ul");

//loops through each item in my skills array
for (let i = 0; i < skills.length; i++) {
  //create a new li for each skill
  const skill = document.createElement("li");

  //fills in text
  skill.innerText = skills[i];

  //adds each li to the list on the page
  skillsList.appendChild(skill);
}

//leave a message form
const messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log("Name:", usersName);
  console.log("Email:", usersEmail);
  console.log("Message:", usersMessage);

  const messageSection = document.getElementById("Messages");
  const messageList = messageSection.querySelector("ul");

  const newMessage = document.createElement("li");

  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span> wrote: ${usersMessage}</span>`;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  //after clicking submit, clears the forms
  messageForm.reset();
});
