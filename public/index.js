document.addEventListener("DOMContentLoaded", () => {
    const logInButton = document.getElementById("logInButton");
    const logInModalContainer = document.getElementById("logInModalContainer");
    const logInClose = document.getElementById("logInClose");

    logInButton.addEventListener("click", () => {
        logInModalContainer.classList.add("show");
    });

    logInClose.addEventListener("click", () => {
        logInModalContainer.classList.remove("show");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const registerButton = document.getElementById("registerButton");
    const registerModalContainer = document.getElementById("registerModalContainer");
    const registerClose = document.getElementById("registerClose");

    registerButton.addEventListener("click", () => {
        registerModalContainer.classList.add("show");
    });

    registerClose.addEventListener("click", () => {
        registerModalContainer.classList.remove("show");
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const logInForm = document.getElementById("logInForm");

  if (!logInForm) return;

  logInForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = logInForm.querySelector("input[name='email']").value;
    const password = logInForm.querySelector("input[name='password']").value;

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const errText = await response.text();
        alert(errText);
        return;
      }

      const userData = await response.json();
      localStorage.setItem("user", JSON.stringify(userData));

      window.location.href = "/dashboard.html";
    } catch (err) {
      alert("blad polaczenia");
      console.error(err);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const profileContainer = document.getElementById("profileContainer");

  if (user && profileContainer) {
    document.getElementById("username").textContent = user.username;
    document.getElementById("nationality").textContent = user.nationality || "none";
    document.getElementById("logInButton").style.display = "none";
    document.getElementById("registerButton").style.display = "none";
    document.getElementById("logoDashboard").style.display = "none";
    document.getElementById("navbarDashboardLoggedOut").style.display = "none";
    document.getElementById("navbarDashboardLoggedIn").style.display = "flex";
    document.getElementById("profileLogOut").style.display = "flex";
    document.getElementById("navbarDashboardLoggedInTop").style.display = "flex";
    document.getElementById("usernameDashboardTop").textContent = user.username;
    document.getElementById("emailDashboardTop").textContent = user.email;
    profileContainer.style.display = "block";
    document.body.classList.add("logged-in");
  }

  const profileLogOut = document.getElementById("profileLogOut");
  if (profileLogOut) {
    profileLogOut.addEventListener("click", () => {
      localStorage.removeItem("user");
      location.reload();
    });
  }
});