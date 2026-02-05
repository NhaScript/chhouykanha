import {
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  ExternalLink,
  Phone,
} from "lucide-react";

function Home() {
  const projects = [
    {
      title: "Ratanakaphivath E-commerce",
      description:
        "End-to-end e-commerce solution for electronics, computers, and office accessories retailer",
      image:
        "./ratanak.png",
      role: "Full Stack Developer",
      tech: ["React", "Node.js", "Express", "MongoDB", "Docker", "Hetzner"],
      highlights: [
        "Product catalog & shopping cart",
        "Order management dashboard",
        "User authentication system",
        "Cloud deployment with Docker",
      ],
      link: "https://ratanakaphivath.com/",
    },
    {
      title: "Digital Business Card Platform",
      description:
        "Platform enabling users to create, customize, and share professional digital business cards",
      image:
        "./vcard.png",
      role: "Full Stack Team Developer",
      tech: ["Vue.js", "Express.js", "MongoDB", "Telegram API"],
      highlights: [
        "QR code generation system",
        "Telegram bot integration",
        "Responsive card templates",
        "Exchnage contact and sharing",
      ],
      link: "https://cccbic.com/",
    },
    {
      title: "Hathor International (Cambodia) Co. Ltd",
      description:
        "Corporate branding website developed to showcase company services, strengthen online presence, and provide customer contact channels.",
      image: "./hathor.jpg",
      role: "Frontend Developer",
      tech: ["React.js", "TailwindCSS"],
      highlights: [
        "Modern responsive hero section for brand presentation",
        "Company profile and service overview pages",
        "Contact page with inquiry functionality",
      ],
      link: "https://hathor888khbag.com/",
    },

    {
      title: "Transfer Money & Rice Pay",
      description:
        "Cross-border payment platform for Cambodia, Vietnam, and Thailand",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      role: "Frontend Developer",
      client: "MasterIT",
      tech: ["Vue.js", "TailwindCSS", "REST API"],
      highlights: [
        "Multi-currency transactions",
        "Payment workflow management",
        "Transaction tracking system",
      ],
      link: "http://transfer-money-and-rice-pay.web.app/",
    },
    {
      title: "Feng Shui Astrology Center",
      description:
        "Customer-facing website with service catalogs and booking system",
      image:
        "fsac.png",
      role: "Frontend Developer",
      client: "MasterIT",
      tech: ["React", "TailwindCSS"],
      highlights: [
        "Service catalog system",
        "Booking functionality",
        "Educational content platform",
      ],
      link: "https://fsaccenter.com/",
    },
    {
      title: "Rental Room Management",
      description:
        "Property management system for tracking tenants and payments",
      image: "./rental-rom.jpg",
      role: "Team Developer",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      highlights: [
        "Tenant tracking system",
        "Payment management",
        "Property dashboard",
      ],
    },
  ];

  const skills = {
    frontend: [
      "React",
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "TailwindCSS",
      "Bootstrap",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "Laravel",
      "MongoDB",
      "MySQL",
      "Firebase",
    ],
    tools: ["Git", "Docker", "Linux", "Hetzner", "REST API"],
  };

  const experience = [
    {
      title: "Web Development Instructor",
      company: "Narith MasterIT Education Co. Ltd",
      period: "February 2023 - Present",
      location: "Battambang, Cambodia",
      responsibilities: [
        "Teach web development to 50+ students: HTML, CSS, JavaScript, React, Node.js, MongoDB",
        "Created two new courses: React with TailwindCSS and Backend Development",
        "Produce educational videos for MasterIT learning platform",
        "Mentor new instructors and support curriculum development",
      ],
    },
    {
      title: "Computer Teacher Intern",
      company: "Narith MasterIT Education Co. Ltd",
      period: "February 2022 - August 2022",
      location: "Battambang, Cambodia",
      responsibilities: [
        "Assisted teaching foundational computer applications to beginner students",
        "Supported classroom management and lesson preparation",
      ],
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 md:col-span-8 space-y-4">
          <h1 className="text-4xl font-bold text-primary">
            Hi, I'm Chhouy Kanha
          </h1>
          <p className="text-xl text-base-content/70 leading-relaxed">
            Web developer and instructor building websites and teaching
            technology
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-base-content/60">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Battambang, Cambodia</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:chhouykanha@gmail.com"
                className="hover:text-primary transition-colors"
              >
                chhouykanha@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a
                href="tel:0979704802"
                className="hover:text-primary transition-colors"
              >
                097 970 4802
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 flex justify-center md:justify-end">
          <div className="avatar">
            <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="./my-photo.jpg"
                alt="Chhouy Kanha profile"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold flex items-center gap-3 text-base-content">
          <div className="w-1 h-8 bg-primary rounded-full"></div>
          About
        </h2>
        <p className="text-base-content/80 leading-relaxed text-lg">
          Full-stack web developer and instructor with 4 years of experience
          building web applications and teaching technology. Skilled in React,
          Node.js, and MongoDB. Proven ability to develop production systems and
          train students in modern web development.
        </p>
      </section>

      {/* Skills */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold flex items-center gap-3 text-base-content">
          <div className="w-1 h-8 bg-primary rounded-full"></div>
          Technical Skills
        </h2>

        <div className="grid gap-6">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-lg font-semibold text-base-content/90 capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {list.map((skill) => (
                  <div key={skill} className="badge badge-accent badge-lg">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold flex items-center gap-3 text-base-content">
          <div className="w-1 h-8 bg-primary rounded-full"></div>
          Work Experience
        </h2>

        {experience.map((job, index) => (
          <div key={index} className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-primary">{job.title}</h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-base-content/70">
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  {job.company}
                </span>
                <span>{job.period}</span>
              </div>

              <ul className="space-y-2 text-base-content/80 mt-4">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold flex items-center gap-3 text-base-content">
          <div className="w-1 h-8 bg-primary rounded-full"></div>
          Featured Projects
        </h2>

        <div className="grid gap-6">
          {projects.map((project, index) => {
            const Wrapper = project.link ? "a" : "div";

            return (
              <Wrapper
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`card lg:card-side bg-base-200 shadow-xl hover:shadow-2xl transition-all ${
                  project.link ? "cursor-pointer hover:scale-[1.02]" : ""
                }`}
              >
                <figure className="lg:w-2/5">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </figure>

                <div className="card-body lg:w-3/5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="card-title text-primary flex items-center gap-2">
                      {project.title}
                      {project.link && <ExternalLink className="w-5 h-5" />}
                    </h3>

                    {project.client && (
                      <div className="badge badge-outline badge-primary">
                        {project.client}
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-base-content/60 font-medium">
                    {project.role}
                  </p>
                  <p className="text-base-content/80">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech) => (
                      <div key={tech} className="badge badge-outline badge-sm">
                        {tech}
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-1 text-sm text-base-content/70 mt-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-success">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </section>

      {/* Education */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold flex items-center gap-3 text-base-content">
          <div className="w-1 h-8 bg-primary rounded-full"></div>
          Education
        </h2>

        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h3 className="card-title text-primary">
              Bachelor of Information Technology
            </h3>
            <div className="flex items-center gap-3 text-sm text-base-content/70">
              <span className="flex items-center gap-1">
                <GraduationCap className="w-4 h-4" />
                National University of Battambang
              </span>
              <span>•</span>
              <span>2021 – 2024</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
