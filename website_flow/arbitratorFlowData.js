var arbitratorFlowData = {
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
      name: "Arbitrator Application",
      x: 250,
      y: 50,
      category: 3,
      symbolSize: 40,
      value: "Form to apply to become an OAC arbitrator",
      features: "CV upload and qualification details",
    },
    {
      name: "Login",
      x: 100,
      y: 150,
      category: 1,
      symbolSize: 40,
      value: "Authentication for approved arbitrators",
      features: "2FA required for enhanced security",
    },
    {
      name: "Arbitrator Dashboard",
      x: 250,
      y: 150,
      category: 3,
      symbolSize: 50,
      value: "Overview of assigned cases, appointments, and calendar",
      features: "Central hub for arbitrators",
    },
    {
      name: "Calendar",
      x: 400,
      y: 50,
      category: 3,
      symbolSize: 40,
      value: "Schedule view of hearings, deadlines, and availability",
      features: "Sync with external calendars",
    },
    {
      name: "My Appointments",
      x: 400,
      y: 150,
      category: 3,
      symbolSize: 40,
      value: "List of all cases where appointed as arbitrator",
      features: "Filter by status and date",
    },
    {
      name: "Case Assignment",
      x: 400,
      y: 250,
      category: 3,
      symbolSize: 40,
      value: "New case assignment notifications and acceptance workflow",
      features: "Conflict check declaration required",
    },
    {
      name: "Conflict Check",
      x: 550,
      y: 250,
      category: 3,
      symbolSize: 40,
      value: "Form to declare any conflicts of interest for a case",
      features: "Required before accepting appointment",
    },
    {
      name: "Accept/Decline",
      x: 700,
      y: 250,
      category: 3,
      symbolSize: 40,
      value: "Decision to accept or decline case appointment",
      features: "Reason required if declining",
    },
    {
      name: "Active Cases",
      x: 250,
      y: 350,
      category: 5,
      symbolSize: 45,
      value: "List of all active cases requiring arbitrator action",
      features: "Prioritized by deadlines",
    },
    {
      name: "Case View",
      x: 400,
      y: 350,
      category: 5,
      symbolSize: 40,
      value: "Detailed view of case with all submissions and documents",
      features: "Timeline view of case progress",
    },
    {
      name: "Document Center",
      x: 550,
      y: 350,
      category: 6,
      symbolSize: 40,
      value: "Access to all case documents and evidence",
      features: "Advanced search and annotation tools",
    },
    {
      name: "Deliberation Notes",
      x: 700,
      y: 350,
      category: 3,
      symbolSize: 40,
      value: "Private workspace for arbitrator notes and analysis",
      features: "Only visible to the arbitrator",
    },
    {
      name: "Procedural Orders",
      x: 250,
      y: 450,
      category: 3,
      symbolSize: 40,
      value: "Create and issue procedural orders and directions",
      features: "Templates and previous orders available",
    },
    {
      name: "Schedule Hearing",
      x: 400,
      y: 450,
      category: 3,
      symbolSize: 40,
      value: "Set dates and details for virtual or physical hearings",
      features: "Integrated with video conferencing",
    },
    {
      name: "Award Drafting",
      x: 550,
      y: 450,
      category: 3,
      symbolSize: 45,
      value: "Compose and finalize arbitration awards",
      features: "Templates and formatting tools",
    },
    {
      name: "Issue Award",
      x: 700,
      y: 450,
      category: 3,
      symbolSize: 40,
      value: "Finalize and issue award to parties and OAC",
      features: "Digital signature and timestamp",
    },
    {
      name: "Account Settings",
      x: 700,
      y: 50,
      category: 3,
      symbolSize: 40,
      value: "Manage profile, expertise, rates, and availability",
      features: "Bio visible to parties after appointment",
    },
    {
      name: "Invoice Management",
      x: 700,
      y: 150,
      category: 3,
      symbolSize: 40,
      value: "Submit and track invoices for arbitrator services",
      features: "Automated based on case activity",
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
      target: 5,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 3,
      target: 6,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 3,
      target: 9,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 3,
      target: 17,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 3,
      target: 18,
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
          type: "dashed",
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
      source: 10,
      target: 11,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 10,
      target: 12,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 10,
      target: 13,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 10,
      target: 14,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 10,
      target: 15,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 15,
      target: 16,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 16,
      target: 18,
      lineStyle: {
        normal: {
          color: "#555",
          type: "dashed",
        },
      },
    },
    {
      source: 14,
      target: 4,
      lineStyle: {
        normal: {
          color: "#555",
          type: "dashed",
        },
      },
    },
  ],
};
