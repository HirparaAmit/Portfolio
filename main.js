import * as THREE from 'three';

// Data Configuration
const EXPERIENCE = [
    {
        role: "AI/ML Co-op",
        company: "PRGX Global Inc",
        date: "June 2025 – Dec 2025",
        bullets: [
            "Engineered an <b>automated contract extraction system</b> processing <b>1,000+ documents/day</b>, achieving high accuracy in capturing titles, dates, and tabular data using <b>OCR (DeepSeek, PaddlePaddle)</b> and <b>LLMs (Nanonets, Mistral)</b>",
            "Developed an <b>automated evaluation pipeline</b> to validate extraction results after each enhancement, improving reliability and scalability",
            "Integrated <b>Azure AI, Document Intelligence, and Storage</b> to streamline data ingestion, experimentation, and deployment",
            "Fine-tuned the <b>Doclayout-YOLO</b> model for table extraction by building a custom dataset, tuning hyperparameters, and deploying it to production, which improved the pipeline’s performance from <b>79% to 86%</b>",
            "Designed targeted prompts for multiple <b>LLM models</b> to aggregate and synthesize extracted tables and document content, ensuring accurate data consolidation"
        ],
        tech: ["OCR", "DeepSeek", "PaddlePaddle", "LLMs", "Mistral", "Azure Document Intelligence", "Azure AI", "YOLO v8", "Nanonets"]
    },
    {
        role: "AI Engineer",
        company: "Green brands LLC",
        date: "Feb 2024 – Aug 2024",
        bullets: [
            "Designed advanced <b>generative AI pipelines</b> leveraging <b>OpenRouter, Runpod, and ComfyUI</b> to seamlessly generate text, images, and short videos on-demand, elevating user engagement",
            "Fine-tuned <b>BERT and XTTS models</b>, boosting text-to-speech accuracy by <b>10%</b> and voice interaction efficiency by <b>30%</b>",
            "Developed and optimized an <b>AI voice calling pipeline</b>, achieving a <b>21% reduction in latency</b> by transmitting audio in array buffer chunks instead of full audio metadata",
            "Optimized back-end systems by leveraging <b>MongoDB</b> for efficient database management and hosting API endpoints on <b>Azure Functions</b>",
            "Implemented a robust <b>CI/CD pipeline</b> on GitHub for the back-end, automating deployment workflows and ensuring seamless updates with <b>minimal downtime</b>",
            "Implemented <b>RAG pipeline</b> using vector databases (<b>Pinecone/FAISS</b>) to enhance conversational AI accuracy"
        ],
        tech: ["Generative AI", "BERT", "XTTS", "MongoDB", "Azure Functions", "RAG", "Pinecone", "FAISS", "OpenRouter", "Runpod", "ComfyUI", "CI/CD"]
    },
    {
        role: "Machine Learning Engineer",
        company: "S.S.B. Digital Pvt. Ltd.",
        date: "May 2023 – Jan 2024",
        bullets: [
            "Developed and deployed end-to-end <b>machine learning and deep learning pipelines</b> for financial projects, including passbook data extraction to analyze user transactions and <b>predict future expenses</b>",
            "Designed and implemented a <b>full-stack Pension Management System</b> using <b>React, Django, and PostgreSQL</b>, hosted on an <b>AWS EC2</b> instance to ensure reliability and scalability",
            "Created <b>RESTful APIs</b> using Flask for seamless integration of machine learning models and back-end functionalities, reducing deployment time",
            "Led data preprocessing and <b>feature engineering</b> efforts to optimize machine learning model performance in sentiment analysis and predictive analytics",
            "Conducted rigorous testing using <b>Pytest and Selenium</b>, ensuring feature stability and resolving bugs in production environments",
            "Optimized database performance through <b>query optimization</b>, indexing strategies, and batch processing across PostgreSQL/MySQL"
        ],
        tech: ["ML/DL", "React", "Django", "PostgreSQL", "Flask", "AWS EC2", "RESTful APIs", "Pytest", "Selenium", "MySQL", "Query Optimization"]
    },
    {
        role: "Deep Learning Intern",
        company: "Bhaskaracharya Institute For Space Applications and Geo-Informatics",
        date: "May 2022 – July 2022",
        bullets: [
            "Successfully developed and implemented an innovative model for extracting intricate <b>road and street networks</b> from <b>high-resolution satellite images</b>.",
            "Utilized modern <b>Deep Learning techniques (U-Net)</b> to cater to the needs of advanced applications.",
            "Demonstrated exceptional problem-solving skills in <b>designing and optimizing</b> the model.",
            "Achieved outstanding results in accurately identifying and extracting complex networks from diverse satellite images.",
            "Received <b>positive feedback</b> from colleagues and superiors for the effectiveness of the developed model."
        ],
        tech: ["Deep Learning", "U-Net", "Computer Vision", "Python", "Satellite Analytics", "Image Segmentation"]
    }
];

const PROJECTS = [
    {
        name: "EquiLoan",
        desc: "Multi-agent RL environment with custom reward functions for loan lending/borrowing decision-making.",
        tech: ["Reinforcement Learning", "PyTorch", "DQN", "Gymnasium", "Stable Baselines3", "Multi-Agent Systems"],
        link: "https://github.com/sshivaditya/Equiloan"
    },
    {
        name: "SiteScribe",
        desc: "AI-powered tool that allows users to chat with any website content by simply pasting a link.",
        tech: ["LLMs", "LangChain", "OpenAI", "Vector Databases", "FastAPI", "Web Scraping", "Python"],
        link: "https://github.com/HirparaAmit/SiteScribe"
    },
    {
        name: "Federated-Learning",
        desc: "Federated LSTM model for tweet sentiment prediction, featured in a research paper.",
        tech: ["Federated Learning", "LSTM", "PyTorch", "Deep Learning", "Distributed Systems", "NLP"],
        link: "https://github.com/HirparaAmit/Federated-Learning"
    },
    {
        name: "Self-Driving",
        desc: "Autonomous vehicle navigation in 3D environment using CNN-based object recognition and CoppeliaSim.",
        tech: ["Autonomous Driving", "CNN", "Robotics", "CoppeliaSim", "Computer Vision", "Neural Networks"],
        link: "https://github.com/HirparaAmit/Self-Driving"
    },
    {
        name: "LipReading",
        desc: "Deep learning model for visual speech recognition (lip reading) using advanced neural networks.",
        tech: ["Deep Learning", "RNN/LSTM", "Computer Vision", "TensorFlow", "Sequence Modeling", "Keras"],
        link: "https://github.com/HirparaAmit/LipReading-using-DeepLearning"
    },
    {
        name: "Sign-Language-Detection",
        desc: "Real-time sign language recognition system using computer vision for accessible communication.",
        tech: ["Computer Vision", "Real-time AI", "MediaPipe", "OpenCV", "Hand Tracking", "Deep Learning"],
        link: "https://github.com/HirparaAmit/Sign-Language-Detection"
    }
];

const SKILLS = {
    "AI & Machine Learning": ["LLMs", "Agentic AI", "RAG Pipelines", "Prompt Engineering", "LLM Fine-tuning", "NLP", "Deep Learning", "Supervised Learning", "Unsupervised Learning", "Statistics", "Linear Algebra"],
    "Frameworks & Libraries": ["PyTorch", "TensorFlow", "LangGraph", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "Keras", "FastAPI", "React"],
    "Data & MLOps": ["MLFlow", "Kafka", "Exploratory Data Analysis (EDA)", "Data Cleaning", "PostgreSQL", "MongoDB", "Pinecone", "FAISS", "Feature Engineering"],
    "Cloud & DevOps": ["AWS", "Azure", "Docker", "CI/CD", "GitHub Actions", "Runpod", "OpenRouter"],
    "Languages & Core": ["Python", "Jupyter Notebooks", "JavaScript", "C", "RESTful APIs", "Git"]
};

// DOM Injection
function initContent() {
    const expContainer = document.getElementById('experience-list');
    EXPERIENCE.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'glass-card experience-card';
        card.innerHTML = `
            <div class="exp-header">
                <div>
                    <div class="exp-role">${exp.role}</div>
                    <div class="exp-company">${exp.company}</div>
                </div>
                <div class="exp-date">${exp.date}</div>
            </div>
            <ul class="exp-bullets">
                ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
            </ul>
            <div class="tech-stack" style="margin-top: 1.5rem;">
                ${exp.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
            </div>
        `;
        expContainer.appendChild(card);
    });

    const projectContainer = document.getElementById('projects-list');
    PROJECTS.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'glass-card project-card';
        card.innerHTML = `
            <h3>${proj.name}</h3>
            <p>${proj.desc}</p>
            <div class="tech-stack">
                ${proj.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
            </div>
            <a href="${proj.link}" target="_blank" class="project-link">View Project →</a>
        `;
        projectContainer.appendChild(card);
    });

    const skillsContainer = document.getElementById('skills-list');
    for (const [cat, list] of Object.entries(SKILLS)) {
        const div = document.createElement('div');
        div.className = 'skill-category';
        div.innerHTML = `
            <h4>${cat}</h4>
            <div class="tech-stack">
                ${list.map(s => `<span class="tech-badge">${s}</span>`).join('')}
            </div>
        `;
        skillsContainer.appendChild(div);
    }
}

// Three.js Logic: Neural Network Particle System
function init3D() {
    const canvas = document.getElementById('bg-canvas');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const particleCount = 80;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 12;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
        velocities.push(new THREE.Vector3(
            (Math.random() - 0.5) * 0.005,
            (Math.random() - 0.5) * 0.005,
            (Math.random() - 0.5) * 0.005
        ));
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        color: 0x6366f1,
        size: 0.1,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x6366f1,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending
    });

    const linesGeometry = new THREE.BufferGeometry();
    const lineMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(lineMesh);

    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function animate() {
        requestAnimationFrame(animate);

        const pos = geometry.attributes.position.array;
        const linePositions = [];

        for (let i = 0; i < particleCount; i++) {
            pos[i * 3] += velocities[i].x;
            pos[i * 3 + 1] += velocities[i].y;
            pos[i * 3 + 2] += velocities[i].z;

            if (Math.abs(pos[i * 3]) > 6) velocities[i].x *= -1;
            if (Math.abs(pos[i * 3 + 1]) > 6) velocities[i].y *= -1;
            if (Math.abs(pos[i * 3 + 2]) > 6) velocities[i].z *= -1;

            for (let j = i + 1; j < particleCount; j++) {
                const dx = pos[i * 3] - pos[j * 3];
                const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
                const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (dist < 2.5) {
                    linePositions.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
                    linePositions.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
                }
            }
        }

        linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        geometry.attributes.position.needsUpdate = true;

        camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.05;
        camera.position.y += (-mouseY * 1.5 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);

        particles.rotation.y += 0.0005;
        lineMesh.rotation.y += 0.0005;

        renderer.render(scene, camera);
    }

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
}

// Intersection Observer for Scroll Reveals
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section, .glass-card, .reveal').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// Dynamic UI Enhancements
function initScrollProgress() {
    const progress = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progress.style.width = scrolled + "%";
    });
}

function initMouseGlow() {
    const glow = document.querySelector('.mouse-glow');
    window.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
}


function initTypingEffect() {
    const textElement = document.getElementById('typing-text');
    if (!textElement) return;
    const text = textElement.textContent;
    textElement.textContent = '';

    let i = 0;
    function type() {
        if (i < text.length) {
            textElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
}

// Initialize everything
window.onload = () => {
    initContent();
    init3D();
    initScrollReveal();
    initScrollProgress();
    initMouseGlow();
    initTypingEffect();
};

