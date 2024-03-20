let type= new Typed('#changing-text',{
    strings : ['Front-end Developer','Student', 'Enthusiast'],
    typeSpeed : 50,
    loop: true,
    backspeed:50,
});

// Define a function to fetch and display skills from the JSON data
function displaySkills() {
    // Fetch the JSON data from the skills.json file
    fetch('skills.json')
      .then(response => response.json())
      .then(data => {
        const skillsContainer = document.getElementById('skills-container');
        skillsContainer.innerHTML = ''; // Clear the container
  
        // Loop through the skills data and create elements for each skill
        data.forEach(skill => {
          const skillElement = document.createElement('div');
          skillElement.innerHTML = `
            <img src="${skill.icon}" alt="${skill.name}">
            <p>${skill.name}</p>
          `;
          skillsContainer.appendChild(skillElement);
        });
      })
      .catch(error => console.error('Error fetching skills:', error));
  }
  
  // Call the function to display skills
  displaySkills();
  