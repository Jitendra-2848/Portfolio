"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { portfolioData, Project } from "@/lib/data";
import ProjectPreviewMockup from "@/components/portfolio/ProjectPreviewMockup";
import ProjectDetailsModal from "@/components/portfolio/ProjectDetailsModal";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  DiscordIcon,
  TelegramIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  JavaIcon,
  CIcon,
  NodeIcon,
  ExpressIcon,
  SocketIoIcon,
  WebRtcIcon,
  CockroachIcon,
  PostgresIcon,
  MongoIcon,
  MySqlIcon,
  PrismaIcon,
  TailwindIcon,
  DaisyUiIcon,
  MuiIcon,
  BootstrapIcon,
  DockerIcon,
  GitIcon,
  LinuxIcon,
  PostmanIcon,
  VercelIcon,
  RenderIcon,
} from "@/components/portfolio/Icons";

const CAT_TITLES = [
  // English Titles & Memes
  "pspsps... compiles on first try 🐾",
  "it works on my machine 🐈",
  "git push --force and pray 😼",
  "99 little bugs in the code 🐛",
  "caffeine levels: 101% ☕",
  "watching you write clean code 👀",
  "sleeping on the server rack 💤",
  "sudo meow 😺",
  "deploying straight to production 🚀",
  "tabs > spaces (don't @ me) 🐱",
  "you're doing great today! ✨",
  "purr-fect latency: 0ms ⚡",
  "catching null pointers since 2024 🧶",
  "certified rubber duck engineer 🦆",
  "senior feline architect 👔",

  // Hindi & Desi Dev Titles (Memes + Wholesome)
  "apna code bhi aayega 🚀",
  "chal bhai pehle chai peete hain ☕",
  "arre code bina error ke chal gaya! 🎉",
  "server down mat kar dena bhai 😼",
  "bug nahi hai, feature hai ye 🐛",
  "sab moh maya hai, bas code chalna chahiye ✨",
  "tension mat lo, sab compile hoga 🐾",
  "production pe direct deploy mat karo ⚠️",
  "chai + code = mast sukoon ☕",
  "raat ko 3 baje deployment nahi karte 🌙",
  "bina bug ke developer kaisa 😼",
  "thoda sa chill karo, sab theek hai 🌿",
];

interface GitHubState {
  repos: number | null;
  followers: number | null;
  following: number | null;
  totalContributions: number | null;
  totalYearContributions: number | null;
  days: { date: string; level: number }[];
  loading: boolean;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [liveTime, setLiveTime] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [formSending, setFormSending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const projectsScrollRef = useRef<HTMLDivElement>(null);

  // Dynamic Cat Title & Sound State (Switches titles, plays meow with double-click guard)
  const [catTitle, setCatTitle] = useState(CAT_TITLES[0]);
  const [isMeowing, setIsMeowing] = useState(false);
  const catAudioRef = useRef<HTMLAudioElement | null>(null);
  const isPlayingCatAudioRef = useRef<boolean>(false);
  const lastMeowTimeRef = useRef<number>(0);

  const cycleCatTitle = () => {
    setCatTitle((prev) => {
      let next = prev;
      while (next === prev) {
        next = CAT_TITLES[Math.floor(Math.random() * CAT_TITLES.length)];
      }
      return next;
    });
  };

  const playCatSound = () => {
    const now = Date.now();
    // Anti-spam guard: prevent clicking too much (1.2s cooldown)
    if (now - lastMeowTimeRef.current < 1200) {
      return;
    }

    // Double-click guard: do not restart if audio is currently playing
    if (isPlayingCatAudioRef.current) {
      return;
    }

    try {
      if (!catAudioRef.current) {
        catAudioRef.current = new Audio("/meow.mp3");
        catAudioRef.current.volume = 0.6;
        catAudioRef.current.onended = () => {
          isPlayingCatAudioRef.current = false;
          setIsMeowing(false);
        };
        catAudioRef.current.onerror = () => {
          isPlayingCatAudioRef.current = false;
          setIsMeowing(false);
        };
      }

      if (!catAudioRef.current.paused) {
        return;
      }

      lastMeowTimeRef.current = now;
      isPlayingCatAudioRef.current = true;
      setIsMeowing(true);
      catAudioRef.current.currentTime = 0;
      catAudioRef.current.play().catch(() => {
        isPlayingCatAudioRef.current = false;
        setIsMeowing(false);
      });
    } catch {
      isPlayingCatAudioRef.current = false;
      setIsMeowing(false);
    }
  };

  const handleCatClick = () => {
    cycleCatTitle();
    playCatSound();
  };

  // Real-time GitHub Profile & Activity State (Live fetched, 1 full year up to now)
  const [githubData, setGithubData] = useState<GitHubState>({
    repos: null,
    followers: null,
    following: null,
    totalContributions: null,
    totalYearContributions: null,
    days: [],
    loading: true,
  });

  // Fetch real GitHub API data
  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const res = await fetch("/api/github");
        if (res.ok) {
          const data = await res.json();
          setGithubData({
            repos: data.profile?.repos ?? null,
            followers: data.profile?.followers ?? null,
            following: data.profile?.following ?? null,
            totalContributions: data.contributions?.total ?? null,
            totalYearContributions: data.contributions?.totalYear ?? null,
            days: data.contributions?.days || [],
            loading: false,
          });
        } else {
          setGithubData((prev) => ({ ...prev, loading: false }));
        }
      } catch (err) {
        console.error("Failed to load live GitHub data:", err);
        setGithubData((prev) => ({ ...prev, loading: false }));
      }
    }
    fetchGitHubData();
  }, []);

  // Group days into columns of 7 days (~53 weeks) so the full 1-year graph spans all over the card block
  const weeks = useMemo(() => {
    const rawDays =
      githubData.days.length > 0
        ? githubData.days
        : Array.from({ length: 371 }).map(() => ({ level: 0 }));
    const cols: { date?: string; level: number }[][] = [];
    for (let i = 0; i < rawDays.length; i += 7) {
      cols.push(rawDays.slice(i, i + 7));
    }
    return cols;
  }, [githubData.days]);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Kolkata",
      });
      setLiveTime(now);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text: string, setter: (val: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Custom inline validation - avoids native browser tooltip popups
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      errors.name = "Please enter your name";
    }
    if (!formData.email.trim()) {
      errors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      errors.message = "Please enter your message";
    } else if (formData.message.trim().length < 5) {
      errors.message = "Message must be at least 5 characters";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setFormSending(true);
    setFormError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setFieldErrors({});
      } else {
        setFormError(data.message || "Failed to deliver note. Please email directly.");
      }
    } catch (err) {
      console.error("Failed to submit form:", err);
      setFormError("Network error. Please try again or reach out via direct email.");
    } finally {
      setFormSending(false);
    }
  };

  const scrollProjects = (direction: "left" | "right") => {
    if (projectsScrollRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      projectsScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleProjectCardClick = (project: Project) => {
    const targetUrl = project.demoUrl || project.githubUrl;
    if (targetUrl) {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-[#FAFAFA] relative overflow-x-hidden">
      {/* Ambient Radial Blue Glow */}
      <div className="ambient-glow" />

      {/* FLOATING PILL NAVBAR WITH PREMIUM GLASSMORPHISM */}
      <header className="fixed top-4 sm:top-5 left-0 right-0 z-40 flex justify-center px-3 sm:px-4">
        <div className="max-w-2xl w-full">
          <nav className="relative flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 py-2.5 rounded-full bg-[rgba(12,12,16,0.72)] backdrop-blur-2xl backdrop-saturate-150 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] ring-1 ring-white/5 transition-all">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="font-medium text-xs sm:text-sm tracking-tight text-[#EDEDED] hover:text-[#BFFF3C] transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#BFFF3C]" />
              <span>Jitendra Prajapati</span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden sm:flex items-center gap-5 text-xs text-[#8E8E98]">
              <a href="#hero" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="#projects" className="hover:text-white transition-colors">
                Projects
              </a>
              <a href="#skills" className="hover:text-white transition-colors">
                Tech Stack
              </a>
              <a href="#experience" className="hover:text-white transition-colors">
                Experience
              </a>
              <a
                href="#contact"
                className="text-[#EDEDED] hover:text-[#BFFF3C] font-medium transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Toggle Button (Never Breaks on Small Screens) */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="sm:hidden p-1.5 rounded-full text-[#EDEDED] hover:text-[#BFFF3C] hover:bg-white/5 transition-colors flex items-center justify-center focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </nav>

          {/* Mobile Glassmorphism Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="sm:hidden mt-2 p-3 rounded-2xl bg-[rgba(12,12,16,0.85)] backdrop-blur-2xl backdrop-saturate-150 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-mono text-[#EDEDED] hover:text-[#BFFF3C] py-2 px-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                Home
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-mono text-[#EDEDED] hover:text-[#BFFF3C] py-2 px-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-mono text-[#EDEDED] hover:text-[#BFFF3C] py-2 px-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                Tech Stack
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-mono text-[#EDEDED] hover:text-[#BFFF3C] py-2 px-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-medium text-black bg-[#EDEDED] hover:bg-white py-2 px-3 rounded-xl transition-colors text-center mt-2"
              >
                Contact Me →
              </a>
            </div>
          )}
        </div>
      </header>

      <main className="container pt-28 pb-20 space-y-20">
        {/* HERO SECTION — Clean, Bold, Minimalist Introduction (No Outline) */}
        <section id="hero" className="pt-4">
          <div className="py-4 sm:py-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#BFFF3C] animate-pulse" />
                <span className="text-xs font-mono text-[#BFFF3C] tracking-wide">
                  Available for full-time roles
                </span>
              </div>

              {/* Interactive Pixel Cat with Dynamic Titles & Meow Audio */}
              <div className="relative group/cat">
                <button
                  type="button"
                  onClick={handleCatClick}
                  onMouseEnter={cycleCatTitle}
                  className={`text-xs font-mono select-none bg-white/5 px-2.5 py-1 border rounded-full transition-all cursor-pointer inline-flex items-center gap-1.5 shadow-sm ${
                    isMeowing
                      ? "text-[#BFFF3C] border-[#BFFF3C] scale-105 shadow-[0_0_12px_rgba(191,255,60,0.3)]"
                      : "text-[#8E8E98] border-white/10 hover:text-[#BFFF3C] hover:border-[#BFFF3C]/30 active:scale-95"
                  }`}
                  aria-label={catTitle}
                >
                  <span>(=^･ω･^=)</span>
                  {isMeowing && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BFFF3C] animate-ping" />
                  )}
                </button>

                {/* Styled Custom Floating Title Badge */}
                <div className="absolute right-0 bottom-full mb-2 pointer-events-none opacity-0 group-hover/cat:opacity-100 transition-all duration-200 translate-y-1 group-hover/cat:translate-y-0 z-40 whitespace-nowrap">
                  <div className="px-3 py-1.5 rounded-xl bg-[#141418]/95 border border-white/15 text-[#EDEDED] text-xs font-mono shadow-2xl backdrop-blur-md flex items-center gap-1.5">
                    <span className="text-[#BFFF3C]">🐾</span>
                    <span>{catTitle}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              <h1 className="text-4xl sm:text-6xl font-medium text-[#EDEDED] tracking-tight leading-tight">
                Jitendra Prajapati
              </h1>
              <p className="text-xs sm:text-sm font-mono text-[#8E8E98] tracking-wider uppercase">
                <span className="text-[#BFFF3C] font-medium">Full Stack &amp; Backend Engineer</span>
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#A0A0A8] max-w-2xl leading-relaxed font-normal">
              I build systems that stay calm when traffic spikes. Focused on high-concurrency Node.js and Java backends, distributed databases (CockroachDB, PostgreSQL, MongoDB), and real-time media streaming (WebRTC SFU, Socket.IO).
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
              {/* Action buttons */}
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-6 rounded-full text-xs font-medium bg-[#EDEDED] text-[#08080a] hover:bg-white transition-all text-center shadow"
                >
                  Resume (CV) ↗
                </a>
                <a
                  href="#contact"
                  className="py-2.5 px-6 rounded-full text-xs font-medium bg-[#141418] text-[#EDEDED] border border-white/10 hover:border-white/20 transition-all text-center"
                >
                  Contact Me →
                </a>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-2">
                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-600/20 text-[#A0A0A8] hover:text-blue-400 border border-white/5 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-[#A0A0A8] hover:text-white border border-white/5 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-[#A0A0A8] hover:text-white border border-white/5 transition-all"
                  aria-label="X (Twitter) Profile"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-sky-500/20 text-[#A0A0A8] hover:text-sky-400 border border-white/5 transition-all"
                  aria-label="Telegram Profile"
                >
                  <TelegramIcon className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-pink-500/20 text-[#A0A0A8] hover:text-pink-400 border border-white/5 transition-all"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION — Slider with Left/Right Buttons */}
        <section id="projects" className="space-y-6">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-[#EDEDED] tracking-tight">
                Projects
              </h2>
              <p className="text-xs text-[#8E8E98] mt-0.5">
                Selected systems designed, built, and deployed.
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollProjects("left")}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-sm text-[#A0A0A8] hover:text-white transition-all shadow"
                aria-label="Scroll left"
              >
                ←
              </button>
              <button
                onClick={() => scrollProjects("right")}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-sm text-[#A0A0A8] hover:text-white transition-all shadow"
                aria-label="Scroll right"
              >
                →
              </button>
            </div>
          </div>

          {/* Slider Container with compact cards and smooth snap scroll */}
          <div
            ref={projectsScrollRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 hide-scrollbar snap-x snap-mandatory"
          >
            {portfolioData.projects.map((project) => (
              <div
                key={project.id}
                className="w-[320px] sm:w-[360px] flex-shrink-0 snap-start bento-card p-5 flex flex-col justify-between group cursor-pointer hover:border-white/20 transition-all"
                onClick={() => handleProjectCardClick(project)}
              >
                {/* 16:9 Project Preview Window */}
                <div className="mb-4">
                  <ProjectPreviewMockup
                    type={project.previewType}
                    title={project.title}
                    image={project.image}
                    demoUrl={project.demoUrl}
                    githubUrl={project.githubUrl}
                  />
                </div>

                {/* Title & GitHub Link */}
                <div className="space-y-2 mb-4 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-medium text-[#EDEDED] tracking-tight group-hover:text-[#BFFF3C] transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8E8E98] hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
                      aria-label="GitHub Repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-xs text-[#8E8E98] line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[#CCCCCC]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons: Details Modal, Live Link, Repo Link */}
                <div
                  className="flex items-center gap-2 pt-3 border-t border-white/5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="py-1.5 px-3 rounded-full text-xs font-mono text-[#A0A0A8] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-center"
                  >
                    Details
                  </button>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1.5 px-3 rounded-full text-xs font-mono font-semibold bg-[#BFFF3C] text-black hover:bg-[#aee630] transition-all text-center flex items-center justify-center gap-1 shadow"
                    >
                      <span>Live</span>
                      <span>↗</span>
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-3 rounded-full text-xs font-mono font-medium bg-[#1c1c22] text-white border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all text-center flex items-center justify-center gap-1"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#A0A0A8]" />
                    <span>GitHub ↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK / SKILLS SECTION — Space-Efficient Compact Bento */}
        <section id="skills" className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-medium text-[#EDEDED] tracking-tight">
              Tech Stack
            </h2>
            <p className="text-xs text-[#8E8E98] mt-0.5">
              Core technologies, distributed databases, and development tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Column 1: Languages & Backend */}
            <div className="bento-card p-5 space-y-3">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-medium text-[#EDEDED]">
                  Languages &amp; Backend
                </span>
                <span className="text-[10px] text-[#8E8E98] font-mono">01</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <TypeScriptIcon className="w-3.5 h-3.5" />
                  <span>TypeScript</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <JavaScriptIcon className="w-3.5 h-3.5" />
                  <span>JavaScript</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <JavaIcon className="w-3.5 h-3.5" />
                  <span>Java</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <CIcon className="w-3.5 h-3.5" />
                  <span>C</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <NodeIcon className="w-3.5 h-3.5" />
                  <span>Node.js</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <ExpressIcon className="w-3.5 h-3.5" />
                  <span>Express.js</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <SocketIoIcon className="w-3.5 h-3.5" />
                  <span>Socket.IO</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <WebRtcIcon className="w-3.5 h-3.5" />
                  <span>WebRTC (SFU)</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>REST APIs</span>
                </div>
              </div>
            </div>

            {/* Column 2: Databases & ORMs */}
            <div className="bento-card p-5 space-y-3">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-medium text-[#EDEDED]">
                  Databases &amp; ORMs
                </span>
                <span className="text-[10px] text-[#8E8E98] font-mono">02</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <CockroachIcon className="w-3.5 h-3.5" />
                  <span>CockroachDB</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <PostgresIcon className="w-3.5 h-3.5" />
                  <span>PostgreSQL</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <MongoIcon className="w-3.5 h-3.5" />
                  <span>MongoDB</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <MySqlIcon className="w-3.5 h-3.5" />
                  <span>MySQL</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <PrismaIcon className="w-3.5 h-3.5" />
                  <span>Prisma ORM</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <MongoIcon className="w-3.5 h-3.5" />
                  <span>Mongoose</span>
                </div>
              </div>
            </div>

            {/* Column 3: Styling & Infrastructure Tools */}
            <div className="bento-card p-5 space-y-3">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-medium text-[#EDEDED]">
                  Styling &amp; Tools
                </span>
                <span className="text-[10px] text-[#8E8E98] font-mono">03</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <TailwindIcon className="w-3.5 h-3.5" />
                  <span>Tailwind CSS</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <DaisyUiIcon className="w-3.5 h-3.5" />
                  <span>DaisyUI</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <MuiIcon className="w-3.5 h-3.5" />
                  <span>MUI</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <BootstrapIcon className="w-3.5 h-3.5" />
                  <span>Bootstrap</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <DockerIcon className="w-3.5 h-3.5" />
                  <span>Docker</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <GitIcon className="w-3.5 h-3.5" />
                  <span>Git</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <LinuxIcon className="w-3.5 h-3.5" />
                  <span>Linux</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <PostmanIcon className="w-3.5 h-3.5" />
                  <span>Postman</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <VercelIcon className="w-3.5 h-3.5" />
                  <span>Vercel</span>
                </div>
                <div className="pill-badge py-1 px-2.5 text-[11px]">
                  <RenderIcon className="w-3.5 h-3.5" />
                  <span>Render</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE & ACADEMICS SECTION — Compact 2-Column Grid */}
        <section id="experience" className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-medium text-[#EDEDED] tracking-tight">
              Experience &amp; Education
            </h2>
            <p className="text-xs text-[#8E8E98] mt-0.5">
              Leadership, internships, and verified academic milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Experience Bento Card */}
            <div className="lg:col-span-7 bento-card p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                <span className="text-xs font-medium text-[#EDEDED]">
                  Work Experience
                </span>
                <span className="text-[11px] text-[#8E8E98]">The Entrepreneurship Network</span>
              </div>

              <div className="space-y-4">
                {portfolioData.experiences.map((exp, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-medium text-[#EDEDED]">{exp.role}</h3>
                      <span className="text-[10px] font-mono text-[#BFFF3C]">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#8E8E98]">{exp.company}</p>
                    <ul className="text-[11px] text-[#A0A0A8] space-y-1 pt-0.5">
                      {exp.description.map((desc, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-1.5 leading-relaxed">
                          <span className="text-[#BFFF3C]">›</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Bento Card */}
            <div className="lg:col-span-5 bento-card p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                <span className="text-xs font-medium text-[#EDEDED]">
                  Academic Background
                </span>
                <span className="text-[11px] text-[#8E8E98]">Qualifications</span>
              </div>

              <div className="space-y-2.5">
                {portfolioData.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between"
                  >
                    <div>
                      <h3 className="text-xs font-medium text-[#EDEDED]">{edu.degree}</h3>
                      <p className="text-[10px] text-[#8E8E98]">{edu.institution}</p>
                    </div>
                    <div className="text-right font-mono text-[10px]">
                      {edu.grade && <div className="text-[#BFFF3C] font-medium">{edu.grade}</div>}
                      <div className="text-[#71717A]">{edu.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION — Real-Time GitHub Activity & Clean Status */}
        <section id="contact" className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-medium text-[#EDEDED] tracking-tight">
              Contact
            </h2>
            <p className="text-xs text-[#8E8E98] mt-0.5">
              Let&apos;s build something great together. Reach out anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
            {/* 1. CURRENT STATUS CARD (Clean, natural, no awkward lists) */}
            <div className="lg:col-span-5 bento-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#BFFF3C] animate-pulse" />
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#BFFF3C]">
                    CURRENT STATUS
                  </span>
                </div>
                <h3 className="text-xl font-medium text-[#EDEDED] tracking-tight">
                  Open for Full-Time Roles
                </h3>
                <p className="text-xs text-[#A0A0A8] mt-2 leading-relaxed">
                  Available for Full Stack and Backend developer roles. Building resilient systems with Node.js, Java, TypeScript, and distributed databases.
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6 text-xs text-[#8E8E98] space-y-1">
                <p className="text-white font-medium">Ahmedabad, Gujarat</p>
                <p>Open for Remote &amp; Relocation</p>
              </div>
            </div>

            {/* 2. REAL GITHUB ACTIVITY CARD (Real-time live fetched API data, no commit message) */}
            <div className="lg:col-span-7 bento-card p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-5 h-5 text-white" />
                  <span className="text-sm font-semibold text-white">GitHub Real-Time Activity</span>
                  <span className="text-[10px] font-mono text-[#BFFF3C] bg-[#BFFF3C]/10 px-2 py-0.5 rounded-full border border-[#BFFF3C]/20">
                    Live Synced
                  </span>
                </div>
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#8E8E98] hover:text-white transition-colors flex items-center gap-1 font-mono"
                >
                  @Jitendra-2848 ↗
                </a>
              </div>

              {/* Real Contribution Heatmap from GitHub (1 Full Year ~53 Weeks, Spanning All Over the Block) */}
              <div className="my-auto py-2 w-full min-w-0">
                <div className="text-[10px] text-[#8E8E98] font-mono mb-2 flex items-center justify-between">
                  <span>
                    {githubData.loading ? (
                      <span className="inline-block w-36 h-3.5 bg-white/10 rounded animate-pulse" />
                    ) : githubData.totalContributions !== null ? (
                      <>
                        <strong className="text-white font-medium">{githubData.totalContributions} contributions</strong> in the last year
                      </>
                    ) : (
                      <span className="text-[#A0A0A8]">Yearly contributions</span>
                    )}
                  </span>
                  <span className="text-[#BFFF3C] text-[9px] font-mono">Live Synced · Active</span>
                </div>

                {/* Heatmap Grid Container - Spans all over the block edge-to-edge for full 53 weeks */}
                <div className="w-full overflow-x-auto overflow-y-hidden pb-2 pt-1 hide-scrollbar">
                  <div className="flex items-center justify-between gap-[2px] sm:gap-[3px] w-full min-w-[560px]">
                    {weeks.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-[2px] sm:gap-[3px] flex-1 min-w-0">
                        {week.map((day, dIdx) => {
                          const bgClass =
                            day.level === 4
                              ? "bg-[#22c55e]"
                              : day.level === 3
                              ? "bg-[#16a34a]"
                              : day.level === 2
                              ? "bg-[#15803d]"
                              : day.level === 1
                              ? "bg-[#166534]"
                              : "bg-[#18181b]";
                          return (
                            <div
                              key={dIdx}
                              className={`w-full aspect-square rounded-[1px] sm:rounded-[2px] ${bgClass} hover:opacity-75 transition-opacity ${
                                githubData.loading ? "animate-pulse" : ""
                              }`}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[9px] text-[#8E8E98] font-mono mt-1">
                  <span>Less</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-[1px] bg-[#18181b]" />
                    <div className="w-2 h-2 rounded-[1px] bg-[#166534]" />
                    <div className="w-2 h-2 rounded-[1px] bg-[#15803d]" />
                    <div className="w-2 h-2 rounded-[1px] bg-[#16a34a]" />
                    <div className="w-2 h-2 rounded-[1px] bg-[#22c55e]" />
                  </div>
                  <span>More</span>
                </div>
              </div>

              {/* GitHub Stats Row from Live API */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5 text-center text-xs mt-3">
                <div>
                  <div className="text-white font-medium font-mono text-base">
                    {githubData.loading ? (
                      <span className="inline-block w-8 h-4 bg-white/10 rounded animate-pulse" />
                    ) : (
                      githubData.repos ?? "—"
                    )}
                  </div>
                  <div className="text-[9px] text-[#8E8E98]">Public Repositories</div>
                </div>
                <div>
                  <div className="text-white font-medium font-mono text-base">
                    {githubData.loading ? (
                      <span className="inline-block w-12 h-4 bg-white/10 rounded animate-pulse" />
                    ) : githubData.totalYearContributions !== null ? (
                      `${githubData.totalYearContributions}+`
                    ) : githubData.totalContributions !== null ? (
                      `${githubData.totalContributions}+`
                    ) : (
                      "—"
                    )}
                  </div>
                  <div className="text-[9px] text-[#8E8E98]">Total Contributions</div>
                </div>
                <div>
                  <div className="text-[#BFFF3C] font-medium font-mono text-base">
                    {githubData.loading ? (
                      <span className="inline-block w-12 h-4 bg-white/10 rounded animate-pulse" />
                    ) : (
                      "Verified"
                    )}
                  </div>
                  <div className="text-[9px] text-[#8E8E98]">GitHub Profile</div>
                </div>
              </div>
            </div>

            {/* 3. 2x2 SOCIAL SQUARE BUTTONS (like Amber's vibrant colored squares) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {/* LinkedIn Blue Card */}
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-28 rounded-2xl bg-[#0A66C2] flex items-center justify-center text-white shadow-lg hover:scale-[1.02] transition-transform group"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-9 h-9 group-hover:scale-110 transition-transform" />
              </a>

              {/* X / Twitter Dark Card */}
              <a
                href={portfolioData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="h-28 rounded-2xl bg-[#000000] border border-white/15 flex items-center justify-center text-white shadow-lg hover:scale-[1.02] transition-transform group"
                aria-label="X (Twitter) Profile"
              >
                <TwitterIcon className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </a>

              {/* Telegram Cyan Card */}
              <a
                href={portfolioData.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-28 rounded-2xl bg-[#229ED9] flex items-center justify-center text-white shadow-lg hover:scale-[1.02] transition-transform group"
                aria-label="Telegram Profile"
              >
                <TelegramIcon className="w-9 h-9 group-hover:scale-110 transition-transform" />
              </a>

              {/* Discord Purple Card */}
              <button
                onClick={() => copyToClipboard(portfolioData.socials.discord, setCopiedDiscord)}
                className="h-28 rounded-2xl bg-[#5865F2] flex flex-col items-center justify-center text-white shadow-lg hover:scale-[1.02] transition-transform group"
                aria-label="Discord: jitendra_2008"
              >
                <DiscordIcon className="w-9 h-9 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-mono mt-1 opacity-80">
                  {copiedDiscord ? "Copied Tag!" : "jitendra_2008"}
                </span>
              </button>
            </div>

            {/* 4. DIRECT EMAIL BANNER CARD */}
            <div className="lg:col-span-7 bento-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#8E8E98]">
                  DIRECT EMAIL CHANNEL
                </span>
                <h3 className="text-xl sm:text-2xl font-medium text-[#EDEDED] tracking-tight break-all mt-2">
                  {portfolioData.email}
                </h3>
                <p className="text-xs text-[#8E8E98] mt-1">
                  &apos;Let&apos;s build something calm, performant, and resilient together.&apos;
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-6">
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-md"
                >
                  <span>Send Email</span>
                </a>
                <button
                  onClick={() => copyToClipboard(portfolioData.email, setCopiedEmail)}
                  className="px-4 py-2.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 hover:border-white/25 text-white transition-all font-mono"
                >
                  {copiedEmail ? "✓ Email Copied!" : "Copy Address"}
                </button>
              </div>
            </div>

            {/* 5. DIRECT NOTE MESSAGE FORM */}
            <div className="lg:col-span-12 bento-card p-6 sm:p-8">
              {formSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#BFFF3C]/10 text-[#BFFF3C] border border-[#BFFF3C]/30 flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-base font-medium text-[#EDEDED]">Note Dispatched Successfully</h3>
                  <p className="text-xs text-[#8E8E98] max-w-sm mx-auto leading-relaxed">
                    Thank you! Your note has been delivered. I will reply directly to your email shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormError(null);
                    }}
                    className="text-xs text-[#BFFF3C] hover:underline pt-2 inline-block font-mono"
                  >
                    Send another note →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} noValidate className="space-y-4 max-w-2xl mx-auto">
                  <div className="text-center space-y-1 mb-4">
                    <h3 className="text-sm font-medium text-[#EDEDED]">
                      Send a Direct Note
                    </h3>
                    <p className="text-xs text-[#8E8E98]">
                      Direct note to my inbox. Inquire about engineering roles, architecture, or contracts.
                    </p>
                  </div>

                  {formError && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center font-mono">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        disabled={formSending}
                        value={formData.name}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, name: e.target.value }));
                          if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        placeholder="Your Name"
                        className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border text-xs text-[#EDEDED] placeholder-[#71717A] focus:outline-none transition-colors font-sans disabled:opacity-50 ${
                          fieldErrors.name
                            ? "border-red-400/60 bg-red-500/[0.04] focus:border-red-400"
                            : "border-white/10 focus:border-[#BFFF3C]"
                        }`}
                      />
                      {fieldErrors.name && (
                        <span className="block text-[11px] font-mono text-red-400 mt-1 pl-1 text-left">
                          {fieldErrors.name}
                        </span>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        disabled={formSending}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, email: e.target.value }));
                          if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        placeholder="Your Email"
                        className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border text-xs text-[#EDEDED] placeholder-[#71717A] focus:outline-none transition-colors font-sans disabled:opacity-50 ${
                          fieldErrors.email
                            ? "border-red-400/60 bg-red-500/[0.04] focus:border-red-400"
                            : "border-white/10 focus:border-[#BFFF3C]"
                        }`}
                      />
                      {fieldErrors.email && (
                        <span className="block text-[11px] font-mono text-red-400 mt-1 pl-1 text-left">
                          {fieldErrors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      disabled={formSending}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, message: e.target.value }));
                        if (fieldErrors.message) setFieldErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      placeholder="Discuss project requirements, role scope, or tech stack..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border text-xs text-[#EDEDED] placeholder-[#71717A] focus:outline-none transition-colors resize-none font-sans disabled:opacity-50 ${
                        fieldErrors.message
                          ? "border-red-400/60 bg-red-500/[0.04] focus:border-red-400"
                          : "border-white/10 focus:border-[#BFFF3C]"
                      }`}
                    />
                    {fieldErrors.message && (
                      <span className="block text-[11px] font-mono text-red-400 mt-1 pl-1 text-left">
                        {fieldErrors.message}
                      </span>
                    )}
                  </div>

                  <div className="text-center pt-2">
                    <button
                      type="submit"
                      disabled={formSending}
                      className="px-6 py-2.5 rounded-full text-xs font-medium bg-[#EDEDED] text-[#08080a] hover:bg-white transition-all font-sans shadow disabled:opacity-50 flex items-center justify-center gap-2 mx-auto"
                    >
                      {formSending ? (
                        <>
                          <span className="w-2 h-2 rounded-full bg-black animate-ping" />
                          <span>Dispatching note...</span>
                        </>
                      ) : (
                        <span>Dispatch Note →</span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER — Live IST Clock & Clean Minimalist Credits */}
      <footer className="container py-8 border-t border-white/5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8E98]">
          <p>© 2026 · Jitendra Prajapati. All rights reserved.</p>
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span>India</span>
            <span>·</span>
            <span className="flex items-center gap-1.5 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BFFF3C]" />
              <time>{liveTime || "IST"}</time>
            </span>
          </div>
        </div>
      </footer>

      {/* Interactive Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
