// mock-data.js
// Static mock data for Reality Check MVP
// This dataset is intentionally small and manually curated

const REALITY_CHECKS = [
  {
    id: "barranco-de-las-vacas",
    place: {
      name: "Barranco de las Vacas",
      city: "",
      country: "Spain",
      type: "natural_site"
    },
    risk: {
      experience: "high",
      logistics: "high",
      safety: "high"
    },
    summary: {
      brutal: "Getting there is complicated and the place does not match the expectations created online.",
      confidence: "high"
    },
    sections: {
      real_value: {
        points: [
          "It is not a real canyon, but a very small rock formation",
          "The visit lasts only a few minutes",
          "Often crowded and poorly maintained"
        ],
        data_strength: "strong"
      },
      context: {
        points: [
          "You need to arrive very early in the morning",
          "The experience worsens significantly on weekends"
        ],
        data_strength: "strong"
      },
      hidden_costs: {
        points: [
          "High time investment to reach the area",
          "Parking is difficult and unreliable"
        ],
        data_strength: "strong"
      },
      concrete_risks: {
        points: [
          "Dangerous paths if the wrong trail is taken",
          "Reports of theft and damaged cars"
        ],
        data_strength: "strong"
      }
    },
    fit: {
      not_for_you_if: [
        "You expect a major natural wonder",
        "You have limited time or flexibility",
        "You are not well equipped"
      ],
      good_choice_if: [
        "You are aware of its limitations",
        "You are only looking for a photo spot",
        "You have experience with similar terrain"
      ]
    },
    impact: {
      energy_required: "high",
      frustration_potential: "high"
    },
    assumptions: {
      common_assumptions: [
        "It looks like the Grand Canyon",
        "It is easy to reach",
        "It is worth the detour"
      ],
      when_assumptions_break: [
        "When you realize how small and difficult to access the site actually is"
      ]
    },
    alternatives: {
      suggested: ["Roque Nublo"],
      note: "There are safer and more accessible alternatives on the island."
    },
    closing: {
      text: "The issue is not going. It is going without knowing what to expect.",
      tone: "direct"
    },
    meta: {
      source_type: "mixed",
      review_volume: "medium",
      last_updated: "2026-01-02"
    }
  },

  {
    id: "green-street-lisbon",
    place: {
      name: "Green Street",
      city: "Lisbon",
      country: "Portugal",
      type: "instagram_spot"
    },
    risk: {
      experience: "high",
      logistics: "medium",
      safety: "medium"
    },
    summary: {
      brutal: "A very short street with minimal decoration, made famous almost exclusively by social media.",
      confidence: "high"
    },
    sections: {
      real_value: {
        points: [
          "Very short street",
          "Minimal decorations",
          "Nothing particularly distinctive"
        ],
        data_strength: "strong"
      },
      context: {
        points: [
          "Located outside the main tourist center",
          "Atmosphere can feel empty depending on the season"
        ],
        data_strength: "strong"
      },
      hidden_costs: {
        points: [
          "Time wasted reaching the area",
          "High opportunity cost compared to other parts of Lisbon"
        ],
        data_strength: "strong"
      },
      concrete_risks: {
        points: [],
        data_strength: "insufficient"
      }
    },
    fit: {
      not_for_you_if: [
        "You need to go out of your way to reach it",
        "You have limited time in the city"
      ],
      good_choice_if: [
        "You are already nearby",
        "You have no expectations"
      ]
    },
    impact: {
      energy_required: "medium",
      frustration_potential: "high"
    },
    assumptions: {
      common_assumptions: [
        "It is a real attraction",
        "It is worth a detour"
      ],
      when_assumptions_break: [
        "When you realize it is just an ordinary street"
      ]
    },
    alternatives: {
      suggested: [],
      note: "Lisbon offers many more authentic and interesting streets."
    },
    closing: {
      text: "The risk is not missing it, but wasting time when there is much better nearby.",
      tone: "direct"
    },
    meta: {
      source_type: "online_reviews",
      review_volume: "high",
      last_updated: "2026-01-02"
    }
  },

  {
    id: "louvre-paris",
    place: {
      name: "Louvre Museum",
      city: "Paris",
      country: "France",
      type: "museum"
    },
    risk: {
      experience: "high",
      logistics: "high",
      safety: "not_applicable"
    },
    summary: {
      brutal: "Without a clear strategy, the visit becomes overwhelming, exhausting, and frustrating.",
      confidence: "high"
    },
    sections: {
      real_value: {
        points: [
          "Massive collection",
          "Difficult to understand without preparation or a guide"
        ],
        data_strength: "strong"
      },
      context: {
        points: [
          "Constant overcrowding",
          "Some areas close before official closing time"
        ],
        data_strength: "strong"
      },
      hidden_costs: {
        points: [
          "Long queues",
          "High physical and mental fatigue"
        ],
        data_strength: "strong"
      },
      concrete_risks: {
        points: [
          "No entry without online reservation",
          "Late entry significantly limits the visit"
        ],
        data_strength: "strong"
      }
    },
    fit: {
      not_for_you_if: [
        "You want a spontaneous visit",
        "You only have a few hours"
      ],
      good_choice_if: [
        "You plan ahead",
        "You know exactly what you want to see"
      ]
    },
    impact: {
      energy_required: "high",
      frustration_potential: "high"
    },
    assumptions: {
      common_assumptions: [
        "It is like any other museum",
        "You can just walk in and explore"
      ],
      when_assumptions_break: [
        "When you realize how large and disorganized it feels"
      ]
    },
    alternatives: {
      suggested: [],
      note: ""
    },
    closing: {
      text: "The Louvre requires a plan. Without one, it can easily become draining.",
      tone: "neutral"
    },
    meta: {
      source_type: "online_reviews",
      review_volume: "high",
      last_updated: "2026-01-02"
    }
  },

  {
    id: "caminito-buenos-aires",
    place: {
      name: "Caminito",
      city: "Buenos Aires",
      country: "Argentina",
      type: "neighborhood"
    },
    risk: {
      experience: "high",
      logistics: "medium",
      safety: "high"
    },
    summary: {
      brutal: "A very limited tourist area with real safety risks outside the main path.",
      confidence: "high"
    },
    sections: {
      real_value: {
        points: [
          "Very small area",
          "Highly staged experience"
        ],
        data_strength: "strong"
      },
      context: {
        points: [
          "Works only during peak tourist hours",
          "Conditions worsen quickly outside the main route"
        ],
        data_strength: "strong"
      },
      hidden_costs: {
        points: [
          "Overpriced food and souvenirs",
          "Constant pressure from vendors"
        ],
        data_strength: "strong"
      },
      concrete_risks: {
        points: [
          "Unsafe surrounding areas",
          "Difficulty finding reliable transportation"
        ],
        data_strength: "strong"
      }
    },
    fit: {
      not_for_you_if: [
        "You want to explore freely",
        "You are traveling alone",
        "You are looking for authenticity"
      ],
      good_choice_if: [
        "You keep the visit short",
        "You know it is purely a tourist stop"
      ]
    },
    impact: {
      energy_required: "high",
      frustration_potential: "high"
    },
    assumptions: {
      common_assumptions: [
        "It is a neighborhood you can explore freely",
        "It is safe because it is touristy"
      ],
      when_assumptions_break: [
        "When you step outside the controlled tourist area"
      ]
    },
    alternatives: {
      suggested: [],
      note: ""
    },
    closing: {
      text: "It is not dangerous by default, but it becomes risky if treated like a normal neighborhood.",
      tone: "direct"
    },
    meta: {
      source_type: "online_reviews",
      review_volume: "high",
      last_updated: "2026-01-02"
    }
  },

  {
    id: "cabo-polonio",
    place: {
      name: "Cabo Polonio",
      city: "",
      country: "Uruguay",
      type: "natural_site"
    },
    risk: {
      experience: "low",
      logistics: "medium",
      safety: "low"
    },
    summary: {
      brutal: "The few critical reviews reflect personal preferences rather than structural issues.",
      confidence: "medium"
    },
    sections: {
      real_value: {
        points: [
          "Remote and natural environment",
          "Slow and minimal lifestyle"
        ],
        data_strength: "strong"
      },
      context: {
        points: [
          "Suitable only for people who enjoy nature and simplicity"
        ],
        data_strength: "strong"
      },
      hidden_costs: {
        points: [],
        data_strength: "insufficient"
      },
      concrete_risks: {
        points: [],
        data_strength: "insufficient"
      }
    },
    fit: {
      not_for_you_if: [
        "You need comfort and services",
        "You expect many activities"
      ],
      good_choice_if: [
        "You enjoy isolation and nature",
        "You are comfortable with simplicity and slowness"
      ]
    },
    impact: {
      energy_required: "low",
      frustration_potential: "low"
    },
    assumptions: {
      common_assumptions: [
        "It is remote and basic"
      ],
      when_assumptions_break: []
    },
    alternatives: {
      suggested: [],
      note: ""
    },
    closing: {
      text: "It works precisely because it does not try to please everyone.",
      tone: "neutral"
    },
    meta: {
      source_type: "online_reviews",
      review_volume: "very_low",
      last_updated: "2026-01-02"
    }
  }
];

// Export or attach to window depending on usage
// Example:
// window.REALITY_CHECKS = REALITY_CHECKS;