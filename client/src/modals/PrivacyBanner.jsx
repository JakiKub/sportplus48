import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GA_ID = "G-ZPN0Q6QMXV";

const loadGoogleAnalytics = () => {
  if (window.gtag) return;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID);
  };
};

const PrivacyBanner = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    } else {
      const parsed = JSON.parse(consent);
      if (parsed.analytics) {
        loadGoogleAnalytics();
      }
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        necessary: true,
        analytics: true
      })
    );

    loadGoogleAnalytics();
    setVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        necessary: true,
        analytics: false
      })
    );

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-overlay">
      <div className="cookie-modal">
        <h3>SZANUJEMY TWOJĄ PRYWATNOŚĆ</h3>
        <p>
          Nasza strona korzysta z plików cookie niezbędnych do działania
          oraz analitycznych (Google Analytics).
        </p>

        <div className="cookie-buttons">
          <button className="accept" onClick={handleAcceptAll}>
            Akceptuj
          </button>

          <button className="necessary" onClick={handleAcceptNecessary}>
            Akceptuj niezbędne
          </button>
        </div>

        <span
          className="privacy-link"
          onClick={() => navigate("/polityka-prywatnosci")}
        >
          Polityka prywatności
        </span>
      </div>
    </div>
  );
};

export default PrivacyBanner;