// Fees & Costs data
var feesData = {
  nodes: [
    {
      id: "fc_start",
      name: "Arbitration Costs Overview",
      symbolSize: 50,
      symbol: "circle",
      category: 6,
      x: 0,
      y: 0,
      value:
        "The costs of arbitration include registration fees, administrative fees, arbitrator fees and expenses, and other costs.",
      article: "Article 42, 43, 44, 45, 46, 47",
    },

    {
      id: "fc_registration",
      name: "Registration Fees",
      symbolSize: 40,
      category: 6,
      x: 200,
      y: -200,
      value:
        "Non-refundable registration fee paid when filing Request for Arbitration or Counterclaim. Required for processing to begin.",
      article: "Article 43.1, 43.2",
    },

    {
      id: "fc_administrative",
      name: "Administrative Fees",
      symbolSize: 40,
      category: 6,
      x: 200,
      y: -100,
      value:
        "Paid by the parties based on the value of claims/counterclaims according to the fee schedule in force. Amount may be adjusted during proceedings if value changes.",
      article: "Article 44.1, 44.2, 44.3",
    },

    {
      id: "fc_deposits",
      name: "Deposits for Tribunal Costs",
      symbolSize: 40,
      category: 6,
      x: 200,
      y: 0,
      value:
        "Parties may be required to pay deposits to cover arbitrator fees and expenses. Tribunal work may be suspended if payments are not made.",
      article: "Article 45.1, 45.2, 45.3, 45.4",
    },

    {
      id: "fc_arbitrator_fees",
      name: "Arbitrator Fees",
      symbolSize: 40,
      category: 6,
      x: 400,
      y: 0,
      value:
        "Based on amount in dispute, complexity, time spent, and other relevant factors. Determined by the Executive Committee.",
      article: "Article 47.1, 42.2(c)",
    },

    {
      id: "fc_arbitrator_expenses",
      name: "Arbitrator Expenses",
      symbolSize: 40,
      category: 6,
      x: 400,
      y: 100,
      value:
        "Reasonable travel, accommodation, and other expenses incurred by arbitrators are reimbursed.",
      article: "Article 42.2(d)",
    },

    {
      id: "fc_party_costs",
      name: "Party Legal & Expert Costs",
      symbolSize: 40,
      category: 6,
      x: 200,
      y: 100,
      value:
        "Each party bears its own costs for legal representation, experts, witnesses, and other expenses related to presenting their case.",
      article: "Article 42.2(g), 46.3",
    },

    {
      id: "fc_service_provider",
      name: "Service Provider Costs",
      symbolSize: 40,
      category: 6,
      x: 200,
      y: 200,
      value:
        "Costs of services required for proceedings (e.g., hearing rooms, translation, transcription, video conferencing) typically shared by parties.",
      article: "Article 42.2(e), 42.2(g)",
    },

    {
      id: "fc_advance_payment",
      name: "Payment in Advance",
      symbolSize: 40,
      category: 5,
      x: 600,
      y: -100,
      value:
        "Administrative fees and deposits must be paid in advance, otherwise proceedings may be suspended or terminated.",
      article: "Article 44.5, 45.3, 45.4",
    },

    {
      id: "fc_equal_share",
      name: "Equal Payment by Parties",
      symbolSize: 40,
      category: 5,
      x: 600,
      y: 0,
      value:
        "Parties generally pay deposits in equal shares, though one party may pay the other party's share if needed.",
    },

    {
      id: "fc_adjustment",
      name: "Adjustment of Costs",
      symbolSize: 40,
      category: 2,
      x: 600,
      y: 100,
      value:
        "If claim value changes or new claims are added, fees and deposits may be adjusted accordingly.",
      article: "Article 44.3, 45.2",
    },

    {
      id: "fc_additional_deposit",
      name: "Additional Deposits",
      symbolSize: 40,
      category: 2,
      x: 800,
      y: 0,
      value:
        "Additional deposits may be required during proceedings based on progress and complexity.",
      article: "Article 45.2",
    },

    {
      id: "fc_final_costs",
      name: "Final Cost Determination",
      symbolSize: 40,
      category: 3,
      x: 1000,
      y: 0,
      value:
        "In the final Award, the Tribunal determines the costs of arbitration and decides which party shall bear them or in what proportion.",
      article: "Article 42.1, 42.2",
    },

    {
      id: "fc_allocation",
      name: "Cost Allocation",
      symbolSize: 40,
      category: 3,
      x: 1200,
      y: 0,
      value:
        "The Tribunal has discretion to allocate costs between parties, considering circumstances including outcome and party conduct.",
      article: "Article 46.1, 46.2",
    },

    {
      id: "fc_schedule",
      name: "Fee Schedule",
      symbolSize: 40,
      category: 6,
      x: 800,
      y: -200,
      value:
        "The OAC fee schedule is published on the official website and specifies registration fees and administrative fees based on dispute value ranges.",
      article: "Annexure 1",
    },

    {
      id: "fc_refund",
      name: "Unexpended Fund Return",
      symbolSize: 40,
      category: 2,
      x: 1200,
      y: 100,
      value:
        "After the Award is rendered, the Registrar renders an accounting of deposits and returns any unexpended balance to parties.",
      article: "Article 45.5",
    },

    {
      id: "fc_end",
      name: "End of Cost Process",
      symbolSize: 50,
      symbol: "circle",
      category: 6,
      x: 1400,
      y: 0,
      value:
        "Cost matters finalized with the issuance of the final Award and return of any unexpended deposit funds.",
    },
  ],
  links: [
    { source: "fc_start", target: "fc_registration" },
    { source: "fc_start", target: "fc_administrative" },
    { source: "fc_start", target: "fc_deposits" },
    { source: "fc_start", target: "fc_party_costs" },
    { source: "fc_start", target: "fc_service_provider" },

    { source: "fc_deposits", target: "fc_arbitrator_fees" },
    { source: "fc_deposits", target: "fc_arbitrator_expenses" },
    { source: "fc_administrative", target: "fc_advance_payment" },
    { source: "fc_deposits", target: "fc_advance_payment" },
    { source: "fc_deposits", target: "fc_equal_share" },
    { source: "fc_arbitrator_fees", target: "fc_adjustment" },
    { source: "fc_administrative", target: "fc_adjustment" },
    { source: "fc_adjustment", target: "fc_additional_deposit" },
    { source: "fc_equal_share", target: "fc_additional_deposit" },
    { source: "fc_administrative", target: "fc_schedule" },
    { source: "fc_registration", target: "fc_schedule" },

    { source: "fc_party_costs", target: "fc_final_costs" },
    { source: "fc_service_provider", target: "fc_final_costs" },
    { source: "fc_arbitrator_fees", target: "fc_final_costs" },
    { source: "fc_arbitrator_expenses", target: "fc_final_costs" },
    { source: "fc_additional_deposit", target: "fc_final_costs" },

    { source: "fc_final_costs", target: "fc_allocation" },
    { source: "fc_final_costs", target: "fc_refund" },
    { source: "fc_allocation", target: "fc_end" },
    { source: "fc_refund", target: "fc_end" },
  ],
};
