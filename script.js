
// ==========================================
// PROFILE INFORMATION
// ==========================================

const PROFILE = {
  linkedin: "https://www.linkedin.com/in/f-uddin-75b35218/",
  email: "Foize.Uddin@colorado.edu"
};

// ==========================================
// LINKEDIN AND EMAIL LINKS
// ==========================================

const linkedinLink = document.getElementById("linkedinLink");
const emailLink = document.getElementById("emailLink");

if (linkedinLink) {
  linkedinLink.href = PROFILE.linkedin;
  linkedinLink.target = "_blank";
  linkedinLink.rel = "noopener noreferrer";
}

if (emailLink) {
  emailLink.href = `mailto:${PROFILE.email}`;
}

// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// ==========================================
// STATEMENT OF PURPOSE ACCORDION
// ==========================================

const sopItems = [...document.querySelectorAll(".sop-item")];
const expandButton = document.getElementById("expandButton");

function updateExpandButton() {
  if (!expandButton) return;

  const allOpen =
    sopItems.length > 0 &&
    sopItems.every(item => item.classList.contains("open"));

  expandButton.textContent = allOpen
    ? "Collapse all sections −"
    : "Expand all sections +";
}

sopItems.forEach(item => {
  const trigger = item.querySelector(".sop-trigger");
  const plus = item.querySelector(".sop-plus");

  if (!trigger) return;

  trigger.addEventListener("click", () => {
    const willOpen = !item.classList.contains("open");

    item.classList.toggle("open", willOpen);
    trigger.setAttribute("aria-expanded", String(willOpen));

    if (plus) {
      plus.textContent = willOpen ? "−" : "+";
    }

    updateExpandButton();
  });
});

// Expand or collapse all SOP sections.
if (expandButton) {
  expandButton.addEventListener("click", () => {
    const shouldOpen = !sopItems.every(item =>
      item.classList.contains("open")
    );

    sopItems.forEach(item => {
      item.classList.toggle("open", shouldOpen);

      const trigger = item.querySelector(".sop-trigger");
      const plus = item.querySelector(".sop-plus");

      if (trigger) {
        trigger.setAttribute("aria-expanded", String(shouldOpen));
      }

      if (plus) {
        plus.textContent = shouldOpen ? "−" : "+";
      }
    });

    updateExpandButton();
  });
}

// ==========================================
// PRINT / SAVE AS PDF
// ==========================================

const printButton = document.getElementById("printButton");

if (printButton) {
  printButton.addEventListener("click", () => {
    // Open all SOP sections before printing.
    sopItems.forEach(item => {
      item.classList.add("open");

      const trigger = item.querySelector(".sop-trigger");
      const plus = item.querySelector(".sop-plus");

      if (trigger) {
        trigger.setAttribute("aria-expanded", "true");
      }

      if (plus) {
        plus.textContent = "−";
      }
    });

    updateExpandButton();
    window.print();
  });
}

// ==========================================
// READING PROGRESS INDICATOR
// ==========================================

const progressBar = document.getElementById("progressBar");

if (progressBar) {
  window.addEventListener("scroll", () => {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress =
      scrollable > 0
        ? (window.scrollY / scrollable) * 100
        : 0;

    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}
