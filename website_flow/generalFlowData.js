var generalFlowData = {
  nodes: [
    {
      name: "Homepage",
      x: 100,
      y: 100,
      category: 0,
      symbolSize: 40,
      value:
        "Main landing page with overview of OAC services and navigation to key sections",
      features: "Public access - No authentication required",
    },
    {
      name: "About OAC",
      x: 250,
      y: 50,
      category: 0,
      symbolSize: 30,
      value:
        "Information about the OAC, its mission, and arbitration processes",
      features: "Public access - No authentication required",
    },
    {
      name: "Rules & Guidelines",
      x: 250,
      y: 100,
      category: 0,
      symbolSize: 30,
      value: "Comprehensive arbitration rules, procedures, and guidelines",
      features: "Public access - No authentication required",
    },
    {
      name: "Contact Us",
      x: 250,
      y: 150,
      category: 0,
      symbolSize: 30,
      value: "Contact information and form for inquiries",
      features: "Public access - No authentication required",
    },
    {
      name: "Login",
      x: 100,
      y: 250,
      category: 1,
      symbolSize: 40,
      value: "Authentication portal for all user types",
      features: "User authentication gateway",
    },
    {
      name: "Register",
      x: 250,
      y: 250,
      category: 1,
      symbolSize: 40,
      value: "Registration form for new users (parties and arbitrators)",
      features: "Account creation process",
    },
    {
      name: "User Dashboard",
      x: 100,
      y: 350,
      category: 1,
      symbolSize: 50,
      value:
        "Central hub that adapts based on user type (admin, arbitrator, or party)",
      features: "Role-based access control",
    },
    {
      name: "Admin Portal",
      x: 0,
      y: 450,
      category: 2,
      symbolSize: 40,
      value: "Central administrative dashboard for OAC staff",
      features: "OAC Admin access only",
    },
    {
      name: "Arbitrator Portal",
      x: 100,
      y: 450,
      category: 3,
      symbolSize: 40,
      value: "Case management interface for appointed arbitrators",
      features: "Arbitrator access only",
    },
    {
      name: "Party Portal",
      x: 200,
      y: 450,
      category: 4,
      symbolSize: 40,
      value: "Case submission and management for claimants and respondents",
      features: "Party access only",
    },
    {
      name: "Case Submission",
      x: 400,
      y: 550,
      category: 5,
      symbolSize: 45,
      value:
        "Form to submit a new arbitration case with required details and documents",
      features: "Accessible to parties",
    },
    {
      name: "Document Center",
      x: 100,
      y: 550,
      category: 6,
      symbolSize: 40,
      value: "Central repository for case documents, pleadings, and evidence",
      features: "Role-based access for relevant parties",
    },
    {
      name: "Password Reset",
      x: -100,
      y: 250,
      category: 1,
      symbolSize: 30,
      value: "Self-service password recovery process",
      features: "Public access - Email verification required",
    },
    {
      name: "FAQ",
      x: 400,
      y: 100,
      category: 0,
      symbolSize: 30,
      value: "Frequently asked questions about arbitration and OAC procedures",
      features: "Public access - No authentication required",
    },
    {
      name: "Resources",
      x: 400,
      y: 50,
      category: 0,
      symbolSize: 30,
      value: "Educational materials, guides, and templates",
      features: "Public access - No authentication required",
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
      source: 0,
      target: 2,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 0,
      target: 3,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 0,
      target: 4,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 0,
      target: 5,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 0,
      target: 13,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 0,
      target: 14,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 4,
      target: 6,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 4,
      target: 12,
      lineStyle: {
        normal: {
          color: "#555",
          type: "dashed",
        },
      },
    },
    {
      source: 5,
      target: 4,
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
      source: 6,
      target: 8,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 6,
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
        },
      },
    },
    {
      source: 9,
      target: 11,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 8,
      target: 11,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 7,
      target: 11,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
  ],
};
