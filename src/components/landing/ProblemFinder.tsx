'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Urgency = 'high' | 'medium' | 'low';

type Result = {
  urgency: Urgency;
  badge: string;
  advice: string;
  fix: string;
  costRange: string;
};

type Option = { label: string; result: Result };

type Problem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  followUpQuestion: string;
  options: Option[];
  skipDiagnostic?: boolean;
};

const urgencyConfig: Record<Urgency, { bg: string; text: string; border: string; dot: string }> = {
  high: {
    bg: 'bg-emergency-soft',
    text: 'text-emergency',
    border: 'border-emergency/30',
    dot: 'bg-emergency',
  },
  medium: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200',
    dot: 'bg-amber-500',
  },
  low: {
    bg: 'bg-green-50',
    text: 'text-green-700',
    border: 'border-green-200',
    dot: 'bg-success',
  },
};

// SVG icons
function DropletIcon() {
  return (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 2L7 10a6 6 0 1 0 10 0L12 2z" />
    </svg>
  );
}
function FlameIcon() {
  return (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 22c4 0 7-3 7-7 0-3-1.5-5.5-3-7.5-.5 1.5-1 3-2 3.5C14.5 9.5 14 7 13 5c-2 3-5 5.5-5 10a4 4 0 0 0 4 4z" />
    </svg>
  );
}
function ThermometerIcon() {
  return (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 4a3 3 0 0 0-3 3v7.17A4 4 0 1 0 15 14.17V7a3 3 0 0 0-3-3z" />
      <line x1="12" y1="9" x2="12" y2="13" />
    </svg>
  );
}
function DrainIcon() {
  return (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="3" x2="12" y2="9" />
      <line x1="21" y1="12" x2="15" y2="12" />
      <line x1="12" y1="21" x2="12" y2="15" />
      <line x1="3" y1="12" x2="9" y2="12" />
    </svg>
  );
}
function RadiatorIcon() {
  return (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="10" rx="1" />
      <line x1="7" y1="7" x2="7" y2="17" />
      <line x1="12" y1="7" x2="12" y2="17" />
      <line x1="17" y1="7" x2="17" y2="17" />
      <line x1="2" y1="4" x2="22" y2="4" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}
function WrenchIcon() {
  return (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

const problems: Problem[] = [
  {
    id: 'leak',
    label: 'Water leak',
    icon: <DropletIcon />,
    followUpQuestion: 'Where is the leak?',
    options: [
      {
        label: 'Under the sink',
        result: {
          urgency: 'medium',
          badge: 'Can usually wait a few hours',
          advice: 'Turn off the isolation valves under the sink. These are the small valves on the hot and cold pipes with a slot-head screw.',
          fix: 'Compression fitting or tap washer replacement.',
          costRange: 'From £65 for a straightforward repair',
        },
      },
      {
        label: 'From the ceiling',
        result: {
          urgency: 'high',
          badge: 'This is urgent. Call now.',
          advice: 'Locate your stopcock (usually under the kitchen sink or below the stairs) and turn it off immediately. Place a bucket to contain the water.',
          fix: 'Trace the source above, likely a pipe joint, bathroom fitting, or failed sealant. Repair or replace the failed component.',
          costRange: 'From £95 for emergency callout',
        },
      },
      {
        label: 'Behind the toilet',
        result: {
          urgency: 'medium',
          badge: 'Sort it today',
          advice: 'Turn off the isolation valve on the pipe leading into the cistern. Use a flat-head screwdriver to turn the slot to a right angle to the pipe.',
          fix: 'Cistern fill valve or pan connector replacement.',
          costRange: 'From £75',
        },
      },
      {
        label: 'Pipe joint or fitting',
        result: {
          urgency: 'medium',
          badge: 'Sort it today',
          advice: 'Place a towel or bucket under the joint. Turn off the nearest isolation valve or the main stopcock if you cannot find one.',
          fix: 'Compression or push-fit joint re-seating or replacement.',
          costRange: 'From £85',
        },
      },
      {
        label: 'Not sure',
        result: {
          urgency: 'medium',
          badge: 'Call us to discuss',
          advice: 'If the leak is active, turn off the main stopcock while you investigate. It is usually under the kitchen sink or where the supply enters the property.',
          fix: 'Full leak trace and repair.',
          costRange: 'From £85',
        },
      },
    ],
  },
  {
    id: 'boiler',
    label: 'Boiler not working',
    icon: <FlameIcon />,
    followUpQuestion: 'What is happening?',
    options: [
      {
        label: 'No heating or hot water',
        result: {
          urgency: 'medium',
          badge: 'Call today',
          advice: 'Check the boiler pressure gauge. If it reads below 1 bar, you may just need to repressurise the system using the filling loop beneath the boiler.',
          fix: 'Boiler diagnosis and repair for all major brands including Worcester, Vaillant, Baxi and Ideal.',
          costRange: 'From £85',
        },
      },
      {
        label: 'Making strange noises',
        result: {
          urgency: 'low',
          badge: 'Book within a few days',
          advice: 'Banging or kettling usually means limescale buildup in the heat exchanger. Gurgling can mean air in the system. Note the sound type before calling.',
          fix: 'Boiler service, descale treatment, or powerflush depending on diagnosis.',
          costRange: 'From £95',
        },
      },
      {
        label: 'Leaking water',
        result: {
          urgency: 'high',
          badge: 'This is urgent. Call now.',
          advice: 'Do not continue using the boiler. Turn it off at the isolator switch next to the unit. Do not reset it repeatedly.',
          fix: 'Boiler leak repair or heat exchanger replacement. We carry common spares for Worcester, Vaillant, Baxi, Ideal, and Glow-Worm.',
          costRange: 'From £95',
        },
      },
      {
        label: 'Error code showing',
        result: {
          urgency: 'medium',
          badge: 'Call today',
          advice: 'Note the error code on the display. Many Worcester Bosch and Vaillant codes can be reset once by holding the reset button for 3 seconds. If it locks out again, stop resetting.',
          fix: 'Boiler fault diagnosis and repair based on error code.',
          costRange: 'From £85',
        },
      },
      {
        label: 'Not sure',
        result: {
          urgency: 'medium',
          badge: 'Call today',
          advice: 'Try switching the boiler off and back on using the reset button. If it shuts down again within a few minutes, leave it off and call us.',
          fix: 'Boiler diagnostic visit.',
          costRange: 'From £85',
        },
      },
    ],
  },
  {
    id: 'hotwater',
    label: 'No hot water',
    icon: <ThermometerIcon />,
    followUpQuestion: 'Is your heating working?',
    options: [
      {
        label: 'Yes, heating works fine',
        result: {
          urgency: 'medium',
          badge: 'Call today',
          advice: 'If you have a combi boiler, the diverter valve may be stuck open on the heating circuit. Try running a hot tap for 30 seconds to see if it warms up gradually.',
          fix: 'Diverter valve replacement. This is a common repair on combi boilers.',
          costRange: 'From £150',
        },
      },
      {
        label: 'No, nothing is working',
        result: {
          urgency: 'high',
          badge: 'This is urgent. Call now.',
          advice: 'Check the boiler pressure gauge and the display for error codes. If the pressure is below 1 bar, repressurise using the filling loop. Reset once only.',
          fix: 'Full boiler diagnosis and repair.',
          costRange: 'From £85',
        },
      },
      {
        label: 'Not sure',
        result: {
          urgency: 'medium',
          badge: 'Call today',
          advice: 'Check whether your radiators are warm when the heating is on. If they heat up normally, the fault is likely isolated to the hot water circuit.',
          fix: 'Boiler hot water circuit diagnostic visit.',
          costRange: 'From £85',
        },
      },
    ],
  },
  {
    id: 'drain',
    label: 'Blocked drain',
    icon: <DrainIcon />,
    followUpQuestion: 'Where is the blockage?',
    options: [
      {
        label: 'Kitchen sink',
        result: {
          urgency: 'low',
          badge: 'Can usually wait a day or two',
          advice: 'Try a cup of bicarbonate of soda followed by white vinegar, then flush with hot water. Avoid chemical drain cleaners as they can damage pipes.',
          fix: 'Mechanical drain clearance or drain rod.',
          costRange: 'From £75',
        },
      },
      {
        label: 'Bathroom or shower',
        result: {
          urgency: 'low',
          badge: 'Can usually wait a day or two',
          advice: 'Remove and clean the plug cover. Hair is the most common cause. A drain snake or flexible rod can reach further if cleaning the cover does not help.',
          fix: 'Drain clearance and inspection.',
          costRange: 'From £75',
        },
      },
      {
        label: 'Toilet',
        result: {
          urgency: 'medium',
          badge: 'Sort it today',
          advice: 'Do not keep flushing if the bowl is filling slowly. Try a plunger with a good seal around the pan. Short, sharp pushes work better than long strokes.',
          fix: 'Toilet blockage clearance.',
          costRange: 'From £75',
        },
      },
      {
        label: 'Outside drain',
        result: {
          urgency: 'low',
          badge: 'Can usually wait a day or two',
          advice: 'Lift the drain cover carefully and check the water level. If it is full to the top, the blockage is downstream. Note the location of the affected drain.',
          fix: 'Drain jetting and clearance. CCTV survey available for persistent blockages.',
          costRange: 'From £85',
        },
      },
      {
        label: 'Multiple drains blocked',
        result: {
          urgency: 'high',
          badge: 'This is urgent. Call now.',
          advice: 'Multiple blocked drains simultaneously usually indicates a main drain or sewer blockage. Stop using water in the property where possible to avoid overflow.',
          fix: 'Main drain investigation, jetting, and clearance.',
          costRange: 'From £95',
        },
      },
    ],
  },
  {
    id: 'radiator',
    label: 'Radiator problems',
    icon: <RadiatorIcon />,
    followUpQuestion: 'What is the issue?',
    options: [
      {
        label: 'Cold at the top',
        result: {
          urgency: 'low',
          badge: 'You may be able to fix this yourself',
          advice: 'Trapped air is the likely cause. Turn the heating off and let the system cool. Use a radiator bleed key to open the bleed valve on the side of the radiator until water appears, then close it.',
          fix: 'Radiator bleed, or a system powerflush if multiple radiators are affected.',
          costRange: 'From £65',
        },
      },
      {
        label: 'Cold at the bottom',
        result: {
          urgency: 'medium',
          badge: 'Book within a few days',
          advice: 'Sludge buildup at the bottom of the radiator is the usual cause. A chemical inhibitor can slow the problem. A powerflush is the long-term fix.',
          fix: 'System powerflush or chemical flush treatment.',
          costRange: 'From £350 for a full system powerflush',
        },
      },
      {
        label: 'Not heating at all',
        result: {
          urgency: 'medium',
          badge: 'Book within a few days',
          advice: 'Check the thermostatic radiator valve (TRV) on the side is not stuck. Gently tap the head or turn it fully off then back to your usual setting.',
          fix: 'TRV replacement or full radiator replacement.',
          costRange: 'From £65',
        },
      },
      {
        label: 'Leaking',
        result: {
          urgency: 'high',
          badge: 'This is urgent. Call now.',
          advice: 'Place a towel or bowl under the radiator. Turn both valves clockwise to the off position. If the leak continues, turn off your boiler.',
          fix: 'Radiator valve replacement or new radiator supply and fit.',
          costRange: 'From £120',
        },
      },
      {
        label: 'Making noise',
        result: {
          urgency: 'low',
          badge: 'Book when convenient',
          advice: 'Banging or clicking is usually thermal expansion and is generally harmless. Persistent loud banging can indicate water hammer, which is fixable.',
          fix: 'Valve service or system balancing.',
          costRange: 'From £65',
        },
      },
    ],
  },
  {
    id: 'other',
    label: 'Something else',
    icon: <WrenchIcon />,
    followUpQuestion: '',
    options: [],
    skipDiagnostic: true,
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export function ProblemFinder({ phone, phoneHref, compact }: { phone: string; phoneHref: string; compact?: boolean }) {
  const [phase, setPhase] = useState<'select' | 'followup' | 'result' | 'other'>('select');
  const [selected, setSelected] = useState<Problem | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [direction, setDirection] = useState(1);

  function chooseProblem(problem: Problem) {
    setDirection(1);
    setSelected(problem);
    if (problem.skipDiagnostic) {
      setPhase('other');
    } else {
      setPhase('followup');
    }
  }

  function chooseOption(option: Option) {
    setDirection(1);
    setResult(option.result);
    setPhase('result');
  }

  function reset() {
    setDirection(-1);
    setPhase('select');
    setSelected(null);
    setResult(null);
  }

  const urgencyCfg = result ? urgencyConfig[result.urgency] : null;

  const interactive = (
    <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            {/* Step 1: Problem selection */}
            {phase === 'select' && (
              <motion.div
                key="select"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeInOut' }}
              >
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
                  {problems.map((problem) => (
                    <button
                      key={problem.id}
                      onClick={() => chooseProblem(problem)}
                      className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center transition-all hover:border-accent hover:shadow-card active:scale-95 min-h-[120px] justify-center"
                    >
                      <span className="text-accent">{problem.icon}</span>
                      <span className="text-sm font-semibold text-navy leading-tight">{problem.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Follow-up question */}
            {phase === 'followup' && selected && (
              <motion.div
                key="followup"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeInOut' }}
              >
                <div className="mx-auto max-w-2xl">
                  <button
                    onClick={reset}
                    className="mb-5 flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-accent"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>

                  <div className="mb-2 flex items-center gap-2 text-accent">
                    {selected.icon}
                    <span className="text-sm font-semibold">{selected.label}</span>
                  </div>
                  <h3 className="mb-5 text-xl font-bold text-navy">{selected.followUpQuestion}</h3>

                  <div className="flex flex-col gap-2.5">
                    {selected.options.map((option) => (
                      <button
                        key={option.label}
                        onClick={() => chooseOption(option)}
                        className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 text-left text-sm font-medium text-navy transition-all hover:border-accent hover:bg-accent-soft hover:text-accent active:scale-[0.99] min-h-[52px]"
                      >
                        {option.label}
                        <svg className="h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Result */}
            {phase === 'result' && selected && result && urgencyCfg && (
              <motion.div
                key="result"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeInOut' }}
              >
                <div className="mx-auto max-w-2xl">
                  <button
                    onClick={() => { setDirection(-1); setPhase('followup'); setResult(null); }}
                    className="mb-5 flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-accent"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>

                  <div className={`rounded-2xl border p-6 sm:p-8 ${urgencyCfg.bg} ${urgencyCfg.border}`}>
                    {/* Urgency badge */}
                    <div className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-bold ${urgencyCfg.text}`}>
                      <span className={`inline-block h-2 w-2 rounded-full ${urgencyCfg.dot}`} />
                      {result.badge}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Immediate advice</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-700">{result.advice}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">What we will do</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-700">{result.fix}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Typical cost</p>
                        <p className="mt-1 text-lg font-bold text-accent">{result.costRange}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={phoneHref}
                        className="flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-base font-bold text-white transition-colors hover:bg-accent-hover min-h-[56px] sm:flex-1"
                      >
                        <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .95.68l1.45 4.36a1 1 0 0 1-.23 1.03L8.91 10.5a16 16 0 0 0 4.6 4.6l1.43-1.54a1 1 0 0 1 1.03-.23l4.36 1.45A1 1 0 0 1 21 15.72V19a2 2 0 0 1-2 2h-1C9.16 21 3 14.84 3 7V5z" />
                        </svg>
                        Call {phone}
                      </a>
                      <a
                        href="#contact"
                        className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-navy transition-colors hover:border-accent hover:text-accent min-h-[56px] sm:flex-1"
                      >
                        Request a callback
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={reset}
                    className="mt-4 text-sm text-slate-400 transition-colors hover:text-accent underline"
                  >
                    Start over
                  </button>
                </div>
              </motion.div>
            )}

            {/* Something else panel */}
            {phase === 'other' && (
              <motion.div
                key="other"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeInOut' }}
              >
                <div className="mx-auto max-w-2xl">
                  <button
                    onClick={reset}
                    className="mb-5 flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-accent"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-navy">Tell us what you need</h3>
                    <p className="mt-2 text-sm text-slate-500">
                      The quickest way to get a price is to call us. Or use the contact form below and describe the job.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={phoneHref}
                        className="flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-base font-bold text-white transition-colors hover:bg-accent-hover min-h-[56px] sm:flex-1"
                      >
                        <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .95.68l1.45 4.36a1 1 0 0 1-.23 1.03L8.91 10.5a16 16 0 0 0 4.6 4.6l1.43-1.54a1 1 0 0 1 1.03-.23l4.36 1.45A1 1 0 0 1 21 15.72V19a2 2 0 0 1-2 2h-1C9.16 21 3 14.84 3 7V5z" />
                        </svg>
                        Call {phone}
                      </a>
                      <a
                        href="#contact"
                        className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-4 text-base font-semibold text-navy transition-colors hover:border-accent hover:text-accent min-h-[56px] sm:flex-1"
                      >
                        Use the quote form
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
  );

  if (compact) return interactive;

  return (
    <section id="diagnostic" className="bg-cream py-14 sm:py-20">
      <div className="section">
        <div className="mb-8 text-center">
          <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-navy">
            What is the problem?
          </h2>
          <p className="mt-2 text-slate-500">
            Tell us what is happening and we will give you instant advice and a cost guide.
          </p>
        </div>
        {interactive}
      </div>
    </section>
  );
}
