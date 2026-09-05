"use client";

import React, { useEffect } from "react";
import { Project } from "@/lib/data";
import { GithubIcon } from "./Icons";

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#0c0c0f] border border-white/10 rounded-2xl p-6 shadow-2xl text-left space-y-5 hide-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[9px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-white/5 text-[#A0A0A8] border border-white/5">
                Personal Project
              </span>
              <span className="text-xs text-[#71717A]">{project.category}</span>
            </div>
            <h3 className="text-lg font-medium text-[#EDEDED] tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#71717A] hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Project Screenshot */}
        {project.image && (
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-black">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>
        )}

        {/* Description */}
        <p className="text-xs text-[#A0A0A8] leading-relaxed">
          {project.description}
        </p>

        {/* Minimal Problem & Solution */}
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#A0A0A8]">
              Problem
            </span>
            <p className="text-xs text-[#D4D4D8] leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#A0A0A8]">
              Solution
            </span>
            <p className="text-xs text-[#D4D4D8] leading-relaxed">
              {project.solution}
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#BFFF3C]">
              Result
            </span>
            <p className="text-xs text-white leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-[#A0A0A8]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div className="flex items-center gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-semibold bg-[#BFFF3C] text-black hover:bg-[#aee630] transition-all font-mono shadow-md flex items-center gap-1.5"
              >
                <span>Live Demo</span>
                <span>↗</span>
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-xs font-medium bg-white/5 text-white border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all flex items-center gap-1.5 font-mono"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#A0A0A8]" />
              <span>GitHub Repo</span>
              <span>↗</span>
            </a>
          </div>
          <button
            onClick={onClose}
            className="text-xs text-[#71717A] hover:text-white px-2 py-1 font-mono"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
