import React from "react";
import "./Cloud.css";

const Cloud = () => {
  return (
    <div className="cloud">
      <div className="container">
        <div className="content">
          <h2> 
            <span>Cloud</span>Security
          </h2>
          <p>
            The usage of cloud services has become closely associated with
            common cloud offerings, such as software as a service (SaaS),
            platform as a service (PaaS) and infrastructure as a service
            (IaaS).  SaaS is a software distribution model in which applications
            are hosted by a vendor or service provider and made available to
            customers over a network, typically the internet. Examples include G
            Suite -- formerly Google Apps -- Microsoft Office 365, Salesforce
            and Workday. PaaS refers to the delivery of operating systems and
            associated services over the internet without downloads or
            installation. 
          </p>
          <div>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
