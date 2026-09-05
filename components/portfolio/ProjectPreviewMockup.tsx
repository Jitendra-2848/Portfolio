"use client";

import React from "react";

interface ProjectPreviewMockupProps {
  type: "marketplace" | "whiteboard" | "scheduler" | "chat" | "webrtc";
  title: string;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export default function ProjectPreviewMockup({ type, image, title, demoUrl, githubUrl }: ProjectPreviewMockupProps) {
  return (
    <div className="relative w-full aspect-[16/9] bg-[#0c0c10] rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all select-none flex flex-col">
      {/* Top Browser / Window bar */}
      <div className="h-6 bg-[#141418] border-b border-white/5 flex items-center justify-between px-3 z-20">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#EF4444]/70" />
          <div className="w-2 h-2 rounded-full bg-[#EAB308]/70" />
          <div className="w-2 h-2 rounded-full bg-[#22C55E]/70" />
        </div>
        <div className="text-[10px] text-[#8E8E98] font-mono tracking-tight flex items-center gap-1">
          {demoUrl ? (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-[#BFFF3C] inline-block animate-pulse" />
              live.preview
            </>
          ) : (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
              github.repo
            </>
          )}
        </div>
      </div>

      {/* "PERSONAL PROJECT" badge overlay like Amber Bisht */}
      <div className="absolute top-8 left-3 z-20">
        <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-black/85 text-white border border-white/15 backdrop-blur-md">
          Personal Project
        </span>
      </div>

      {/* If custom image provided, render image */}
      {image ? (
        <div className="flex-1 relative overflow-hidden bg-[#0c0c10]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
          />
        </div>
      ) : (
        /* Otherwise simulated UI based on project type */
        <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-[#0c0c10] to-[#121218] p-3 text-left">
        {type === "marketplace" && (
          <div className="h-full flex flex-col justify-between pt-5">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-xs font-semibold text-emerald-400">Agrinova Hub</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Live Trade Engine
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="bg-white/[0.03] p-2 rounded-lg border border-white/5">
                <div className="text-[9px] text-[#8E8E98]">Farmers & Buyers</div>
                <div className="text-xs font-semibold text-white">Direct Marketplace</div>
              </div>
              <div className="bg-white/[0.03] p-2 rounded-lg border border-white/5">
                <div className="text-[9px] text-[#8E8E98]">Transit Status</div>
                <div className="text-xs font-semibold text-[#BFFF3C]">Dispatched → Delivered</div>
              </div>
            </div>
            <div className="text-[9px] text-[#8E8E98] font-mono flex items-center justify-between">
              <span>GPS Logistics Matching</span>
              <span className="text-white font-medium">Node + Express</span>
            </div>
          </div>
        )}

        {type === "whiteboard" && (
          <div className="h-full relative pt-4 flex flex-col justify-between">
            {/* Grid canvas background */}
            <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />
            <div className="relative z-10 flex justify-between items-center text-[10px] text-[#8E8E98]">
              <span>Socket.IO Vector Canvas</span>
              <span className="text-[#3b82f6] text-[9px] font-mono">latency &lt;35ms</span>
            </div>
            <div className="relative z-10 flex items-center justify-center my-auto">
              {/* Illustrated stroke */}
              <svg className="w-3/4 h-12 stroke-[#3b82f6]" fill="none" viewBox="0 0 200 40">
                <path d="M10 20 Q 50 5, 100 20 T 190 20" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              {/* User Cursor Tag */}
              <div className="absolute left-1/3 top-2 flex items-center gap-1 bg-blue-600 text-white text-[8px] font-mono px-1.5 py-0.5 rounded shadow">
                <span>cursor: jitendra</span>
              </div>
            </div>
            <div className="relative z-10 flex items-center justify-between text-[9px] text-[#8E8E98] font-mono">
              <span>Multi-room Broadcast</span>
              <span className="text-white">HTML5 Canvas</span>
            </div>
          </div>
        )}

        {type === "scheduler" && (
          <div className="h-full flex flex-col justify-between pt-5 font-mono">
            <div className="flex items-center justify-between border-b border-white/5 pb-1 text-[10px]">
              <span className="text-[#BFFF3C] font-semibold">cron-job-scheduler</span>
              <span className="text-[#22C55E] text-[9px]">● Active Daemon</span>
            </div>
            <div className="bg-black/40 rounded p-1.5 border border-white/5 my-auto text-[10px] space-y-1">
              <div className="text-[#8E8E98] flex justify-between">
                <span>schedule:</span>
                <span className="text-yellow-400">*/5 * * * *</span>
              </div>
              <div className="text-[#8E8E98] flex justify-between">
                <span>http_status:</span>
                <span className="text-emerald-400">200 OK (38ms)</span>
              </div>
            </div>
            <div className="text-[9px] text-[#8E8E98] flex items-center justify-between">
              <span>Retry Logic &amp; Audits</span>
              <span className="text-white">Next.js + MongoDB</span>
            </div>
          </div>
        )}

        {type === "chat" && (
          <div className="h-full flex flex-col justify-between pt-5 font-mono">
            <div className="flex items-center justify-between border-b border-white/5 pb-1 text-[10px]">
              <span className="text-red-400 font-semibold">Redis Pub/Sub Cluster</span>
              <span className="text-[9px] text-[#3b82f6]">Node 1 ⇄ Node 2</span>
            </div>
            <div className="space-y-1.5 my-auto text-[9px]">
              <div className="flex items-center gap-2 bg-white/[0.03] p-1.5 rounded border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-white">channel:room_global</span>
                <span className="text-[#8E8E98] ml-auto">sync</span>
              </div>
              <div className="text-[9px] text-[#8E8E98]">
                Distributed message distribution with zero memory bottlenecks.
              </div>
            </div>
            <div className="text-[9px] text-[#8E8E98] flex items-center justify-between">
              <span>Horizontal Scaling</span>
              <span className="text-white">Docker + TypeScript</span>
            </div>
          </div>
        )}

        {type === "webrtc" && (
          <div className="h-full flex flex-col justify-between pt-5 font-mono">
            <div className="flex items-center justify-between border-b border-white/5 pb-1 text-[10px]">
              <span className="text-cyan-400 font-semibold">SFU Media Engine</span>
              <span className="text-[9px] text-[#BFFF3C]">O(1) Uplink Route</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 my-auto text-center">
              <div className="bg-white/[0.03] p-1 rounded border border-white/5 text-[9px]">
                <div className="text-emerald-400 font-bold">1 In</div>
                <div className="text-[8px] text-[#8E8E98]">Uplink</div>
              </div>
              <div className="bg-white/[0.03] p-1 rounded border border-white/5 text-[9px]">
                <div className="text-cyan-400 font-bold">SFU</div>
                <div className="text-[8px] text-[#8E8E98]">Forwarder</div>
              </div>
              <div className="bg-white/[0.03] p-1 rounded border border-white/5 text-[9px]">
                <div className="text-purple-400 font-bold">N Out</div>
                <div className="text-[8px] text-[#8E8E98]">Downlinks</div>
              </div>
            </div>
            <div className="text-[9px] text-[#8E8E98] flex items-center justify-between">
              <span>WebRTC Media Streams</span>
              <span className="text-white">Node.js Workers</span>
            </div>
          </div>
        )}
        </div>
      )}
    </div>
  );
}
