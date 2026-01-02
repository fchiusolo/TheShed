// mock-data.js
// Static mock data for Reality Check MVP
// This file intentionally contains a very small dataset

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
      brutal: "Arrivarci è complicato e quello che trovi non corrisponde alle aspettative create online.",
      confidence: "high"
    },
    sections: {
      real_value: {
        points: [
          "Non è un vero canyon, ma una formazione molto piccola",
          "L’esperienza dura pochi minuti",
          "Spesso affollato e poco curato"
        ],
        data_strength: "strong"
      },
      context: {
        points: [
          "Necessario arrivare molto presto al mattino",
          "Peggiora notevolmente nei weekend"
        ],
        data_strength: "strong"
      },
      hidden_costs: {
        points: [
          "Tempo elevato per raggiungerlo",
          "Difficoltà di parcheggio"
        ],
        data_strength: "strong"
      },
      concrete_risks: {
        points: [
          "Percorsi pericolosi se si prende il sentiero sbagliato",
          "Segnalazioni di furti e auto danneggiate"
        ],
        data_strength: "strong"
      }
    },
    fit: {
      not_for_you_if: [
        "Ti aspetti una grande meraviglia naturale",
        "Hai poco tempo o margine di errore",
        "Non sei ben attrezzato"
      ],
      good_choice_if: [
        "Sei consapevole dei limiti",
        "Cerchi solo uno spot fotografico",
        "Hai esperienza in percorsi simili"
      ]
    },
    impact: {
      energy_required: "high",
      frustration_potential: "high"
    },
    assumptions: {
      common_assumptions: [
        "Assomiglia al Grand Canyon",
        "È facile da raggiungere",
        "Vale la deviazione"
      ],
      when_assumptions_break: [
        "Quando si scopre che il luogo è molto piccolo e difficile da raggiungere"
      ]
    },
    alternatives: {
      suggested: ["Roque Nublo"],
      note: "Sull’isola esistono alternative più accessibili e sicure."
    },
    closing: {
      text: "Il problema non è andarci. È andarci senza sapere a cosa si va incontro.",
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
      brutal: "È un vicolo corto con qualche pianta, reso famoso quasi esclusivamente dai social.",
      confidence: "high"
    },
    sections: {
      real_value: {
        points: [
          "Strada molto breve",
          "Decorazioni minime",
          "Nessun elemento particolarmente distintivo"
        ],
        data_strength: "strong"
      },
      context: {
        points: [
          "Fuori dal centro principale",
          "Atmosfera spenta in certi periodi dell’anno"
        ],
        data_strength: "strong"
      },
      hidden_costs: {
        points: [
          "Tempo perso per raggiungerla",
          "Opportunity cost rispetto ad altre zone di Lisbona"
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
        "Devi fare uno spostamento dedicato",
        "Hai poco tempo in città"
      ],
      good_choice_if: [
        "Ci passi già vicino",
        "Non hai aspettative"
      ]
    },
    impact: {
      energy_required: "medium",
      frustration_potential: "high"
    },
    assumptions: {
      common_assumptions: [
        "È una vera attrazione",
        "Vale una deviazione"
      ],
      when_assumptions_break: [
        "Quando ci si rende conto che è solo una strada qualunque"
      ]
    },
    alternatives: {
      suggested: [],
      note: "Lisbona offre molte strade più autentiche e interessanti."
    },
    closing: {
      text: "Il rischio non è perdersela, ma perdere tempo quando c’è molto di meglio.",
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
      brutal: "Senza una strategia chiara, il museo risulta dispersivo, stancante e frustrante.",
      confidence: "high"
    },
    sections: {
      real_value: {
        points: [
          "Collezione enorme",
          "Difficile da comprendere senza guida o preparazione"
        ],
        data_strength: "strong"
      },
      context: {
        points: [
          "Affollamento costante",
          "Sale che chiudono prima dell’orario ufficiale"
        ],
        data_strength: "strong"
      },
      hidden_costs: {
        points: [
          "Tempo perso in file",
          "Stanchezza mentale e fisica"
        ],
        data_strength: "strong"
      },
      concrete_risks: {
        points: [
          "Impossibilità di entrare senza prenotazione online",
          "Visita compromessa se si entra tardi"
        ],
        data_strength: "strong"
      }
    },
    fit: {
      not_for_you_if: [
        "Vuoi una visita spontanea",
        "Hai poche ore a disposizione"
      ],
      good_choice_if: [
        "Pianifichi in anticipo",
        "Sai cosa vuoi vedere"
      ]
    },
    impact: {
      energy_required: "high",
      frustration_potential: "high"
    },
    assumptions: {
      common_assumptions: [
        "È un museo come gli altri",
        "Basta entrare e girare"
      ],
      when_assumptions_break: [
        "Quando ci si rende conto delle dimensioni e della disorganizzazione"
      ]
    },
    alternatives: {
      suggested: [],
      note: ""
    },
    closing: {
      text: "Il Louvre va affrontato con un piano. Senza, rischia di essere solo estenuante.",
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
      brutal: "Trappola per turisti molto circoscritta, con rischi reali fuori dal percorso principale.",
      confidence: "high"
    },
    sections: {
      real_value: {
        points: [
          "Area molto piccola",
          "Esperienza fortemente costruita"
        ],
        data_strength: "strong"
      },
      context: {
        points: [
          "Funziona solo in orari turistici",
          "Peggiora rapidamente fuori dal percorso principale"
        ],
        data_strength: "strong"
      },
      hidden_costs: {
        points: [
          "Prezzi molto elevati",
          "Pressioni continue da venditori"
        ],
        data_strength: "strong"
      },
      concrete_risks: {
        points: [
          "Zone limitrofe percepite come pericolose",
          "Difficoltà a trovare trasporti sicuri"
        ],
        data_strength: "strong"
      }
    },
    fit: {
      not_for_you_if: [
        "Vuoi esplorare liberamente",
        "Viaggi da solo",
        "Cerchi autenticità"
      ],
      good_choice_if: [
        "Resti poco tempo",
        "Sai che è solo una parentesi turistica"
      ]
    },
    impact: {
      energy_required: "high",
      frustration_potential: "high"
    },
    assumptions: {
      common_assumptions: [
        "È un quartiere da visitare liberamente",
        "È sicuro perché turistico"
      ],
      when_assumptions_break: [
        "Quando ci si allontana dal percorso guidato"
      ]
    },
    alternatives: {
      suggested: [],
      note: ""
    },
    closing: {
      text: "Non è pericoloso in assoluto, ma lo diventa se lo vivi come un quartiere normale.",
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
      brutal: "Le poche critiche riflettono gusti personali, non problemi strutturali del luogo.",
      confidence: "medium"
    },
    sections: {
      real_value: {
        points: [
          "Esperienza naturale e isolata",
          "Ritmo lento e minimale"
        ],
        data_strength: "strong"
      },
      context: {
        points: [
          "Adatto solo a chi ama natura e semplicità"
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
        "Cerchi comfort e servizi",
        "Hai bisogno di molte attività"
      ],
      good_choice_if: [
        "Ami isolamento e natura",
        "Accetti semplicità e lentezza"
      ]
    },
    impact: {
      energy_required: "low",
      frustration_potential: "low"
    },
    assumptions: {
      common_assumptions: [
        "È remoto e spartano"
      ],
      when_assumptions_break: []
    },
    alternatives: {
      suggested: [],
      note: ""
    },
    closing: {
      text: "Funziona perché non cerca di piacere a tutti.",
      tone: "neutral"
    },
    meta: {
      source_type: "online_reviews",
      review_volume: "very_low",
      last_updated: "2026-01-02"
    }
  }
];

// Export for usage in script.js
// (adjust if using modules or global scope)
