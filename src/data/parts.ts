import type { Part } from "@/types"

const BATTERY_FIRST = "Disconnect the battery first."
const POWER_FIRST = "Unplug the power, and disconnect the battery if there is one."

export const parts: Record<string, Part> = {
  // Shared
  battery: {
    name: "Battery",
    note: "Lithium-ion cell. Can catch fire if bent or punctured.",
    hazard:
      "Do not bend, puncture, or heat the battery. Tape the contacts and take it to an e-waste drop-off.",
    steps: [
      "Power off the device and open the back cover.",
      "Unplug the battery connector from the board with a plastic tool.",
      "Remove any screws holding the battery.",
      "If it is glued, loosen the adhesive with gentle heat or a few drops of isopropyl alcohol.",
      "Lift the battery out slowly without bending it.",
    ],
  },
  fan: {
    name: "Fan",
    note: "Cooling fan. Plastic and a small motor.",
    steps: [
      POWER_FIRST,
      "Unplug the fan cable from the board.",
      "Remove the screws holding the fan.",
      "Lift the fan out.",
    ],
  },
  ram: {
    name: "RAM",
    note: "Memory stick. Small board with chips and gold contacts.",
    steps: [
      POWER_FIRST,
      "Push the clips at each end of the slot outward.",
      "The stick pops up at an angle.",
      "Pull it out by the edges.",
    ],
  },

  // Smartphone
  Speaker: {
    name: "Speaker",
    note: "Loudspeaker module. Contains a small magnet.",
    steps: [
      BATTERY_FIRST,
      "Remove the screws on the speaker cover or bracket.",
      "Unclip the speaker from its frame with a plastic tool.",
      "Lift the speaker out.",
    ],
  },
  board: {
    name: "Logic board",
    note: "Main circuit board. Holds the chips. Contains gold and copper.",
    steps: [
      BATTERY_FIRST,
      "Unclip every flex cable connected to the board.",
      "Remove the screws and shields holding the board.",
      "Lift the board out from one edge.",
    ],
  },
  camera: {
    name: "Camera",
    note: "Camera module. Often reusable.",
    steps: [
      BATTERY_FIRST,
      "Remove the bracket over the camera, if any.",
      "Unclip the camera flex cable from the board.",
      "Lift the module out.",
    ],
  },
  "charging-port": {
    name: "Charging port",
    note: "USB port on a small board or flex cable. Recyclable metal.",
    steps: [
      BATTERY_FIRST,
      "Remove the screws on the lower board.",
      "Unclip the port flex cable.",
      "Lift the port or lower board out.",
    ],
  },
  rvib: {
    name: "Round vibration motor",
    note: "Coin-shaped motor that makes the phone vibrate.",
    steps: [
      BATTERY_FIRST,
      "Unclip or unsolder its connector.",
      "Pry it off its adhesive with a plastic tool.",
    ],
  },
  svib: {
    name: "Square vibration motor",
    note: "Flat rectangular motor that makes the phone vibrate.",
    steps: [
      BATTERY_FIRST,
      "Remove the screws or bracket holding it.",
      "Unclip its connector and lift it out.",
    ],
  },

  // Laptop
  "hard-drive": {
    name: "Hard drive",
    note: '2.5" hard disk. Holds data and strong magnets.',
    hazard: "May hold personal data. Wipe or destroy the disk before recycling.",
    steps: [
      BATTERY_FIRST,
      "Remove the screws holding the drive bracket.",
      "Slide the drive away from its connector.",
      "Lift it out and remove the bracket.",
    ],
  },
  keyboard: {
    name: "Keyboard",
    note: "Key layer with a ribbon cable to the board.",
    steps: [
      BATTERY_FIRST,
      "Open the connector latch and slide out the ribbon cable.",
      "Remove the keyboard screws, if any.",
      "Release the clips along the edge with a plastic tool.",
      "Lift the keyboard out.",
    ],
  },
  "ram-covered": {
    name: "RAM (under cover)",
    note: "Memory stick hidden under a shield or film.",
    steps: [
      "Remove the shield or peel back the film over the RAM.",
      BATTERY_FIRST,
      "Push the clips at each end of the slot outward.",
      "Pull the stick out by the edges.",
    ],
  },
  screw: {
    name: "Screw",
    note: "Holds parts or covers in place.",
    steps: [
      "Use a screwdriver bit that fits snugly.",
      "Press down while turning to avoid stripping it.",
      "Keep it with the part it came from.",
    ],
  },
  "ssd-covered": {
    name: "SSD (under cover)",
    note: "Solid-state drive hidden under a shield or heat spreader.",
    hazard: "May hold personal data. Wipe or destroy the drive before recycling.",
    steps: [
      "Remove the shield or heat spreader over the SSD.",
      BATTERY_FIRST,
      "Remove the screw at the end of the SSD.",
      "Pull the SSD out of its slot at an angle.",
    ],
  },
  "ssd-nvme": {
    name: "NVMe SSD",
    note: "Stick-shaped solid-state drive.",
    hazard: "May hold personal data. Wipe or destroy the drive before recycling.",
    steps: [
      BATTERY_FIRST,
      "Remove the screw at the end of the SSD.",
      "The SSD lifts up at an angle.",
      "Pull it out of the slot.",
    ],
  },
  "ssd-sata": {
    name: "SATA SSD",
    note: '2.5" solid-state drive.',
    hazard: "May hold personal data. Wipe or destroy the drive before recycling.",
    steps: [
      BATTERY_FIRST,
      "Remove the screws holding the drive bracket.",
      "Slide the drive away from its connector.",
      "Lift it out.",
    ],
  },
  "wifi-card": {
    name: "Wi-Fi card",
    note: "Small wireless card with antenna cables.",
    steps: [
      BATTERY_FIRST,
      "Pop off the antenna cables with a plastic tool.",
      "Remove the screw holding the card.",
      "Pull the card out of its slot.",
    ],
  },
  "wifi-card-covered": {
    name: "Wi-Fi card (under cover)",
    note: "Wireless card hidden under a shield.",
    steps: [
      "Remove the shield over the Wi-Fi card.",
      BATTERY_FIRST,
      "Pop off the antenna cables.",
      "Remove the screw and pull the card out.",
    ],
  },

  // Computer
  HDD: {
    name: "Hard drive",
    note: '3.5" hard disk. Holds data and strong magnets.',
    hazard: "May hold personal data. Wipe or destroy the disk before recycling.",
    steps: [
      "Unplug the SATA data and power cables.",
      "Remove the screws or release the drive tray.",
      "Slide the drive out of its bay.",
    ],
  },
  SSD: {
    name: "SSD",
    note: "Solid-state drive (M.2) on the motherboard.",
    hazard: "May hold personal data. Wipe or destroy the drive before recycling.",
    steps: [
      "Remove the heat spreader over the slot, if any.",
      "Remove the screw at the end of the SSD.",
      "Pull it out of the slot at an angle.",
    ],
  },
  "SSD-sata": {
    name: "SATA SSD",
    note: '2.5" solid-state drive.',
    hazard: "May hold personal data. Wipe or destroy the drive before recycling.",
    steps: [
      "Unplug the SATA data and power cables.",
      "Remove the screws or release the drive tray.",
      "Slide the drive out.",
    ],
  },
  case: {
    name: "Case",
    note: "Metal and plastic frame. Recyclable once empty.",
    steps: [
      "Remove every part from the case first.",
      "Remove the front panel and any glass panels.",
      "Separate the metal from the plastic for recycling.",
    ],
  },
  cmos: {
    name: "CMOS battery",
    note: "Coin cell that keeps the BIOS settings.",
    hazard:
      "Coin cells are dangerous if swallowed. Keep away from children and recycle it separately.",
    steps: [
      "Make sure the power cable is unplugged.",
      "Press the small metal clip beside the battery.",
      "The battery pops up. Lift it out.",
    ],
  },
  cooler: {
    name: "CPU cooler",
    note: "Heatsink and fan, or a liquid cooler pump, on top of the CPU.",
    steps: [
      "Unplug the cooler fan or pump cable from the motherboard.",
      "Loosen the mounting screws in a cross pattern, a little at a time.",
      "Twist gently to break the thermal paste seal.",
      "Lift the cooler off.",
    ],
  },
  cpu: {
    name: "CPU",
    note: "Processor. Contains gold. Fragile pins.",
    steps: [
      "Remove the CPU cooler first.",
      "Wipe off the old thermal paste.",
      "Lift the socket lever and open the retention frame.",
      "Lift the CPU straight up by its edges.",
    ],
  },
  gpu: {
    name: "Graphics card",
    note: "Video card in a PCIe slot. Has its own board, chips, and fans.",
    steps: [
      "Unplug the power cables from the card.",
      "Remove the screws holding the card bracket to the case.",
      "Press the release latch on the PCIe slot.",
      "Pull the card straight out.",
    ],
  },
  mboard: {
    name: "Motherboard",
    note: "Main board. Contains gold, copper, and many chips.",
    steps: [
      "Remove the graphics card, RAM, cooler, and drives first.",
      "Unplug every cable from the board.",
      "Remove the screws holding the board to the case.",
      "Lift the board out, tilting it away from the back I/O panel.",
    ],
  },
  psu: {
    name: "Power supply",
    note: "Converts wall power for the computer.",
    hazard:
      "Capacitors inside can hold a charge after unplugging. Never open the power supply box.",
    steps: [
      "Make sure the power cable is unplugged.",
      "Unplug every power cable from the motherboard, drives, and graphics card.",
      "Remove the screws on the back of the case holding the power supply.",
      "Slide the power supply out.",
    ],
  },

  // Telecom (router and telephone)
  antenna: {
    name: "Antenna",
    note: "External antenna. Plastic with a metal core.",
    steps: [
      "If it screws on, unscrew it from its connector.",
      "If it is fixed, open the case and pop the antenna cable off the board.",
      "Pull the antenna out of the case.",
    ],
  },
  "phone-board": {
    name: "Phone board",
    note: "Circuit board of a landline phone.",
    steps: [
      "Remove the batteries from the handset or base.",
      "Remove the case screws and open the case.",
      "Unplug the speaker, keypad, and other cables.",
      "Remove the board screws and lift it out.",
    ],
  },
  "phone-speaker": {
    name: "Phone speaker",
    note: "Small speaker. Contains a magnet.",
    steps: [
      "Remove the batteries and open the case.",
      "Unplug or unsolder the speaker wires.",
      "Pry the speaker out of its holder.",
    ],
  },
  "router-board": {
    name: "Router board",
    note: "Main circuit board of the router.",
    steps: [
      "Unplug the power adapter.",
      "Remove the case screws and open the case.",
      "Pop the antenna cables off the board.",
      "Remove the board screws and lift it out.",
    ],
  },
}
