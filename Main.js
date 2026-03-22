const docBtn = document.getElementById("doc-btn");
    const overlay = document.getElementById("documentationOverlay");
    const closeDoc = document.getElementById("closeDoc");

    docBtn.addEventListener("click", () => {
      overlay.style.display = "flex";
    });

    closeDoc.addEventListener("click", () => {
      overlay.style.display = "none";
    });

    // Optional: Close overlay when clicking outside card
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.style.display = "none";
    });

// HELP OVERLAY OPEN/CLOSE
const helpBtn = document.querySelector('.nav-buttons button:nth-child(3)');
const helpOverlay = document.getElementById('helpOverlay');
const closeHelp = document.getElementById('closeHelp');

helpBtn.addEventListener('click', () => {
  helpOverlay.style.display = 'flex';
});

closeHelp.addEventListener('click', () => {
  helpOverlay.style.display = 'none';
});

// Optional: Close overlay when clicking outside the help card
helpOverlay.addEventListener('click', (e) => {
  if (e.target === helpOverlay) helpOverlay.style.display = 'none';
});

// FEEDBACK OVERLAY OPEN/CLOSE
const feedbackBtn = document.querySelector('.nav-buttons button:nth-child(4)');
const feedbackOverlay = document.getElementById('feedbackOverlay');
const closeFeedback = document.getElementById('closeFeedback');

feedbackBtn.addEventListener('click', () => {
  feedbackOverlay.style.display = 'flex';
});

closeFeedback.addEventListener('click', () => {
  feedbackOverlay.style.display = 'none';
});

feedbackOverlay.addEventListener('click', (e) => {
  if (e.target === feedbackOverlay) feedbackOverlay.style.display = 'none';
});

// STAR RATING FUNCTIONALITY
const stars = document.querySelectorAll('.stars i');
stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    stars.forEach((s, i) => {
      s.classList.toggle('active', i <= index);
    });
  });
});

// FEEDBACK FORM SUBMIT
const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thank you for your feedback!");
  feedbackOverlay.style.display = 'none';
  feedbackForm.reset();
  stars.forEach(s => s.classList.remove('active'));
});




const updateOverlay = document.getElementById("updateOverlay");
const closeUpdate = document.getElementById("closeUpdate");
const updateCards = document.querySelectorAll(".update-card");

const updateTitle = document.getElementById("updateTitle");
const updateDate = document.getElementById("updateDate");
const updateSender = document.getElementById("updateSender");
const updateMessage = document.getElementById("updateMessage");

const updateForm = document.getElementById("updateForm");
const roleSelect = document.getElementById("role");
const newTitle = document.getElementById("newTitle");
const newMessage = document.getElementById("newMessage");

let currentCard = null; // Track which card is being edited
// Update Card Data
const updates = {
  1: {
    title: "Maintenance Notice",
    date: "27 Oct 2025",
    sender: "Hostel Admin",
    message:
      "Dear Residents, please note that electrical maintenance will take place in Block A on 29th Oct from 10:00 AM to 3:00 PM. Kindly plan accordingly."
  },
  2: {
    title: "Event Reminder",
    date: "26 Oct 2025",
    sender: "Cultural Committee",
    message:
      "Join us for the Annual Cultural Night on 28th Oct at the Hostel Auditorium, 7 PM onwards. Refreshments will be served!"
  },
  3: {
    title: "Mess Menu Update",
    date: "25 Oct 2025",
    sender: "Mess Committee",
    message:
      "Exciting new breakfast dishes have been added including dosa, omelette, and fruit bowls. Check out the updated menu in the Meal Section."
  },
  4: {
    title: "Cleaning Drive",
    date: "24 Oct 2025",
    sender: "Eco Club",
    message:
      "Participate in our campus cleaning drive this weekend. All volunteers will receive participation certificates and refreshments!"
  },
  5: {
    title: "Room Inspection",
    date: "23 Oct 2025",
    sender: "Warden Office",
    message:
      "Monthly room inspection will be conducted on 30th Oct between 10 AM - 12 PM. Please ensure cleanliness and proper arrangement."
  },
  6: {
    title: "Security Alert",
    date: "22 Oct 2025",
    sender: "Security Department",
    message:
      "New visitor ID policy is in effect from today. Ensure all guests register at the main gate before entry."
  },
  7: {
    title: "Transport Update",
    date: "27 Oct 2025",
    sender: "Transport Office",
    message:
      "Shuttle service timings have been updated for Block C. New morning and evening slots are now available. Please refer to the notice board."
  },
  8: {
    title: "Water Supply Notice",
    date: "27 Oct 2025",
    sender: "Maintenance Dept",
    message:
      "Water supply will be temporarily halted from 6 AM to 9 AM on 29th Oct for pipe cleaning and tank maintenance."
  },
  9: {
    title: "Fire Safety Drill",
    date: "26 Oct 2025",
    sender: "Safety Office",
    message:
      "A mock fire drill will be conducted on 30th Oct at 10 AM. Participation is mandatory for all residents."
  },
  10: {
    title: "Wi-Fi Upgrade",
    date: "25 Oct 2025",
    sender: "IT Department",
    message:
      "High-speed Wi-Fi routers are being installed across all blocks this week. Expect intermittent downtime during the upgrade."
  }
};

// Handle click on any update card
updateCards.forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.update;
    const data = updates[id];

    if (!data) return;

    currentCard = card; // store reference

    updateTitle.textContent = data.title;
    updateDate.textContent = data.date;
    updateSender.textContent = data.sender;
    updateMessage.textContent = data.message;

    newTitle.value = data.title;
    newMessage.value = data.message;

    updateOverlay.classList.add("active");
  });
});

// Close overlay
closeUpdate.addEventListener("click", () => {
  updateOverlay.classList.remove("active");
});

// Handle message update
updateForm.addEventListener("submit", e => {
  e.preventDefault();

  if (!currentCard) return;

  const id = currentCard.dataset.update;
  const sender = roleSelect.value;
  const title = newTitle.value.trim();
  const message = newMessage.value.trim();

  const date = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  // Update data
  updates[id] = { title, message, sender, date };

  // Update overlay content
  updateTitle.textContent = title;
  updateMessage.textContent = message;
  updateSender.textContent = sender;
  updateDate.textContent = date;

  // Update card in the grid
  currentCard.querySelector("h3").textContent = title;
  currentCard.querySelector("p").textContent = message.substring(0, 40) + "...";

  // Smooth visual feedback
  currentCard.style.transform = "scale(1.05)";
  setTimeout(() => (currentCard.style.transform = "scale(1)"), 300);

  alert("✅ Update successfully modified!");
});


// ====== ALL UPDATES FUNCTIONALITY ======
const allUpdatesOverlay = document.getElementById("allUpdatesOverlay");
const allUpdatesList = document.getElementById("allUpdatesList");
const allUpdatesBtn = document.querySelector(
  '.nav-buttons button:nth-child(5)' // "All Updates" button
);
const closeAllBtn = document.getElementById("closeAllUpdates");

// Example dataset (you can replace or dynamically link with your update cards)
const allUpdates = [
  {
    title: "Maintenance Notice",
    message: "Electrical repair schedule updated.",
    sender: "Admin",
    category: "Maintenance",
  },
  {
    title: "Event Reminder",
    message: "Cultural Night on 28th Oct, 7 PM.",
    sender: "Warden",
    category: "Events",
  },
  {
    title: "Mess Menu Update",
    message: "New breakfast options added.",
    sender: "Mess Manager",
    category: "Food",
  },
  {
    title: "Cleaning Drive",
    message: "Join the weekend cleaning initiative!",
    sender: "Admin",
    category: "Cleanliness",
  },
  {
    title: "Room Inspection",
    message: "Monthly inspection scheduled soon.",
    sender: "Admin",
    category: "Inspection",
  },
  {
    title: "Security Alert",
    message: "Updated visitor policy effective today.",
    sender: "Security",
    category: "Safety",
  },
  {
    title: "Transport Update",
    message: "New shuttle timings introduced for Block C.",
    sender: "Transport Dept",
    category: "Transport",
  },
  {
    title: "Water Supply",
    message: "Temporary disruption expected on 29th Oct morning.",
    sender: "Maintenance",
    category: "Utilities",
  },
  {
    title: "Safety Drill",
    message: "Mock fire drill scheduled this Friday.",
    sender: "Safety Officer",
    category: "Safety",
  },
  {
    title: "Wi-Fi Upgrade",
    message: "Faster connection rollout for hostel residents.",
    sender: "IT Admin",
    category: "Technology",
  },
];

// Open overlay & populate all updates
allUpdatesBtn.addEventListener("click", () => {
  allUpdatesList.innerHTML = "";

  allUpdates.forEach((u) => {
    const div = document.createElement("div");
    div.classList.add("update-entry");
    div.innerHTML = `
      <h3>${u.title}</h3>
      <p>${u.message}</p>
      <div class="update-meta">
        <strong>Sender:</strong> ${u.sender} • 
        <strong>Category:</strong> ${u.category}
      </div>
    `;
    allUpdatesList.appendChild(div);
  });

  allUpdatesOverlay.style.display = "flex";
});

// Close overlay
closeAllBtn.addEventListener("click", () => {
  allUpdatesOverlay.style.display = "none";
});

// Close on outside click
allUpdatesOverlay.addEventListener("click", (e) => {
  if (e.target === allUpdatesOverlay) allUpdatesOverlay.style.display = "none";
});


