import React, { useState, useEffect } from 'react';
import { 
  Terminal, Briefcase, Cpu, Award, GraduationCap, Mail, Phone, MapPin, 
  Linkedin, Github, ExternalLink, Code2, Database, Layers, ShieldCheck, 
  Send, Sparkles, CheckCircle2, ChevronRight, User, FileText, Menu, X 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    'Welcome to Bhavesh CLI v2.4.0',
    'Type "help" to see available commands or click the navigation tabs above.'
  ]);

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    let response = '';

    switch (cmd) {
      case 'help':
        response = 'Commands: about, experience, projects, skills, contact, clear';
        break;
      case 'about':
        response = 'Java & Spring Boot Software Engineer with 2+ years building enterprise microservices & event-driven apps.';
        break;
      case 'experience':
        response = 'Application Engineer at Newgen Software Technologies (Jan 2024 - Present).';
        break;
      case 'projects':
        response = '1. AI Loan Risk Assessment System | 2. AI-Powered Loan Eligibility Assistant';
        break;
      case 'skills':
        response = 'Java 17/21, Spring Boot, Microservices, Kafka, MySQL, PostgreSQL, React, Gemini API, Docker, CI/CD';
        break;
      case 'contact':
        response = 'Email: Bhaveshmulani49@gmail.com | Phone: 7024518225 | Location: Bhopal/Navi Mumbai';
        break;
      case 'clear':
        setTerminalLogs([]);
        setTerminalInput('');
        return;
      default:
        response = `Command not recognized: "${cmd}". Type "help" for valid commands.`;
    }

    setTerminalLogs(prev => [...prev, `$ ${terminalInput}`, response]);
    setTerminalInput('');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Sending message...');
    setTimeout(() => {
      setFormStatus('Message sent successfully! Bhavesh will get back to you soon.');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('hero')}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-lg shadow-lg shadow-cyan-500/20">
                BM
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
                  Bhavesh Mulani
                </span>
                <span className="block text-xs text-cyan-400 font-mono">Software Engineer</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'achievements', label: 'Achievements' },
                { id: 'contact', label: 'Contact' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
              { id: 'skills', label: 'Skills' },
              { id: 'achievements', label: 'Achievements' },
              { id: 'contact', label: 'Contact' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium ${
                  activeTab === tab.id
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    : 'text-slate-400 hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* HERO SECTION */}
        {activeTab === 'hero' && (
          <div className="space-y-16 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
                  <Sparkles size={14} />
                  <span>Available for Backend & Distributed Systems Roles</span>
                </div>
                
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-500 bg-clip-text text-transparent">Bhavesh Mulani</span>
                </h1>
                
                <p className="text-xl text-slate-300 font-medium">
                  Java & Spring Boot Software Engineer specializing in scalable microservices, event-driven architectures, and AI-powered enterprise solutions.
                </p>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Currently building high-volume regulated banking solutions at Newgen Software. Experienced in optimizing backend workflows, Apache Kafka pipelines, and integrating Generative AI APIs.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => setActiveTab('projects')}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold hover:opacity-90 transition shadow-lg shadow-cyan-500/25 flex items-center space-x-2"
                  >
                    <span>Explore Projects</span>
                    <ChevronRight size={18} />
                  </button>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold hover:bg-slate-800 transition flex items-center space-x-2"
                  >
                    <Mail size={18} />
                    <span>Get in Touch</span>
                  </button>
                </div>

                <div className="flex items-center space-x-6 pt-4 text-slate-400">
                  <a href="mailto:Bhaveshmulani49@gmail.com" className="hover:text-cyan-400 transition flex items-center space-x-2 text-sm">
                    <Mail size={16} />
                    <span>Bhaveshmulani49@gmail.com</span>
                  </a>
                  <a href="tel:7024518225" className="hover:text-cyan-400 transition flex items-center space-x-2 text-sm">
                    <Phone size={16} />
                    <span>+91 7024518225</span>
                  </a>
                </div>
              </div>

              {/* Interactive Terminal Card */}
              <div className="lg:col-span-5">
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
                  <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <div className="text-xs font-mono text-slate-400 flex items-center space-x-1">
                      <Terminal size={14} />
                      <span>bhavesh@terminal ~ zsh</span>
                    </div>
                  </div>
                  
                  <div className="p-4 h-72 overflow-y-auto font-mono text-xs space-y-2 text-slate-300">
                    {terminalLogs.map((log, idx) => (
                      <div key={idx} className={log.startsWith('$') ? 'text-cyan-400 font-semibold' : 'text-slate-300'}>
                        {log}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleTerminalSubmit} className="p-3 bg-slate-950 border-t border-slate-800 flex items-center space-x-2">
                    <span className="text-cyan-400 font-mono text-xs">$</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder="Type 'help', 'skills', 'projects'..."
                      className="bg-transparent flex-1 text-xs text-white focus:outline-none font-mono"
                    />
                    <button type="submit" className="text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded hover:bg-cyan-500/30 font-mono">
                      Run
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-10">
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur hover:border-cyan-500/40 transition">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">2+ Years Experience</h3>
                <p className="text-slate-400 text-sm mt-1">Application Engineer at Newgen Software building fintech solutions.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur hover:border-cyan-500/40 transition">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                  <Cpu size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">Microservices & Kafka</h3>
                <p className="text-slate-400 text-sm mt-1">Distributed architectures, event-driven messaging & robust REST APIs.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur hover:border-cyan-500/40 transition">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">GenAI Integration</h3>
                <p className="text-slate-400 text-sm mt-1">Gemini API & prompt engineering for automated risk & eligibility assessments.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur hover:border-cyan-500/40 transition">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                  <Award size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">Top 150 / 90k+</h3>
                <p className="text-slate-400 text-sm mt-1">Ranked among top participants in GFG Mega Job-A-Thon + 400+ DSA solved.</p>
              </div>
            </div>
          </div>
        )}

        {/* ABOUT SECTION */}
        {activeTab === 'about' && (
          <div className="space-y-10 animate-fadeIn max-w-4xl mx-auto">
            <div className="border-b border-slate-800 pb-5">
              <h2 className="text-3xl font-bold text-white flex items-center space-x-3">
                <User className="text-cyan-400" />
                <span>Professional Summary</span>
              </h2>
              <p className="text-slate-400 mt-1">Background, education, and core engineering philosophy.</p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl space-y-6 backdrop-blur">
              <p className="text-slate-300 text-lg leading-relaxed">
                Java/Spring Boot Software Engineer with <strong className="text-cyan-400">2+ years of experience</strong> designing and developing scalable, distributed enterprise applications using microservices architecture, REST APIs, and event-driven systems (Apache Kafka).
              </p>
              <p className="text-slate-300 leading-relaxed">
                Skilled in relational and NoSQL data modeling, secure coding, unit testing (<strong className="text-white">JUnit 5, Mockito</strong>), and end-to-end delivery of high-volume, regulated banking systems. Comfortable owning solutions from design through production support, with strong ability to collaborate across cross-functional and globally distributed teams.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                <div className="space-y-2">
                  <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider">Education</h4>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-white">Lakshmi Narain College of Technology and Science</div>
                    <div className="text-sm text-slate-400">B.Tech in Electronics and Communication Engineering</div>
                    <div className="text-xs text-cyan-400 font-mono mt-1">CGPA: 8.78 / 10.0 • Nov 2020 – June 2024</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider">Certifications & Location</h4>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-300 rounded text-xs font-mono border border-cyan-500/20">JAVA</span>
                      <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-300 rounded text-xs font-mono border border-cyan-500/20">CCNA</span>
                      <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-300 rounded text-xs font-mono border border-cyan-500/20">SQL</span>
                    </div>
                    <div className="text-xs text-slate-400 flex items-center space-x-1 pt-1">
                      <MapPin size={14} className="text-cyan-400" />
                      <span>Based in Bhopal, MP / Navi Mumbai, Maharashtra</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* EXPERIENCE SECTION */}
        {activeTab === 'experience' && (
          <div className="space-y-10 animate-fadeIn max-w-4xl mx-auto">
            <div className="border-b border-slate-800 pb-5">
              <h2 className="text-3xl font-bold text-white flex items-center space-x-3">
                <Briefcase className="text-cyan-400" />
                <span>Work Experience</span>
              </h2>
              <p className="text-slate-400 mt-1">Professional tenure and engineering accomplishments.</p>
            </div>

            <div className="relative pl-6 border-l-2 border-cyan-500/30 space-y-10">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950 shadow"></div>
                
                <div className="bg-slate-900/70 border border-slate-800 p-6 rounded-2xl space-y-4 backdrop-blur">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">Application Engineer</h3>
                      <div className="text-cyan-400 font-medium">Newgen Software Technologies Limited</div>
                    </div>
                    <div className="inline-flex px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono border border-cyan-500/20 w-fit">
                      Jan 2024 – Present • Navi Mumbai
                    </div>
                  </div>

                  <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                    <li className="flex items-start space-x-2">
                      <ChevronRight size={16} className="text-cyan-400 mt-1 shrink-0" />
                      <span>Designed and delivered scalable, enterprise-grade digital lending solutions using Java, Spring Boot, and microservices for SBI agricultural and ACC Allied loan journeys with exposure up to INR 5 Crore.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ChevronRight size={16} className="text-cyan-400 mt-1 shrink-0" />
                      <span>Architected and integrated distributed REST APIs across customer, loan, and document-retrieval services, powering dynamic loan workflows branching on Credit Risk Assessment (CRA) scores.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ChevronRight size={16} className="text-cyan-400 mt-1 shrink-0" />
                      <span>Re-architected key SQL queries and backend workflows, boosting system performance by 25% and cutting lead processing time by 30%.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ChevronRight size={16} className="text-cyan-400 mt-1 shrink-0" />
                      <span>Owned Development, UAT, and Production support end-to-end, triaging critical incidents, coordinating fixes, and ensuring minimal downtime across high-availability systems.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ChevronRight size={16} className="text-cyan-400 mt-1 shrink-0" />
                      <span>Acted as primary technical point of contact for clients and business stakeholders, translating requirements into robust implementation plans.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ChevronRight size={16} className="text-cyan-400 mt-1 shrink-0" />
                      <span>Led code reviews and mentored junior developers on backend best practices, distributed system design, and debugging strategy.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PROJECTS SECTION */}
        {activeTab === 'projects' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="border-b border-slate-800 pb-5">
              <h2 className="text-3xl font-bold text-white flex items-center space-x-3">
                <Code2 className="text-cyan-400" />
                <span>Key Projects</span>
              </h2>
              <p className="text-slate-400 mt-1">High-impact backend systems and AI integrations.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between backdrop-blur hover:border-cyan-500/40 transition">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-mono border border-cyan-500/20">
                      Enterprise Backend & GenAI
                    </span>
                    <Cpu size={20} className="text-cyan-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">AI Loan Risk Assessment System</h3>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {['Java 17', 'Spring Boot', 'Hibernate', 'MySQL', 'REST APIs', 'Kafka', 'Gemini API', 'JUnit 5'].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-slate-950 text-slate-300 rounded text-xs font-mono border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                      <span>Architected a distributed, event-driven backend loan-processing system with secure REST APIs and normalized MySQL/Hibernate data layer.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                      <span>Integrated Gemini API to auto-generate AI risk assessments and document recommendations, cutting preliminary review effort by 50%.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                      <span>Implemented Apache Kafka for asynchronous notification and audit event processing, improving API responsiveness by 30%.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">Production Grade Architecture</span>
                  <button onClick={() => setActiveTab('contact')} className="text-xs text-cyan-400 hover:underline flex items-center space-x-1 font-semibold">
                    <span>Request Architecture Brief</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between backdrop-blur hover:border-cyan-500/40 transition">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs font-mono border border-indigo-500/20">
                      Fullstack & Prompt Engineering
                    </span>
                    <Sparkles size={20} className="text-indigo-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">AI-Powered Loan Eligibility Assistant</h3>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {['HTML', 'CSS', 'JavaScript', 'Gemini API', 'REST API', 'Prompt Engineering'].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-slate-950 text-slate-300 rounded text-xs font-mono border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                      <span>Built an AI-powered eligibility assistant integrating REST APIs and advanced prompt engineering with Gemini API.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                      <span>Generated structured eligibility, risk, and document-recommendation output in real-time.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                      <span>Reduced preliminary loan assessment time by up to 80% via a responsive, intuitive web interface.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">Interactive Web App</span>
                  <button onClick={() => setActiveTab('contact')} className="text-xs text-indigo-400 hover:underline flex items-center space-x-1 font-semibold">
                    <span>Request Live Demo</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SKILLS SECTION */}
        {activeTab === 'skills' && (
          <div className="space-y-10 animate-fadeIn max-w-5xl mx-auto">
            <div className="border-b border-slate-800 pb-5">
              <h2 className="text-3xl font-bold text-white flex items-center space-x-3">
                <Cpu className="text-cyan-400" />
                <span>Technical Arsenal</span>
              </h2>
              <p className="text-slate-400 mt-1">Languages, frameworks, databases, and toolsets.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4 backdrop-blur">
                <div className="flex items-center space-x-3 text-cyan-400">
                  <Code2 size={24} />
                  <h3 className="text-lg font-bold text-white">Languages & Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Java 17/21', 'Spring Boot', 'Microservices', 'REST APIs', 'JWT Auth', 'Hibernate', 'HTML/CSS/JS', 'React.js'].map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-slate-950 text-cyan-300 rounded-lg text-xs font-mono border border-slate-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4 backdrop-blur">
                <div className="flex items-center space-x-3 text-indigo-400">
                  <Layers size={24} />
                  <h3 className="text-lg font-bold text-white">Distributed & Event-Driven</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Apache Kafka', 'Asynchronous Messaging', 'Event-Driven Design', 'Distributed Systems'].map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-slate-950 text-indigo-300 rounded-lg text-xs font-mono border border-slate-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4 backdrop-blur">
                <div className="flex items-center space-x-3 text-teal-400">
                  <Database size={24} />
                  <h3 className="text-lg font-bold text-white">Databases & Storage</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['MySQL', 'PostgreSQL', 'Oracle Database', 'NoSQL Modeling Concepts'].map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-slate-950 text-teal-300 rounded-lg text-xs font-mono border border-slate-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4 backdrop-blur">
                <div className="flex items-center space-x-3 text-amber-400">
                  <ShieldCheck size={24} />
                  <h3 className="text-lg font-bold text-white">Testing & Quality</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['JUnit 5', 'Mockito', 'Unit Testing', 'SonarQube', 'Code Review', 'Secure Coding'].map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-slate-950 text-amber-300 rounded-lg text-xs font-mono border border-slate-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4 backdrop-blur">
                <div className="flex items-center space-x-3 text-rose-400">
                  <Sparkles size={24} />
                  <h3 className="text-lg font-bold text-white">AI & GenAI</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Large Language Models', 'Prompt Engineering', 'Gemini API'].map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-slate-950 text-rose-300 rounded-lg text-xs font-mono border border-slate-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4 backdrop-blur">
                <div className="flex items-center space-x-3 text-emerald-400">
                  <Terminal size={24} />
                  <h3 className="text-lg font-bold text-white">Tools & CI/CD</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'Jenkins (CI/CD)', 'Postman'].map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-slate-950 text-emerald-300 rounded-lg text-xs font-mono border border-slate-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ACHIEVEMENTS SECTION */}
        {activeTab === 'achievements' && (
          <div className="space-y-10 animate-fadeIn max-w-4xl mx-auto">
            <div className="border-b border-slate-800 pb-5">
              <h2 className="text-3xl font-bold text-white flex items-center space-x-3">
                <Award className="text-cyan-400" />
                <span>Achievements & Problem Solving</span>
              </h2>
              <p className="text-slate-400 mt-1">Competitive programming and competitive rankings.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/70 border border-slate-800 p-6 rounded-2xl space-y-4 backdrop-blur">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">GeeksforGeeks Mega Job-A-Thon</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Ranked among <strong className="text-cyan-400">Top 150 out of 90,000+ participants</strong>, demonstrating exceptional aptitude in problem-solving and technical execution under competitive pressure.
                </p>
              </div>

              <div className="bg-slate-900/70 border border-slate-800 p-6 rounded-2xl space-y-4 backdrop-blur">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <Code2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">400+ DSA Problems Solved</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Successfully solved over 400 Data Structures & Algorithms problems across <strong className="text-indigo-400">LeetCode, GeeksforGeeks, and CodeChef</strong>, building a rock-solid foundation in optimal algorithm design.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CONTACT SECTION */}
        {activeTab === 'contact' && (
          <div className="space-y-10 animate-fadeIn max-w-4xl mx-auto">
            <div className="border-b border-slate-800 pb-5">
              <h2 className="text-3xl font-bold text-white flex items-center space-x-3">
                <Mail className="text-cyan-400" />
                <span>Let's Connect</span>
              </h2>
              <p className="text-slate-400 mt-1">Get in touch for opportunities, collaborations, or discussions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5 space-y-6">
                <div className="bg-slate-900/70 border border-slate-800 p-6 rounded-2xl space-y-6 backdrop-blur">
                  <h3 className="text-xl font-bold text-white">Contact Information</h3>
                  
                  <div className="space-y-4 text-sm">
                    <a href="mailto:Bhaveshmulani49@gmail.com" className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-mono">Email</div>
                        <div className="font-medium">Bhaveshmulani49@gmail.com</div>
                      </div>
                    </a>

                    <a href="tel:7024518225" className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                        <Phone size={18} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-mono">Phone</div>
                        <div className="font-medium">+91 7024518225</div>
                      </div>
                    </a>

                    <div className="flex items-center space-x-3 text-slate-300">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-mono">Location</div>
                        <div className="font-medium">Navi Mumbai / Bhopal, India</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex space-x-4">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-950 rounded-xl text-slate-300 hover:text-cyan-400 hover:bg-slate-900 border border-slate-800 transition">
                      <Linkedin size={20} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-950 rounded-xl text-slate-300 hover:text-cyan-400 hover:bg-slate-900 border border-slate-800 transition">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7">
                <form onSubmit={handleContactSubmit} className="bg-slate-900/70 border border-slate-800 p-6 rounded-2xl space-y-4 backdrop-blur">
                  <h3 className="text-xl font-bold text-white">Send a Message</h3>
                  
                  {formStatus && (
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-mono">
                      {formStatus}
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hello Bhavesh, I'd like to discuss an opportunity..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold hover:opacity-90 transition shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2"
                  >
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Bhavesh Mulani. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}