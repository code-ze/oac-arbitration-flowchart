// Tribunal Constitution process data with improved positioning
var tribunalConstitutionData = {
  nodes: [
    {
      id: "tc_start",
      name: "Start Tribunal Constitution",
      symbolSize: 50,
      symbol: "circle",
      category: 5,
      x: 0,
      y: 0,
      value:
        "The process of constituting the Arbitral Tribunal begins after the exchange of initial submissions.",
    },

    {
      id: "tc_determine",
      name: "Determine Number of Arbitrators",
      symbolSize: 40,
      category: 2,
      x: 200,
      y: 0,
      value:
        "The number of arbitrators is determined by the arbitration agreement. If not specified, parties may agree on the number. If no agreement within 21 days, the Executive Committee decides.",
      article: "Article 10.1, 10.2",
    },

    {
      id: "tc_sole",
      name: "Sole Arbitrator Process",
      symbolSize: 40,
      category: 2,
      x: 400,
      y: -100,
      value:
        "For a sole arbitrator, parties shall nominate jointly within the time limit set by the Registrar. If they fail to agree, the Executive Committee appoints the sole arbitrator.",
      article: "Article 11.1",
    },

    {
      id: "tc_three",
      name: "Three-Member Process",
      symbolSize: 40,
      category: 2,
      x: 400,
      y: 100,
      value:
        "For three arbitrators, each party nominates one. The two co-arbitrators then nominate the president. If a party fails to nominate or co-arbitrators can't agree, the Executive Committee appoints.",
      article: "Article 11.2, 11.3, 11.5",
    },

    {
      id: "tc_nominate_sole",
      name: "Nominate Sole Arbitrator",
      symbolSize: 40,
      category: 5,
      x: 600,
      y: -100,
      value:
        "The parties jointly nominate a qualified sole arbitrator within the time limit set by the OAC Registrar.",
      article: "Article 11.1",
    },

    {
      id: "tc_fail_nominate_sole",
      name: "Fail to Nominate Jointly",
      symbolSize: 40,
      category: 5,
      x: 600,
      y: -200,
      value:
        "If parties cannot agree on a sole arbitrator within the specified time limit, they lose their right to nominate.",
      article: "Article 11.1",
    },

    {
      id: "tc_nominate_wing",
      name: "Each Party Nominates Co-Arbitrator",
      symbolSize: 40,
      category: 5,
      x: 600,
      y: 100,
      value:
        "Each party nominates one arbitrator in the Request for Arbitration and the Response, respectively.",
      article: "Article 11.2",
    },

    {
      id: "tc_nominate_president",
      name: "Co-Arbitrators Nominate President",
      symbolSize: 40,
      category: 3,
      x: 800,
      y: 100,
      value:
        "The two co-arbitrators nominate the president of the tribunal within the time limit set by the OAC Registrar.",
      article: "Article 11.3",
    },

    {
      id: "tc_fail_nominate_wing",
      name: "Fail to Nominate Co-Arbitrator",
      symbolSize: 40,
      category: 5,
      x: 600,
      y: 200,
      value:
        "If a party fails to nominate its arbitrator, the Executive Committee will appoint that arbitrator.",
      article: "Article 11.5",
    },

    {
      id: "tc_fail_nominate_president",
      name: "Fail to Nominate President",
      symbolSize: 40,
      category: 3,
      x: 800,
      y: 200,
      value:
        "If the co-arbitrators fail to nominate the president, the Executive Committee will appoint the president.",
      article: "Article 11.5",
    },

    {
      id: "tc_committee_appoint",
      name: "Executive Committee Appointment",
      symbolSize: 40,
      category: 2,
      x: 1000,
      y: 0,
      value:
        "The Executive Committee makes any needed appointments taking into account nationality, residence, independence, impartiality, and other relevant considerations.",
      article: "Article 11, 12.2",
    },

    {
      id: "tc_send_notice",
      name: "Send Notice of Appointment",
      symbolSize: 40,
      category: 2,
      x: 1200,
      y: 0,
      value:
        "The OAC Registrar sends a formal notice of appointment to each arbitrator, along with a copy of the Rules and case file.",
      article: "Article 12.1",
    },

    {
      id: "tc_disclose",
      name: "Arbitrator Discloses",
      symbolSize: 40,
      category: 3,
      x: 1400,
      y: 0,
      value:
        "Each arbitrator must disclose any circumstances likely to give rise to justifiable doubts as to their impartiality or independence.",
      article: "Article 12.4",
    },

    {
      id: "tc_accept",
      name: "Accept Appointment",
      symbolSize: 40,
      category: 3,
      x: 1600,
      y: 0,
      value:
        "Arbitrators must accept appointment in writing within 7 days, confirming availability, impartiality, and independence.",
      article: "Article 12.3",
    },

    {
      id: "tc_challenge",
      name: "Optional: Challenge Arbitrator",
      symbolSize: 30,
      category: 5,
      x: 1400,
      y: 100,
      value:
        "Parties may challenge an arbitrator within 14 days of appointment or learning of circumstances giving rise to justifiable doubts about impartiality/independence.",
      article: "Article 13.1, 13.3, 14.1",
    },

    {
      id: "tc_decide_challenge",
      name: "Decide on Challenge",
      symbolSize: 40,
      category: 2,
      x: 1600,
      y: 100,
      value:
        "The Executive Committee decides on challenges within 14 days unless arbitrator withdraws or other party agrees to challenge.",
      article: "Article 15.1",
    },

    {
      id: "tc_replacement",
      name: "Optional: Replace Arbitrator",
      symbolSize: 30,
      category: 2,
      x: 1800,
      y: 100,
      value:
        "If arbitrator dies, resigns, is successfully challenged, or removed, a replacement is appointed following the original nomination procedure.",
      article: "Article 15.2, 16.1, 16.2",
    },

    {
      id: "tc_complete",
      name: "Tribunal Constitution Complete",
      symbolSize: 40,
      category: 3,
      x: 2000,
      y: 0,
      value:
        "The Arbitral Tribunal is constituted by an act stating the date of constitution, signed by the arbitrators, once all have accepted and challenges are resolved.",
      article: "Article 20.3",
    },

    {
      id: "tc_fees",
      name: "Pay Fees & Deposits",
      symbolSize: 40,
      category: 5,
      x: 2200,
      y: 0,
      value:
        "The Registrar requests payment of administrative fees and deposits for arbitrator fees and expenses. Parties must pay within 14 days.",
      article: "Article 44.1, 45.1, 45.2, 45.3",
    },

    {
      id: "tc_transmit",
      name: "Transmit File to Tribunal",
      symbolSize: 40,
      category: 2,
      x: 2400,
      y: 0,
      value:
        "After payment is complete, the Registrar transmits the case file to the Arbitral Tribunal.",
      article: "Article 21",
    },

    {
      id: "tc_end",
      name: "End of Constitution Process",
      symbolSize: 50,
      symbol: "circle",
      category: 3,
      x: 2600,
      y: 0,
      value:
        "The Tribunal is fully constituted and receives the file to commence proceedings.",
    },
  ],
  links: [
    { source: "tc_start", target: "tc_determine" },
    {
      source: "tc_determine",
      target: "tc_sole",
      label: { show: true, formatter: "Sole arbitrator" },
    },
    {
      source: "tc_determine",
      target: "tc_three",
      label: { show: true, formatter: "Three arbitrators" },
    },
    { source: "tc_sole", target: "tc_nominate_sole" },
    {
      source: "tc_sole",
      target: "tc_fail_nominate_sole",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "If no agreement" },
    },
    { source: "tc_three", target: "tc_nominate_wing" },
    {
      source: "tc_three",
      target: "tc_fail_nominate_wing",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "If party fails" },
    },
    { source: "tc_nominate_wing", target: "tc_nominate_president" },
    {
      source: "tc_nominate_president",
      target: "tc_fail_nominate_president",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "If no agreement" },
    },
    {
      source: "tc_nominate_sole",
      target: "tc_committee_appoint",
      lineStyle: { type: "solid" },
    },
    { source: "tc_fail_nominate_sole", target: "tc_committee_appoint" },
    {
      source: "tc_nominate_president",
      target: "tc_committee_appoint",
      lineStyle: { type: "solid" },
    },
    { source: "tc_fail_nominate_wing", target: "tc_committee_appoint" },
    { source: "tc_fail_nominate_president", target: "tc_committee_appoint" },
    { source: "tc_committee_appoint", target: "tc_send_notice" },
    { source: "tc_send_notice", target: "tc_disclose" },
    { source: "tc_disclose", target: "tc_accept" },
    {
      source: "tc_disclose",
      target: "tc_challenge",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "Optional" },
    },
    { source: "tc_challenge", target: "tc_decide_challenge" },
    {
      source: "tc_decide_challenge",
      target: "tc_replacement",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "If challenge succeeds" },
    },
    {
      source: "tc_decide_challenge",
      target: "tc_accept",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "If challenge fails" },
    },
    {
      source: "tc_replacement",
      target: "tc_send_notice",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "Start over" },
    },
    { source: "tc_accept", target: "tc_complete" },
    { source: "tc_complete", target: "tc_fees" },
    { source: "tc_fees", target: "tc_transmit" },
    { source: "tc_transmit", target: "tc_end" },
  ],
};
