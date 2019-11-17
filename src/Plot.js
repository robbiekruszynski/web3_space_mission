export const plot = [
  {
    name: "Piloting",
    text: [
      "You've spent countless hours in the cockpit of this ship, but the controls are completely dead. If you fix the rest of the ship, you could start the engines and return home.",
      "You start the launch sequence, and the motors thrum back to full power. The control panel fades to life, and your home coordinates are plotted successfully. You reflect wistfully on the efforts it's taken to get here, and the efforts to come."
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
      "The ship's Navigation Room is critical for the hyperdrive to function. Without accurate scanning of the surrounding space, the ship is sure to crash into space debris. The wiring seems to have been torn during the explosion, but it looks reparable.",
      "The familiar PING of the radar resounds through the room like a metronome, showing nearby obstructions. It looks like you'll have a safe journey, if the ship is in any shape to fly."
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
      "It looks like the explosion started in here. With the engines gone, the ship is just floating dead in the water. Luckily, the unobtainium-plated gears survived the blast. You identify a now-deceased dreadrat caught in the mechanism as the cause of the disruption.",
      "With the dreadrat removed, the gears glide into regular motion, and the magnetos resume their perpetual humming. You never thought you'd be glad to hear that again."
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
      "You're almost thankful the rest of the ship is in shambles. Without the primary shielding, you can only imagine the horrors that would be wrought upon you without the Gellar Field masking the ship from the terrible Warp. With doleful reverance, you set about arranging the idols in the Forbidden Shrine",
      "The last monument in place, you stand in the shine, hesitant to take a single breath. A silent prayer echoes eternally through the hall, bestowing safe passage from the demons that haunt the eternal void."
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
      "Without the radio tower, the Federation would surely strike your ship down as an enemy advance. Although the receivers are strewn about the floor, they should be easy enough to will back into place.",
      "The microphones now all in their assigned places, you place a test call into the aether. All you hear in return is the empty ringing of cosmic background noise, but you feel safe knowing you allies can receive your hails."
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
      "It seems the self-healing Faraday outercage was knocked offline when the backup generator kicked in. Without it, solar electromagnetic waves will interfere with the ship's routing sequence, sending you wildly off-course. You need to manually override the power delegations to restore power here.",
      "Smooth tendrils of copper and aluminum snake out from the main detector, auto-correcting to provide maximum shielding from electromagnetic interferences."
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
      "The ion thrusters remain dormant, waiting to push the ship into the unknown. However, it appears the fuel lines were untethered in the explosion. With the right effort, they might be wrangled back into place.",
      "With the fuel lines connected, the thrusters lay ready to put the ship beyond the limits of space and time. All they require is the ignition's command."
    ],
    connections: [
      {
        4: "Communications"
      }
    ],
    repair: false
  }
];
