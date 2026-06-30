import React from 'react';
import ReactDOM from 'react-dom/client';
import { motion, useInView } from 'framer-motion';
import './index.css';

type IconProps = {
  className?: string;
};

const ArrowUpRight = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M7 7h10v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Play = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <polygon points="7,5 19,12 7,19" />
  </svg>
);

const Spark = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

const fadeUp = {
  initial: { filter: 'blur(12px)', opacity: 0, y: 26 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
};

const missIaVideoSrc = '/videos/conoce-miss-ia.mp4';
const vivianePhotoSrc = '/images/viviane-macias.jpg?v=2';
const calendlyUrl = 'https://calendly.com/vmacpat/miss-ia-20-mins';

const siteContent = {
  navBadge: 'cupos limitados este mes -> 20 mins',
  navCta: 'consultoría gratis',
  heroLabel: 'Líderes en LATAM',
  heroTitle: 'De apagar incendios a escalar el negocio.',
  heroBody: [
    'En una videollamada de 20 min identificamos dónde se va tu tiempo, cuánto te cuesta al mes y cómo recuperarlo.',
  ],
  heroPrimaryCta: 'Agenda tu consultoría',
  heroVideoCta: 'conoce a Miss IA',
  videoLabel: 'conoce a Miss IA',
  videoTitle: 'Mira el video.',
  videoCaption: 'Mira el video · Cómo lo hacemos en una tarde, sin venderte humo',
  stepsLabel: 'qué pasa',
  stepsTitle: 'Cuatro pasos.',
  secondLabel: '',
  secondTitle: 'Quiero que tú y tu equipo',
  secondAccent: 'conexiones reales y creatividad.',
  secondSupport: 'se centren en lo humano:',
  secondClosing: 'Eso es lo que marca la diferencia en tu marca.',
  messagesLabel: 'mensajes reales',
  bioLabel: 'consultoría · 20 minutos',
  bioName: 'Viviane Macias',
  bioIntro: 'Vivió, estudió y trabajó, durante los últimos 12 años, en USA (NYC y BOS), Panamá, Colombia, Ecuador, Zambia e India. Enfocada en crecer empresas por medio de las finanzas, la tecnología y la sostenibilidad.',
  bioCta: 'Reserva tu consulta',
};

const heroTitleLines = [
  'De apagar incendios',
  'a escalar el negocio.',
];

const bioHighlights = [
  'Lideró la implementación de +300 agentes de IA en atención al cliente, ventas y cobranzas.',
  'Escaló implementaciones ~6x como COO de Jelou AI y redujo el tiempo de resolución de soporte en 85%.',
  'Trabajó en banca de inversión y lanzó el área de inversiones sostenibles de MMG Bank.',
  'Analizó e invirtió desde Actions Capital (NYC) en startups globales que usan tecnología en financiamiento, salud y desarrollo de PyMEs.',
  'Se graduó de Northeastern University y obtuvo una Maestría en Ciencias por Columbia University.',
];

const realMessages = [
  '¡Gracias! Realmente la gente está muy animada, más de lo que pensé.',
  'Pusiste orden en el caos que estaba.',
  'Aprendí a utilizar mejor la IA adaptada a lo laboral.',
  'Nos ayudó a entender dónde se estaba perdiendo el tiempo.',
  'Ahora el equipo sabe qué automatizar y qué no.',
  'La sesión fue clara, directa y aplicable desde el día uno.',
  'Por fin vimos la IA como herramienta de trabajo, no como moda.',
  'Salimos con un plan real y tareas concretas.',
];

function AnimatedNetwork() {
  return (
    <div className="network-bg" aria-hidden="true">
      {Array.from({ length: 28 }).map((_, index) => (
        <span
          key={index}
          className="node"
          style={{
            left: `${8 + ((index * 19) % 84)}%`,
            top: `${10 + ((index * 31) % 76)}%`,
            animationDelay: `${index * 0.18}s`,
            ['--node-color' as string]: index % 3 === 0 ? '#eeb085' : '#b9d8ff',
          }}
        />
      ))}
      <svg className="network-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M7 31 L18 21 L28 36 L42 28 L57 48 L73 34 L90 56" />
        <path d="M12 70 L26 62 L39 76 L54 66 L70 78 L92 70" />
        <path d="M20 22 L25 63 L43 28 L54 66 L73 34" />
        <path d="M59 16 L76 18 L86 34 L73 34 L70 78" />
      </svg>
      <div className="soft-orbit orbit-one" />
      <div className="soft-orbit orbit-two" />
    </div>
  );
}

function ChaosToClarityNetwork() {
  const chaosNodes = [
    [8, 18, '#eeb085'],
    [16, 28, '#b9d8ff'],
    [23, 16, '#eeb085'],
    [31, 34, '#b9d8ff'],
    [12, 55, '#eeb085'],
    [27, 67, '#b9d8ff'],
    [39, 52, '#eeb085'],
    [18, 82, '#b9d8ff'],
    [34, 78, '#eeb085'],
    [44, 27, '#b9d8ff'],
  ];

  const clarityNodes = [
    [58, 24],
    [72, 20],
    [86, 30],
    [64, 46],
    [78, 49],
    [91, 58],
    [59, 70],
    [74, 76],
    [88, 72],
  ];

  return (
    <div className="transformation-bg" aria-hidden="true">
      <div className="chaos-field">
        {chaosNodes.map(([left, top, color], index) => (
          <span
            key={`chaos-${index}`}
            className="chaos-node"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              ['--node-color' as string]: color,
              animationDelay: `${index * 0.17}s`,
            }}
          />
        ))}
        <svg className="chaos-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M9 25 L18 17" />
          <path d="M21 44 L30 61" />
          <path d="M11 70 L24 64" />
          <path d="M38 20 L31 33" />
          <path d="M33 83 L45 73" />
          <path d="M16 39 L24 31" />
          <path d="M42 45 L35 56" />
          <path d="M7 52 L16 47" />
        </svg>
      </div>

      <div className="clarity-field">
        {clarityNodes.map(([left, top], index) => (
          <span
            key={`clarity-${index}`}
            className="clarity-node"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${index * 0.12}s`,
            }}
          />
        ))}
        <svg className="clarity-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M58 24 L72 20 L86 30 L91 58 L88 72 L74 76 L59 70 L64 46 L58 24" />
          <path d="M64 46 L78 49 L91 58" />
          <path d="M72 20 L78 49 L74 76" />
          <path d="M59 70 L78 49 L86 30" />
        </svg>
      </div>
    </div>
  );
}

function BlurText({ text, className = '' }: { text: string; className?: string }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div ref={ref} className={`flex flex-wrap justify-center gap-y-1 ${className}`}>
      {text.split(' ').map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block mr-[0.28em]"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 44 }}
          animate={isInView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.68, delay: index * 0.08, ease: 'easeOut' }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

function HeroTitle() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div ref={ref} className="hero-title-stack">
      {heroTitleLines.map((line, index) => (
        <motion.div
          key={line}
          className="hero-title-line"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 34 }}
          animate={isInView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.68, delay: index * 0.08, ease: 'easeOut' }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
}

function MissIaVideo() {
  const [hasVideo, setHasVideo] = React.useState(true);

  return (
    <motion.div
      id="conoce-miss-ia"
      className="video-stage relative overflow-hidden rounded-[1.8rem] px-4 py-12 md:px-10 md:py-16"
      initial={fadeUp.initial}
      animate={fadeUp.animate}
      transition={{ duration: 0.85, delay: 0.16, ease: 'easeOut' }}
    >
      <AnimatedNetwork />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/55">{siteContent.videoLabel}</div>
            <h2 className="mt-3 font-heading text-5xl font-semibold leading-none tracking-[-0.035em] text-white md:text-7xl">
              {siteContent.videoTitle}
            </h2>
          </div>
          <a href={calendlyUrl} target="_blank" rel="noreferrer" className="rounded-2xl bg-[#3b82f6] px-6 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)]">
            {siteContent.navCta}
          </a>
        </div>

        <div className="video-frame">
          {hasVideo ? (
            <video
              className="h-full w-full object-cover"
              controls
              preload="metadata"
              playsInline
              onError={() => setHasVideo(false)}
            >
              <source src={missIaVideoSrc} type="video/mp4" />
            </video>
          ) : (
            <div className="video-empty">
              <span className="grid h-20 w-20 place-items-center rounded-full border border-white/25 bg-white/10 text-white">
                <Play className="h-8 w-8" />
              </span>
            </div>
          )}
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-base font-medium text-white/65">
          <Play className="mr-2 inline h-4 w-4" />
          {siteContent.videoCaption}
        </p>
      </div>
    </motion.div>
  );
}

function RealMessages() {
  const carouselMessages = [...realMessages, ...realMessages];

  return (
    <div className="messages-window mt-8">
      <div className="messages-stream">
        {carouselMessages.map((message, index) => (
          <div key={`${message}-${index}`} className="chat-bubble rounded-2xl p-4">
            <div className="text-xs text-white/40">participante</div>
            <p className="mt-2 font-semibold leading-snug text-white/90">{message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function VivianePortrait() {
  return (
    <div className="portrait-placeholder rounded-[1.4rem]">
      <img src={vivianePhotoSrc} alt="Viviane Macias" />
    </div>
  );
}

function MissIaMark({ className = '' }: { className?: string }) {
  return (
    <div className={`font-accent italic ${className}`}>
      Miss <span className="text-peach">IA</span>
    </div>
  );
}

const metrics = [
  ['+300', 'agentes de IA implementados'],
  ['+22k', 'personas aprenden con Miss IA'],
  ['85%', 'reducción de tiempo en CX'],
];

const steps = [
  ['01', 'Agenda tu consultoría', '20 minutos, gratis.'],
  ['02', 'Conectamos con tu visión', 'Hacia dónde va la empresa y qué los hace únicos.'],
  ['03', 'Identificamos cuellos de botella', 'Levantamos procesos y data de dónde se pierde el tiempo.'],
  ['04', 'Proponemos solución', 'Hecha a la medida.'],
];

function App() {
  return (
    <main className="min-h-screen bg-cream text-ink font-body">
      <section className="relative min-h-screen overflow-hidden px-5 py-6 md:px-9">
        <nav className="relative z-20 flex items-center justify-between gap-4">
          <MissIaMark className="text-3xl text-ink" />
          <div className="liquid-light hidden rounded-full px-5 py-2 text-sm font-medium tracking-wide md:block">
            {siteContent.navBadge}
          </div>
          <a href={calendlyUrl} target="_blank" rel="noreferrer" className="nav-cta rounded-2xl px-5 py-3 text-sm font-semibold">
            {siteContent.navCta} <ArrowUpRight className="ml-1 inline h-4 w-4" />
          </a>
        </nav>

        <div className="relative z-10 mt-8 grid gap-7">
          <motion.div
            className="hero-panel liquid-dark relative flex min-h-[620px] overflow-hidden rounded-[2rem] p-7 md:min-h-[700px] md:p-12"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <ChaosToClarityNetwork />
            <div className="relative z-10 flex h-full w-full flex-col justify-end">
              <div className="hero-copy text-left">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                  {siteContent.heroLabel}
                </div>
                <HeroTitle />
                <div className="hero-body mt-7 space-y-3 text-base font-light leading-snug text-white/75 md:text-lg">
                  {siteContent.heroBody.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-5 md:mt-12">
                <a href={calendlyUrl} target="_blank" rel="noreferrer" className="liquid-strong rounded-full px-6 py-3 font-semibold text-white">
                  {siteContent.heroPrimaryCta} <ArrowUpRight className="ml-2 inline h-5 w-5" />
                </a>
                <a href="#conoce-miss-ia" className="flex items-center gap-3 text-white/85">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-white/30 bg-white/5">
                    <Play className="h-4 w-4" />
                  </span>
                  {siteContent.heroVideoCta}
                </a>
              </div>
            </div>
          </motion.div>

          <MissIaVideo />

            <motion.div
              className="grid gap-5 md:grid-cols-3"
              initial={fadeUp.initial}
              animate={fadeUp.animate}
              transition={{ duration: 0.85, delay: 0.18, ease: 'easeOut' }}
            >
              {metrics.map(([value, label]) => (
                <div key={value} className="metric-card rounded-[1.35rem] p-7">
                  <div className="font-accent text-6xl italic leading-none text-peach">{value}</div>
                  <p className="mt-7 text-base font-semibold leading-tight text-ink/70">{label}</p>
                </div>
              ))}
            </motion.div>

          <motion.div
            className="liquid-card flex flex-col justify-between rounded-[1.7rem] p-7 md:p-10"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.85, delay: 0.32, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-ink/50">{siteContent.stepsLabel}</span>
              <Spark className="h-6 w-6 text-peach" />
            </div>
            <h2 className="mt-12 max-w-5xl font-heading text-4xl font-semibold leading-[0.98] tracking-[-0.04em] md:text-5xl">
              {siteContent.stepsTitle}
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {steps.map(([number, title, body]) => (
                <div key={number} className="step-card min-h-[220px] rounded-2xl p-6 md:p-7">
                  <div className="text-sm font-semibold text-peach">{number}</div>
                  <div className="mt-8 font-accent text-[2rem] italic leading-[0.95] md:text-[2.35rem]">{title}</div>
                  <p className="mt-4 text-base font-medium text-ink/65">{body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden bg-night px-5 py-16 text-white md:px-9">
        <AnimatedNetwork />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-between gap-12">
          <div>
            <motion.div
              className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-white/55"
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
            >
              {siteContent.secondLabel}
            </motion.div>
            <motion.div
              className="max-w-5xl"
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.12 }}
            >
              <h2 className="font-heading text-5xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-7xl">
                {siteContent.secondTitle}
              </h2>
              <div className="mt-2 font-heading text-5xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-7xl">
                {siteContent.secondSupport}
              </div>
              <div className="mt-3 font-accent text-5xl italic leading-[0.95] text-peach md:text-7xl">
                {siteContent.secondAccent}
              </div>
              <p className="mt-6 max-w-2xl text-lg font-light leading-snug text-white/70 md:text-xl">
                {siteContent.secondClosing}
              </p>
            </motion.div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
            <motion.div
              className="liquid-dark rounded-[1.6rem] p-7"
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.2 }}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.32em] text-white/45">{siteContent.messagesLabel}</div>
              <RealMessages />
            </motion.div>

            <motion.div
              className="liquid-dark rounded-[1.6rem] p-7 md:p-9"
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.28 }}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.32em] text-peach">{siteContent.bioLabel}</div>
              <div className="mt-14">
                <h3 className="font-accent text-6xl italic leading-none tracking-[-0.02em]">{siteContent.bioName}</h3>
                <p className="mt-5 max-w-3xl text-lg font-light leading-snug text-white/75">
                  {siteContent.bioIntro}
                </p>
                <div className="mt-8 grid gap-8 md:grid-cols-[0.62fr_1fr] md:items-center">
                  <VivianePortrait />
                  <div className="grid gap-3 text-base font-light leading-snug text-white/75">
                    {bioHighlights.map((item) => (
                      <p key={item} className="bio-line">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                  <a href={calendlyUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-peach px-7 py-4 font-semibold text-ink shadow-[0_10px_0_#061b34]">
                    {siteContent.bioCta} <ArrowUpRight className="ml-2 inline h-5 w-5" />
                  </a>
              </div>
            </motion.div>
          </div>
          <MissIaMark className="pb-2 text-center text-4xl text-white/90" />
        </div>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
