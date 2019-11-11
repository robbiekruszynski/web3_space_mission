export const plot = [
  {
    name: "Piloting",
    text: [
      "Initial Piloting Room Text",
      "Fixed Piloting Room Text"
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
    text: [
      "You are in the NAVIGATION room",
      "Fixed Navigation room"
    ],
    connections: [
      {
        0: "Piloting"
      }
    ],
    repair: false
  },
  {
    name: "Engine",
    text: [
      "You are in the Engine room",
      "Fixed Engine room text"
    ],
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
    text: [
      "Initial Room Text",
      "Fixed Room Text"
    ],
    connections: [
      {
        4: "Communications"
      }
    ],
    repair: false
  },
  {
    name: "Communications",
    text: [
      "You are in the Communications room",
      "Fixed Communications room"
    ],
    connections: [
      {
        2: "Engine"
      },
      {
        3: "Primary Shield"
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
    text: [
      "Initial Secondary Room Text",
      "Fixed Secondary room"
    ],
    connections: [
      {
        4: "Communications"
      }
    ],
    repair: false
  },
  {
    name: "Thruster",
    text: [
      "Initial Thruster room Text",
      "Fixed Thruster room"
    ],
    connections: [
      {
        4: "Communications"
      }
    ],
    repair: false
  }
];
