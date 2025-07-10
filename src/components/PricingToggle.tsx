// PricingToggle.tsx
import React, { useState } from "react";
import "./pricingToggle.css";

const PricingToggle: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="pricing-wrapper">
      <h2>Choose Your Plan</h2>
      <div className="toggle-container">
        <span className={!isYearly ? "active" : ""}>Monthly</span>
        <label className="switch">
          <input type="checkbox" checked={isYearly} onChange={togglePricing} />
          <span className="slider"></span>
        </label>
        <span className={isYearly ? "active" : ""}>Yearly</span>
      </div>

      <div className="pricing-box">
        <h3>{isYearly ? "₹4,999 / year" : "₹499 / month"}</h3>
        <p>{isYearly ? "Save 2 months!" : "Billed monthly"}</p>
      </div>
    </div>
  );
};

export default PricingToggle;
