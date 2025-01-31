// Hardcoded login credentials
const USERNAME = "P8ML";
const PASSWORD = "1234";

// Login Function
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === USERNAME && password === PASSWORD) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("content-section").style.display = "block";
    loadWebsiteData();
    document.getElementById("background-music").play();
  } else {
    alert("Invalid username or password.");
  }
}

// Load Website Data from localStorage
function loadWebsiteData() {
  const websiteName = localStorage.getItem("websiteName") || "P8ML's Website";
  const logoUrl = localStorage.getItem("logoUrl") || "logo.png";
  const quote = localStorage.getItem("quote") || '"Your custom quote here."';
  const discordId = localStorage.getItem("discordId") || "";
  const socialMediaLinks = JSON.parse(localStorage.getItem("socialMediaLinks")) || [];

  document.getElementById("website-name").innerText = websiteName;
  document.getElementById("logo").src = logoUrl;
  document.getElementById("quote").innerText = quote;

  const socialMediaContainer = document.getElementById("social-media-links");
  socialMediaContainer.innerHTML = socialMediaLinks.map(link => `<a href="${link}" target="_blank">${link}</a>`).join("");
}

// Update Website Data
function updateWebsite() {
  const newName = document.getElementById("new-name").value;
  const newLogoUrl = document.getElementById("new-logo-url").value;
  const newQuote = document.getElementById("new-quote").value;
  const newDiscordId = document.getElementById("new-discord-id").value;
  const newSocialUrl = document.getElementById("new-social-url").value;

  if (newName) {
    localStorage.setItem("websiteName", newName);
    document.getElementById("website-name").innerText = newName;
  }

  if (newLogoUrl) {
    localStorage.setItem("logoUrl", newLogoUrl);
    document.getElementById("logo").src = newLogoUrl;
  }

  if (newQuote) {
    localStorage.setItem("quote", newQuote);
    document.getElementById("quote").innerText = newQuote;
  }

  if (newDiscordId) {
    localStorage.setItem("discordId", newDiscordId);
    // You can add Discord logo logic here
  }

  if (newSocialUrl) {
    const socialMediaLinks = JSON.parse(localStorage.getItem("socialMediaLinks")) || [];
    socialMediaLinks.push(newSocialUrl);
    localStorage.setItem("socialMediaLinks", JSON.stringify(socialMediaLinks));
    loadWebsiteData();
  }

  alert("Website updated successfully!");
}
