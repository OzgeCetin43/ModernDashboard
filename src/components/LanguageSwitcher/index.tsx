import React, { useState } from "react";

import usa from "../../assets/images/usa-flag.svg";
import turkey from "../../assets/images/turkey-flag.svg";

import "./LanguageSwitcher.css";

export const LanguageSwitcher: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState<string>("en");

  return (
    <div className="language-switcher-container">
      <ul>
        <li>
          <img
            src={usa}
            alt="USA"
            className={activeLanguage === "en" ? "active-language" : ""}
            onClick={() => setActiveLanguage("en")}
          />
        </li>
        <li>
          <img
            src={turkey}
            alt="Turkey"
            className={activeLanguage === "tr" ? "active-language" : ""}
            onClick={() => setActiveLanguage("tr")}
          />
        </li>
      </ul>
    </div>
  );
};
