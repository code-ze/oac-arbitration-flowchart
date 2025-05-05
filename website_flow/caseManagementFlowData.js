var caseManagementFlowData = {
  nodes: [
    {
      name: "Case Submission",
      x: 100,
      y: 100,
      category: 5,
      symbolSize: 45,
      value: "Initial submission of arbitration request by claimant",
      features: "Claim details, relief sought, supporting documents",
    },
    {
      name: "Initial Review",
      x: 250,
      y: 100,
      category: 2,
      symbolSize: 40,
      value: "OAC admin review for completeness and payment",
      features: "Formal requirements check",
    },
    {
      name: "Case Registration",
      x: 400,
      y: 100,
      category: 2,
      symbolSize: 40,
      value: "Formal registration of case in the system",
      features: "Case number assigned, notifications sent",
    },
    {
      name: "Respondent Notification",
      x: 550,
      y: 100,
      category: 4,
      symbolSize: 40,
      value: "Formal notice to respondent about arbitration",
      features: "Digital and physical notifications",
    },
    {
      name: "Response Submission",
      x: 550,
      y: 200,
      category: 4,
      symbolSize: 40,
      value: "Respondent's formal response to the claim",
      features: "Defense, counterclaims, supporting documents",
    },
    {
      name: "Tribunal Constitution",
      x: 400,
      y: 300,
      category: 3,
      symbolSize: 45,
      value: "Formation of arbitral tribunal or appointment of sole arbitrator",
      features: "Based on case complexity and parties' agreement",
    },
    {
      name: "Preliminary Meeting",
      x: 550,
      y: 300,
      category: 5,
      symbolSize: 40,
      value: "Initial procedural meeting with all participants",
      features: "Virtual or in-person, sets procedural timeline",
    },
    {
      name: "Procedural Order",
      x: 700,
      y: 300,
      category: 3,
      symbolSize: 40,
      value: "Tribunal's order on procedural matters",
      features: "Schedule, submissions format, evidence rules",
    },
    {
      name: "Document Exchange",
      x: 250,
      y: 400,
      category: 6,
      symbolSize: 40,
      value: "Submission and exchange of documents between parties",
      features: "Secure document repository with access control",
    },
    {
      name: "Written Submissions",
      x: 400,
      y: 400,
      category: 5,
      symbolSize: 40,
      value: "Detailed written arguments by parties",
      features: "Sequential exchange based on procedural order",
    },
    {
      name: "Evidence Submission",
      x: 550,
      y: 400,
      category: 6,
      symbolSize: 40,
      value: "Documentary evidence and witness statements",
      features: "Categorized and indexed for easy reference",
    },
    {
      name: "Hearings",
      x: 700,
      y: 400,
      category: 3,
      symbolSize: 45,
      value: "Oral hearings for arguments and witness examination",
      features: "Video conferencing option available",
    },
    {
      name: "Post-Hearing Briefs",
      x: 550,
      y: 500,
      category: 5,
      symbolSize: 40,
      value: "Final written submissions after hearings",
      features: "Summarizing arguments and evidence",
    },
    {
      name: "Tribunal Deliberations",
      x: 400,
      y: 500,
      category: 3,
      symbolSize: 40,
      value: "Private tribunal discussions on the case",
      features: "Confidential deliberation process",
    },
    {
      name: "Award Drafting",
      x: 250,
      y: 500,
      category: 3,
      symbolSize: 40,
      value: "Preparation of the arbitral award",
      features: "Reasoning, decisions on claims, costs",
    },
    {
      name: "Award Issuance",
      x: 100,
      y: 500,
      category: 3,
      symbolSize: 45,
      value: "Formal issuance of final award to parties",
      features: "Digital signatures, certified copies",
    },
    {
      name: "Award Scrutiny",
      x: 250,
      y: 600,
      category: 2,
      symbolSize: 40,
      value: "OAC review of award for formal correctness",
      features: "Non-substantive review only",
    },
    {
      name: "Case Closure",
      x: 100,
      y: 600,
      category: 2,
      symbolSize: 40,
      value: "Administrative closure of the case",
      features: "Fee reconciliation, archiving",
    },
    {
      name: "Emergency Measures",
      x: 400,
      y: 200,
      category: 3,
      symbolSize: 40,
      value: "Emergency arbitrator appointment for urgent relief",
      features: "Optional fast-track process",
    },
    {
      name: "Interim Measures",
      x: 250,
      y: 300,
      category: 3,
      symbolSize: 40,
      value: "Provisional measures ordered by tribunal",
      features: "Preserving evidence, status quo, etc.",
    },
    {
      name: "Settlement",
      x: 100,
      y: 400,
      category: 5,
      symbolSize: 40,
      value: "Amicable settlement between parties",
      features: "Can occur at any stage, ends proceedings",
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
      source: 2,
      target: 18,
      lineStyle: {
        normal: {
          color: "#555",
          type: "dashed",
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
      source: 7,
      target: 9,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 7,
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
        },
      },
    },
    {
      source: 12,
      target: 13,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 13,
      target: 14,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 14,
      target: 16,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 16,
      target: 15,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 15,
      target: 17,
      lineStyle: {
        normal: {
          color: "#555",
        },
      },
    },
    {
      source: 18,
      target: 5,
      lineStyle: {
        normal: {
          color: "#555",
          type: "dashed",
        },
      },
    },
    {
      source: 5,
      target: 19,
      lineStyle: {
        normal: {
          color: "#555",
          type: "dashed",
        },
      },
    },
    {
      source: 20,
      target: 17,
      lineStyle: {
        normal: {
          color: "#555",
          type: "dashed",
        },
      },
    },
    {
      source: 0,
      target: 20,
      lineStyle: {
        normal: {
          color: "#555",
          type: "dashed",
        },
      },
    },
    {
      source: 6,
      target: 20,
      lineStyle: {
        normal: {
          color: "#555",
          type: "dashed",
        },
      },
    },
    {
      source: 9,
      target: 20,
      lineStyle: {
        normal: {
          color: "#555",
          type: "dashed",
        },
      },
    },
  ],
};
