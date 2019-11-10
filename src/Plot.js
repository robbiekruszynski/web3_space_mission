export const plot = [
  {
    name: "Piloting",
    text: [
      "Initial Piloting Room Text",
      "Fixed Piloting Room Text (never visible, game ends when it's fixed)"
    ],
    connections: [
      {
        1: "Navigation"
      },
      {
        2: "Engine"
      }
    ],
    repair: false
  },
  {
    name: "Navigation",
    text: ["Initial Room Text", "Fixed Room Text"],
    connections: [
      {
        0: "Piloting"
      }
    ],
    repair: false
  },
  {
    name: "Engine",
    text: ["Initial Room Text", "Fixed Room Text"],
    connections: [
      {
        0: "Piloting"
      },
      {
        4: "Communications"
      }
    ],
    repair: false
  },
  {
    name: "Primary Shield",
    text: ["Initial Room Text", "Fixed Room Text"],
    connections: [
      {
        4: "Communications"
      }
    ],
    repair: false
  },
  {
    name: "Communications",
    text: ["Initial Room Text", "Fixed Room Text"],
    connections: [
      {
        2: "Engine"
      },
      {
        3: "git "
      },
      {
        5: "Secondary Shield"
      },
      {
        6: "Thruster"
      }
    ],
    repair: false
  },
  {
    name: "Secondary Shield",
    text: ["Initial Room Text", "Fixed Room Text"],
    connections: [
      {
        4: "Communications"
      }
    ],
    repair: false
  },
  {
    name: "Thruster",
    text: ["Initial Room Text", "Fixed Room Text"],
    connections: [
      {
        4: "Communications"
      }
    ],
    repair: false
  }
];
