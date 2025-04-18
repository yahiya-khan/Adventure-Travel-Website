console.log("JAVASCRIPT");

if (window.screen.width <= 1130) {
  function removeall() {
    $(".cir_border").css("border", "none");
  }
  $("#sec").on("click", function () {
    removeall();
    $("#sec").css("border", "2px solid whitesmoke");
    $("#sec").css("border-radius", "20px");
  });
  $("#pri").on("click", function () {
    removeall();
    $("#pri").css("border", "2px solid whitesmoke");
    $("#pri").css("border-radius", "20px");
  });
  $("#tri").on("click", function () {
    removeall();
    $("#tri").css("border", "2px solid whitesmoke");
    $("#tri").css("border-radius", "20px");
  });
  $("#quad").on("click", function () {
    removeall();
    $("#quad").css("border", "2px solid whitesmoke");
    $("#quad").css("border-radius", "20px");
  });
  $("#quint").on("click", function () {
    removeall();
    $("#quint").css("border", "2px solid whitesmoke");
    $("#quint").css("border-radius", "20px");
  });
  $("#hex").on("click", function () {
    removeall();
    $("#hex").css("border", "2px solid whitesmoke");
    $("#hex").css("border-radius", "20px");
  });
  $("#hept").on("click", function () {
    removeall();
    $("#hept").css("border", "2px solid whitesmoke");
    $("#hept").css("border-radius", "20px");
  });
}

$("#about").on("mouseover", function () {
  introAboutLogoTransition();
});

$("input").on("change", function () {
  $("body").toggleClass("blue");
});

// Light/Dark toggle
const checkbox = document.getElementById("checkbox");

function introAboutLogoTransition() {
  $("#about-quad").css("top", "70%");
  $("#about-quad").css("opacity", "1");
}

function checkDarkMode() {
  if (
    localStorage.getItem("tourism_website_darkmode") !== null &&
    localStorage.getItem("tourism_website_darkmode") === "true"
  ) {
    document.body.classList.add("dark");
    checkbox.checked = true;
  }
}
checkDarkMode();

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.body.classList.contains("dark")
    ? localStorage.setItem("tourism_website_darkmode", true)
    : localStorage.setItem("tourism_website_darkmode", false);
});

// scroll button

let mybutton = document.getElementById("upbtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//chatbot
function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBody = document.getElementById("chat-body");
  const userMessage = input.value.trim();

  if (userMessage === "") return;

  // Add user message to chat
  const userMsgDiv = document.createElement("div");
  userMsgDiv.className = "message user-message";
  userMsgDiv.textContent = userMessage;
  chatBody.appendChild(userMsgDiv);

  // Simulate bot response (replace with actual logic later)
  setTimeout(() => {
    const botMsgDiv = document.createElement("div");
    botMsgDiv.className = "message bot-message";
    botMsgDiv.textContent = getBotResponse(userMessage);
    chatBody.appendChild(botMsgDiv);
    chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to bottom
  }, 1000);

  input.value = ""; // Clear input
  chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to bottom
}

function getBotResponse(message) {
  message = message.toLowerCase();
  if (message.includes("tour")) {
    return "We offer exciting tours like the Port of Spain City Tour and Gasparee Caves! Check the 'Tours' section for more details.";
  } else if (message.includes("contact")) {
    return "You can reach us via the 'Contact Us' section on the main page!";
  } else if (message.includes("explore")) {
    return "Ready to explore? Visit our 'Explore' section for inspiration!";
  } else {
    return "I'm here to help! Ask me about tours, exploration, or how to contact us.";
  }
}

// Allow sending message with Enter key
document.getElementById("user-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});



// Update Navbar While Scrolling
function updateNav() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links li a");

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();

    if (window.screen.width <= 425) {
      if (rect.top <= 1300) {
        navLinks.forEach((navLink) => {
          navLink.classList.remove("active");
        });
        navLinks[index].classList.add("active");
      }
    } else if (425 <= window.screen.width <= 768) {
      if (rect.top <= 1250) {
        navLinks.forEach((navLink) => {
          navLink.classList.remove("active");
        });
        navLinks[index].classList.add("active");
      }
    } else {
      if (rect.top <= 1000) {
        navLinks.forEach((navLink) => {
          navLink.classList.remove("active");
        });
        navLinks[index].classList.add("active");
      }
    }
  });
}

window.addEventListener("scroll", updateNav);
