import { useState } from "react";
import articles from "../../data/Articles.json";
import "./Tabs.css";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="contain">
      <p className="containNaming">TABS</p>
      <div className="containBlock">
        <div className="containBlockButton">
          {articles.map((el, index) => (
            <button
              className={`btn ${index === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              Tab {index + 1}
            </button>
          ))}
        </div>
        <div className="containBlockText">
          <p className="containBlockTextTitle">{articles[activeTab].title}</p>
          <hr className="containBlockHr" />
          {articles[activeTab].body}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
