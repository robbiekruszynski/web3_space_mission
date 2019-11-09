export const plot = [
  {
    id: 0,
    text: ["Initial Room Text","Fixed Room Text"],
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
    id: 1,
    text: ["Initial Room Text","Fixed Room Text"],
    connections: [
      {
        0: "Piloting"
      }
    ],
    repair: false
  },
  {
    id: 2,
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
    id: 3,
    text: ["Initial Room Text","Fixed Room Text"],
    connections: [
      {
        1: "Communications"
      }
    ],
    repair: false
  },
  {
    id: 4,
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
    id: 5,
    text: ["Initial Room Text","Fixed Room Text"],
    connections: [
      {
        4: "Communications"
      }
    ],
    repair: false
  },
  {
    id: 6,
    text: ["Initial Room Text","Fixed Room Text"],
    connections: [
      {
        4: "Communications"
      }
    ],
    repair: false
  },
];
