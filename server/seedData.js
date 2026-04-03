const seedData = {
  header: {
    name: 'Krishna Awasthi',
    phone: '+919649722470',
    email: 'krishna.Awasthi.CSE@gmail.com',
    location: 'Jaipur, Rajasthan',
    links: [
      { label: 'Codolio', url: 'https://codolio.com/profile/KrishnaAwasthi_26' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/krishnaawasthi/' },
      { label: 'GitHub', url: 'https://github.com/krishnaawasthi_26' },
    ],
  },
  education: [
    {
      institution: 'Swami Keshvanand Institute of Technology',
      duration: 'Expected May 2027',
      program: 'Bachelor of Technology in Computer Science and Engineering | CGPA: 8.4 / 10.0',
      location: 'Jaipur, Rajasthan',
    },
    {
      institution: 'Gyan Vihar School',
      duration: '2023 / 2021',
      program: 'Higher Secondary (2023): 74% | Secondary (2021): 74%',
      location: 'Jaipur, Rajasthan',
    },
  ],
  skills: {
    Languages: ['Python', 'C++', 'C', 'JavaScript'],
    'Backend / APIs': ['FastAPI', 'REST API Design', 'Swagger', 'Microservices'],
    Databases: ['MongoDB', 'MySQL', 'Indexing', 'Schema Design'],
    'IoT / Embedded': ['MQTT', 'ESP32', 'Arduino', 'Raspberry Pi', 'Sensor Integration', 'Real-Time Data Processing'],
    'Tools / CS': ['Git', 'GitHub', 'Postman', 'VS Code', 'Data Structures', 'Algorithms', 'System Design', 'OOP', 'Caching'],
    'Java Stack': ['Java', 'Spring Boot', 'Spring MVC', 'Maven', 'JPA', 'Hibernate', 'REST Template'],
  },
  experience: [
    {
      company: 'Swami Keshvanand Institute of Technology',
      role: 'Backend & IoT Engineering Intern',
      duration: 'July 2025 -- August 2025',
      location: 'Jaipur, Rajasthan',
      highlights: [
        'Developed 12+ FastAPI endpoints for real-time sensor ingestion and device control.',
        'Reduced API latency by 50% with MongoDB query optimization and caching.',
        'Built MQTT pipeline across 10+ sensor types with 99.9% message delivery.',
      ],
    },
    {
      company: 'Kistechno Software',
      role: 'Web Development Intern',
      duration: 'August 2024',
      location: 'Jaipur, Rajasthan',
      highlights: [
        'Engineered a responsive institute portal with 20+ pages for 500+ users.',
        'Improved organic visibility with cross-browser and SEO collaboration.',
      ],
    },
  ],
  projects: [
    {
      name: 'LeetCode Progress Tracker & Analytics Dashboard',
      stack: ['Python', 'FastAPI', 'MongoDB', 'Pydantic', 'REST API'],
      highlights: [
        'Built analytics microservice ingesting 200+ submissions into MongoDB.',
        'Used async handlers and weak-topic detection for higher problem-solving efficiency.',
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/krishnaawasthi-26/backend-leetcode-tracker.git' },
        { label: 'Deployment', url: 'https://backend-leetcode-tracker--krishnaasfafav.replit.app/' },
      ],
    },
    {
      name: 'Smart Agriculture Management System',
      stack: ['Python', 'FastAPI', 'MongoDB', 'MQTT', 'IoT', 'REST API'],
      highlights: [
        'Processed 5,000+ sensor readings into MongoDB time-series storage.',
        'Created OpenAPI-documented CRUD/PATCH APIs with strict payload validation.',
      ],
      links: [{ label: 'GitHub', url: 'https://github.com/parthCJ/Aarma-be.git' }],
    },
  ],
  achievements: [
    'Attained Knight rank on LeetCode with 1,958 contest rating (top 3%).',
    'Secured rank 35 on institutional GeeksforGeeks leaderboard among 3,000+ students.',
    'Selected for Smart India Hackathon 2024 internal round.',
  ],
  certificates: {
    providers: [
      {
        name: 'IIT Kharagpur (NPTEL)',
        items: [
          {
            name: 'Programming in Java (2025)',
            url: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS57S114740173504421650',
          },
          {
            name: 'Programming in Modern C++ (2024)',
            url: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS125S105180151603953389',
          },
        ],
      },
      {
        name: 'Harvard University',
        items: [
          { name: 'CS50: Intro to CS', url: 'https://cs50.harvard.edu/certificates/20876423-5430-474a-85e8-073387ba6e34' },
          { name: 'CS50: Python', url: 'https://certificates.cs50.io/27c80d65-658d-4771-8c8a-05814bcc6b13.pdf?size=letter' },
        ],
      },
    ],
  },
};

export default seedData;
