var partyFlowData = {
  nodes: [
    {
      name: "Homepage",
      x: 100,
      y: 50,
      category: 0,
      symbolSize: 40,
      value: "Main landing page with information about OAC services",
      features: "Public access",
    },
    {
      name: "Register",
      x: 100,
      y: 150,
      category: 1,
      symbolSize: 40,
      value:
        "Party registration with company details and authorized representatives",
      features: "Email verification required",
    },
    {
      name: "Login",
      x: 250,
      y: 150,
      category: 1,
      symbolSize: 40,
      value: "Authentication for registered parties",
      features: "2FA optional for enhanced security",
    },
    {
      name: "Party Dashboard",
      x: 400,
      y: 150,
      category: 4,
      symbolSize: 50,
      value: "Overview of all cases, notifications, and account settings",
      features: "Central navigation hub for parties",
    },
    {
      name: "Submit New Case",
      x: 300,
      y: 250,
      category: 5,
      symbolSize: 45,
      value: "Multi-step form to initiate a new arbitration case",
      features: "Claimant access only",
    },
    {
      name: "Case Details",
      x: 400,
      y: 350,
      category: 5,
      symbolSize: 40,
      value: "Enter case description, claim amount, and relief sought",
      features: "Required for case submission",
    },
    {
      name: "Upload Documents",
      x: 550,
      y: 350,
      category: 6,
      symbolSize: 40,
      value: "Upload supporting documents and evidence for the case",
      features: "Multiple file upload, size limitations apply",
    },
    {
      name: "Review Submission",
      x: 400,
      y: 450,
      category: 5,
      symbolSize: 40,
      value: "Review all case information before final submission",
      features: "Can save as draft and return later",
    },
    {
      name: "Payment Portal",
      x: 550,
      y: 450,
      category: 5,
      symbolSize: 40,
      value: "Pay filing fees based on claim amount",
      features: "Multiple payment methods supported",
    },
    {
      name: "Case Submitted",
      x: 475,
      y: 550,
      category: 5,
      symbolSize: 40,
      value: "Confirmation of successful case submission",
      features: "Case number assigned, notification sent to OAC",
    },
    {
      name: "My Cases",
      x: 550,
      y: 250,
      category: 5,
      symbolSize: 45,
      value: "List of all active and past cases",
      features: "Filter by status, date, and case type",
    },
    {
      name: "Case View",
      x: 700,
      y: 250,
      category: 5,
      symbolSize: 40,
      value:
        "Detailed view of a specific case with all information and documents",
      features: "Real-time status updates",
    },
    {
      name: "Submit Response",
      x: 700,
      y: 350,
      category: 5,
      symbolSize: 40,
      value: "Submit response to a claim (for respondents)",
      features: "Respondent access only within deadline",
    },
    {
      name: "Document Center",
      x: 700,
      y: 450,
      category: 6,
      symbolSize: 40,
      value: "Access and manage all case-related documents",
      features: "Version control and access logs",
    },
    {
      name: "Notifications",
      x: 550,
      y: 150,
      category: 4,
      symbolSize: 40,
      value: "System notifications for case updates and deadlines",
      features: "Email and in-platform alerts",
    },
    {
      name: "Account Settings",
      x: 700,
      y: 150,
      category: 4,
      symbolSize: 40,
      value:
        "Manage profile, contact information, and notification preferences",
      features: "Password change and 2FA setup",
    },
  ],
  links: [
    {
      source: 0,
      target: 1,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 1,
      target: 2,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 2,
      target: 3,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 3,
      target: 4,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 3,
      target: 10,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 3,
      target: 14,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 3,
      target: 15,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 4,
      target: 5,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 5,
      target: 6,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 6,
      target: 7,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 7,
      target: 8,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 8,
      target: 9,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 9,
      target: 10,
      lineStyle: {
        normal: {
          color: "#555",
          type: "dashed",
        },
      },
    },
    {
      source: 10,
      target: 11,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 11,
      target: 12,
      lineStyle: {
        normal: {
          color: "#555",
          type: "dashed",
        },
      },
    },
    {
      source: 11,
      target: 13,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 12,
      target: 6,
      lineStyle: {
        normal: {
          color: "#555",
          type: "dashed",
        },
      },
    },
    {
      source: 13,
      target: 6,
      lineStyle: {
        normal: {
          color: "#555",
          type: "dashed",
        },
      },
    },
  ],
};
