// =========================================================================
//  vidyabotics — CONTROL ROOM
//  This is the ONLY file you need to edit to update the website.
//  Change text, prices, courses, services, reviews, contact info, and links
//  right here — the site updates automatically.
//
//  TIP: Every value below is a placeholder ("dummy") value for now.
//  Replace phone numbers, email, address and links with your real details
//  before you go live. Search for "REPLACE ME" to find every spot.
// =========================================================================

// -------------------------------------------------------------------------
// 1. SITE / BRAND SETTINGS
// -------------------------------------------------------------------------
export const siteConfig = {
  name: "vidyabotics",
  tagline: "Learn Today's Skills. Build Tomorrow's Future.",
  shortDescription:
    "Build in-demand technology skills with practical training in Data Analytics, AI, Data Science, Coding, and Robotics. Learn from experts, work on real projects, and prepare for the future.",
  logoText: "vidyabotics", // Used until you add a logo image file
  // To use an image logo instead: drop a file into /public (e.g. logo.png)
  // and set logoImage: "/logo.png"
  logoImage: "/logo.png",

  contact: {
    phoneDisplay: "+91 7462022763", // REPLACE ME - dummy number
    phoneDial: "+91 74620222763", // REPLACE ME - used for tel: links, no spaces
    whatsappNumber: "+917462022763", // REPLACE ME - country code + number, no + or spaces
    email: "vidyabotics@gmail.com", // REPLACE ME - dummy email
    address: {
    line1: "",
    line2: "",
    city: "Siwan",
    state: "Bihar",
    pincode: "841506",
    country: "India" 
},
    mapEmbedUrl:
      "https://www.google.com/maps?q=Tarwara,+Siwan,+Bihar&output=embed", // REPLACE ME with your exact location embed link
  },

  socials: {
    instagram: "https://instagram.com/vidyabotics", // REPLACE ME
    youtube: "https://youtube.com/@vidyabotics", // REPLACE ME
    linkedin: "https://www.linkedin.com/company/vidyabotics/about/?viewAsMember=true", // REPLACE ME
    facebook: "https://facebook.com/vidyabotics", // REPLACE ME
  },

  // Default WhatsApp click-to-chat starter message
  whatsappDefaultMessage:
    "Hi vidyabotics! I'd like to know more about your courses.",
};



export const heroImages = [
  {
    src: "/images/robotics.png",
    alt: "Students learning robotics",
  },
  {
    src: "/images/coding.png",
    alt: "Students learning coding",
  },
  {
    src: "/images/ai-learning.png",
    alt: "Students learning artificial intelligence",
  },
  {
    src: "/images/data-analytics.png",
    alt: "Students learning data analytics",
  },
];



// -------------------------------------------------------------------------
// 2. GOOGLE FORM LINKS  (Enroll Now / Service Inquiry)
// -------------------------------------------------------------------------
export const formLinks = {
  enrollNow: "https://docs.google.com/forms/d/e/1FAIpQLSddkRJ_Ddo3BThizcfESiW1KSy8lQZEwiN4eJ9YqkY8r_Ed3w/viewform?usp=publish-editor",
  serviceInquiry: "https://forms.gle/REPLACE_ME_SERVICE_FORM",
  contactGeneral: "https://docs.google.com/forms/d/e/1FAIpQLScbbr4rr7NLgZJ829YGBQ5ik48Rig5VsNEwRY1dZ4lzGvjvKQ/viewform?usp=publish-editor",
};

// -------------------------------------------------------------------------
// 3. COURSES
//    tags: any of "New", "Best Seller", "Coming Soon", "Trending" (or add your own)
// -------------------------------------------------------------------------
export const courses = [
  {
  id: "student-masterclass",
  title: "The Student Masterclass: AI, Careers & Cyber Safety",
  ageGroup: "Classes 5–12",
  category: "Workshop",
  price: 0.0,
  originalPrice: 999,
  duration: "2 Hour Workshop",
  mode: "Online",
  tags: ["Popular", "Free"],
  shortDescription:
    "A practical, interactive workshop designed to help students understand Artificial Intelligence, choose the right career path, stay safe online, and prepare for the future with modern digital skills.",
  syllabus: [
    "The Future is Changing – Are You Ready?",
    "Introduction to Artificial Intelligence (AI)",
    "How AI Can Help Students Learn Smarter",
    "Prompt Engineering: Ask Better, Get Better Answers",
    "Essential AI Tools Every Student Should Know",
    "Cyber Safety & Digital Security",
    "Career Roadmap After Class 10 & 12",
    "Government vs Private Sector Careers",
    "Resume & LinkedIn Basics",
    "Scholarships, Competitions & Career Opportunities",
    "Robotics & Emerging Technologies",
    "Live AI Demonstration & Interactive Q&A",
  ],
  image: null,
},

  {
    id: "data-analytics",
    title: "Data Analytics Bootcamp",
    ageGroup: "Students & Professionals",
    category: "Data Analytics",
    price: null,
    originalPrice: null,
    duration: "12 Weeks",
    mode: "Online",
    tags: ["Coming Soon"],
    shortDescription:
      "Master Excel, SQL, Power BI, and Python to analyze data, create dashboards, and make data-driven decisions.",
    syllabus: [
      "Excel for Data Analytics",
      "SQL Fundamentals",
      "Python for Data Analysis",
      "Power BI Dashboards",
      "Data Cleaning & Visualization",
      "Capstone Project",
    ],
    image: null,
  },

  {
    id: "python-beginners",
    title: "Python for Beginners to Advanced",
    ageGroup: "Students & Beginners",
    category: "Programming",
    price: 699,
    originalPrice: 2999,
    duration: "12 Weeks",
    mode: "Online",
    tags: ["Beginner Friendly"],
    shortDescription:
      "Learn Python programming from scratch through practical exercises, coding challenges, and real-world mini projects.",
   syllabus: [
  // Python Basics
  "Introduction to Python",
  "Python Installation & Setup",
  "Variables & Data Types",
  "Input & Output",
  "Operators & Type Casting",
  "Strings & String Methods",

  // Conditions & Loops
  "Conditional Statements",
  "For & While Loops",
  "Break, Continue & Pass",
  "Nested Loops & Pattern Problems",

  // Data Structures
  "Lists & List Methods",
  "Tuples",
  "Sets & Set Operations",
  "Dictionaries",
  "List & Dictionary Comprehensions",

  // Functions
  "Functions & Return Values",
  "Function Parameters & Arguments",
  "Scope & Local/Global Variables",
  "*args & **kwargs",
  "Lambda Functions",
  "Map, Filter & Reduce",

  // Files & Errors
  "File Handling",
  "CSV & JSON Files",
  "Exception Handling",
  "Custom Exceptions",

  // OOP
  "Object-Oriented Programming",
  "Classes & Objects",
  "Constructors",
  "Instance & Class Methods",
  "Inheritance",
  "Polymorphism",
  "Encapsulation & Abstraction",
  "Dunder Methods",

  // Intermediate Python
  "Modules & Packages",
  "Virtual Environments & Pip",
  "Datetime & Random Modules",
  "Iterators & Iterables",
  "Generators",
  "Decorators & Closures",
  "Regular Expressions",

  // Advanced Python
  "APIs & JSON Data",
  "Context Managers",
  "Debugging & Logging",
  "Unit Testing with Pytest",
  "Concurrency & Async Programming",
  "Python Performance & Best Practices",

  // Data & Career
  "NumPy Basics",
  "Pandas Basics",
  "Data Visualization with Matplotlib",
  "SQL with Python",
  "Git & GitHub Basics",

  // Projects
  "Beginner Coding Projects",
  "Intermediate Python Projects",
  "Real-World Python Project",
  "Final Capstone Project",
],
    image: null,
  },

  {
    id: "machine-learning",
    title: "Machine Learning Essentials",
    ageGroup: "Students & Professionals",
    category: "Artificial Intelligence",
    price: null,
    originalPrice: null,
    duration: "12 - 15 Weeks",
    mode: "Online",
    tags: ["Coming Soon"],
    shortDescription:
      "Build a strong foundation in Machine Learning using Python, Scikit-learn, and real-world AI projects.",
    syllabus: [
      "Machine Learning Fundamentals",
      "Data Preprocessing",
      "Regression Models",
      "Classification Models",
      "Model Evaluation",
      "End-to-End ML Project",
    ],
    image: null,
  },

  {
  id: "robotics-fundamentals",
  title: "Robotics Fundamentals",
  ageGroup: "Classes 3–12 & College Students",
  category: "Robotics",
  price: 599,
  originalPrice: 1999,
   duration: "3 - 4 Months",
  mode: "Online",
  tags: ["Hands-on", "Beginner"],
  shortDescription:
    "Learn robotics from the ground up by exploring electronics, Arduino programming, sensors, motors, and building real-world robotics projects.",

  syllabus: [
    "Introduction to Robotics",
    "Electrical Safety",
    "Understanding Electricity (Voltage, Current & Resistance)",
    "Electronic Components (Battery, Wire, LED, Switch, Buzzer & Motor)",
    "Conductors, Insulators & Electrical Connections",
    "Resistors, Capacitors, Diodes & Transistors",
    "Breadboard, PCB & Circuit Building",
    "Integrated Circuits (IC) & 555 Timer",
    "Introduction to Sensors & Actuators",
    "IR, LDR, Ultrasonic, Gas & Rain Sensors",
    "DC Motor, Servo Motor & Motor Driver",
    "Arduino UNO: Hardware & Pin Configuration",
    "Arduino IDE & Programming Fundamentals",
    "Controlling LEDs, Buzzers, Motors & Sensors",
    "Circuit Design & Troubleshooting",
    "Robot Assembly & Testing",
    "Wireless Communication (Bluetooth & Wi-Fi Basics)",
    "Introduction to Internet of Things (IoT)",
    "Capstone Robotics Projects"
  ],

  projects: [
    "Automatic Street Light (LDR Sensor)",
    "Smart Dustbin (Ultrasonic + Servo Motor)",
    "Obstacle Avoiding Robot",
    "Bluetooth Controlled Robot Car",
    "Smart Home Automation using Arduino"
  ],

  image: null,
},

 {
  id: "scratch-junior-coding",
  title: "Junior Coding with Scratch",
  ageGroup: "Classes 3–8",
  category: "Coding",
  price: 499,
  originalPrice: 1599,
  duration: "3 - 4 Months",
  mode: "Online",
  tags: ["Kids", "Beginner", "Project Based"],
  shortDescription:
    "Learn the fundamentals of coding by creating interactive stories, animations, quizzes, and games using Scratch while developing creativity and logical thinking.",

  syllabus: [
    "Introduction to Coding & Scratch",
    "Scratch Interface, Sprites & Backdrops",
    "Motion, Looks, Sound & Events",
    "Sequences, Loops & Animations",
    "Conditional Statements (If/Else)",
    "Variables, Operators & Lists",
    "Broadcast Messages & Cloning",
    "User Input, Timers & Scoring",
    "Game Design & Debugging",
    "Storytelling & Interactive Projects",
    "Advanced Scratch Features",
    "Final Project Development & Presentation"
  ],

  projects: [
    "Interactive Birthday Greeting Card",
    "Animated Storytelling Project",
    "Maze Escape Game",
    "Catch the Object Game",
    "Space Shooter Game",
    "Quiz & Learning App",
    "Virtual Piano",
    "Math Challenge Game",
    "Snake Game",
    "Final Scratch Game Showcase"
  ],

  image: null,
},
];

// -------------------------------------------------------------------------
// 4. SERVICES  (B2B / B2C)
// -------------------------------------------------------------------------
export const services = [
  {
    id: "robotics-school-program",
    title: "Robotics Program for Schools",
    audience: "Schools",
    icon: "school",
    shortDescription:
      "Hands-on robotics classes for students from Classes 3–10, designed to develop STEM skills through practical learning.",
    details: [
      "Weekly Robotics Classes",
      "Arduino & Electronics Fundamentals",
      "Sensors, Motors & Automation",
      "Project-Based Learning",
    ],
  },

  {
    id: "coding-school-program",
    title: "Coding Program for Schools",
    audience: "Schools",
    icon: "laptop",
    shortDescription:
      "Interactive coding classes that help students build computational thinking and programming skills from an early age.",
    details: [
      "Scratch Programming",
      "Python Programming",
      "Logic Building",
      "Hands-on Coding Projects",
    ],
  },

  {
    id: "student-masterclass",
    title: "The Student Masterclass",
    audience: "Students",
    icon: "graduation-cap",
    shortDescription:
      "A one-day workshop covering Artificial Intelligence, career guidance, digital skills, and cyber safety for students.",
    details: [
      "Introduction to AI",
      "Career Roadmap",
      "Cyber Safety",
      "Certificate of Participation",
    ],
  },

  {
    id: "data-analytics-training",
    title: "Data Analytics Training",
    audience: "Colleges",
    icon: "bar-chart",
    shortDescription:
      "Industry-focused training to help students learn data analysis using modern tools and real-world projects.",
    details: [
      "Microsoft Excel",
      "SQL Fundamentals",
      "Power BI Dashboards",
      "Python for Data Analytics",
    ],
  },

  {
    id: "ai-python-workshop",
    title: "AI & Python Workshop",
    audience: "Students",
    icon: "cpu",
    shortDescription:
      "Learn Python programming and explore the fundamentals of Artificial Intelligence through practical sessions.",
    details: [
      "Python Basics",
      "Introduction to AI",
      "Mini AI Projects",
      "Hands-on Practice",
    ],
  },

  {
    id: "technology-awareness-program",
    title: "Future Technology Awareness Program",
    audience: "Schools",
    icon: "rocket",
    shortDescription:
      "Interactive sessions introducing students to Artificial Intelligence, Robotics, Data Science, and future career opportunities.",
    details: [
      "Emerging Technologies",
      "Future Career Opportunities",
      "Innovation & Problem Solving",
      "Interactive Q&A Session",
    ],
  },
];

// -------------------------------------------------------------------------
// 5. POSTS  (news, events, workshops — link out to your social media posts)
// -------------------------------------------------------------------------
export const posts = [
  {
    id: "post-1",
    title: "Introducing vidyabotics — A journey towards future-ready technology learning",
    date: "2026-07-26",
    excerpt:
      "We are excited to begin our journey of making technology learning practical and accessible through AI, Data Science, Coding, Robotics, and emerging technologies.",
    platform: "LinkedIn",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7487136273397309441",
    image: null,
  },
];
// -------------------------------------------------------------------------
// 6. REVIEWS  (only reviews listed here are shown on the site)
// -------------------------------------------------------------------------
export const reviews = [
  {
    id: "review-1",
    name: "Ananya Sharma",
    role: "Parent",
    rating: 5,
    text:
      "My son looks forward to every single class. The instructors explain things patiently and the projects keep him genuinely excited about learning.",
    approved: true,
  },
  {
    id: "review-2",
    name: "Rohan Verma",
    role: "Student, Robotics Foundations",
    rating: 5,
    text:
      "I built my first robot in just a few weeks. The hands-on approach made everything click so much faster than reading books.",
    approved: true,
  },
  {
    id: "review-3",
    name: "Greenview School",
    role: "Partner Institution",
    rating: 5,
    text:
      "Setting up our STEM lab with vidyabotics was seamless — from planning to instructor training, the whole process was professional and well organized.",
    approved: true,
  },
  {
    id: "review-4",
    name: "Priya Nair",
    role: "Parent",
    rating: 4,
    text:
      "Great curriculum and very responsive support team. Would love to see even more advanced batches added soon.",
    approved: true,
  },
];

// -------------------------------------------------------------------------
// 7. STATS  (shown on the homepage — edit freely)
// -------------------------------------------------------------------------
export const stats = [
  { label: "Programs", value: "5+" },
  { label: "Project-Based Learning", value: "100%" },
  { label: "Training Modes", value: "Online & Offline" },
  { label: "For", value: "Students (School & College), Graduates & Freshers, and Working Professionals" },
];
