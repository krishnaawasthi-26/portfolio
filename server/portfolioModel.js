import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema(
  {
    header: {
      name: String,
      phone: String,
      email: String,
      location: String,
      links: [{ label: String, url: String }],
    },
    education: [{ institution: String, duration: String, program: String, location: String }],
    skills: mongoose.Schema.Types.Mixed,
    experience: [
      {
        company: String,
        role: String,
        duration: String,
        location: String,
        highlights: [String],
      },
    ],
    projects: [
      {
        name: String,
        stack: [String],
        highlights: [String],
        links: [{ label: String, url: String }],
      },
    ],
    achievements: [String],
    certificates: {
      providers: [
        {
          name: String,
          items: [{ name: String, url: String }],
        },
      ],
    },
  },
  { timestamps: true },
);

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;
