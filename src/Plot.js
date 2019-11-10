export const plot = [
<<<<<<< HEAD
  "Room 1 Plot this is a test to check render",
  "Room 2 Plot",
  "Room 3 Plot",
  "Room 4 Plot",
  "Room 5 Plot",
  "Room 6 Plot"
=======
  {
    name: "Piloting",
    text: ["Initial Piloting Room Text","Fixed Piloting Room Text (never visible, game ends when it's fixed)"],
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
    text: ["Initial Room Text","Fixed Room Text"],
    connections: [
      {
        0: "Piloting"
      }
    ],
    repair: false
  },
  {
    name: "Engine",
    text: ["Initial Room Text","Fixed Room Text"],
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
    text: ["Initial Room Text","Fixed Room Text"],
    connections: [
      {
        4: "Communications"
      }
    ],
    repair: false
  },
  {
    name: "Communications",
    text: ["Initial Room Text","Fixed Room Text"],
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
      },
    ],
    repair: false
  },
  {
    name: "Secondary Shield",
    text: ["Initial Room Text","Fixed Room Text"],
    connections: [
      {
        4: "Communications"
      }
    ],
    repair: false
  },
  {
    name: "Thruster",
    text: ["Initial Room Text","Fixed Room Text"],
    connections: [
      {
        4: "Communications"
      }
    ],
    repair: false
  },
>>>>>>> master
];
