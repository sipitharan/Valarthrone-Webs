import React from 'react';

export const CastleLandscape: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 1440 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-full object-cover pointer-events-none ${className}`}
    preserveAspectRatio="xMidYMax slice"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="mistGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#03060c" stopOpacity="0.1" />
        <stop offset="40%" stopColor="#0b1324" stopOpacity="0.4" />
        <stop offset="85%" stopColor="#070c18" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#03060c" stopOpacity="1" />
      </linearGradient>
      
      <linearGradient id="mountainFar" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#111d35" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#070c18" stopOpacity="0.8" />
      </linearGradient>

      <linearGradient id="mountainMid" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#050914" stopOpacity="0.95" />
      </linearGradient>

      <linearGradient id="castleSilhouetteGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#17223b" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#03060c" stopOpacity="1" />
      </linearGradient>

      <radialGradient id="royalHearthGlow" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#dc2626" stopOpacity="0.25" />
        <stop offset="60%" stopColor="#d4af37" stopOpacity="0.08" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Atmospheric Sky Glow */}
    <rect width="1440" height="600" fill="url(#royalHearthGlow)" />

    {/* Distant Mountain Ridges */}
    <path
      d="M-50 400L180 260L360 340L540 220L720 310L920 200L1120 320L1300 240L1500 370V600H-50V400Z"
      fill="url(#mountainFar)"
    />

    {/* Midground Jagged Crags */}
    <path
      d="M-20 450L220 330L420 410L620 290L820 380L1060 270L1260 390L1480 320V600H-20V450Z"
      fill="url(#mountainMid)"
      opacity="0.85"
    />

    {/* Soaring Castle Silhouette in the Center-Right */}
    <g fill="url(#castleSilhouetteGrad)">
      {/* Mountain Base for Castle */}
      <path d="M600 480L740 330L860 330L1020 490H600Z" />
      
      {/* Main Central Keep & Spire */}
      <rect x="765" y="190" width="46" height="150" />
      <polygon points="760,190 788,100 816,190" />
      {/* Spire tip glowing beacon */}
      <circle cx="788" cy="98" r="3" fill="#d4af37" />

      {/* Left Turret */}
      <rect x="720" y="240" width="34" height="100" />
      <polygon points="716,240 737,160 758,240" />

      {/* Right Turret */}
      <rect x="822" y="230" width="36" height="110" />
      <polygon points="818,230 840,150 862,230" />

      {/* Outer Battlement Walls & Crenellations */}
      <rect x="680" y="280" width="180" height="70" />
      {/* Crenellations */}
      <rect x="685" y="270" width="10" height="10" />
      <rect x="702" y="270" width="10" height="10" />
      <rect x="830" y="260" width="10" height="10" />
      <rect x="848" y="260" width="10" height="10" />
      
      {/* High Arched Gates & Lit Arrow Loops */}
      <rect x="778" y="305" width="20" height="45" rx="10" fill="#d4af37" opacity="0.3" />
      <rect x="785" y="215" width="4" height="14" rx="2" fill="#ef4444" opacity="0.7" />
      <rect x="734" y="260" width="4" height="10" rx="2" fill="#ef4444" opacity="0.6" />
      <rect x="838" y="250" width="4" height="10" rx="2" fill="#ef4444" opacity="0.6" />
    </g>

    {/* Flying Dragons in Horizon */}
    {/* Dragon 1 - Higher in the sky */}
    <g transform="translate(480, 140) scale(0.65)" fill="#070c18" opacity="0.75">
      <path d="M40 25C30 18 15 20 0 35C8 33 16 38 20 44C10 42 3 48 5 54C14 53 22 58 26 66C32 50 36 36 40 25Z" fill="#111d35" />
      <path d="M40 25C50 18 65 20 80 35C72 33 64 38 60 44C70 42 77 48 75 54C66 53 58 58 54 66C48 50 44 36 40 25Z" fill="#111d35" />
      <path d="M38 20L42 20L41 75L39 75Z" fill="#0b1324" />
    </g>

    {/* Dragon 2 - Closer and larger */}
    <g transform="translate(1080, 110) scale(0.9)" fill="#050810" opacity="0.85">
      <path d="M50 30C36 20 18 22 0 40C10 38 20 43 25 50C12 48 4 55 6 62C18 60 28 66 32 75C40 57 45 42 50 30Z" fill="#0d172a" />
      <path d="M50 30C64 20 82 22 100 40C90 38 80 43 75 50C88 48 96 55 94 62C82 60 72 66 68 75C60 57 55 42 50 30Z" fill="#0d172a" />
      <path d="M48 24L52 24L51 88L49 88Z" fill="#070c18" />
      {/* Subtle eye gleam */}
      <circle cx="50" cy="23" r="1.5" fill="#facc15" />
    </g>

    {/* Rolling Foreground Mist and Fog */}
    <rect y="380" width="1440" height="220" fill="url(#mistGradient)" />
    
    {/* Mist Ribbons */}
    <path
      d="M-50 480C200 440 450 510 700 470C950 430 1200 500 1490 460V600H-50V480Z"
      fill="#03060c"
      opacity="0.95"
    />
  </svg>
);

export const ProjectPreviewVisual: React.FC<{
  projectId: string;
  title: string;
  className?: string;
}> = ({ projectId, title, className = "" }) => {
  if (projectId === 'kannan-store') {
    return (
      <div
        aria-label={`Preview of ${title}`}
        role="img"
        className={`relative w-full h-full bg-gradient-to-br from-kingdom-900 to-kingdom-950 border border-gold/20 rounded-xl overflow-hidden p-5 flex flex-col justify-between ${className}`}
      >
        {/* Mock Browser Header */}
        <div className="flex items-center justify-between pb-3 border-b border-steel-700/30">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-crimson-600/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-gold/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          </div>
          <div className="px-3 py-0.5 rounded bg-kingdom-800/80 text-[11px] text-steel-400 font-mono tracking-wider">
            kannanstore.local/catalog
          </div>
          <div className="w-6"></div>
        </div>

        {/* Storefront Layout Mockup */}
        <div className="my-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="h-4 w-32 bg-gold/30 rounded"></div>
              <div className="h-2.5 w-48 bg-steel-700/50 rounded"></div>
            </div>
            <div className="px-2.5 py-1 rounded bg-crimson-900/40 border border-crimson-700/40 text-[10px] text-crimson-400 font-semibold uppercase tracking-wider">
              Cart (3 Items)
            </div>
          </div>

          {/* Product Cards Row */}
          <div className="grid grid-cols-3 gap-2.5 pt-2">
            {[
              { name: 'Organic Grains', price: '₹140', cat: 'Pantry' },
              { name: 'Farm Produce', price: '₹65', cat: 'Fresh' },
              { name: 'Cold Pressed Oil', price: '₹220', cat: 'Kitchen' },
            ].map((item, i) => (
              <div key={i} className="p-2.5 rounded-lg bg-kingdom-850/90 border border-steel-700/40 space-y-2">
                <div className="h-16 w-full rounded bg-gradient-to-tr from-kingdom-800 to-kingdom-700/40 flex items-center justify-center">
                  <span className="text-xs font-serif text-gold/80">{item.cat}</span>
                </div>
                <div className="text-[11px] font-semibold text-steel-200 truncate">{item.name}</div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-gold font-mono">{item.price}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-gold/10 text-gold-400 border border-gold/30">+ Add</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-2.5 rounded-lg bg-kingdom-800/60 border border-gold/15 flex items-center justify-between text-xs text-steel-300">
          <span className="font-serif text-gold-300">Fast Local Delivery Active</span>
          <span className="text-[10px] text-steel-400">Order Dispatch Ready</span>
        </div>
      </div>
    );
  }

  if (projectId === 'resqnow') {
    return (
      <div
        aria-label={`Preview of ${title}`}
        role="img"
        className={`relative w-full h-full bg-gradient-to-br from-kingdom-900 via-kingdom-950 to-crimson-950/40 border border-crimson-700/30 rounded-xl overflow-hidden p-5 flex flex-col justify-between ${className}`}
      >
        {/* Mock Header */}
        <div className="flex items-center justify-between pb-3 border-b border-steel-700/30">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-crimson-600 animate-pulse"></span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-crimson-400 font-bold">EMERGENCY DISPATCH HUD</span>
          </div>
          <div className="px-2 py-0.5 rounded bg-crimson-900/60 border border-crimson-600/50 text-[10px] text-crimson-200">
            SYSTEM LIVE
          </div>
        </div>

        {/* Dashboard Grid Mockup */}
        <div className="my-4 space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded bg-kingdom-850 border border-crimson-800/30 text-center">
              <div className="text-[10px] text-steel-400 uppercase">Active Calls</div>
              <div className="text-lg font-bold text-crimson-400 font-mono">14</div>
            </div>
            <div className="p-2 rounded bg-kingdom-850 border border-gold/20 text-center">
              <div className="text-[10px] text-steel-400 uppercase">Dispatched</div>
              <div className="text-lg font-bold text-gold font-mono">09</div>
            </div>
            <div className="p-2 rounded bg-kingdom-850 border border-emerald-800/30 text-center">
              <div className="text-[10px] text-steel-400 uppercase">Safe / Resolved</div>
              <div className="text-lg font-bold text-emerald-400 font-mono">42</div>
            </div>
          </div>

          {/* Incident Stream */}
          <div className="space-y-1.5">
            {[
              { id: 'INC-809', type: 'High Priority Medical', time: '1m ago', status: 'En Route', color: 'text-crimson-400' },
              { id: 'INC-808', type: 'Evacuation Transport', time: '4m ago', status: 'Assigned', color: 'text-gold' },
              { id: 'INC-807', type: 'Essential Relief Rations', time: '9m ago', status: 'Delivered', color: 'text-emerald-400' },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded bg-kingdom-800/50 border border-steel-800 text-xs">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-[10px] text-steel-400">{row.id}</span>
                  <span className="text-steel-200 text-[11px] font-medium">{row.type}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] text-steel-400">{row.time}</span>
                  <span className={`text-[10px] font-semibold ${row.color}`}>{row.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between text-[11px] text-steel-400 pt-2 border-t border-steel-800">
          <span>ResQNow Dispatch Channel #1</span>
          <span className="text-emerald-400 font-mono">99.98% Latency Node</span>
        </div>
      </div>
    );
  }

  // Default: SolarGuardian AI
  return (
    <div
      aria-label={`Preview of ${title}`}
      role="img"
      className={`relative w-full h-full bg-gradient-to-br from-kingdom-900 via-kingdom-950 to-gold/10 border border-gold/25 rounded-xl overflow-hidden p-5 flex flex-col justify-between ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-steel-700/30">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse"></span>
          <span className="text-[11px] font-mono uppercase tracking-wider text-gold-400 font-bold">SOLAR INTELLIGENCE TELEMETRY</span>
        </div>
        <div className="px-2 py-0.5 rounded bg-gold/15 border border-gold/40 text-[10px] text-gold-300 font-mono">
          YIELD: 98.4%
        </div>
      </div>

      {/* Chart & Telemetry Visualization */}
      <div className="my-4 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <div>
            <span className="text-steel-400 text-[11px]">Daily Power Curve (kW)</span>
            <div className="text-base font-bold text-white font-mono">48.6 <span className="text-xs text-gold">kWh Today</span></div>
          </div>
          <div className="text-right">
            <span className="text-steel-400 text-[11px]">Array Temp</span>
            <div className="text-xs font-mono text-emerald-400">41.2°C • Optimal</div>
          </div>
        </div>

        {/* SVG Power Curve Graph */}
        <div className="h-24 w-full bg-kingdom-850/80 rounded-lg p-2 border border-steel-800 flex items-end">
          <svg viewBox="0 0 300 80" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="solarGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d4af37" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 10,70 Q 60,65 90,40 T 150,15 T 210,30 T 270,55 T 290,70"
              fill="none"
              stroke="#eab308"
              strokeWidth="2.5"
            />
            <path
              d="M 10,70 Q 60,65 90,40 T 150,15 T 210,30 T 270,55 T 290,70 L 290,75 L 10,75 Z"
              fill="url(#solarGrad)"
            />
            {/* Peak node */}
            <circle cx="150" cy="15" r="4" fill="#facc15" stroke="#070c18" strokeWidth="2" />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 text-center text-xs">
          <div className="p-2 rounded bg-kingdom-800/40 border border-steel-800">
            <span className="text-steel-400 text-[10px]">Inverter Health</span>
            <div className="text-xs font-semibold text-emerald-400">All 6 Active</div>
          </div>
          <div className="p-2 rounded bg-kingdom-800/40 border border-steel-800">
            <span className="text-steel-400 text-[10px]">Predictive Loss</span>
            <div className="text-xs font-semibold text-gold">0.0% Detected</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-steel-400 pt-2 border-t border-steel-800">
        <span>Array #A4 (Monocrystalline)</span>
        <span className="text-gold font-mono">Live Telemetry</span>
      </div>
    </div>
  );
};

