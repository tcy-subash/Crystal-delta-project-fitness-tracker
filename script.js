// Selecting inputs and the values that need to be changed
const profileButton = document.getElementById("profile-btn");
const blankscreen = document.querySelector(".blank-screen");
const form = document.querySelector(".forms");
const cancelButton = document.getElementById("cancel");
const saveButton = document.getElementById("save");
const nameInput = document.getElementById("name");
const nameElement = document.querySelector(".username");
const locationn = document.getElementById("location");
const locationInput = document.getElementById("yourLocation");
const weightInput = document.getElementById("yourWeight");
const weight = document.getElementById("weight");
const ageInput = document.getElementById("yourAge");
const age = document.getElementById("age");
const heightInput = document.getElementById("yourHeight");
const height = document.getElementById("height");
const cancelButton2 = document.getElementById("cancel2");
const savelButton2 = document.getElementById("save2");
const runningInput = document.getElementById("targetRunning");
const running = document.getElementById("running-data");
const sleepingInput = document.getElementById("targetSleeping");
const sleeping = document.getElementById("sleeping-data");
const weightLossInput = document.getElementById("targetWeight");
const weightLoss = document.getElementById("weightLoss-data");
const waterInput = document.getElementById("targetWaterLevel");
const water = document.getElementById("water");
const stepsInput = document.getElementById("targetSteps");
const steps = document.getElementById("steps");
const intButton = document.getElementById("int-btn");



profileButton.addEventListener("click", function () {
  blankscreen.style.display = "block";
  form.style.display = "block";
  personalForm.style.display = "block";
  goalsForm.style.display = "none";
});
cancelButton.addEventListener("click", function () {
  blankscreen.style.display = "none";
  form.style.display = "none";
});
intButton.addEventListener("click", function () {
  blankscreen.style.display = "none";
  form.style.display = "none";
});
cancelButton2.addEventListener("click", function () {
  blankscreen.style.display = "none"
  form.style.display = "none"
});
saveButton.addEventListener("click", () => {
  // Update the name
  const newName = nameInput.value.trim();
  if (newName) {
    nameElement.textContent = newName; // Update the name in the profile
  }

  // Update the location
  const newLocation = locationInput.value.trim();
  if (newLocation) {
    locationn.textContent = newLocation; // Update the location text
  }

  // update the weight
  const newWeight = weightInput.value.trim();
  if (newWeight) {
    weight.textContent = newWeight;
  }

  // update the age
  const newAge = ageInput.value.trim();
  if (newAge) {
    age.textContent = newAge; //
  }

  // update the height
  const newHeight = heightInput.value.trim();
  if (newHeight) {
    height.textContent = newHeight;
  }

  // update the sleepingHours
  const newSleeping = sleepingInput.value.trim();
  if (newSleeping) {
    sleeping.textContent = newSleeping;
  }

  // Update the running
  const newRunning = runningInput.value.trim(); 
  if (newRunning) {
    running.textContent = newRunning; 
  }

  // update the weightloss
  const newWeightLoss = weightLossInput.value.trim(); 
  if (newWeightLoss) {
    weightLoss.textContent = newWeightLoss;
  }

  // update the water level
  const newWater = waterInput.value.trim(); 
  if (newWater) {
    water.textContent = newWater; 
  }

  // update the steps
  const newSteps = stepsInput.value.trim(); 
  if (newSteps) {
    steps.textContent = newSteps;
  }

  // Hide the form and clear inputs
  blankscreen.style.display = "none";
  form.style.display = "none";
  nameInput.value = "";
  locationInput.value = "";
  ageInput.value = "";
  heightInput.value = "";
  weightInput.value = "";
  waterInput.value = "";
  stepsInput.value = "";
  weightLossInput.value = "";

});

//for second save button inside form
savelButton2.addEventListener("click", () => {

  const newSleeping = sleepingInput.value.trim();
  if (newSleeping) {
    sleeping.textContent = newSleeping; 
  }
  const newRunning = runningInput.value.trim(); 
  if (newRunning) {
    running.textContent = newRunning; 
  }

  const newWeightLoss = weightLossInput.value.trim();
  if (newWeightLoss) {
    weightLoss.textContent = newWeightLoss; 
  }

  const newName = nameInput.value.trim();
  if (newName) {
    nameElement.textContent = newName; 
  }

  const newLocation = locationInput.value.trim(); 
  if (newLocation) {
    locationn.textContent = newLocation; 
  }

  const newWeight = weightInput.value.trim(); 
  if (newWeight) {
    weight.textContent = newWeight;
  }

  const newAge = ageInput.value.trim();
  if (newAge) {
    age.textContent = newAge;
  }

  const newHeight = heightInput.value.trim();
  if (newHeight) {
    height.textContent = newHeight; 
  }

  const newWater = waterInput.value.trim();
  if (newWater) {
    water.textContent = newWater;
  }

  const newSteps = stepsInput.value.trim();
  if (newSteps) {
    steps.textContent = newSteps;
  }

  // Hide the form and clear inputs
  blankscreen.style.display = "none";
  form.style.display = "none";
  nameInput.value = "";
  locationInput.value = "";
  ageInput.value = "";
  heightInput.value = "";
  weightInput.value = "";
  weightLossInput.value = "";
  sleepingInput.value = "";
  runningInput.value = "";
  stepsInput.value = "";
  waterInput.value = "";

});

const ctxProgress = document.getElementById("progressChart").getContext("2d");

new Chart(ctxProgress, {
  type: "doughnut",
  data: {
    labels: ["Cardio", "Stretching", "Treadmill", "Strength"],
    datasets: [{
      data: [30, 40, 20, 10],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
    }, ],
  },
  options: {
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
    cutout: "70%", 
  },
});

// for bar char
// Select the canvas element
const ctxActivity = document.getElementById("activityChart").getContext("2d");

// Create the bar chart
new Chart(ctxActivity, {
  type: "bar", 
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], 
    datasets: [{
      label: "Steps", 
      data: [1000, 4000, 2000, 3000, 7000, 4000, 3000], 
      backgroundColor: "rgb(185, 212, 47)",
    }, ],
  },
  options: {
    responsive: true, 
    scales: {
      x: {
        grid: {
          display: false, 
        },
        ticks: {
          padding: 10, 
        },
      },
      y: {
        display: false, 
        grid: {
          display: false, 
        },
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
    },
    barThickness: 35,
    
    categoryPercentage: 0.8, 
    barPercentage: 0.9, 
  },
});

// for forms
// Select buttons and forms
const personalBtn = document.getElementById("personalBtn");
const goalsBtn = document.getElementById("goalsBtn");

const personalForm = document.getElementById("personalForm");
const goalsForm = document.getElementById("goalsForm");
personalBtn.addEventListener("click", () => {
  // Show personal form, hide goals form
  personalForm.style.display = "block";
  goalsForm.style.display = "none";

  // Update button styles
  personalBtn.classList.add("active-tab");
  goalsBtn.classList.remove("active-tab");
});

goalsBtn.addEventListener("click", () => {
  // Show goals form, hide personal form
  goalsForm.style.display = "block";
  personalForm.style.display = "none";

  // Update button styles
  goalsBtn.classList.add("active-tab");
  personalBtn.classList.remove("active-tab");
});

const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.sidebar-toggle');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});

// setting up profile

// Select the form, inputs, and percentage display elements
const profileForm = document.getElementById("profileEditForm");
const inputs = profileForm.querySelectorAll("input");
const filledPercentageElement = document.getElementById("filledPercentage");

// Function to calculate and update the percentage
function updateCompletionPercentage() {
    const totalFields = inputs.length; 
    let filledFields = 0;

    // Count filled inputs
    inputs.forEach(input => {
        if (input.value.trim() !== "") {
            filledFields++;
        }
    });

    // Calculate percentage
    const percentage = Math.round((filledFields / totalFields) * 100);

    // Update the display
    filledPercentageElement.innerHTML = `${percentage} `;
}

// Attach event listener to update percentage on input
inputs.forEach(input => {
    input.addEventListener("input", updateCompletionPercentage);
});

// Cancel button functionality
document.getElementById("cancel").addEventListener("click", () => {
    profileForm.reset();
    updateCompletionPercentage();
});

