export const DATA = {
  personal: {
    name: "Hamza Shahzad",
    role: "AI/ML Engineer",
    tagline: "Results-driven AI/ML Engineer specializing in Computer Vision, NLP, and scalable Deep Learning systems.",
    bio: "I am an AI/ML Engineer and BS Computer Science (Artificial Intelligence) graduate from The Islamia University of Bahawalpur. I have hands-on experience building end-to-end machine learning pipelines using Python, PyTorch, and TensorFlow. My freelance and academic projects span Computer Vision (YOLOv8), NLP (Resume Screening), and Generative AI (RAG pipelines with LangChain and FAISS). I am passionate about deploying robust, scalable AI architectures using FastAPI, Django, and Docker.",
    location: "Islamabad, Punjab, Pakistan",
    email: "hamzashahzad78374@gmail.com",
    phone: "+92 0320-7074141",
    social: {
      github: "https://github.com/hamza01055",
      linkedin: "https://linkedin.com/in/hamzashahzad-667602355",
      upwork: "https://www.upwork.com/freelancers/~0188e43144433479ac?mp_source=share",
      instagram: "https://www.instagram.com/hamm_xa",
      whatsapp: "https://wa.me/923207074141",
      twitter: "https://x.com/Hamza01055"
    }
  },
  stats: [
    { label: "Freelance Experience", value: "1+ Yrs" },
    { label: "AI/ML Projects", value: "6+" },
    { label: "CGPA", value: "2.9/4" },
    { label: "Availability", value: "Immediate" }
  ],
  researchFocus: [
    { id: 1, title: "Computer Vision", icon: "Monitor", desc: "Real-time object detection, CNNs, and transfer learning using YOLOv8, ResNet, and VGG." },
    { id: 2, title: "NLP & LLMs", icon: "MessageSquare", desc: "Sentiment analysis, TF-IDF vectorization, and language processing pipelines." },
    { id: 3, title: "Generative AI (RAG)", icon: "BrainCircuit", desc: "Document Q&A pipelines using LangChain, FAISS vector stores, and Hugging Face." },
    { id: 4, title: "Smart Cities", icon: "MapPin", desc: "Automated urban issue detection systems integrating AI models with full-stack deployments." }
  ],
  featuredProjects: [
    {
      id: "p1",
      title: "Smart City Issue Detection System",
      category: "Computer Vision (FYP)",
      description: "Automated real-time detection of urban issues (Potholes, Garbage, Streetlights) using YOLOv8m. Orchestrated via Docker Compose with FastAPI backend and Django frontend. Trained on custom 200-300 images per class dataset.",
      tech: ["YOLOv8", "FastAPI", "Django", "Docker", "PyTorch"],
      github: "https://github.com/hamza01055/fyp",
      demo: "#",
      image: "/i.png",
    },
    {
      id: "p2",
      title: "Resume Screening AI",
      category: "NLP",
      description: "End-to-end NLP pipeline parsing resumes and ranking candidates against job descriptions using TF-IDF and cosine similarity, wrapped in a Django web interface.",
      tech: ["Python", "Scikit-learn", "TF-IDF", "Django", "NLP"],
      github: "https://github.com/hamza01055",
      demo: "#",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "p3",
      title: "Generative AI Document Q&A",
      category: "RAG & LLMs",
      description: "Retrieval-Augmented Generation (RAG) pipeline answering user queries from custom document collections using FAISS and sentence-transformers, exposed as a REST API.",
      tech: ["LangChain", "FAISS", "FastAPI", "Hugging Face"],
      github: "https://github.com/hamza01055",
      demo: "#",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "p4",
      title: "Real-Time Object Detection",
      category: "Computer Vision",
      description: "Implemented a real-time object detection system using YOLOv8 capable of processing live video streams and images. Fine-tuned pre-trained YOLOv8 weights on a custom dataset.",
      tech: ["Python", "YOLOv8", "OpenCV", "Django"],
      github: "https://github.com/hamza01055",
      demo: "#",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "p5",
      title: "Image Classification using Deep Learning",
      category: "Deep Learning",
      description: "Trained CNN models from scratch and using transfer learning (ResNet, VGG) for image classification; performed data augmentation, hyperparameter tuning, and full evaluation.",
      tech: ["PyTorch", "CNN", "ResNet", "VGG"],
      github: "https://github.com/hamza01055",
      demo: "#",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "p6",
      title: "Sentiment Analysis using NLP",
      category: "NLP",
      description: "Built an LSTM-based sentiment classification model trained on a labelled product review dataset; achieved over 88% test accuracy with tokenisation and sequence padding.",
      tech: ["Python", "TensorFlow", "LSTM", "Pandas"],
      github: "https://github.com/hamza01055",
      demo: "#",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    }
  ],
  skills: {
    languages: ["Python", "SQL", "C++", "Java"],
    frameworks: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    cv_and_nlp: ["OpenCV", "YOLOv8", "CNN", "ResNet", "LangChain", "RAG", "FAISS", "Hugging Face", "LLMs"],
    deployment: ["FastAPI", "Django", "Docker", "REST APIs", "Roboflow", "Git"]
  },
  services: [
    { title: "Freelance AI Solutions", desc: "End-to-end AI/ML model development from data collection to deployment." },
    { title: "Computer Vision Pipelines", desc: "Real-time object detection and image classification systems using YOLOv8." },
    { title: "NLP & LLM Prototyping", desc: "Building RAG applications, text analysis, and candidate screening tools." },
    { title: "Web API Integration", desc: "Wrapping complex AI models into scalable FastAPI and Django backends." }
  ],
  education: [
    {
      id: "edu1",
      degree: "BS Computer Science in Artificial Intelligence",
      university: "The Islamia University of Bahawalpur, Punjab, Pakistan",
      date: "Sep 2022 - Jun 2026",
      details: "CGPA: 2.9/4.0 | Key Courses: Machine Learning, Deep Learning, Computer Vision, NLP, Data Structures & Algorithms, Database Systems, Software Engineering."
    }
  ],
  certifications: [
    { title: "Freelance AI/ML Engineer (Solo)", issuer: "Self-Employed", date: "Jan 2025 - 2026" }
  ]
};
