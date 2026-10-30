const skillsData = [
  {
    title: "AI / LLM Engineering",
    items: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "PyTorch", icon: "devicon-pytorch-original colored" },
      { name: "scikit-learn", icon: "devicon-scikitlearn-plain colored" },
      { name: "OpenCV", icon: "devicon-opencv-plain colored" },
      { name: "RAG", short: "RAG" },
      { name: "AI Agents", short: "AG" },
      { name: "LangChain", short: "LC" },
      { name: "Prompt Engineering", short: "PE" }
    ]
  },
  {
    title: "Frontend / Backend",
    items: [
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Next.js", icon: "devicon-nextjs-original dark:text-white" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "Django", icon: "devicon-django-plain dark:text-white" },
      { name: "Streamlit", icon: "devicon-streamlit-plain colored" },
      { name: "REST APIs", short: "API" }
    ]
  },
  {
    title: "Data Engineering / Scraping",
    items: [
      { name: "Data Pipelines", short: "DP" },
      { name: "ETL / ELT", short: "ETL" },
      { name: "Data Modeling", short: "DM" },
      { name: "Batch & Streaming", short: "BS" },
      { name: "Selenium", icon: "devicon-selenium-original colored" },
      { name: "Airflow", icon: "devicon-apacheairflow-plain colored" },
      { name: "Kafka", icon: "devicon-apachekafka-original colored" },
      { name: "Spark", icon: "devicon-apachespark-original colored" },
      { name: "RabbitMQ", icon: "devicon-rabbitmq-plain-wordmark colored" }
    ]
  },
  {
    title: "Data Science / Analytics",
    items: [
      { name: "Pandas", icon: "devicon-pandas-plain colored" },
      { name: "NumPy", icon: "devicon-numpy-plain colored" },
      { name: "Matplotlib", icon: "devicon-matplotlib-plain colored" },
      { name: "Exploratory Data Analysis", short: "EDA" },
      { name: "Statistics", short: "ST" },
      { name: "Data Cleaning", short: "DC" },
      { name: "Dashboards", short: "BI" },
      { name: "Reporting", short: "RP" },
      { name: "SQL Analytics", short: "SQL" }
    ]
  },
  {
    title: "Databases / Vector Databases",
    items: [
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain-wordmark colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Redis", icon: "devicon-redis-plain colored" },
      { name: "ChromaDB", short: "CH" },
      { name: "Weaviate", short: "WV" },
      { name: "Qdrant", short: "QD" },
      { name: "Snowflake", short: "SF" },
      { name: "Vector Search", short: "VS" }
    ]
  },
  {
    title: "DevOps / Tools / Cloud",
    items: [
      { name: "Linux", icon: "devicon-ubuntu-plain colored" },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original dark:text-white" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Docker Compose", short: "DC" },
      { name: "Microservices", short: "MS" },
      { name: "Azure", icon: "devicon-azure-plain colored" },
      { name: "Jupyter", icon: "devicon-jupyter-plain colored" },
      { name: "Power BI", short: "BI" }
    ]
  }
];

const experienceData = [
  {
    date: "Jan 2026 - Present",
    role: "Digitalization / Data Engineer Intern",
    company: "KOSTAL Group",
    location: "Tangier",
    bullets: [
      "Analyzed production data to identify bottlenecks, defect patterns, and performance drifts, while exploring AI-driven approaches for anomaly detection, predictive insights, and intelligent process monitoring.",
      "Developed and implemented a digital platform to streamline Project Launch Management, improving process tracking, reporting, and cross-team visibility.",
      "Acquired strong domain knowledge in industrial production systems, automation processes, and manufacturing performance metrics.",
      "Built robust data pipelines to extract and transform noisy data into structured data from different sources."
    ]
  },
  {
    date: "Dec 2025 - May 2025",
    role: "AI / Data Engineer Intern",
    company: "Bid2Win",
    location: "Remote - Part-Time",
    bullets: [
      "Developing an AI platform to automate tenders analysis, reducing manual processing effort and improving document filtering efficiency.",
      "Built an automated data pipeline for scraping, processing, and transforming unstructured data, then integrating it into a vector database.",
      "Implemented a feature extraction pipeline using a RAG system to automate extraction of features and insights from tender documents for scoring and recommendation.",
      "Engineered a microservices architecture using Docker and REST APIs, and deployed with Azure."
    ]
  },
  {
    date: "Sept 2025 - Dec 2025",
    role: "AI / Data Engineer Intern",
    company: "High Commission for Planning",
    location: "Remote",
    bullets: [
      "Designed and developed an AI-powered platform that automates and simplifies the documentation and management of statistical processes following the GSBPM framework.",
      "Engineered a robust data pipeline for document processing and ingestion.",
      "Implemented an advanced RAG engine using HyDE prompting to extract facts from documents and generate structured GSBPM-compliant documentation with evidence and audit trails.",
      "Built a web application allowing users to upload files, chat with documents, request GSBPM-aligned documentation, and review or regenerate outputs."
    ]
  },
  {
    date: "Feb 2025 - July 2025",
    role: "AI / Data Engineer Intern",
    company: "TNA Consulting",
    location: "Casablanca",
    bullets: [
      "Designed and developed an AI platform to help financial institutions interpret and leverage official central bank publications and documents across Africa.",
      "Engineered an automated and scalable data pipeline for scraping, collecting, transforming, chunking, and loading documents into a vector database.",
      "Built an intelligent RAG chatbot capable of answering user questions on African central bank documents, with an admin interface for managing settings and files."
    ]
  },
  {
    date: "March 2023 - June 2023",
    role: "Research Assistant",
    company: "Faculty of Poly-disciplinary",
    location: "Larache",
    bullets: [
      "Developed an optimization system to improve consistency of AHP pairwise comparison matrices using Genetic Algorithms (GA) and Particle Swarm Optimization (PSO).",
      "Built a Django web application for automated AHP matrix generation and validation.",
      "Co-authored three research papers with Dr. Chakir Tajani:",
      "A Metaheuristic Approach to Improve Consistency of the Pairwise Matrix in AHP : https://science.lpnu.ua/mmc/all-volumes-and-issues/volume-10-number-4-2023/metaheuristic-approach-improve-consistency",
      "ESTIMATION OF MISSING ELEMENTS IN PAIRWISE COMPARISON MATRIX USING GENETIC ALGORITHM : https://pjm.ppu.edu/sites/default/files/papers/PJM_13(Special%20Issue%20I)_2024_222_to_231.pdf",
      "Generating a Set of Consistent Pairwise Comparison Test Matrices in AHP using PSO : https://wseas.com/journals/mathematics/2024/a485106-015(2024).pdf"
    ]
  }
];

const projectsData = [
  {
    title: "ChatPDF: Chat with PDF Locally",
    image: "Imgs/chatpdf.gif",
    link: "https://github.com/drisskhattabi6/Chat-with-PDF-Locally",
    tags: ["AI", "RAG", "NLP", "Chatbot", "ChromaDB", "Streamlit"]
  },
  {
    title: "AI Scraper",
    image: "Imgs/ai-scraper.gif",
    link: "https://github.com/drisskhattabi6/AI-Scraper",
    tags: ["AI", "Scraper", "Selenium", "BeautifulSoup", "Streamlit"]
  },
  {
    title: "Moroccan Meal Recipes Chatbot",
    image: "Imgs/moroccan-meals.png",
    link: "https://github.com/drisskhattabi6/Moroccan-Meal-Recipes-Chatbot",
    tags: ["AI", "Chatbot", "NLP", "RAG", "Streamlit"]
  },
  {
    title: "Obstacle Detection & Alert System",
    image: "Imgs/obstacle-detection.png",
    link: "https://github.com/drisskhattabi6/Obstacle-Detection-with-Alert-System-for-Visually-Impaired",
    tags: ["AI", "Computer Vision", "CNN", "Node-RED"]
  },
  {
    title: "Medical Document Management Blockchain System",
    image: "Imgs/docs-blockchain.png",
    link: "https://github.com/drisskhattabi6/Medical-Record-With-Blockchain/",
    tags: ["Blockchain", "Ethereum", "Tkinter", "React", "Web3"]
  },
  {
    title: "Energy Consumption Analysis and Prediction",
    image: "Imgs/stock-market.jpg",
    link: "https://github.com/drisskhattabi6/Energy-Consumption-Analysis-and-Prediction",
    tags: ["AI", "LSTM", "PyTorch", "Pandas", "Matplotlib"]
  },
  {
    title: "Commerce Data Warehouse Building and Analysis",
    image: "Imgs/data-warehouse.png",
    link: "https://github.com/drisskhattabi6/Commerce-Data-Warehouse-Building-and-Analysis",
    tags: ["Data Warehouse", "MySQL", "ETL", "Pandas", "Power BI"]
  },
  {
    title: "Real-Time Twitter Sentiment Analysis",
    image: "Imgs/Sentiment-Analysis.png",
    link: "https://github.com/drisskhattabi6/Real-Time-Twitter-Sentiment-Analysis",
    tags: ["AI", "Sentiment Analysis", "Big Data", "Spark", "Kafka", "Django"]
  },
  {
    title: "Chat with LLM Locally",
    image: "Imgs/chat-llm.png",
    link: "https://github.com/drisskhattabi6/Chat-with-LLM-Locally",
    tags: ["LLM", "Chatbot", "Django", "Hugging Face", "Web App"]
  }
];

const certificationsData = [
  {
    title: "Associate Data Scientist in Python",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/af1630217d741a62f8f95342c4b9acc710561d1a"
  },
  {
    title: "Associate AI Engineer for Data Scientists",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/bbf8da39e2ea3460b9f6589e0b27fba83e6fd807"
  },
  {
    title: "Associate Data Analyst in SQL",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/c79d683ec25201af13ec23d156ce0c7a71150fc9"
  },
  {
    title: "Associate Data Engineer in SQL",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/6c0ad114a9ec6f303c0da5c924f903fddf9611da"
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/5cb9b08098fa1e0092674af57bf1298aa566087f"
  },
  {
    title: "Data Analyst with Python",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/71018bcbfe64891cbe242561c1a2334e7b5ffc67"
  }
];

function renderSkillBadge(item) {
  const visual = item.icon
    ? `<i class="${item.icon} text-base"></i>`
    : `<span class="inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-brand-500/10 px-1.5 text-[10px] font-bold text-brand-700 dark:text-brand-300">${item.short || item.name.slice(0, 2).toUpperCase()}</span>`;

  return `
    <span class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
      ${visual}
      <span>${item.name}</span>
    </span>
  `;
}

function renderSkills() {
  const container = document.getElementById("skillsGrid");
  if (!container) return;

  container.innerHTML = skillsData
    .map(
      (group) => `
        <div class="glass rounded-3xl p-6 shadow-soft">
          <h3 class="text-lg font-semibold">${group.title}</h3>
          <div class="mt-4 flex flex-wrap gap-2">
            ${group.items.map(renderSkillBadge).join("")}
          </div>
        </div>
      `
    )
    .join("");
}

function linkify(text) {
  return text.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="break-all text-brand-600 underline hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300">$1</a>'
  );
}

function renderExperience() {
  const container = document.getElementById("experienceTimeline");
  if (!container) return;

  container.innerHTML = experienceData
    .map(
      (item) => `
        <div class="relative mb-8">
          <span class="absolute -left-[31px] top-2 h-3.5 w-3.5 rounded-full bg-brand-500 ring-8 ring-brand-500/10"></span>
          <div class="grid gap-4 md:grid-cols-[180px_1fr]">
            <div class="pt-1 text-sm font-semibold text-brand-700 dark:text-brand-300">
              ${item.date}
            </div>
            <div class="glass rounded-3xl p-6 shadow-soft">
              <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 class="text-xl font-semibold">${item.role}</h3>
                  <p class="text-sm text-slate-500 dark:text-slate-400">
                    ${item.company} — ${item.location}
                  </p>
                </div>
              </div>
              <ul class="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                ${item.bullets
                  .map(
                    (bullet) => `
                      <li class="flex gap-3">
                        <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-500"></span>
                        <span>${linkify(bullet)}</span>
                      </li>
                    `
                  )
                  .join("")}
              </ul>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

function renderProjects() {
  const container = document.getElementById("projectsGrid");
  if (!container) return;

  container.innerHTML = projectsData
    .map(
      (project) => `
        <article class="group glass overflow-hidden rounded-3xl shadow-soft transition duration-300 hover:-translate-y-1">
          <div class="overflow-hidden">
            <img src="${project.image}" alt="${project.title}" class="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <div class="p-5">
            <div class="mb-4 flex items-start justify-between gap-4">
              <h3 class="text-lg font-semibold leading-7">${project.title}</h3>
              <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                <i class="fa-solid fa-arrow-up-right-from-square text-sm"></i>
              </a>
            </div>
            <div class="flex flex-wrap gap-2">
              ${project.tags
                .map(
                  (tag) => `
                    <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-300">${tag}</span>
                  `
                )
                .join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCertifications() {
  const container = document.getElementById("certificationsGrid");
  if (!container) return;

  container.innerHTML = certificationsData
    .map(
      (cert) => `
        <div class="glass rounded-3xl p-6 shadow-soft">
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 text-2xl text-brand-600 dark:text-brand-400">
            <i class="fa-solid fa-award"></i>
          </div>
          <h3 class="mt-5 text-lg font-semibold">${cert.title}</h3>
          <a
            href="${cert.link}"
            ${cert.link === "#" ? 'aria-label="Certificate link to be added" onclick="return false;"' : 'target="_blank" rel="noopener noreferrer"'}
            class="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            ${cert.link === "#" ? "Add Certificate Link" : "View Certificate"}
            <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
          </a>
        </div>
      `
    )
    .join("");
}

function updateStats() {
  const experienceCount = document.getElementById("experienceCount");
  const projectCount = document.getElementById("projectCount");
  const certCount = document.getElementById("certCount");

  if (experienceCount) experienceCount.textContent = experienceData.length;
  if (projectCount) projectCount.textContent = projectsData.length;
  if (certCount) certCount.textContent = certificationsData.length;
}

function syncThemeButtons() {
  const isDark = document.documentElement.classList.contains("dark");
  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.innerHTML = isDark
      ? '<i class="fa-regular fa-sun"></i>'
      : '<i class="fa-regular fa-moon"></i>';
  });
}

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );
  syncThemeButtons();
}

document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
  btn.addEventListener("click", toggleTheme);
});

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const isHiddenNow = mobileMenu.classList.toggle("hidden");
    menuBtn.setAttribute("aria-expanded", String(!isHiddenNow));
  });

  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:drisskhattabi6@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  });
}

// Animated network background
const canvas = document.getElementById("networkCanvas");

if (canvas) {
  const ctx = canvas.getContext("2d");
  let particles = [];
  let width = window.innerWidth;
  let height = window.innerHeight;

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    initParticles();
  }

  function initParticles() {
    const count = width < 640 ? 28 : width < 1024 ? 48 : 72;

    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: Math.random() * 1.8 + 1.2
    }));
  }

  function animateNetwork() {
    const isDark = document.documentElement.classList.contains("dark");
    const pointColor = isDark
      ? "rgba(148, 163, 184, 0.8)"
      : "rgba(71, 85, 105, 0.45)";
    const lineBase = isDark ? [56, 189, 248] : [15, 23, 42];

    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x <= 0 || p.x >= width) p.vx *= -1;
      if (p.y <= 0 || p.y >= height) p.vy *= -1;
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 140) {
          const alpha = (1 - distance / 140) * (isDark ? 0.18 : 0.1);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${lineBase[0]}, ${lineBase[1]}, ${lineBase[2]}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    for (const p of particles) {
      ctx.beginPath();
      ctx.fillStyle = pointColor;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(animateNetwork);
  }

  resizeCanvas();
  animateNetwork();
  window.addEventListener("resize", resizeCanvas);
}

renderSkills();
renderExperience();
renderProjects();
renderCertifications();
updateStats();
syncThemeButtons();