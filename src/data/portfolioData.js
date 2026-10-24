
const portfolioData = {
  name: "Sekh Arif Hossain",
  title: "Full Stack Developer",
  email: "skarifh09@gmail.com",
  phone: "7479085053",
  location: "Kolkata, West Bengal, India",
  github: "https://github.com/skarifh09",

  profile:
    "Full Stack Developer experienced in building responsive web applications, e commerce platforms, RESTful APIs, and real time communication applications using React.js, Node.js, Express.js, and Java Spring Boot. Experienced in database integration, Docker, JWT authentication, and collaborative software development. IBM Full Stack Software Developer certified.",

  experience: [
    {
      role: "Frontend Developer",
      company: "Karma Projects",
      period: "Jan 2026 – Aug 2026",
      location: "Kolkata, India",
      tech: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Java",
        "PHP",
        "Node.js",
        "SQL",
        "GitHub",
      ],
      points: [
        "Designed and developed responsive websites and e commerce platforms using HTML5, CSS3, JavaScript, and React.js.",
        "Integrated backend functionality using Java, PHP, and Node.js with relational databases.",
        "Collaborated with clients and cross functional teams to translate business requirements into functional UI and UX designs.",
        "Managed source control and collaborative development workflows using GitHub.",
        "Contributed to end to end project delivery, database integration, and performance optimization.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Paperkrft Solutions",
      period: "May 2025 – Jan 2026",
      location: "Kolkata, India",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "Python",
        "Java Spring Boot",
        "PHP",
        "SQL",
        "MongoDB",
        "Docker",
      ],
      points: [
        "Developed responsive websites and e commerce platforms using React.js, HTML5, CSS3, and JavaScript.",
        "Delivered full stack web solutions using Node.js, Express.js, React.js, Python, Java Spring Boot, and PHP.",
        "Designed and managed SQL and MongoDB databases for scalable data handling.",
        "Used Docker to standardize development environments and streamline deployment workflows.",
        "Maintained technical quality and delivery standards across client projects.",
      ],
    },
    {
      role: "Software Developer",
      company: "Busybox Technology Private Limited",
      period: "Aug 2023 – Apr 2025",
      location: "Kolkata, India",
      tech: [
        "React.js",
        "JavaScript ES6+",
        "Java Spring Boot",
        "RESTful APIs",
        "Git",
        "Agile",
      ],
      points: [
        "Built responsive and reusable UI components using React.js and JavaScript ES6+.",
        "Integrated RESTful APIs with Java Spring Boot services for client server communication.",
        "Gathered and analyzed client requirements to customize UI and UX features.",
        "Participated in sprint planning, daily stand ups, code reviews, bug fixes, and performance improvements within an Agile team.",
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech in Computer Science and Technology",
      institution:
        "Maulana Abul Kalam Azad University of Technology, Kolkata",
      period: "2019 – 2023",
      score: "CGPA 9.0",
    },
    {
      degree: "Higher Secondary Examination (12th)",
      institution: "Bawali High School, Kolkata",
      period: "2017 – 2019",
      score: "75.80%",
    },
    {
      degree: "Secondary Examination (10th)",
      institution: "Bawali High School, Kolkata",
      period: "2016 – 2017",
      score: "78.57%",
    },
  ],

  skills: [
    { name: "React.js", level: 90, cat: "Frontend" },
    { name: "JavaScript ES6+", level: 88, cat: "Frontend" },
    { name: "HTML5", level: 90, cat: "Frontend" },
    { name: "CSS3", level: 88, cat: "Frontend" },
    { name: "Responsive Web Design", level: 85, cat: "Frontend" },
    { name: "UI/UX Implementation", level: 80, cat: "Frontend" },

    { name: "Java", level: 85, cat: "Backend" },
    { name: "Java Spring Boot", level: 85, cat: "Backend" },
    { name: "Node.js", level: 82, cat: "Backend" },
    { name: "Express.js", level: 80, cat: "Backend" },
    { name: "PHP", level: 75, cat: "Backend" },
    { name: "Python", level: 70, cat: "Backend" },
    { name: "RESTful API Design", level: 85, cat: "Backend" },

    { name: "SQL", level: 85, cat: "Database" },
    { name: "MySQL", level: 85, cat: "Database" },
    { name: "MongoDB", level: 82, cat: "Database" },
    { name: "SQLite", level: 75, cat: "Database" },
    { name: "H2 Database", level: 75, cat: "Database" },
  ],

  projects: [
    {
      name: "Real Time Video & Text Chat Application",
      desc:
        "Built a full stack language exchange platform using the MERN stack, Stream Chat and Video APIs, JWT authentication, and Cloudinary media storage. Implemented real time messaging, video calling, typing indicators, read receipts, and group chats. Deployed on Render.",
      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Stream API",
        "JWT",
        "Cloudinary",
        "Render",
      ],
      color: "#0ea5e9",
      icon: "💬",
    },
    {
      name: "React Admin Dashboard",
      desc:
        "Developed an inventory management system with role based login, reusable React components, and REST API integrations for customer data management, registration, access control, and inventory tracking.",
      tech: ["React.js", "REST APIs"],
      color: "#7c3aed",
      icon: "📊",
    },
    {
      name: "Banking Application",
      desc:
        "Developed a banking application using Java Spring Boot and REST APIs to handle transactions, account management, and authentication.",
      tech: ["Java", "Spring Boot", "REST APIs"],
      color: "#059669",
      icon: "🏦",
    },
    {
      name: "Battleship Game",
      desc:
        "Built a Battleship game using object oriented programming, modular class design, and gameplay logic.",
      tech: ["Java", "OOP", "Game Logic"],
      color: "#7c3aed",
      icon: "🎮",
    },
    {
      name: "Brewmio E commerce Website",
      desc:
        "Developed a full e commerce website with an HTML, CSS, and JavaScript frontend and PHP and SQL backend integration. Used Web3Forms for form submission and email data handling.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Web3Forms"],
      color: "#d97706",
      icon: "🛒",
    },
    {
      name: "Module Management System",
      desc:
        "Built a CRUD based module management system using Java Spring Boot and an H2 in memory database, exposing RESTful APIs for creating, reading, updating, and deleting records.",
      tech: ["Java", "Spring Boot", "H2 Database", "REST APIs"],
      color: "#10b981",
      icon: "⚙️",
    },
    {
      name: "Home Application Store",
      desc:
        "Developed a web based application store using Java and SQLite for data management, Node.js for server side operations, and an HTML, CSS, and JavaScript frontend.",
      tech: ["Java", "Node.js", "SQLite", "HTML", "CSS", "JavaScript"],
      color: "#ef4444",
      icon: "🏪",
    },
  ],

  certifications: [
    {
      name: "IBM Full Stack Software Developer Professional Certificate",
      issuer: "Coursera",
      description:
        "Coursework covering React development, backend architecture, Git and version control, CI/CD, cloud operations, security, and RESTful APIs.",
    },
    {
      name: "90 Days of Data Structure Tutorial Series",
      issuer: "Course Completion",
      description:
        "Successfully completed a 90 day data structures tutorial series.",
    },
  ],

  awards: [],

  interests: ["Photography", "Sports", "Arcade Gaming"],
};

export default portfolioData;
