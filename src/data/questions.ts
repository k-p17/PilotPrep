const questionsData: Record<string, {
  question: string;
  options: string[];
  answer: string;
}[]> = {
  "air-navigation-pilotprep": [
    {
      question: "What is the shortest distance between two points on Earth?",
      options: ["Straight line", "Great circle", "Rhumb line", "Meridian"],
      answer: "Great circle",
    },
  ],
  "air-navigation-pariksha": [
    {
      question: "How many degrees are in a nautical mile?",
      options: ["1°", "1.15°", "60°", "None of the above"],
      answer: "1°",
    },
  ],
  "meteorology-pilotprep": [
    {
      question: "What causes thunderstorms?",
      options: ["Cold front", "Warm front", "Inversion", "Stratosphere"],
      answer: "Cold front",
    },
  ],
  "air-regulations-pilotprep": [
    {
      question: "What is the maximum duty period for a commercial pilot per day?",
      options: ["8 hours", "10 hours", "12 hours", "14 hours"],
      answer: "8 hours",
    },
  ],
  "air-regulations-pariksha": [
    {
      question: "Who is responsible for the safety of the flight?",
      options: ["Air Traffic Control", "Pilot in Command", "Co-Pilot", "DGCA"],
      answer: "Pilot in Command",
    },
  ],
  "technical-general-pilotprep": [
    {
      question: "What is Bernoulli’s Principle used to explain?",
      options: ["Lift generation", "Fuel efficiency", "Engine thrust", "Wing drag"],
      answer: "Lift generation",
    },
  ],
  "technical-general-pariksha": [
    {
      question: "What is the purpose of an alternator?",
      options: ["Start the engine", "Generate electricity", "Monitor fuel", "Adjust pitch"],
      answer: "Generate electricity",
    },
  ],
  "rtr-pilotprep": [
    {
      question: "Which frequency is used for distress communication?",
      options: ["121.5 MHz", "118.0 MHz", "126.7 MHz", "123.4 MHz"],
      answer: "121.5 MHz",
    },
  ],
  "rtr-pariksha": [
    {
      question: "What does PAN-PAN mean?",
      options: ["Urgency", "Mayday", "Landing", "Position Report"],
      answer: "Urgency",
    },
  ],
};

export default questionsData;
