"use client";

/**
 * Hand-drawn schematic diagrams for the AI case studies.
 * Honest simplifications of each system's real topology —
 * ink boxes, one accent signal path with a marching-ants flow.
 */

const box = {
  fill: "var(--color-paper)",
  stroke: "var(--color-line)",
  strokeWidth: 1,
};

const aiBox = {
  fill: "var(--color-surface)",
  stroke: "var(--color-accent)",
  strokeWidth: 1.25,
};

function Label({
  x,
  y,
  children,
  strong = false,
  anchor = "middle",
  accent = false,
}: {
  x: number;
  y: number;
  children: string;
  strong?: boolean;
  anchor?: "start" | "middle" | "end";
  accent?: boolean;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontSize={9}
      letterSpacing={1}
      fontWeight={strong ? 600 : 500}
      fill={
        accent
          ? "var(--color-accent)"
          : strong
            ? "var(--color-ink)"
            : "var(--color-muted)"
      }
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {children}
    </text>
  );
}

/** Connector: quiet base line + accent marching-ants overlay. */
function Flow({ d }: { d: string }) {
  return (
    <g fill="none">
      <path d={d} stroke="var(--color-line)" strokeWidth={1} />
      <path
        d={d}
        stroke="var(--color-accent)"
        strokeWidth={1.25}
        strokeDasharray="4 6"
        className="animate-flow"
      />
    </g>
  );
}

function Port({ cx, cy }: { cx: number; cy: number }) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={3.5}
      fill="var(--color-surface)"
      stroke="var(--color-accent)"
      strokeWidth={1.5}
    />
  );
}

function Node({
  x,
  y,
  w,
  h = 26,
  label,
  ai = false,
  strong = true,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  label: string;
  ai?: boolean;
  strong?: boolean;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={6} {...(ai ? aiBox : box)} />
      <Label x={x + w / 2} y={y + h / 2 + 3.5} strong={strong} accent={ai}>
        {label}
      </Label>
    </g>
  );
}

/** Call processor: call ends → recording + history → GPT-4o → three writes. */
function CallAgent() {
  return (
    <svg
      viewBox="0 0 380 200"
      role="img"
      aria-label="Call processor agent: a completed call triggers a webhook, the recording is transcribed with Whisper, the full contact history is pulled, GPT-4o summarises, and the agent writes notes, opportunity fields and email drafts back to the CRM"
      className="h-auto w-full"
    >
      <Label x={10} y={16} anchor="start">
        n8n / 72 NODES
      </Label>
      <Node x={10} y={32} w={78} label="CALL ENDS" />
      <Flow d="M88 45 H118" />
      <Port cx={118} cy={45} />
      <Label x={118} y={66}>WEBHOOK</Label>

      <Flow d="M118 45 C 140 45, 140 28, 158 28" />
      <Flow d="M118 45 C 140 45, 140 92, 158 92" />
      <Node x={158} y={15} w={72} label="WHISPER" ai />
      <Node x={158} y={79} w={72} label="HISTORY" />
      <Label x={194} y={118}>CALLS · SMS · EMAIL</Label>

      <Flow d="M230 28 C 250 28, 250 60, 268 60" />
      <Flow d="M230 92 C 250 92, 250 60, 268 60" />
      <Node x={268} y={47} w={100} label="GPT-4o" ai />

      <Flow d="M318 73 V 148" />
      <Flow d="M318 148 H 60" />
      <Flow d="M318 148 H 200" />
      <Port cx={318} cy={148} />
      <Node x={10} y={160} w={90} label="CRM NOTES" strong={false} />
      <Node x={120} y={160} w={120} label="OPPORTUNITY FIELDS" strong={false} />
      <Node x={258} y={160} w={112} label="EMAIL DRAFTS" strong={false} />
      <Flow d="M60 148 V 160" />
      <Flow d="M200 148 V 160" />
      <Flow d="M318 148 V 160" />
    </svg>
  );
}

/** Weekly analyst: metrics → PHP maths → narration → store → email. */
function Analyst() {
  return (
    <svg
      viewBox="0 0 380 200"
      role="img"
      aria-label="Weekly analyst pipeline: CRM metrics are pulled, deltas computed in PHP, Claude narrates the finished numbers, the report is stored in SQLite and delivered by branded email"
      className="h-auto w-full"
    >
      <Label x={10} y={16} anchor="start">
        CRON / MONDAY 06:00
      </Label>
      <Node x={10} y={46} w={88} label="CRM METRICS" />
      <Label x={54} y={88}>TWO WEEKS</Label>
      <Flow d="M98 59 H128" />
      <Node x={128} y={46} w={88} label="PHP MATHS" />
      <Label x={172} y={88}>DELTAS IN CODE</Label>
      <Flow d="M216 59 H246" />
      <Port cx={246} cy={59} />
      <Node x={246} y={46} w={124} label="CLAUDE NARRATES" ai />
      <Label x={308} y={88}>JSON → PROSE</Label>

      <Flow d="M352 72 V 118" />
      <Node x={236} y={118} w={134} label="SQLITE · IDEMPOTENT" strong={false} />
      <Flow d="M236 131 H 160" />
      <Node x={60} y={118} w={100} label="BRANDED EMAIL" strong={false} />

      <rect
        x={10}
        y={160}
        width={360}
        height={26}
        rx={6}
        fill="none"
        stroke="var(--color-line)"
        strokeDasharray="3 4"
      />
      <Label x={190} y={177} accent>
        GUARDRAIL: THE MODEL NEVER COMPUTES A NUMBER
      </Label>
    </svg>
  );
}

/** Stale lead reviver: scan → rules → draft → approval → send, plus the reply loop. */
function Reviver() {
  return (
    <svg
      viewBox="0 0 380 200"
      role="img"
      aria-label="Stale lead reviver: a daily scan applies inactivity rules, GPT-4o drafts a message, a human approves it, it is sent, and replies come back through a webhook that classifies and tags the contact"
      className="h-auto w-full"
    >
      <Label x={10} y={16} anchor="start">
        DAILY 08:00
      </Label>
      <Node x={10} y={30} w={70} label="SCAN CRM" />
      <Flow d="M80 43 H106" />
      <Node x={106} y={30} w={64} label="RULES" />
      <Label x={138} y={70}>90 DAYS QUIET</Label>
      <Flow d="M170 43 H196" />
      <Port cx={196} cy={43} />
      <Node x={196} y={30} w={84} label="GPT DRAFT" ai />
      <Flow d="M280 43 H306" />
      <Node x={306} y={30} w={64} label="QUEUE" />

      <Flow d="M338 56 V 96" />
      <Node x={268} y={96} w={102} label="HUMAN APPROVES" strong={false} />
      <Flow d="M268 109 H 190" />
      <Node x={126} y={96} w={64} label="SEND" strong={false} />

      {/* reply loop */}
      <Flow d="M158 122 V 150 H 196" />
      <Port cx={196} cy={150} />
      <Node x={196} y={137} w={84} label="REPLY HOOK" />
      <Flow d="M280 150 H 306" />
      <Node x={306} y={137} w={64} label="TAG · STOP" strong={false} />
      <Label x={10} y={188} anchor="start">
        REPLIES CLASSIFIED BY AI OR KEYWORD RULES
      </Label>
    </svg>
  );
}

/** ClipForge: linear media pipeline with the review step in the middle. */
function ClipForge() {
  const steps = [
    { x: 10, w: 50, label: "URL", ai: false },
    { x: 70, w: 60, label: "yt-dlp", ai: false },
    { x: 140, w: 64, label: "FFMPEG", ai: false },
    { x: 214, w: 68, label: "WHISPER", ai: true },
    { x: 292, w: 78, label: "GPT SCORE", ai: true },
  ];
  return (
    <svg
      viewBox="0 0 380 200"
      role="img"
      aria-label="ClipForge pipeline: a YouTube URL is downloaded, audio extracted with FFmpeg, transcribed with Whisper word timestamps, scored by GPT, reviewed in the dashboard, and exported as 9:16 clips with karaoke captions"
      className="h-auto w-full"
    >
      <Label x={10} y={16} anchor="start">
        JOB QUEUE / RETRIES · RESUME
      </Label>
      {steps.map((s, i) => (
        <g key={s.label}>
          <Node x={s.x} y={34} w={s.w} label={s.label} ai={s.ai} />
          {i < steps.length - 1 && <Flow d={`M${s.x + s.w} 47 H${steps[i + 1].x}`} />}
        </g>
      ))}
      <Label x={248} y={76}>WORD TIMESTAMPS</Label>

      <Flow d="M331 60 V 110" />
      <Port cx={331} cy={110} />
      <Flow d="M331 110 H 250" />
      <Node x={150} y={97} w={100} label="REVIEW UI" />
      <Flow d="M150 110 H 110" />
      <Node x={10} y={97} w={100} label="9:16 EXPORT" strong={false} />
      <Label x={60} y={140}>KARAOKE CAPTIONS</Label>

      <rect
        x={150}
        y={150}
        width={220}
        height={26}
        rx={6}
        fill="none"
        stroke="var(--color-line)"
        strokeDasharray="3 4"
      />
      <Label x={260} y={167} accent>
        EVERY API CALL METERED · ≈ $0.37 / HOUR
      </Label>
    </svg>
  );
}

/** Review aggregator: thin app, heavy automation. */
function ReviewAggregator() {
  return (
    <svg
      viewBox="0 0 380 200"
      role="img"
      aria-label="Review aggregator: the React app calls an n8n workflow, which runs an Apify scraper over Google reviews; results land in Postgres and the dashboard analyses them"
      className="h-auto w-full"
    >
      <Label x={10} y={16} anchor="start">
        THIN APP · HEAVY AUTOMATION
      </Label>
      <Node x={10} y={46} w={90} label="REACT 19" />
      <Flow d="M100 59 H140" />
      <Port cx={140} cy={59} />
      <Node x={140} y={46} w={96} label="n8n WORKFLOW" ai />
      <Flow d="M236 59 H276" />
      <Node x={276} y={46} w={94} label="APIFY" />
      <Label x={323} y={88}>GOOGLE REVIEWS</Label>

      <Flow d="M323 72 V 120" />
      <Flow d="M323 120 H 236" />
      <Node x={140} y={107} w={96} label="POSTGRES" strong={false} />
      <Label x={188} y={146}>DRIZZLE · ZOD</Label>
      <Flow d="M140 120 H 55" />
      <Node x={10} y={107} w={90} label="EXPRESS 5" strong={false} />
      <Flow d="M55 107 V 72" />

      <Label x={10} y={188} anchor="start">
        OPENAPI → TYPED HOOKS + VALIDATORS (ORVAL)
      </Label>
    </svg>
  );
}

const diagrams: Record<string, () => React.JSX.Element> = {
  "call-agent": CallAgent,
  analyst: Analyst,
  reviver: Reviver,
  clipforge: ClipForge,
  "review-aggregator": ReviewAggregator,
};

export function FlowDiagram({ id }: { id: string }) {
  const Diagram = diagrams[id];
  return Diagram ? <Diagram /> : null;
}
