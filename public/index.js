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
    document.getElementById("streakContainer").style.display = "flex";
    document.getElementById("believeInMagic").style.display = "flex";
    document.getElementById("motivQuote").style.display = "flex";
    document.getElementById("personalGoals").style.display = "flex";
    document.getElementById("usernameDashboardTop").textContent = user.username;
    document.getElementById("emailDashboardTop").textContent = user.email;
    //profileContainer.style.display = "block";
    document.body.classList.add("logged-in");
  }

  const profileLogOut = document.getElementById("profileLogOut");
  if (profileLogOut) {
    profileLogOut.addEventListener("click", () => {
      localStorage.removeItem("user");
      location.reload();
    });
  };
});
document.addEventListener("DOMContentLoaded", () => {
  const streakButton = document.getElementById("streakButton");
  const streak = document.getElementById("streak");
  streak.textContent = streak.dataset.value;
  let streakCounter = Number(localStorage.getItem("streak") || 0);
  let lastClick = localStorage.getItem("lastClickDate");
  streak.dataset.value = streakCounter;
  streak.textContent = streakCounter;

  streakButton.addEventListener("click", () => {
    const todaysDate = new Date().toISOString().split("T")[0];

    if (lastClick === todaysDate) {
      alert("juz kliknales dzisiaj");
      return;
    };

    streakCounter++;
    localStorage.setItem("streak", streakCounter);
    localStorage.setItem("lastClickDate", todaysDate)

    streak.dataset.value = streakCounter;
    streak.textContent = streakCounter;

    lastClick = todaysDate;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const quoteList = [
    { quote: "jakis cytat 1", person: "osoba 1" },
    { quote: "jakis cytat 2", person: "osoba 2" },
    { quote: "jakis cytat 3", person: "osoba 3" },
    { quote: "jakis cytat 4", person: "osoba 4" },
  ]

  const quoteChange = document.getElementById("quoteChange");
  const quote = document.getElementById("quote");
  const person = document.getElementById("person");

  function getRandomQuote() {
    const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
    quote.textContent = randomQuote.quote;
    person.textContent = randomQuote.person;
  }

  function resetAnims() {
    quote.classList.remove("quote-slide-down");
    person.classList.remove("person-slide-up");

    setTimeout(() => {
      quote.classList.add("quote-slide-down");
      person.classList.add("person-slide-up");
    }, 10)
  }

  getRandomQuote();
  resetAnims();

  quoteChange.onclick = function() {
    getRandomQuote();
    resetAnims();

    quoteChange.classList.remove("quote-change-rotate");

    setTimeout(() => {
      quoteChange.classList.add("quote-change-rotate");
    }, 10)
  };
})
document.addEventListener("DOMContentLoaded", () => {
  const testPTroll = document.getElementById("testPTroll");
  const testP = document.getElementById("testP");

  testPTroll.addEventListener("mouseover", () => {
    testP.style.backgroundImage = 'url("../content/test-p-2.png")';
  })
  testPTroll.addEventListener("mouseout", () => {
    testP.style.backgroundImage = 'url("../content/test-p.png")';
  })
})