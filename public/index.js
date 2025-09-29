// witaj wedrowcze, zapusciles sie wlasnie w nieznane tereny frontendowego javascripta
// sam autor nie do konca wie jak i dlaczego to dziala, po prostu dziala
// zakladam ze jedna drobna zmiana i wszystko wybuchnie wiec lepiej tu nie eksperymentowac

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
    document.getElementById("motivQuote").style.display = "flex";
    document.getElementById("personalGoals").style.display = "flex";
    document.getElementById("usernameDashboardTop").textContent = user.username;
    document.getElementById("emailDashboardTop").textContent = user.email;
    document.getElementById("dailyChallenge").style.display = "block";
    document.getElementById("getInspired").style.display = "block";
    document.getElementById("personalGoals").style.display = "flex";
    document.getElementById("someText").style.display = "flex";
    document.getElementById("scStartsIn").style.display = "flex";
    document.getElementById("navbarDashboardLoggedInTop").style.display = "flex";
    document.getElementById("navbarTop").style.display = "flex";
    document.getElementById("logoHóju").style.display = "block";
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
  //logika tego nie jest do konca logiczna

  const streakButton = document.getElementById("streakButton");
  const streak = document.getElementById("streak");
  streak.textContent = streak.dataset.value;
  let streakCounter = Number(localStorage.getItem("streak") || 0);
  let lastClick = localStorage.getItem("lastClickDate");
  streak.dataset.value = streakCounter;
  streak.textContent = streakCounter;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdaysDate = yesterday.toISOString().split("T")[0];

  streakButton.addEventListener("click", () => {
    const todaysDate = new Date().toISOString().split("T")[0];

    if (lastClick === todaysDate) {
      alert("juz kliknales dzisiaj");
      return;
    };

    if (lastClick === yesterdaysDate) {
      streakCounter++;
    } else {
      streakCounter = 1;
    }

    localStorage.setItem("streak", streakCounter);
    localStorage.setItem("lastClickDate", todaysDate)

    streak.dataset.value = streakCounter;
    streak.textContent = streakCounter;

    lastClick = todaysDate;

  });
});
document.addEventListener("DOMContentLoaded", () => {
  const challengeList = [
    { challenge: "Kill yourself" },
    { challenge: "Don't kill yourself" },
    { challenge: "Go insane" },
    { challenge: "Try to stay sane" },
  ]

  const randomChallenge = challengeList[Math.floor(Math.random() * challengeList.length)];

  document.getElementById("challenge").textContent = randomChallenge.challenge;
})
document.addEventListener("DOMContentLoaded", () => {
  const inspirList = [
    { inspirtext: "fgdstfggjsfgsgfjtsgfgstyfvstvf gdfysgftsjygfvsjgfuysd bfgsdfhf hdfvghsdf" },
    { inspirtext: "ftysdgjfydsg hjfgtjsgfjty kyfsdthdfgy  fvsghfvstf" },
  ]

  const inspirChange = document.getElementById("inspirChange");
  const textInGetInspir = document.getElementById("textInGetInspir");

  const getRandomInspir = () => {
    const randomInspir = inspirList[Math.floor(Math.random() * inspirList.length)];
    textInGetInspir.textContent = randomInspir.inspirtext;
  }

  getRandomInspir();

  inspirChange.onclick = function() {
    getRandomInspir();

    inspirChange.classList.remove("inspir-change-rotate");

    setTimeout(() => {
      inspirChange.classList.add("inspir-change-rotate");
    }, 10)
  }
})
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
document.addEventListener("DOMContentLoaded", () => {
  const date = new Date(2025, 9, 10, 12, 0, 0);

  const updateDate = () => {
    const now = new Date();
    const difference = date.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);   
    
    document.getElementById("dshDaysNumber").innerText = days;
    document.getElementById("dshHoursNumber").innerText = hours;
    document.getElementById("dshMinutesNumber").innerText = minutes;
    document.getElementById("dshSecondsNumber").innerText = seconds;
  }

  updateDate();
  setInterval(updateDate, 1000)
})