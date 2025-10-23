// witaj wedrowcze, zapusciles sie wlasnie w nieznane tereny frontendowego javascripta
// sam autor nie do konca wie jak i dlaczego to dziala, po prostu dziala
// zakladam ze jedna drobna zmiana i wszystko wybuchnie wiec lepiej tu nie eksperymentowac

//skalowanie bo czm nie (ustawcie sb wszyscy na 100% a nie jakies dziwne rzeczy)
// document.addEventListener("DOMContentLoaded", () => {
//   if (window.devicePixelRatio === 1.25) {
//     document.querySelector("html").style.zoom = ".8";
//   };
//   if (window.devicePixelRatio === 1.5) {
//     document.querySelector('html').style.zoom = ".67";
//   };
//   if (window.devicePixelRatio === 1.75) {
//     document.querySelector('html').style.zoom = ".5";
//   };
// });
document.addEventListener('DOMContentLoaded', () => {
  const scale = 1 / window.devicePixelRatio;
  document.body.style.transform = `scale(${scale})`;
  document.body.style.transformOrigin = 'top left';
  document.body.style.width = `${100 * window.devicePixelRatio}%`;
  document.body.style.height = `${100 * window.devicePixelRatio}%`;
  document.body.style.position = 'absolute';
  document.body.style.top = 0;
  document.body.style.left = 0;
});
document.addEventListener('DOMContentLoaded', () => {
  const modalContainer = document.getElementById('logInModalContainer');

  if (modalContainer) {
    const handleResize = () => {
      modalContainer.scrollTop = 0;
    };

    window.addEventListener('resize', handleResize);
  }
});

// tez jakies funkcje w login tym razem
document.addEventListener("DOMContentLoaded", () => {
    const logInButton = document.getElementById("logInButton");
    const logInModalContainer = document.getElementById("logInModalContainer");
    const logInClose = document.getElementById("logInClose");

    logInButton.addEventListener("click", () => {
        logInModalContainer.classList.add("show");
        //document.getElementById("kolorkiBlya").style.backgroundColor = "rgba(0, 0, 0, 0.84)";
    });

    logInClose.addEventListener("click", () => {
        logInModalContainer.classList.remove("show");
        document.getElementById("kolorkiBlya").style.backgroundColor = "transparent";
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const listBttn = document.getElementById("listBttn");
  const dshListRozw = document.getElementById("dshListRozw");
  const abtUsBttn = document.getElementById("abtUsBttn");
  const actionsBttn = document.getElementById("actionsBttn");
  const contactBttn = document.getElementById("contactBttn");
  const articlesBttn = document.getElementById("articlesBttn");
  const countriesBttn = document.getElementById("countriesBttn");

  listBttn.addEventListener("click", () => {
    dshListRozw.classList.toggle("active-is");
    document.getElementById("dshMainWrapper").classList.toggle("is-active-is");
  })

  abtUsBttn.addEventListener("click", () => {
    window.location.href = "about-us.html";
  });

  actionsBttn.addEventListener("click", () => {
    window.location.href = "actions.html";
  });
  
  contactBttn.addEventListener("click", () => {
    window.location.href = "contact.html";
  });

  articlesBttn.addEventListener("click", () => {
    window.location.href = "articles.html";
  });

  countriesBttn.addEventListener("click", () => {
    window.location.href = "countries.html";
  });

})

document.addEventListener("DOMContentLoaded", () => {
  const listBttnContact = document.getElementById("listBttnContact");
  const contactListRozw = document.getElementById("contactListRozw");
  const abtUsBttnContact = document.getElementById("abtUsBttnContact");
  const dshBttnContact = document.getElementById("dshBttnContact");
  const actionsBttnContact = document.getElementById("actionsBttnContact");
  const contactBttnContact = document.getElementById("contactBttnContact");
  const articlesBttnContact = document.getElementById("articlesBttnContact");
  const countriesBttnContact = document.getElementById("countriesBttnContact");
  const leaveAMessage = document.getElementById("leaveAMessage");
  const contactData = document.getElementById("contactData");
  const contactTitle = document.getElementById("contactTitle");

  listBttnContact.addEventListener("click", () => {
    contactListRozw.classList.toggle("active-is-contact");
    //document.getElementById("dshMainWrapper").classList.toggle("is-active-is");
    leaveAMessage.classList.toggle("is-active-con");
    contactData.classList.toggle("is-active-con-2");
    contactTitle.classList.toggle("is-active-con-3");
  })

  abtUsBttnContact.addEventListener("click", () => {
    window.location.href = "about-us.html";
  });

  actionsBttnContact.addEventListener("click", () => {
    window.location.href = "actions.html";
  });
  
  contactBttnContact.addEventListener("click", () => {
    window.location.href = "contact.html";
  });

  articlesBttnContact.addEventListener("click", () => {
    window.location.href = "articles.html";
  });

  countriesBttnContact.addEventListener("click", () => {
    window.location.href = "countries.html";
  });

  dshBttnContact.addEventListener("click", () => {
    window.location.href = "dashboard.html";
  });
})

//probably jakies funckje w register idk
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

// logowanie chyba
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

// logout w dashboardzie
document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const profileContainer = document.getElementById("profileContainer");

  if (user && profileContainer) {
    document.getElementById("username").textContent = user.username;
    document.getElementById("nationality").textContent = user.nationality || "none";
    document.getElementById("logInButton").style.display = "none";
    document.getElementById("registerButton").style.display = "none";
    //document.getElementById("logoDashboard").style.display = "none";
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
    document.getElementById("dshMainWrapper").style.display = "none";
    document.getElementById("didYouKnow").style.display = "none";
    document.getElementById("iHateThisDiv").style.display = "none";
    document.getElementById("discl").style.display = "none";
    //profileContainer.style.display = "block";
    document.body.classList.add("logged-in");

    if (window.innerWidth <= 600) {
      document.getElementById("wersjaNaTel").style.display = "block";
      document.getElementById("usernameDashboardTopMobile").textContent = user.username;
      document.getElementById("emailDashboardTopMobile").textContent = user.email;
      document.getElementById("listBttn").style.display = "none";
    }
  }

  const profileLogOut = document.getElementById("profileLogOut");
    if (profileLogOut) {
      profileLogOut.addEventListener("click", () => {
      localStorage.removeItem("user");
      location.reload();
    });
  };

  const logoutBttnMobile = document.getElementById("logoutBttnMobile");
    if (logoutBttnMobile) {
      logoutBttnMobile.addEventListener("click", () => {
      localStorage.removeItem("user");
      location.reload();
    });
  };
});

document.addEventListener("DOMContentLoaded", () => {
  const menuList = document.getElementById("menuList");
  const listOfElements = document.getElementById("listOfElements");
  const activBttnTwo = document.getElementById("activBttnTwo");
  const progressBttnTwo = document.getElementById("progressBttnTwo");
  const recordsBttnTwo = document.getElementById("recordsBttnTwo");
  const pointsBttnTwo = document.getElementById("pointsBttnTwo");
  const rankingBttnTwo = document.getElementById("rankingBttnTwo");
  const actionsBttnTwo = document.getElementById("actionsBttnTwo");
  

  menuList.addEventListener("click", () => {
    listOfElements.classList.toggle("is-active");
    document.getElementById("usernameDiv").classList.toggle("darken");
    document.getElementById("theRest").classList.toggle("darken");
    document.getElementById("logoLogoutBttns").classList.toggle("darken");
  });


  activBttnTwo.addEventListener("click", () => {
    window.location.href = "add-activity.html";
  });

  progressBttnTwo.addEventListener("click", () => {
    window.location.href = "progress.html";
  });

  recordsBttnTwo.addEventListener("click", () => {
    window.location.href = "records.html";
  });

  pointsBttnTwo.addEventListener("click", () => {
    window.location.href = "points.html";
  });

  rankingBttnTwo.addEventListener("click", () => {
    window.location.href = "ranking.html";
  });

  actionsBttnTwo.addEventListener("click", () => {
    window.location.href = "actions.html";
  });
})

//latajace liczby igora "kurczaka" korcali aka funckja palaca przegladarke
document.addEventListener("DOMContentLoaded", () => {
  const PP = document.getElementById("numberPP");
  const PH = document.getElementById("numberPH");
  const AW = document.getElementById("numberAW");
  const AC = document.getElementById("numberAC");
  const peopleParticipated = document.getElementById("peopleParticipated");
  const peopleHeard = document.getElementById("peopleHeard");
  const awardsWon = document.getElementById("awardsWon");
  const athlCollabs = document.getElementById("athlCollabs");

  let currentInterval = null;

  const addPP = () => PP.innerText++;
  const addPH = () => PH.innerText++;
  const addAW = () => AW.innerText++;
  const addAC = () => AC.innerText++;

  const cycleConfig = [
      { element: peopleParticipated, counter: PP, increment: addPP, limit: 800, delay: 5 },
      { element: peopleHeard, counter: PH, increment: addPH, limit: 40000, delay: .000002 },
      { element: awardsWon, counter: AW, increment: addAW, limit: 2, delay: 100 },
      { element: athlCollabs, counter: AC, increment: addAC, limit: 10, delay: 100 }
  ];

  let currentIndex = 0;

  const clearAndStartInterval = (config) => {
      if (currentInterval !== null) {
          clearInterval(currentInterval);
      }

      cycleConfig.forEach(item => {
          item.element.style.display = (item === config) ? "flex" : "none";
      });

      currentInterval = setInterval(() => {
          config.increment(); // Zwiększ wartość licznika

          const currentValue = parseInt(config.counter.innerText);

          if (currentValue >= config.limit) {
              clearInterval(currentInterval);
              currentInterval = null;

              config.counter.innerText = '0';

              currentIndex = (currentIndex + 1) % cycleConfig.length;
              
              startCycle();
          }
      }, config.delay);
  };

  const startCycle = () => {
      const currentConfig = cycleConfig[currentIndex];
      clearAndStartInterval(currentConfig);
  }

  startCycle();
});

//linki do mediow
document.addEventListener("DOMContentLoaded", () => {
  const fbBttn = document.getElementById("fbBttn");
  const igBttn = document.getElementById("igBttn");
  const ttBttn = document.getElementById("ttBttn");
  const ytBttn = document.getElementById("ytBttn");

  igBttn.onclick = function() {
    window.open("https://www.instagram.com/sportplus.48/")
  };
  ttBttn.onclick = function() {
    window.open("https://www.tiktok.com/@sport.plus.48/")
  }
  ytBttn.onclick = function() {
    window.open("https://www.youtube.com/@SportPlus48")
  }
})

// "logika" streaku
document.addEventListener("DOMContentLoaded", async () => {
  //logika tego nie jest do konca logiczna

  const streakButton = document.getElementById("streakButton");
  const streakSpan = document.getElementById("streakSpan");
  const streakButtonMobile = document.getElementById("streakButtonMobile");
  const streakSpanMobile = document.getElementById("streakSpanMobile");

  try {
      const res = await fetch("/api/streak");
      if (!res.ok) throw new Error("cannot load streak");

      const streakDataTwo = await res.json();
      streakSpan.textContent = streakDataTwo.streak;
      streakSpanMobile.textContent = streakDataTwo.streak;

    } catch (err) {
      console.log(err);
      streakSpan.textContent = "0";
      streakSpanMobile.textContent = "0";
    }

  const handleStreakBttn = async () => {
    const res = await fetch("/api/streak/click", { method: "POST" });
    const streakData = await res.json();  

    if (!res.ok) {
      if (streakData.error === "already_clicked") {
        alert("dzisiaj zostalo klikniete otoz");
        streakSpan.textContent = streakData.streak;
      }
      return
    }

    streakSpan.textContent = streakData.streak;
    streakSpanMobile.textContent = streakData.streak;
  }

  if (streakButton) {
    streakButton.addEventListener("click", handleStreakBttn);
  }

  if (streakButtonMobile) {
    streakButtonMobile.addEventListener("click", handleStreakBttn);
  }

  //   streakButton.addEventListener("click", async () => {

  //   const res = await fetch("/api/streak/click", { method: "POST" });
  //   const streakData = await res.json();  

  //   if (!res.ok) {
  //     if (streakData.error === "already_clicked") {
  //       alert("dzisiaj zostalo klikniete otoz");
  //       streakSpan.textContent = streakData.streak;
  //     }
  //     return
  //   }

  //   streakSpan.textContent = streakData.streak;
  //   streakSpanMobile.textContent = streakData.streak;
  // });
});

//rowniez animacje do dashboardu
document.addEventListener("DOMContentLoaded", () => {
  const challengeList = [
    { challenge: "Run 2 kilometers" },
    { challenge: "Run 3 kilometers" },
    { challenge: "Swim 50 meters" },
    { challenge: "Walk 7500 steps" },
    { challenge: "One minute of plank" },
    { challenge: "Walk for 20 minutes" },
    { challenge: "Do 20 push-ups" },
    { challenge: "Do 5 pull-ups" },
    { challenge: "Do 30 squats" },
    { challenge: "Go up 15 floors" }, //xd
    { challenge: "Run 100 meters in under 15 seconds" },
  ]

  const getDate = (d = new Date()) => {
    return d.toISOString().split("T")[0];
  }

  const TODAY = getDate();
  let saved = JSON.parse(localStorage.getItem("dailyChallenge"));

  if (!saved || saved.date !== TODAY) {
    const randomChallenge = challengeList[Math.floor(Math.random() * challengeList.length)];
    saved = { date: TODAY, challenge: randomChallenge.challenge };
    localStorage.setItem("dailyChallenge", JSON.stringify(saved));
  }

  document.getElementById("challenge").textContent = saved.challenge;
  document.getElementById("challengeMobile").textContent = saved.challenge;
});

document.addEventListener("DOMContentLoaded", () => {
  const inspirList = [
    { inspirtext: "Lionel Messi had a growth hormone deficiency in his youth, but Barcelona covered the costs of his treatment" },
    { inspirtext: "Ronaldinho played barefoot because his dad told him it was better to control the ball that way, but the truth was he didn't have money for shoes" },
    { inspirtext: "Abebe Bikila won the marathon at the 1960 Rome Olympics running barefoot because the shoes he was given were uncomfortable and caused blisters" },
    { inspirtext: "Muhammad Ali had his bike stolen at the age of 12, so he asked a policeman to teach him how to fight to find out who did it" },
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
  };
});

//aniamcje do dashboardu ktore i tak w wiekszosci nie istnieja
document.addEventListener("DOMContentLoaded", () => {
  const quoteList = [
    { quote: "You miss 100% of the shots you don't take", person: "Wayne Gretzky" },
    { quote: "Champions aren't made in the gyms. Champions are made from something they have deep inside them - a desire, a dream, a vision", person: "Muhammad Ali" },
    { quote: "Hard work beats talent when talent doesn't work hard", person: "Kevin Durant" },
    { quote: "It's not whether you get knocked down, it's wether you get up", person: "Vince Lombardi" },
    { quote: "The pain you feel today will be the strength you feel tomorrow", person: "Kobe Bryant" },
    { quote: "If you're afraid of failure, you don't deserve to be succesful", person: "Charles Barkley" },
    { quote: "A champion is afraid of losing. Everyone else is afraid of winning", person: "Billie Jean King" },
    { quote: "I've failed over and over and over again in my life. And that is why I succeed", person: "Michael Jordan" },
    { quote: "You have to expect things of yourself before you can do them", person: "Michael Jordan" },
    { quote: "Dreams don't work unless you do", person: "John C. Maxwell" },
    { quote: "Success is no accident. It's hard work, preserverance, learning and sacrifice", person: "Pelé" },
    { quote: "What makes something special is not just what you have to gain, but what you felel there is to lose", person: "Andre Agassi" },
    { quote: "I never looked at the consequences of missing a big shot... when you think about the consequences, you always think of a negative result", person: "Michael Jordan" },
    { quote: "It's about doing it in a way that it can't be done any better. That is the goal every day", person: "Geno Auriemma" },
    { quote: "You have a dream and reach for the stars, and if you miss a star then I grab a handful of clouds", person: "Mike Tyson" },
    { quote: "The only person who can really motivate you is you", person: "Shaquille O'Neal" },
    { quote: "If you don't fall how are you going to know what getting up is like", person: "Stephen Curry" },
    { quote: "Winning means you'rew willing to go longer, work harder, and give more than anyone else", person: "Vince Lombardi" },
    { quote: "Set your goals high, and don't stop till you get there", person: "Bo Jackson" },
    { quote: "Show me a guy who's afraid to look bad, and I'll show you a guy you can beat every time", person: "Lou Brock" },
    { quote: "It ain't over till it's over", person: "Yogi Berra" },
    { quote: "It's hard to beat a person who never gives up", person: "Babe Ruth" },
    { quote: "If you don’t have time to do it right, when will you have time to do it over?", person: "John Wooden" },
    { quote: "Make each day your masterpiece", person: "John Wooden" },
    { quote: "Nothing will work unless you do", person: "John Wooden" },
    { quote: "Whatever you do in life, surround yourself with smart people who’ll argue with you", person: "John Wooden" },
    { quote: "The best competition I have is against myself to become better", person: "John Wooden" },
    { quote: "Don’t let yesterday take up too much of today", person: "John Wooden" },
    { quote: "Discipline yourself, and others won’t need to", person: "John Wooden" },
    { quote: "Happiness begins where selfishness ends", person: "John Wooden" },
  ];

  const quoteChange = document.getElementById("quoteChange");
  const quote = document.getElementById("quote");
  const person = document.getElementById("person");
  const quoteChangeMobile = document.getElementById("quoteChangeMobile");
  const quoteMobile = document.getElementById("quoteMobile");
  const personMobile = document.getElementById("personMobile")

  function getRandomQuote() {
    const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
    quote.textContent = randomQuote.quote;
    person.textContent = randomQuote.person;
    quoteMobile.textContent = randomQuote.quote;
    personMobile.textContent = randomQuote.person;
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

  quoteChangeMobile.onclick = function() {
    getRandomQuote();

    quoteChangeMobile.classList.remove("quote-change-rotate");

    setTimeout(() => {
      quoteChangeMobile.classList.add("quote-change-rotate");
    }, 10)
  }
});

//dashboard time
document.addEventListener("DOMContentLoaded", () => {
  const date = new Date(2025, 11, 4, 0, 48, 0);

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

    if (difference <= 0) {
      document.getElementById("dshDaysNumber").innerText = 0;
      document.getElementById("dshHoursNumber").innerText = 0;
      document.getElementById("dshMinutesNumber").innerText = 0;
      document.getElementById("dshSecondsNumber").innerText = 0;
    }
  }

  updateDate();
  setInterval(updateDate, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  const date = new Date(2025, 11, 4, 0, 48, 0);

  const updateDate = () => {
    const now = new Date();
    const difference = date.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);   
    
    document.getElementById("dshDaysNumberMobile").innerText = days;
    document.getElementById("dshHoursNumberMobile").innerText = hours;
    document.getElementById("dshMinutesNumberMobile").innerText = minutes;
    document.getElementById("dshSecondsNumberMobile").innerText = seconds;

    if (difference <= 0) {
      document.getElementById("dshDaysNumberMobile").innerText = 0;
      document.getElementById("dshMinutesNumberMobile").innerText = 0;
      document.getElementById("dshHoursNumberMobile").innerText = 0;
      document.getElementById("dshSecondsNumberMobile").innerText = 0;
    }
  }

  updateDate();
  setInterval(updateDate, 1000);
});