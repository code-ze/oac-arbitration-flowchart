// Main process data with improved positioning
var mainProcessData = {
  nodes: [
    // Phase 1: Commencement
    {
      id: "start",
      name: "Start Arbitration",
      symbolSize: 50,
      symbol: "circle",
      category: 0,
      x: 0,
      y: 0,
      value:
        "Starting point of the arbitration process. The Claimant initiates the proceedings by submitting a Request for Arbitration to the OAC.",
    },

    {
      id: "request",
      name: "Submit Request for Arbitration",
      symbolSize: 40,
      category: 0,
      x: 150,
      y: 0,
      value:
        "The Claimant must submit a formal Request including: demand for arbitration, party details, arbitration agreement, contract copy, dispute description, relief sought, procedural proposals, arbitrator nomination (if applicable), applicable law, language/seat proposals, and registration fee payment.",
      article: "Articles 4.1-4.3",
    },

    {
      id: "notify",
      name: "Notify Respondent",
      symbolSize: 40,
      category: 2,
      x: 300,
      y: 0,
      value:
        "The OAC Registrar notifies the Respondent of receipt of the Request for Arbitration and transmits a copy to them.",
      article: "Article 4.1",
    },

    {
      id: "check_jurisdiction",
      name: "Check Jurisdiction",
      symbolSize: 40,
      category: 2,
      x: 300,
      y: 100,
      value:
        "The Executive Committee reviews the Request to confirm that OAC has jurisdiction. If OAC manifestly lacks jurisdiction, the Committee may decide not to proceed.",
      article: "Article 4.4",
    },

    {
      id: "response",
      name: "Prepare Response",
      symbolSize: 40,
      category: 1,
      x: 450,
      y: 0,
      value:
        "Within 21 days (extendable by 14 days), the Respondent submits a Response including: Respondent details, confirmation/denial of claims, jurisdictional objections if any, comments on Claimant's proposals, and arbitrator nomination if applicable.",
      article: "Article 5.1, 5.4",
    },

    {
      id: "counterclaim",
      name: "Optional: Counterclaim",
      symbolSize: 30,
      category: 1,
      x: 450,
      y: 100,
      value:
        "The Respondent may submit a counterclaim with details of: nature, circumstances, relief sought, amount, relevant agreements, and a registration fee payment.",
      article: "Article 5.6, 43.1",
    },

    {
      id: "receive_response",
      name: "Process Response",
      symbolSize: 40,
      category: 2,
      x: 600,
      y: 0,
      value:
        "The OAC Registrar processes the Response and any Counterclaim, verifies fee payment for counterclaims, and communicates these documents to the Claimant.",
      article: "Article 5.5",
    },

    {
      id: "reply",
      name: "Reply to Counterclaim",
      symbolSize: 40,
      category: 0,
      x: 750,
      y: 0,
      value:
        "If a counterclaim was filed, the Claimant has 21 days (extendable by 14 days) to submit a Reply including facts, legal grounds, and relief sought in response to the counterclaim.",
      article: "Article 5.7",
    },

    // Phase 2: Tribunal Constitution
    {
      id: "determine_arbitrators",
      name: "Determine Number of Arbitrators",
      symbolSize: 40,
      category: 2,
      x: 750,
      y: 100,
      value:
        "If not specified in the arbitration agreement and the parties haven't agreed within 21 days, the Executive Committee determines the number of arbitrators.",
      article: "Article 10.2",
    },

    {
      id: "nominate_arbitrators",
      name: "Nomination Process",
      symbolSize: 40,
      category: 2,
      x: 900,
      y: 0,
      value:
        "For sole arbitrator: parties nominate jointly or OAC appoints. For three arbitrators: each party nominates one, co-arbitrators nominate president or OAC appoints.",
      article: "Article 11",
    },

    {
      id: "appoint_arbitrators",
      name: "Send Appointment Notice",
      symbolSize: 40,
      category: 2,
      x: 1050,
      y: 0,
      value:
        "The OAC Registrar sends notice of appointment to the arbitrator nominees.",
      article: "Article 12.1",
    },

    {
      id: "accept_appointment",
      name: "Accept Appointment",
      symbolSize: 40,
      category: 3,
      x: 1200,
      y: 0,
      value:
        "Arbitrators must accept within 7 days by submitting a written declaration confirming impartiality and independence, disclosing any circumstances that might cause doubt.",
      article: "Article 12.3",
    },

    {
      id: "tribunal_constitution",
      name: "Tribunal Constitution Complete",
      symbolSize: 40,
      category: 3,
      x: 1350,
      y: 0,
      value:
        "The Arbitral Tribunal is officially constituted once all arbitrators are appointed, have accepted, and any challenges are resolved. This occurs by an act dated and signed by the arbitrators.",
      article: "Article 20.3",
    },

    // Phase 3: Fees & File Transmission
    {
      id: "calculate_fees",
      name: "Calculate & Request Fees",
      symbolSize: 40,
      category: 2,
      x: 1350,
      y: 100,
      value:
        "The Registrar calculates administrative fees based on claim/counterclaim values and determines the deposit amount required to cover tribunal fees and expenses.",
      article: "Article 44.1, 45.1, 45.2",
    },

    {
      id: "pay_fees",
      name: "Pay Fees",
      symbolSize: 40,
      category: 5,
      x: 1500,
      y: 100,
      value:
        "Parties must pay fees within 14 days. Failure may lead to suspension/termination of proceedings or deemed withdrawal of claims.",
      article: "Article 44.5, 45.3, 45.4",
    },

    {
      id: "transmit_file",
      name: "Transmit File to Tribunal",
      symbolSize: 40,
      category: 2,
      x: 1500,
      y: 0,
      value:
        "Once fees are paid in full, the Registrar transmits the complete case file (Request, Response, annexes, etc.) to the constituted Arbitral Tribunal.",
      article: "Article 21",
    },

    // Phase 4: Proceedings
    {
      id: "preliminary_meeting",
      name: "Preliminary Meeting & TOR",
      symbolSize: 40,
      category: 3,
      x: 1650,
      y: 0,
      value:
        "Within 14 days of receiving the file, the Tribunal contacts the parties to schedule a preliminary meeting. The Tribunal drafts and finalizes Terms of Reference (TOR) and establishes a procedural timetable.",
      article: "Article 28.1, 28.2",
    },

    {
      id: "statement_claim",
      name: "Statement of Claim",
      symbolSize: 40,
      category: 0,
      x: 1800,
      y: -100,
      value:
        "The Claimant submits a detailed Statement of Claim including facts, legal grounds, relief sought, and supporting documents according to the procedural timetable.",
      article: "Article 29.1",
    },

    {
      id: "statement_defence",
      name: "Statement of Defence",
      symbolSize: 40,
      category: 1,
      x: 1800,
      y: 0,
      value:
        "The Respondent submits a detailed Statement of Defence including facts, legal grounds, relief sought, and supporting documents according to the procedural timetable.",
      article: "Article 29.2",
    },

    {
      id: "reply_detailed",
      name: "Reply to Counterclaim",
      symbolSize: 40,
      category: 0,
      x: 1800,
      y: 100,
      value:
        "If applicable, the Claimant submits a Reply to any counterclaim according to the procedural timetable.",
      article: "Article 29.3",
    },

    {
      id: "conduct_proceedings",
      name: "Conduct of Proceedings",
      symbolSize: 50,
      category: 3,
      x: 1950,
      y: 0,
      value:
        "The Tribunal manages the proceedings, including submissions, evidence exchange, procedural matters, jurisdictional pleas, confidentiality, interim measures, document production, and other aspects of the case.",
      article: "Articles 25-35",
    },

    {
      id: "hearings",
      name: "Hold Hearings",
      symbolSize: 40,
      category: 3,
      x: 2100,
      y: 0,
      value:
        "If requested or deemed necessary, the Tribunal holds hearings with at least 7 days prior notice to the parties. The Tribunal manages witness and expert evidence.",
      article: "Article 30.2, 31, 32",
    },

    {
      id: "close_proceedings",
      name: "Close Proceedings",
      symbolSize: 40,
      category: 3,
      x: 2250,
      y: 0,
      value:
        "When the Tribunal determines parties have had adequate opportunity to present their case, it declares the proceedings closed and notifies the parties and OAC Registrar.",
      article: "Article 36.1, 39.1",
    },

    // Phase 5: Award
    {
      id: "deliberate",
      name: "Deliberate & Draft Award",
      symbolSize: 40,
      category: 3,
      x: 2400,
      y: 0,
      value:
        "The Tribunal reviews all submissions and evidence, decides on the merits, and drafts a reasoned Award within 6 months from the date of the Terms of Reference, including decisions on costs allocation.",
      article: "Article 39.2, 40.1, 40.5, 42.1, 46",
    },

    {
      id: "sign_award",
      name: "Sign Award",
      symbolSize: 40,
      category: 3,
      x: 2550,
      y: 0,
      value:
        "The Award must be signed by the arbitrators. The president of the Tribunal must sign all pages. In a panel, decisions are made by majority.",
      article: "Article 40.2, 40.5",
    },

    {
      id: "transmit_award",
      name: "Transmit Award to OAC",
      symbolSize: 40,
      category: 3,
      x: 2700,
      y: 0,
      value:
        "The Tribunal transmits the signed Award to the Registrar. The Award is deemed made at the seat of arbitration on the date stated in it.",
      article: "Article 40.6",
    },

    {
      id: "communicate_award",
      name: "Communicate Award",
      symbolSize: 40,
      category: 2,
      x: 2850,
      y: 0,
      value:
        "The Registrar communicates the original Award to the parties and processes the return of any unexpended cost deposits.",
      article: "Article 40.6, 45.5",
    },

    {
      id: "receive_award",
      name: "Receive Award",
      symbolSize: 40,
      category: 5,
      x: 2850,
      y: 100,
      value:
        "The parties receive the Award, which is binding and must be carried out without delay. Parties may only challenge it through an action for nullity.",
      article: "Article 40.8",
    },

    // Phase 6: Post-Award (separate view)
    {
      id: "post_award",
      name: "Post-Award Actions",
      symbolSize: 40,
      category: 5,
      x: 3000,
      y: 0,
      value:
        "Optional: Parties may request Interpretation, Correction, or Additional Award within 28 days of receipt.",
      article: "Article 41.1, 41.2, 41.4",
    },

    {
      id: "end",
      name: "End",
      symbolSize: 50,
      symbol: "circle",
      category: 5,
      x: 3150,
      y: 0,
      value: "Conclusion of the arbitration process.",
    },
  ],
  links: [
    // Phase connections
    {
      source: "start",
      target: "request",
      label: { show: false, formatter: "Initiates" },
    },
    { source: "request", target: "notify" },
    { source: "notify", target: "check_jurisdiction" },
    {
      source: "check_jurisdiction",
      target: "response",
      label: { show: true, formatter: "If jurisdiction exists" },
    },
    {
      source: "response",
      target: "counterclaim",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "Optional" },
    },
    { source: "response", target: "receive_response" },
    { source: "counterclaim", target: "receive_response" },
    {
      source: "receive_response",
      target: "reply",
      label: { show: true, formatter: "If counterclaim filed" },
    },
    {
      source: "receive_response",
      target: "determine_arbitrators",
      label: { show: true, formatter: "No counterclaim" },
    },
    { source: "reply", target: "determine_arbitrators" },
    { source: "determine_arbitrators", target: "nominate_arbitrators" },
    { source: "nominate_arbitrators", target: "appoint_arbitrators" },
    { source: "appoint_arbitrators", target: "accept_appointment" },
    { source: "accept_appointment", target: "tribunal_constitution" },
    { source: "tribunal_constitution", target: "calculate_fees" },
    { source: "calculate_fees", target: "pay_fees" },
    {
      source: "pay_fees",
      target: "transmit_file",
      label: { show: true, formatter: "When paid in full" },
    },
    { source: "transmit_file", target: "preliminary_meeting" },
    {
      source: "preliminary_meeting",
      target: "statement_claim",
      label: { show: false, formatter: "Per timetable" },
    },
    {
      source: "preliminary_meeting",
      target: "statement_defence",
      label: { show: false, formatter: "Per timetable" },
    },
    {
      source: "preliminary_meeting",
      target: "reply_detailed",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "If counterclaim exists" },
    },
    { source: "statement_claim", target: "conduct_proceedings" },
    { source: "statement_defence", target: "conduct_proceedings" },
    { source: "reply_detailed", target: "conduct_proceedings" },
    {
      source: "conduct_proceedings",
      target: "hearings",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "If requested/needed" },
    },
    { source: "hearings", target: "close_proceedings" },
    {
      source: "conduct_proceedings",
      target: "close_proceedings",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "Doc-only possible" },
    },
    { source: "close_proceedings", target: "deliberate" },
    { source: "deliberate", target: "sign_award" },
    { source: "sign_award", target: "transmit_award" },
    { source: "transmit_award", target: "communicate_award" },
    { source: "communicate_award", target: "receive_award" },
    {
      source: "receive_award",
      target: "post_award",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "Optional" },
    },
    { source: "post_award", target: "end" },
    {
      source: "receive_award",
      target: "end",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "If no post-award actions" },
    },
  ],
};
