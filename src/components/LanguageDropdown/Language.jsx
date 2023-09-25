import React, { useState } from "react";

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language is English

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="">
      <select
        id="language"
        onChange={handleLanguageChange}
        value={selectedLanguage}
      >
        <option value="en">English</option>
        <option value="ja-jp">日本語</option>
        <option value="	zh-Hans">中国人</option>
        <option value="	ko">한국인</option>
        <option value="nl">Dutch</option>
      </select>
    </div>
  );
};

export default LanguageDropdown;
