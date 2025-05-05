var oacAdminFlowData = {
  nodes: [
    {
      name: "Login",
      x: 100,
      y: 100,
      category: 1,
      symbolSize: 40,
      value: "Secure authentication for OAC administrators",
      features: "2FA required for enhanced security",
    },
    {
      name: "Admin Dashboard",
      x: 250,
      y: 100,
      category: 2,
      symbolSize: 50,
      value: "Overview of all cases, users, and system status",
      features: "Data visualization and statistics",
    },
    {
      name: "User Management",
      x: 100,
      y: 200,
      category: 2,
      symbolSize: 45,
      value: "Manage all system users (parties, arbitrators, admins)",
      features: "Create, edit, deactivate accounts",
    },
    {
      name: "Party Management",
      x: 250,
      y: 200,
      category: 2,
      symbolSize: 40,
      value: "Manage party accounts and verify company details",
      features: "KYC verification process",
    },
    {
      name: "Arbitrator Management",
      x: 400,
      y: 200,
      category: 2,
      symbolSize: 40,
      value: "Review applications and manage arbitrator profiles",
      features: "Qualification verification",
    },
    {
      name: "Case Management",
      x: 250,
      y: 300,
      category: 5,
      symbolSize: 45,
      value: "Oversee all arbitration cases in the system",
      features: "Filter by status, type, and date",
    },
    {
      name: "Case Review",
      x: 100,
      y: 400,
      category: 5,
      symbolSize: 40,
      value: "Review new case submissions for completeness",
      features: "Formal requirements check",
    },
    {
      name: "Case Assignment",
      x: 250,
      y: 400,
      category: 5,
      symbolSize: 40,
      value: "Assign arbitrators to cases based on expertise and availability",
      features: "Conflict check integration",
    },
    {
      name: "Case Monitoring",
      x: 400,
      y: 400,
      category: 5,
      symbolSize: 40,
      value: "Track case progress and ensure deadlines are met",
      features: "Automated alerts for delays",
    },
    {
      name: "Document Library",
      x: 550,
      y: 300,
      category: 6,
      symbolSize: 40,
      value: "Manage all case documents across the platform",
      features: "Advanced search and categorization",
    },
    {
      name: "System Settings",
      x: 400,
      y: 100,
      category: 2,
      symbolSize: 40,
      value: "Configure system parameters and business rules",
      features: "Fee schedules, deadlines, templates",
    },
    {
      name: "Fee Management",
      x: 550,
      y: 100,
      category: 2,
      symbolSize: 40,
      value: "Set and update fee structures for arbitration services",
      features: "Fee calculator configuration",
    },
    {
      name: "Payment Processing",
      x: 700,
      y: 100,
      category: 2,
      symbolSize: 40,
      value: "Review and process payments from parties",
      features: "Payment verification and receipts",
    },
    {
      name: "Arbitrator Payments",
      x: 700,
      y: 200,
      category: 2,
      symbolSize: 40,
      value: "Process and approve arbitrator invoices",
      features: "Automatic fee calculation based on case",
    },
    {
      name: "Communications",
      x: 550,
      y: 400,
      category: 2,
      symbolSize: 40,
      value: "Send notifications and official communications to users",
      features: "Email templates and message center",
    },
    {
      name: "Reporting",
      x: 700,
      y: 300,
      category: 2,
      symbolSize: 40,
      value: "Generate reports on cases, users, and system performance",
      features: "Customizable reports and export options",
    },
    {
      name: "Audit Logs",
      x: 700,
      y: 400,
      category: 2,
      symbolSize: 40,
      value: "Review system activity logs for security and compliance",
      features: "User actions tracking and security alerts",
    },
    {
      name: "Template Management",
      x: 100,
      y: 300,
      category: 2,
      symbolSize: 40,
      value: "Create and manage document templates for orders and awards",
      features: "Rich text editor and variable substitution",
    },
    {
      name: "Emergency Requests",
      x: 400,
      y: 300,
      category: 5,
      symbolSize: 40,
      value: "Manage emergency arbitrator requests and appointments",
      features: "Expedited process tracking",
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
      source: 1,
      target: 5,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 1,
      target: 10,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 1,
      target: 11,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 1,
      target: 15,
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
      source: 2,
      target: 4,
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
      source: 5,
      target: 7,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 5,
      target: 8,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 5,
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
          type: "dashed",
        },
      },
    },
    {
      source: 7,
      target: 4,
      lineStyle: {
        normal: {
          color: "#555",
          type: "dashed",
        },
      },
    },
    {
      source: 5,
      target: 9,
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
      source: 5,
      target: 14,
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
      source: 1,
      target: 17,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 17,
      target: 9,
      lineStyle: {
        normal: {
          color: "#555",
          type: "dashed",
        },
      },
    },
  ],
};
