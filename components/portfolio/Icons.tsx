import React from "react";

export function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function DiscordIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function TelegramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

// Tech Stack SVGs
export function TypeScriptIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M11.5 13.5H9.25V7H7V5h6.5v2h-2V13.5zM17.8 8.8c-.4-.5-1-.8-1.8-.8-.6 0-1.1.2-1.5.5-.4.3-.6.7-.6 1.2 0 .4.1.7.4 1 .2.2.6.4 1.1.6l.8.3c.9.3 1.5.7 1.9 1.1.4.5.6 1 .6 1.7 0 .9-.3 1.6-1 2.2-.7.5-1.6.8-2.7.8-1 0-1.8-.2-2.5-.7-.7-.5-1.1-1.2-1.3-2.1l1.8-.4c.1.6.4 1 .8 1.3.4.3.9.4 1.5.4.6 0 1.2-.1 1.6-.4.4-.3.6-.7.6-1.2 0-.4-.1-.7-.4-1-.3-.2-.7-.4-1.3-.6l-.8-.3c-.8-.3-1.4-.7-1.8-1.1-.4-.4-.6-1-.6-1.6 0-.8.3-1.5.9-2 .6-.5 1.5-.8 2.5-.8.9 0 1.6.2 2.2.6.6.4 1 .9 1.1 1.6l-1.8.4z" fill="white" />
    </svg>
  );
}

export function JavaScriptIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M7 16.5c.5.8 1.2 1.2 2.1 1.2.9 0 1.5-.5 1.5-1.6v-6.6h1.9v6.7c0 1.9-1.2 2.8-3.3 2.8-1.5 0-2.6-.7-3.1-2l1-1.5zm8.5 0c.6.9 1.4 1.3 2.4 1.3 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.9-1.6l-.7-.3c-1.8-.7-3-1.7-3-3.6 0-2 1.5-3.5 3.8-3.5 1.7 0 2.8.6 3.6 2l-1.5 1c-.4-.7-1.1-1.1-2.1-1.1-1 0-1.6.5-1.6 1.1 0 .7.5 1.1 1.8 1.6l.7.3c2.1.8 3.2 1.8 3.2 3.8 0 2.2-1.7 3.7-4.1 3.7-2.1 0-3.4-.9-4.2-2.3l1.4-1.2z" fill="#000000" />
    </svg>
  );
}

export function JavaIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M8.8 17.5c-2.3.2-3.8.7-3.8 1.2 0 .9 3.1 1.5 7 1.5s7-.6 7-1.5c0-.6-1.5-1-3.8-1.2.9-.6 1.4-1.3 1.4-2.1 0-.4-.1-.7-.4-1.1 2.8.3 4.8 1.4 4.8 2.8 0 2.1-4.1 3.4-9 3.4s-9-1.3-9-3.4c0-1.4 2-2.5 4.8-2.8-.2.4-.4.7-.4 1.1 0 .8.5 1.5 1.4 2.1z" fill="#E76F00" />
      <path d="M12 2c-.6 2.3-2.5 4-2.5 6.2 0 1.9 1.4 3.4 3.1 3.8-1.1-1.3-1.4-2.9-.9-4.4C12.4 5.7 13.8 3.9 12 2z" fill="#5382A1" />
      <path d="M14.5 5.5c-.5 1.8-1.9 3.2-1.9 4.9 0 1.5 1.1 2.7 2.4 3-.9-1-1.1-2.3-.7-3.5.5-1.5 1.6-2.9.2-4.4z" fill="#E76F00" />
    </svg>
  );
}

export function CIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#659AD2" />
      <path d="M15 8.5c-.8-.7-1.8-1.1-3-1.1-2.5 0-4.5 2-4.5 4.6 0 2.6 2 4.6 4.5 4.6 1.2 0 2.2-.4 3-1.1l1.4 1.4c-1.2 1.1-2.7 1.7-4.4 1.7-3.6 0-6.5-2.9-6.5-6.6 0-3.6 2.9-6.6 6.5-6.6 1.7 0 3.2.6 4.4 1.7L15 8.5z" fill="white" />
    </svg>
  );
}

export function NodeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2l8.7 5v10L12 22l-8.7-5V7L12 2z" fill="#339933" />
      <path d="M12 4.5l6.5 3.7v7.6L12 19.5l-6.5-3.7V8.2L12 4.5z" fill="#215732" />
      <path d="M10 9.5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-5z" fill="white" />
    </svg>
  );
}

export function ExpressIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 18.579h-4.303l-3.328-5.748-3.328 5.748h-4.303l5.48-9.467-5.48-9.467h4.303l3.328 5.748 3.328-5.748h4.303l-5.48 9.467 5.48 9.467zm-19.297-9.467c0-2.339 1.405-3.926 3.493-3.926 1.83 0 3.03 1.144 3.238 2.651h-2.14c-.161-.635-.615-1.025-1.127-1.025-.972 0-1.503.955-1.503 2.3v.001c0 1.344.531 2.3 1.503 2.3.512 0 .966-.39 1.127-1.026h2.14c-.208 1.507-1.408 2.651-3.238 2.651-2.088 0-3.493-1.587-3.493-3.926v-.001z" />
    </svg>
  );
}

export function SocketIoIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#010101" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 5l-4 7h4l-1 7 6-8h-4l2-6h-3z" fill="#00D8FF" />
    </svg>
  );
}

export function WebRtcIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" stroke="#FF4B4B" />
      <path d="M8 12a4 4 0 0 1 8 0" stroke="#FF4B4B" />
      <path d="M6 9a7 7 0 0 1 12 0" stroke="#FF4B4B" />
      <circle cx="12" cy="15" r="1.5" fill="#FF4B4B" />
    </svg>
  );
}

export function MongoIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 1.5C12 1.5 7 6.5 7 12c0 3.3 1.9 6.2 4.7 7.5-.2-1.5-.1-3.3-.1-3.3s.9-2.3 1.3-4.2c.4 1.9 1.3 4.2 1.3 4.2s.1 1.8-.1 3.3c2.8-1.3 4.7-4.2 4.7-7.5 0-5.5-5-10.5-5-10.5h-1.8z" fill="#47A248" />
      <path d="M11.6 19.5c.2 1.5.4 3 1.4 3 .9 0 1.2-1.5 1.4-3-1.4.3-1.4.3-2.8 0z" fill="#47A248" />
    </svg>
  );
}

export function PostgresIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 4.5c1.7 0 3 1.3 3 3 0 1-.5 1.9-1.3 2.4.9.4 1.5 1.3 1.5 2.3 0 1.5-1.2 2.8-2.8 2.8h-4.4V6.5h4z" fill="#4169E1" />
    </svg>
  );
}

export function CockroachIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#6933FF" />
      <path d="M8 8l4 4-4 4M12 8l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MySqlIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#00758F" />
      <path d="M6 16c2-4 5-6 9-6 2 0 3 1 3 2s-1 2-3 2c-3 0-5 2-6 4H6z" fill="#F29111" />
    </svg>
  );
}

export function PrismaIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12.5 2.5l8 14.5c.5.8-.1 1.8-1 1.8H4.5c-.9 0-1.5-1-1-1.8l8-14.5c.4-.7 1.6-.7 2 0z" fill="#2D3748" stroke="#5A67D8" strokeWidth="1.5" />
      <path d="M12 6l5 9H7l5-9z" fill="#5A67D8" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5 1 .2 1.7.9 2.5 1.7 1.3 1.3 2.8 2.8 6 2.8 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-1-.2-1.7-.9-2.5-1.7-1.3-1.3-2.8-2.8-6-2.8zm-7 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5 1 .2 1.7.9 2.5 1.7 1.3 1.3 2.8 2.8 6 2.8 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-1-.2-1.7-.9-2.5-1.7-1.3-1.3-2.8-2.8-6-2.8z" fill="#38BDF8" />
    </svg>
  );
}

export function DaisyUiIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" fill="#1AD1A5" />
      <circle cx="12" cy="12" r="3.5" fill="#FFDC00" />
    </svg>
  );
}

export function MuiIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M2 17.5V6.5l4-2.5v11l-4 2.5zm7-4.4V2l4-2v11l-4 2.1zm7 4.4V6.5l4-2.5v11l-4 2.5z" fill="#007FFF" />
      <path d="M6 4l4-2 4 2-4 2-4-2zm7 11l4-2 4 2-4 2-4-2z" fill="#0059B2" />
    </svg>
  );
}

export function BootstrapIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#7952B3" />
      <path d="M8 6h4.5c2.2 0 3.5 1 3.5 2.5 0 1-.7 1.8-1.7 2.1 1.3.3 2.2 1.2 2.2 2.4 0 1.7-1.5 2.8-3.8 2.8H8V6zm2.4 3.7h2c.8 0 1.3-.4 1.3-1 0-.7-.5-1-1.3-1h-2v2zm0 4.1h2.2c.9 0 1.5-.4 1.5-1.1 0-.7-.6-1.1-1.5-1.1h-2.2v2.2z" fill="white" />
    </svg>
  );
}

export function DockerIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M22.5 10.5c-.3-.2-1.3-.3-2.1.2-.2.1-.3.3-.4.5-.7-.3-1.6-.4-2.5-.2-.3-.6-.8-1.2-1.6-1.5l-.5-.2-.3.5c-.4.7-.4 1.5-.2 2.2-1 .6-2.5.6-3.4.1H2.2c-.3 1.2 0 2.5.6 3.6 1 1.7 2.7 2.8 4.7 3.1 3.4.6 7.4.2 10.5-1.8 2.4-1.6 3.8-4.2 4.5-6.7.2-.6.1-1-.1-1.2z" fill="#2496ED" />
      <rect x="7" y="9.5" width="2" height="1.8" rx=".2" fill="#2496ED" />
      <rect x="9.5" y="9.5" width="2" height="1.8" rx=".2" fill="#2496ED" />
      <rect x="9.5" y="7.2" width="2" height="1.8" rx=".2" fill="#2496ED" />
      <rect x="12" y="9.5" width="2" height="1.8" rx=".2" fill="#2496ED" />
      <rect x="12" y="7.2" width="2" height="1.8" rx=".2" fill="#2496ED" />
      <rect x="12" y="5" width="2" height="1.8" rx=".2" fill="#2496ED" />
    </svg>
  );
}

export function GitIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L9 4.4l2.7 2.7c.6-.2 1.3-.1 1.8.4.5.5.7 1.2.5 1.8l2.6 2.6c.6-.2 1.3-.1 1.8.4.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.6-.6-.7-1.4-.4-2.1l-2.4-2.4v5.3c.2.1.4.3.5.5.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8.3-.3.7-.5 1.1-.6v-5.4c-.4-.1-.8-.3-1.1-.6-.6-.6-.7-1.4-.4-2.1L7.7 5.7 2.4 11c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.5 0-2.1z" fill="#F05032" />
    </svg>
  );
}

export function PostmanIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#FF6C37" />
      <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm2 4l-4 3 4 3V10z" fill="white" />
    </svg>
  );
}

export function LinuxIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="13" rx="7" ry="8" fill="#FCC624" />
      <circle cx="10" cy="9" r="1.2" fill="#000000" />
      <circle cx="14" cy="9" r="1.2" fill="#000000" />
      <path d="M10.5 12c.5.5 2.5.5 3 0" stroke="#000" strokeWidth="1.2" />
    </svg>
  );
}

export function VercelIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L24 22H0L12 2Z" />
    </svg>
  );
}

export function RenderIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#121212" />
      <path d="M6 18V6h5a6 6 0 0 1 6 6 6 6 0 0 1-6 6H6z" fill="#46E3B7" />
    </svg>
  );
}
