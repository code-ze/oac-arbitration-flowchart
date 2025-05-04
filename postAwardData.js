// Post-Award Actions data
var postAwardData = {
  nodes: [
    {
      id: "pa_start",
      name: "Award Received",
      symbolSize: 50,
      symbol: "circle",
      category: 5,
      x: 0,
      y: 0,
      value:
        "The parties receive the Final Award from the OAC Registrar. This starts the 28-day time period for post-award actions.",
      article: "Article 41.1, 41.2, 41.4",
    },

    {
      id: "pa_correction",
      name: "Request Correction",
      symbolSize: 40,
      category: 5,
      x: 200,
      y: -100,
      value:
        "Within 28 days of receipt, a party may request the Tribunal to correct computational, clerical, typographical or similar errors in the Award.",
      article: "Article 41.1",
    },

    {
      id: "pa_interpretation",
      name: "Request Interpretation",
      symbolSize: 40,
      category: 5,
      x: 200,
      y: 0,
      value:
        "Within 28 days of receipt, a party may request the Tribunal to give an interpretation of a specific point or part of the Award.",
      article: "Article 41.2",
    },

    {
      id: "pa_additional",
      name: "Request Additional Award",
      symbolSize: 40,
      category: 5,
      x: 200,
      y: 100,
      value:
        "Within 28 days of receipt, a party may request the Tribunal to make an additional award as to claims presented but omitted from the Award.",
      article: "Article 41.4",
    },

    {
      id: "pa_notify_correction",
      name: "Notify Other Party",
      symbolSize: 40,
      category: 2,
      x: 400,
      y: -100,
      value:
        "The Registrar notifies the other party of the correction request and gives them opportunity to comment.",
      article: "Article 41.1",
    },

    {
      id: "pa_notify_interpretation",
      name: "Notify Other Party",
      symbolSize: 40,
      category: 2,
      x: 400,
      y: 0,
      value:
        "The Registrar notifies the other party of the interpretation request and gives them opportunity to comment.",
      article: "Article 41.2",
    },

    {
      id: "pa_notify_additional",
      name: "Notify Other Party",
      symbolSize: 40,
      category: 2,
      x: 400,
      y: 100,
      value:
        "The Registrar notifies the other party of the additional award request and gives them opportunity to comment.",
      article: "Article 41.4",
    },

    {
      id: "pa_decide_correction",
      name: "Decide on Correction",
      symbolSize: 40,
      category: 3,
      x: 600,
      y: -100,
      value:
        "The Tribunal decides on the correction within 28 days of receiving the request. A correction becomes part of the Award.",
      article: "Article 41.1",
    },

    {
      id: "pa_decide_interpretation",
      name: "Decide on Interpretation",
      symbolSize: 40,
      category: 3,
      x: 600,
      y: 0,
      value:
        "The Tribunal decides on the interpretation within 28 days of receiving the request. An interpretation becomes part of the Award.",
      article: "Article 41.2",
    },

    {
      id: "pa_decide_additional",
      name: "Decide on Additional Award",
      symbolSize: 40,
      category: 3,
      x: 600,
      y: 100,
      value:
        "The Tribunal decides on the additional award within 56 days of receiving the request. The additional award follows the same requirements as the original Award.",
      article: "Article 41.4, 41.5",
    },

    {
      id: "pa_tribunal_correction",
      name: "Tribunal Initiative Correction",
      symbolSize: 40,
      category: 3,
      x: 200,
      y: -200,
      value:
        "The Tribunal may correct computational, clerical, typographical or similar errors on its own initiative within 28 days of the date of the Award.",
      article: "Article 41.1",
    },

    {
      id: "pa_correction_award",
      name: "Issue Correction",
      symbolSize: 40,
      category: 3,
      x: 800,
      y: -100,
      value:
        "The Tribunal issues the correction to the Award, which becomes an integral part of the Award.",
      article: "Article 41.1",
    },

    {
      id: "pa_interpretation_award",
      name: "Issue Interpretation",
      symbolSize: 40,
      category: 3,
      x: 800,
      y: 0,
      value:
        "The Tribunal issues the interpretation, which becomes an integral part of the Award.",
      article: "Article 41.2, 41.3",
    },

    {
      id: "pa_additional_award",
      name: "Issue Additional Award",
      symbolSize: 40,
      category: 3,
      x: 800,
      y: 100,
      value:
        "The Tribunal issues the additional award addressing the claims omitted from the original Award.",
      article: "Article 41.4, 41.5",
    },

    {
      id: "pa_communicate_correction",
      name: "Communicate to Parties",
      symbolSize: 40,
      category: 2,
      x: 1000,
      y: -100,
      value: "The OAC Registrar communicates the correction to the parties.",
      article: "Article 41.1",
    },

    {
      id: "pa_communicate_interpretation",
      name: "Communicate to Parties",
      symbolSize: 40,
      category: 2,
      x: 1000,
      y: 0,
      value:
        "The OAC Registrar communicates the interpretation to the parties.",
      article: "Article 41.2, 41.3",
    },

    {
      id: "pa_communicate_additional",
      name: "Communicate to Parties",
      symbolSize: 40,
      category: 2,
      x: 1000,
      y: 100,
      value:
        "The OAC Registrar communicates the additional award to the parties.",
      article: "Article 41.4, 41.5",
    },

    {
      id: "pa_nullity",
      name: "Optional: Action for Nullity",
      symbolSize: 40,
      category: 5,
      x: 500,
      y: 200,
      value:
        "A party may seek to have the award set aside through an action for nullity in the state courts at the seat of arbitration.",
      article: "Article 40.8",
    },

    {
      id: "pa_enforcement",
      name: "Award Enforcement",
      symbolSize: 40,
      category: 5,
      x: 1200,
      y: 0,
      value:
        "The Final Award (including any corrections, interpretations, or additional awards) is binding and must be carried out without delay.",
      article: "Article 40.8",
    },

    {
      id: "pa_end",
      name: "End of Process",
      symbolSize: 50,
      symbol: "circle",
      category: 5,
      x: 1400,
      y: 0,
      value: "The arbitration process is completely finalized.",
    },
  ],
  links: [
    {
      source: "pa_start",
      target: "pa_correction",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "Optional" },
    },
    {
      source: "pa_start",
      target: "pa_interpretation",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "Optional" },
    },
    {
      source: "pa_start",
      target: "pa_additional",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "Optional" },
    },
    {
      source: "pa_start",
      target: "pa_tribunal_correction",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "Tribunal initiative" },
    },
    {
      source: "pa_start",
      target: "pa_nullity",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "Optional" },
    },
    {
      source: "pa_start",
      target: "pa_enforcement",
      label: { show: true, formatter: "If no post-award requests" },
    },

    { source: "pa_correction", target: "pa_notify_correction" },
    { source: "pa_interpretation", target: "pa_notify_interpretation" },
    { source: "pa_additional", target: "pa_notify_additional" },

    { source: "pa_notify_correction", target: "pa_decide_correction" },
    { source: "pa_notify_interpretation", target: "pa_decide_interpretation" },
    { source: "pa_notify_additional", target: "pa_decide_additional" },
    { source: "pa_tribunal_correction", target: "pa_correction_award" },

    { source: "pa_decide_correction", target: "pa_correction_award" },
    { source: "pa_decide_interpretation", target: "pa_interpretation_award" },
    { source: "pa_decide_additional", target: "pa_additional_award" },

    { source: "pa_correction_award", target: "pa_communicate_correction" },
    {
      source: "pa_interpretation_award",
      target: "pa_communicate_interpretation",
    },
    { source: "pa_additional_award", target: "pa_communicate_additional" },

    { source: "pa_communicate_correction", target: "pa_enforcement" },
    { source: "pa_communicate_interpretation", target: "pa_enforcement" },
    { source: "pa_communicate_additional", target: "pa_enforcement" },
    {
      source: "pa_nullity",
      target: "pa_enforcement",
      lineStyle: { type: "dashed" },
      label: { show: true, formatter: "If challenge fails" },
    },

    { source: "pa_enforcement", target: "pa_end" },
  ],
};
