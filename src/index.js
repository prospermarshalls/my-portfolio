const navigation = document.getElementById("container");
const line = document.getElementById("hr");
const firstText = document.getElementById("text");

const navigation1 = document.getElementById("container1");
const line1 = document.getElementById("hr1");
const secondText = document.getElementById("text1");

const navigation2 = document.getElementById("container2");
const line2 = document.getElementById("hr2");
const thirdText = document.getElementById("text2");

const sections = document.querySelectorAll("section"); // Assuming your sections have the <section> tag

const resetStyles = () => {
  // Reset all to default
  firstText.style.color = "#64748B";
  line.style.width = "32px";

  secondText.style.color = "#64748B";
  line1.style.width = "32px";

  thirdText.style.color = "#64748B";
  line2.style.width = "32px";
};

const applyActiveStyles = (text, line) => {
  // Apply active styles to the current section's nav item
  text.style.color = "white";
  line.style.width = "56px";
  line.style.transition = "width 0.3s ease, color 0.3s ease";
  line.style.backgroundColor = "#64748B";
};

const navStyling = (text, line) => {
  resetStyles(); // Reset all items to default
  applyActiveStyles(text, line); // Apply active styles to the current section's nav item
};

// Event Listeners for each navigation container
navigation.addEventListener("click", () => navStyling(firstText, line));
navigation1.addEventListener("click", () => navStyling(secondText, line1));
navigation2.addEventListener("click", () => navStyling(thirdText, line2));

// Set up IntersectionObserver to detect when sections are in view
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Trigger when 50% of the section is in view
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      switch (entry.target.id) {
        case "section1":
          navStyling(firstText, line);
          break;
        case "section2":
          navStyling(secondText, line1);
          break;
        case "section3":
          navStyling(thirdText, line2);
          break;
        default:
          resetStyles();
          break;
      }
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});

document.addEventListener("mousemove", (e) => {
  const glow = document.getElementById("glow");

  // Calculate the position including the scroll offset
  const x = e.clientX + window.scrollX;
  const y = e.clientY + window.scrollY;

  // Move the neon glow to the cursor position
  glow.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener("scroll", () => {
  const glow = document.getElementById("glow");

  // Recalculate the position based on the current mouse position and scroll offset
  const x = event.clientX + window.scrollX;
  const y = event.clientY + window.scrollY;

  // Move the neon glow to the adjusted position
  glow.style.transform = `translate(${x}px, ${y}px)`;
});
