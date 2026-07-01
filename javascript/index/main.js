import { profiles } from "./profiles.js";

// Searching for profile
function selectProfile (name) {
  return profiles.find(p => p.name === name);
}

// Profile Rendering
function renderProfile(profile) {
  const container = document.querySelector('.js-div');
  container.innerHTML = `
  <div class="row align-iten-center">
    <div class="col-md-4">
      <img src="${profile.image}" alt="${profile.name}">
    </div>
    <div class="col-md-8">
      <h3 class="text-center">${profile.name}</h3>
      <p class="mt-3"><b>Age:</b> ${profile.age}  &nbsp;&nbsp;|&nbsp;&nbsp;  <b>Location:</b> ${profile.location}</p>
      <p><b>Coding Experience:</b> ${profile.coding}</p>
      <p><b>Favorite TTRPG:</b> ${profile.ttrpg}</p>
      <hr>
      <p>${profile.bio}</p>
    </div>  
  </div>
  `;
}

//Button Selectors
const buttons = document.querySelectorAll('.button-row button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const clickedName = button.dataset.name;
    const clickedProfile = selectProfile(clickedName);
    renderProfile(clickedProfile);
  });
});