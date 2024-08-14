const navigation = document.getElementById("container");
const line = document.getElementById("hr");
const firstText = document.getElementById("text");

const navigation1 = document.getElementById("container1");
const line1 = document.getElementById("hr1");
const secondText = document.getElementById("text1");

const navigation2 = document.getElementById("container2");
const line2 = document.getElementById("hr2");
const thirdText = document.getElementById("text2");

const navigation3 = document.getElementById("container3");
const line3 = document.getElementById("hr3");
const fourthText = document.getElementById("text3");

const sections = document.querySelectorAll("section");

const resetStyles = () => {
  // Reset all to default
  firstText.style.color = "#64748B";
  line.style.width = "32px";

  secondText.style.color = "#64748B";
  line1.style.width = "32px";

  thirdText.style.color = "#64748B";
  line2.style.width = "32px";

  fourthText.style.color = "#64748B";
  line3.style.width = "32px";
};

const applyActiveStyles = (text, line) => {
  // Apply active styles to the current section's nav item
  text.style.color = "white";
  line.style.width = "56px";
  line.style.transition = "width 0.3s ease, color 0.3s ease";
  line.style.color = "white";
};

const navStyling = (text, line) => {
  resetStyles(); // Reset all items to default
  applyActiveStyles(text, line); // Apply active styles to the current section's nav item
};

// Event Listeners for each navigation container
navigation.addEventListener("click", () => navStyling(firstText, line));
navigation1.addEventListener("click", () => navStyling(secondText, line1));
navigation2.addEventListener("click", () => navStyling(thirdText, line2));
navigation3.addEventListener("click", () => navStyling(fourthText, line3));

// Set up IntersectionObserver to detect when sections are in view
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
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
        case "section4":
          navStyling(fourthText, line3);
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

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX + window.scrollX;
  mouseY = e.clientY + window.scrollY;

  const glow = document.getElementById("glow");
  glow.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

document.addEventListener("scroll", () => {
  const glow = document.getElementById("glow");
  glow.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});
