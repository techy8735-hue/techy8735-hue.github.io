// Single source of truth for every fact shown on the site.
// Keep this accurate to the CV — do not add links, roles, metrics or skills that aren't real.

export const profile = {
  name: "Tejus Krishna K.S.",
  displayName: "Tejus Krishna",
  descriptor: "IT student · web development · data analytics",
  intro: "I build useful things for the web, and I'm learning to ask better questions with data.",
  location: "Kerala, India",
  email: "techy8735@gmail.com",
  github: "https://github.com/techy8735-hue",
  githubHandle: "techy8735-hue",
  /** LinkedIn intentionally absent. */
  linkedin: null as string | null,
  /** Set to a file path (e.g. "/Tejus-Krishna-CV.pdf" in /public) to show the CV link. */
  cvUrl: null as string | null,
};

export const about = {
  lead: "I'm in my final year of a B.Voc in Information Technology at Christ College, Irinjalakuda, graduating in 2027.",
  paragraphs: [
    "Most of my time goes into software and web development. Lately I've been learning to work with data too — querying it, cleaning it up, and trying to make it say something clear.",
    "Away from the keyboard I edit video and take photographs. Cutting a sequence and building an interface turn out to need the same things: pacing, framing, and attention to the small stuff.",
  ],
  facts: [
    { label: "Studying", value: "B.Voc IT, Christ College" },
    { label: "Graduating", value: "2027" },
    { label: "Based in", value: "Kerala, India" },
    { label: "Also", value: "Editing, photography" },
  ],
};

export type SkillGroup = {
  title: string;
  note: string;
  kind: "core" | "learning" | "creative";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "On my CV",
    note: "What I've studied and used.",
    kind: "core",
    items: ["Python", "Java", "HTML", "SQL"],
  },
  {
    title: "Learning now",
    note: "Where I'm putting my time.",
    kind: "learning",
    items: ["React", "Web applications", "Data analytics"],
  },
  {
    title: "Elsewhere",
    note: "Tools for media and everyday work.",
    kind: "creative",
    items: [
      "Office tools",
      "CapCut",
      "DaVinci Resolve",
      "Adobe After Effects",
      "Photography",
      "Cinematography",
    ],
  },
];

export type Project = {
  slug: string;
  number: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  context: string;
  problem: string;
  approach: { title: string; text: string }[];
  outcomes: string[];
  tags: string[];
  /** Real links only. Leave null when there is no public URL. */
  liveUrl: string | null;
  repoUrl: string | null;
};

export const projects: Project[] = [
  {
    slug: "gesture-controlled-iot-rc-car",
    number: "01",
    title: "Hand Gesture-Controlled IoT RC Car",
    year: "First year",
    category: "IoT / hardware",
    summary: "A remote-controlled car you drive with hand gestures instead of a controller.",
    context:
      "A first-year project. I wanted to see whether movement of the hand could stand in for the buttons and sticks of a normal remote.",
    problem: "RC cars are usually driven with a handheld remote. Could a hand gesture do the same job?",
    approach: [
      {
        title: "Read the gesture",
        text: "Pick up how the hand is moving and reduce it to a few driving commands — forward, back, left, right.",
      },
      {
        title: "Send it",
        text: "Pass those commands wirelessly from the controller side to the car.",
      },
      {
        title: "Drive",
        text: "On the car, turn each incoming command into motor movement.",
      },
    ],
    outcomes: [
      "A working car operated by hand gestures.",
      "My first project joining hardware and code.",
    ],
    tags: ["IoT", "Gesture control", "Hardware"],
    liveUrl: null,
    repoUrl: null,
  },
  {
    slug: "student-catering-jobs-website",
    number: "02",
    title: "Student Part-Time Catering Jobs Website",
    year: "Second year",
    category: "Web / job portal",
    summary: "A job portal that helps students find part-time work in catering.",
    context:
      "A second-year web project. Catering work often needs extra hands at short notice, and plenty of students want flexible part-time income.",
    problem: "There was no single, simple place for students to look for part-time catering jobs.",
    approach: [
      {
        title: "Think from the student's side",
        text: "Work out what someone needs to see about a catering job before deciding to go for it.",
      },
      {
        title: "Build the portal",
        text: "Put the listings together as a focused website for the catering sector.",
      },
    ],
    outcomes: [
      "A dedicated job portal for student catering work.",
      "Practice planning and building a multi-page website end to end.",
    ],
    tags: ["Web development", "Job portal"],
    liveUrl: null,
    repoUrl: null,
  },
];

export type Experience = {
  role: string;
  company: string;
  location?: string;
  period: string;
  duration?: string;
  note: string;
};

export const experience: Experience[] = [
  {
    role: "Graphic Design Intern",
    company: "Softronics",
    period: "11 May – 27 May 2026",
    duration: "60 hours",
    note: "A 60-hour graphic design internship.",
  },
  {
    role: "IT / LAN & Telecommunications Intern",
    company: "Metex General Trading & Contracting Co W.L.L.",
    location: "Kuwait",
    period: "20 Apr – 28 May 2025",
    note: "LAN work and field installations.",
  },
];

export const education = [
  {
    degree: "B.Voc Information Technology",
    institution: "Christ College, Irinjalakuda",
    period: "Expected 2027",
    note: "Final year",
  },
];