// Emergency Arbitrator process data with improved positioning
var emergencyArbitratorData = {
  nodes: [
    {
      id: "ea_start",
      name: "Start Emergency Process",
      symbolSize: 50,
      symbol: "circle",
      category: 0,
      x: 0,
      y: 0,
      value:
        "A party may seek emergency interim relief before the constitution of the Arbitral Tribunal.",
    },

    {
      id: "ea_apply",
      name: "Apply for Emergency Relief",
      symbolSize: 40,
      category: 0,
      x: 200,
      y: 0,
      value:
        "Party submits application specifying: the nature of relief sought, reasons for entitlement, and certification that other parties have been notified. Must pay non-refundable administrative fee and deposits.",
      article: "Article 19.1, 19.2",
    },

    {
      id: "ea_appoint",
      name: "Appoint Emergency Arbitrator",
      symbolSize: 40,
      category: 2,
      x: 400,
      y: 0,
      value:
        "If application is accepted, the Executive Committee appoints an Emergency Arbitrator within 2 days of receipt. The seat is Muscat unless otherwise agreed.",
      article: "Article 19.3, 19.4",
    },

    {
      id: "ea_disclose",
      name: "EA Accepts & Discloses",
      symbolSize: 40,
      category: 4,
      x: 600,
      y: 0,
      value:
        "Prospective Emergency Arbitrator discloses any circumstances that might affect impartiality or independence prior to appointment.",
      article: "Article 19.5",
    },

    {
      id: "ea_challenge",
      name: "Optional: Challenge EA",
      symbolSize: 30,
      category: 5,
      x: 600,
      y: 100,
      value:
        "Parties may challenge the Emergency Arbitrator within 2 days. The Executive Committee decides after giving opportunity for comments.",
      article: "Article 19.5, 19.6",
    },

    {
      id: "ea_schedule",
      name: "Establish Schedule",
      symbolSize: 40,
      category: 4,
      x: 800,
      y: 0,
      value:
        "Within 2 days of appointment, the Emergency Arbitrator establishes a schedule for considering the application, providing reasonable opportunity for parties to be heard.",
      article: "Article 19.9",
    },

    {
      id: "ea_conduct",
      name: "Conduct Proceedings",
      symbolSize: 40,
      category: 4,
      x: 1000,
      y: 0,
      value:
        "The Emergency Arbitrator may conduct proceedings by telephone, video, written submissions, or in-person hearings, and has authority to rule on own jurisdiction.",
      article: "Article 19.9",
    },

    {
      id: "ea_order",
      name: "Issue Interim Order/Award",
      symbolSize: 40,
      category: 4,
      x: 1200,
      y: 0,
      value:
        "The Emergency Arbitrator issues order or award within 14 days of appointment (extendable in exceptional circumstances), with summary reasons and possibly conditional on security.",
      article: "Article 19.10, 19.11, 19.13",
    },

    {
      id: "ea_transmit",
      name: "Transmit to OAC",
      symbolSize: 40,
      category: 4,
      x: 1400,
      y: 0,
      value:
        "The Emergency Arbitrator transmits the order or award to the OAC.",
    },

    {
      id: "ea_communicate",
      name: "Communicate to Parties",
      symbolSize: 40,
      category: 2,
      x: 1600,
      y: 0,
      value:
        "OAC communicates the Emergency Arbitrator's order or award to the parties.",
    },

    {
      id: "ea_implement",
      name: "Implement Order/Award",
      symbolSize: 40,
      category: 5,
      x: 1800,
      y: 0,
      value:
        "The parties are bound by the order/award immediately, undertake to carry it out without delay, and waive rights to appeal to the extent legally permitted.",
      article: "Article 19.14",
    },

    {
      id: "ea_end",
      name: "EA Proceedings Cease",
      symbolSize: 40,
      category: 4,
      x: 2000,
      y: 0,
      value:
        "Emergency Arbitrator proceedings cease when the Arbitral Tribunal is constituted. The Tribunal may reconsider, modify, terminate or annul the emergency decision.",
      article: "Article 19.12",
    },
  ],
  links: [
    { source: "ea_start", target: "ea_apply" },
    { source: "ea_apply", target: "ea_appoint" },
    { source: "ea_appoint", target: "ea_disclose" },
    {
      source: "ea_disclose",
      target: "ea_challenge",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "Optional" },
    },
    {
      source: "ea_disclose",
      target: "ea_schedule",
      label: { show: true, formatter: "No challenge or after resolution" },
    },
    {
      source: "ea_challenge",
      target: "ea_schedule",
      label: { show: true, formatter: "If challenge rejected" },
    },
    { source: "ea_schedule", target: "ea_conduct" },
    { source: "ea_conduct", target: "ea_order" },
    { source: "ea_order", target: "ea_transmit" },
    { source: "ea_transmit", target: "ea_communicate" },
    { source: "ea_communicate", target: "ea_implement" },
    { source: "ea_implement", target: "ea_end" },
  ],
};
