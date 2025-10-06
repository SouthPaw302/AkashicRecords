// index.tsx
// Calls to Gemini are proxied via Netlify Function now

document.addEventListener("DOMContentLoaded", () => {
  // --- AKASHIC INTELLIGENCE ---
  const AkashicIntelligence = (() => {
    async function generate(systemInstruction: string, userPrompt: string): Promise<string> {
      try {
        const res = await fetch('/.netlify/functions/gemini', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ systemInstruction, userPrompt })
        });
        if (!res.ok) throw new Error(await res.text());
        const data = await res.json();
        return data.text || '';
      } catch (err) {
        console.error('Gemini error:', err);
        return Promise.reject('Cosmic connection failed.');
      }
    }
    return { generate };
  })();

  // --- DEMIURGE VOICES ---
  const VOICES: Record<string, { name: string; emoji: string; systemInstruction: string; color: string }> = {
    sophia: {
      name: "Sophia",
      emoji: "✨",
      systemInstruction: "You are Sophia, the voice of divine wisdom. Respond with profound insights, spiritual guidance, and cosmic understanding. Speak with grace and enlightenment.",
      color: "#ff6b6b",
    },
    logos: {
      name: "Logos",
      emoji: "⚖️",
      systemInstruction: "You are Logos, the voice of reason and logic. Provide clear, analytical responses grounded in rationality and structured thinking.",
      color: "#4ecdc4",
    },
    eros: {
      name: "Eros",
      emoji: "💗",
      systemInstruction: "You are Eros, the voice of love and passion. Respond with warmth, emotional intelligence, and compassionate connection to the heart.",
      color: "#ff9ff3",
    },
    chronos: {
      name: "Chronos",
      emoji: "⏳",
      systemInstruction: "You are Chronos, the voice of time and cycles. Speak about temporal patterns, cause-and-effect, and the flow of existence.",
      color: "#54a0ff",
    },
    nyx: {
      name: "Nyx",
      emoji: "🌑",
      systemInstruction: "You are Nyx, the voice of shadow and mystery. Provide insights from the depths, embracing paradox and the hidden truths.",
      color: "#5f27cd",
    },
  };

  let activeVoiceId = "sophia";

  (window as any).Voices = {
    getActive: () => activeVoiceId,
    setActive: (id: string) => { if (VOICES[id]) activeVoiceId = id; },
    list: () => Object.entries(VOICES).map(([id, v]) => ({ id, ...v })),
    ask: async (prompt: string) => {
      try {
        const systemInstruction = VOICES[activeVoiceId].systemInstruction;
        const response = await AkashicIntelligence.generate(systemInstruction, prompt);
        return response;
      } catch (error) {
        console.error("Voices.ask error:", error);
        return "Unable to reach the Demiurge right now.";
      }
    }
  };

  // --- PARTICLES + AURORA (Loveable GUI graphics) ---
  const setupParticles = () => {
    const canvas = document.createElement("canvas");
    canvas.id = "particle-canvas";
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "-1";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d")!;
    let width = window.innerWidth, height = window.innerHeight;
    canvas.width = width; canvas.height = height;

    const particles = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
      alpha: 0.4 + Math.random() * 0.6,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });
      requestAnimationFrame(draw);
    }
    draw();
    window.addEventListener("resize", () => {
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = width; canvas.height = height;
    });

    const style = document.createElement("style");
    style.innerHTML = `
      .aurora-shape { filter: blur(200px); animation: pulse-slow 12s infinite ease-in-out, hueShift 30s infinite linear; }
      @keyframes hueShift { from { filter: hue-rotate(0deg) blur(200px);} to { filter: hue-rotate(360deg) blur(200px);} }
    `;
    document.head.appendChild(style);
  };

  // --- CHRONOSCROLL (Timeline Orbs) ---
  const setupChronoscroll = () => {
    const canvas = document.getElementById("chronoscroll-canvas") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const modal = document.getElementById("codex-modal") as HTMLDivElement;
    const modalTitle = document.getElementById("codex-title") as HTMLHeadingElement;
    const modalBody = document.getElementById("codex-body") as HTMLParagraphElement;
    const modalCloseBtn = document.getElementById("codex-close-btn") as HTMLButtonElement;

    let width: number, height: number, dpr: number;
    let orbs: Orb[] = [];
    const COLORS = ["#9333ea", "#3b82f6", "#f59e0b", "#ec4899", "#14b8a6"];
    const ORB_DATA = [
      { type: "Memory Orb", title: "The Birth of Lyra", content: "A star system awakens." },
      { type: "Soul Fragment", title: "Echo of Atlantis", content: "A memory of a fallen city." },
      { type: "Time Echo", title: "Whispers of the Void", content: "A transmission from beyond." },
      { type: "Divine Moment", title: "The Verdant Age", content: "A planet blooms in unison." },
    ];

    class Orb {
      x: number; y: number; vx: number; vy: number; radius: number; baseRadius: number; color: string; data: any; pulse = 0;
      constructor(x: number, y: number, radius: number, color: string, data: any) {
        this.x = x; this.y = y; this.vx = (Math.random() - 0.5) * 0.5; this.vy = (Math.random() - 0.5) * 0.5;
        this.baseRadius = radius; this.radius = radius; this.color = color; this.data = data; this.pulse = Math.random() * Math.PI * 2;
      }
      draw() {
        const glow = ctx!.createRadialGradient(this.x, this.y, this.radius * 0.5, this.x, this.y, this.radius * 2.5);
        glow.addColorStop(0, `${this.color}80`);
        glow.addColorStop(1, `${this.color}00`);
        ctx!.fillStyle = glow;
        ctx!.fillRect(this.x - this.radius * 3, this.y - this.radius * 3, this.radius * 6, this.radius * 6);
        const core = ctx!.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        core.addColorStop(0, "#ffffffaa"); core.addColorStop(1, `${this.color}80`);
        ctx!.fillStyle = core;
        ctx!.beginPath(); ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2); ctx!.fill();
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x - this.radius < 0 || this.x + this.radius > width) this.vx *= -1;
        if (this.y - this.radius < 0 || this.y + this.radius > height) this.vy *= -1;
        this.pulse += 0.02; this.radius = this.baseRadius + Math.sin(this.pulse) * 0.5;
      }
    }

    function createOrb() {
      const radius = Math.random() * 8 + 4;
      const x = Math.random() * width; const y = Math.random() * height;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const data = ORB_DATA[Math.floor(Math.random() * ORB_DATA.length)];
      return new Orb(x, y, radius, color, data);
    }

    function init() {
      dpr = window.devicePixelRatio || 1;
      width = canvas.parentElement!.clientWidth; height = canvas.parentElement!.clientHeight;
      canvas.width = width * dpr; canvas.height = height * dpr;
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
      ctx!.scale(dpr, dpr);
      orbs = Array.from({ length: 40 }).map(() => createOrb());
      animate();
    }

    function animate() {
      ctx!.clearRect(0, 0, width, height);
      orbs.forEach(o => { o.update(); o.draw(); });
      requestAnimationFrame(animate);
    }

    canvas.addEventListener("click", async () => {
      const orb = orbs[Math.floor(Math.random() * orbs.length)];
      modalTitle.textContent = orb.data.title;
      modalBody.textContent = orb.data.content;
      modal.classList.add("visible");
      const interpretation = await (window as any).Voices?.ask?.(`Interpret this ${orb.data.type}: ${orb.data.title}. What wisdom does it hold?`);
      if (interpretation) {
        modalBody.textContent = `${orb.data.content}\n\n— Interpretation —\n${interpretation}`;
      }
    });
    modalCloseBtn.addEventListener("click", () => modal.classList.remove("visible"));
    window.addEventListener("resize", init);
    init();
  };

  // --- MIRROR OF SELF ---
  const setupMirrorOfSelf = () => {
    const seedInput = document.getElementById("seed-input") as HTMLInputElement;
    const bindBtn = document.getElementById("bind-btn") as HTMLButtonElement;
    if (!seedInput || !bindBtn) return;

    const modal = document.getElementById("codex-modal") as HTMLDivElement;
    const modalTitle = document.getElementById("codex-title") as HTMLHeadingElement;
    const modalBody = document.getElementById("codex-body") as HTMLParagraphElement;
    const modalCloseBtn = document.getElementById("codex-close-btn") as HTMLButtonElement;
    modalCloseBtn.addEventListener("click", () => modal.classList.remove("visible"));

    function mulberry32(a: number) { return function() { let t = a += 0x6D2B79F5; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
    function hashSeed(seed: string): number { let h = 2166136261; for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

    function generateConstellation(seed: string) {
      const prng = mulberry32(hashSeed(seed));
      const count = 7 + Math.floor(prng() * 5);
      const archetypes = ["Seeker","Sage","Creator","Guardian","Rebel","Healer","Oracle","Pilgrim","Muse","Hermit"];
      const elements = ["Fire","Water","Air","Earth","Aether"];
      const virtues = ["Courage","Compassion","Wisdom","Temperance","Justice","Faith","Hope","Humility"];
      return Array.from({ length: count }).map(() => ({
        x: prng() * 100,
        y: prng() * 60,
        archetype: archetypes[Math.floor(prng() * archetypes.length)],
        element: elements[Math.floor(prng() * elements.length)],
        virtue: virtues[Math.floor(prng() * virtues.length)],
      }));
    }

    async function reflectStar(star: { archetype: string; element: string; virtue: string }, seed: string) {
      const voice = (window as any).Voices.getActive?.() ?? "sophia";
      const voiceMeta = (window as any).Voices.list?.().find((v: any) => v.id === voice) || { name: "Sophia" };
      const prompt = `Seed: ${seed}\nArchetype: ${star.archetype}\nElement: ${star.element}\nVirtue: ${star.virtue}\nReflect on how this star expresses the user's inner essence.`;
      const text = await (window as any).Voices.ask(prompt);
      modalTitle.textContent = `${voiceMeta.name} speaks`;
      modalBody.textContent = text || "The Records are silent.";
      modal.classList.add("visible");
    }

    bindBtn.addEventListener("click", () => {
      const seed = seedInput.value.trim();
      if (!seed) return;
      const stars = generateConstellation(seed);
      // render constellation as simple textual list for now
      modalTitle.textContent = `Constellation: ${seed}`;
      modalBody.innerHTML = stars.map((s, i) => `${i + 1}. ${s.archetype} · ${s.element} · ${s.virtue}`).join("\n");
      modal.classList.add("visible");
      // pick one star for reflection now
      reflectStar(stars[Math.floor(Math.random() * stars.length)], seed);
    });

    seedInput.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); bindBtn.click(); } });
  };

  // --- VOICES ---
  const setupVoicesOfTheDemiurge = () => {
    const input = document.getElementById("voice-input") as HTMLTextAreaElement;
    const speakBtn = document.getElementById("voice-speak-btn") as HTMLButtonElement;
    if (!input || !speakBtn) return;
    const modal = document.getElementById("codex-modal") as HTMLDivElement;
    const modalTitle = document.getElementById("codex-title") as HTMLHeadingElement;
    const modalBody = document.getElementById("codex-body") as HTMLParagraphElement;

    speakBtn.addEventListener("click", async () => {
      const query = input.value.trim();
      if (query) {
        modalTitle.textContent = "The Demiurge speaks";
        modalBody.textContent = "Consulting the Records...";
        modal.classList.add("visible");
        const answer = await (window as any).Voices?.ask?.(query);
        modalBody.textContent = answer || "The Records are silent.";
        input.value = "";
      }
    });
    input.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); speakBtn.click(); } });
  };

  // --- RULES ---
  const setupRulesOfTheRealm = () => {
    const grid = document.getElementById("rune-grid") as HTMLDivElement;
    const modal = document.getElementById("rules-modal") as HTMLDivElement;
    const modalTitle = document.getElementById("rules-title") as HTMLHeadingElement;
    const modalDesc = document.getElementById("rules-desc") as HTMLParagraphElement;
    const modalCloseBtn = document.getElementById("rules-close-btn") as HTMLButtonElement;
    const testLawBtn = document.getElementById("test-law-btn") as HTMLButtonElement;
    const RULES = [
      { law: "Law of Reflection", symbol: "🪞", desc: "Outer cosmos mirrors inner self." },
      { law: "Law of Consent", symbol: "🤝", desc: "No soul accessed without permission." },
      { law: "Law of Cycles", symbol: "♾️", desc: "All things exist in cycles." },
    ];
    RULES.forEach(r => {
      const el = document.createElement("div");
      el.className = "rune-glyph"; el.textContent = r.symbol;
      el.addEventListener("click", () => { modalTitle.textContent = r.law; modalDesc.textContent = r.desc; modal.classList.add("visible"); });
      grid.appendChild(el);
    });
    modalCloseBtn.addEventListener("click", () => modal.classList.remove("visible"));
    testLawBtn.addEventListener("click", () => {
      document.body.classList.add("law-test-active");
      setTimeout(() => document.body.classList.remove("law-test-active"), 500);
    });
  };

  // --- INIT ALL ---
  setupParticles();
  setupChronoscroll();
  setupMirrorOfSelf();
  setupVoicesOfTheDemiurge();
  setupRulesOfTheRealm();

  // --- UNIFIED API ---
  (window as any).Akashic = {
    ask: (prompt: string) => (window as any).Voices?.ask?.(prompt),
    bindSoul: (seed: string) => (window as any).MirrorOfSelf?.addTrace(seed),
    testLaw: () => { document.body.classList.add("law-test-active"); setTimeout(() => document.body.classList.remove("law-test-active"), 500); },
  };
});