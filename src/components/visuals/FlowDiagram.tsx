"use client";

/**
 * Hand-drawn schematic diagrams for the automation case studies.
 * These are honest simplifications of each system's real topology —
 * ink boxes, one violet signal path with a marching-ants flow.
 */

const box = {
  fill: "var(--color-paper)",
  stroke: "var(--color-line)",
  strokeWidth: 1,
};

function Label({
  x,
  y,
  children,
  strong = false,
  anchor = "middle",
}: {
  x: number;
  y: number;
  children: string;
  strong?: boolean;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontSize={9}
      letterSpacing={1}
      fontWeight={strong ? 600 : 500}
      fill={strong ? "var(--color-ink)" : "var(--color-muted)"}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {children}
    </text>
  );
}

/** Connector: quiet base line + violet marching-ants overlay. */
function Flow({ d }: { d: string }) {
  return (
    <g fill="none">
      <path d={d} stroke="var(--color-line)" strokeWidth={1} />
      <path
        d={d}
        stroke="var(--color-violet)"
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
      stroke="var(--color-violet)"
      strokeWidth={1.5}
    />
  );
}

/** Student lifecycle: stages in sequence, automations hanging off them. */
function StudentLifecycle() {
  const stages = [
    { x: 10, label: "LEAD" },
    { x: 105, label: "ENROLLED" },
    { x: 200, label: "ACTIVE" },
    { x: 295, label: "ALUMNI" },
  ];
  return (
    <svg viewBox="0 0 380 200" role="img" aria-label="Student lifecycle pipeline: lead, enrolled, active, alumni — with onboarding sequence and status alert automations" className="h-auto w-full">
      <Label x={10} y={20} anchor="start">
        LIFECYCLE / GHL WORKFLOWS
      </Label>
      {stages.map((s) => (
        <g key={s.label}>
          <rect x={s.x} y={52} width={75} height={28} rx={6} {...box} />
          <Label x={s.x + 37.5} y={70} strong>
            {s.label}
          </Label>
        </g>
      ))}
      <Flow d="M85 66 H105" />
      <Flow d="M180 66 H200" />
      <Flow d="M275 66 H295" />
      {/* hanging automations */}
      <Flow d="M142 80 V118" />
      <Flow d="M237 80 V118" />
      <Port cx={142} cy={80} />
      <Port cx={237} cy={80} />
      <rect x={97} y={118} width={90} height={26} rx={6} {...box} />
      <Label x={142} y={135}>ONBOARD SEQ</Label>
      <rect x={192} y={118} width={90} height={26} rx={6} {...box} />
      <Label x={237} y={135}>STATUS ALERTS</Label>
      <Label x={10} y={188} anchor="start">
        EVERY STAGE CHANGE → AUTOMATED
      </Label>
    </svg>
  );
}

/** API enrichment: external data mapped into CRM custom fields. */
function LeadEnrichment() {
  const fields = [
    { y: 28, label: "CONTACT" },
    { y: 68, label: "COMPANY" },
    { y: 108, label: "INTENT" },
  ];
  return (
    <svg viewBox="0 0 380 200" role="img" aria-label="Lead enrichment flow: external B2B API through a webhook listener into GHL custom fields" className="h-auto w-full">
      <rect x={10} y={58} width={104} height={30} rx={6} {...box} />
      <Label x={62} y={77} strong>
        B2B DATA API
      </Label>

      <Flow d="M114 73 H172" />
      <Port cx={172} cy={73} />
      <Label x={172} y={100}>WEBHOOK</Label>

      <Flow d="M172 73 C 210 73, 215 40, 248 40" />
      <Flow d="M172 73 C 215 73, 215 80, 248 80" />
      <Flow d="M172 73 C 210 73, 215 106, 248 120" />

      {/* CRM bracket */}
      <rect
        x={240}
        y={10}
        width={130}
        height={150}
        rx={8}
        fill="none"
        stroke="var(--color-line)"
        strokeDasharray="3 4"
      />
      <Label x={305} y={180}>GHL CUSTOM FIELDS</Label>
      {fields.map((f) => (
        <g key={f.label}>
          <rect x={252} y={f.y} width={106} height={26} rx={6} {...box} />
          <Label x={305} y={f.y + 17} strong>
            {f.label}
          </Label>
        </g>
      ))}
    </svg>
  );
}

/** Chatbot routing: one inbound message, qualified, routed three ways. */
function ChatRouting() {
  const outcomes = [
    { y: 22, label: "BOOKING" },
    { y: 87, label: "HUMAN AGENT" },
    { y: 152, label: "NURTURE" },
  ];
  return (
    <svg viewBox="0 0 380 200" role="img" aria-label="Chatbot routing tree: inbound message qualified then routed to booking, human agent, or nurture" className="h-auto w-full">
      <rect x={10} y={86} width={100} height={28} rx={14} {...box} />
      <Label x={60} y={104} strong>
        INBOUND MSG
      </Label>

      <Flow d="M110 100 H160" />
      <rect x={160} y={86} width={80} height={28} rx={6} {...box} />
      <Label x={200} y={104} strong>
        QUALIFY
      </Label>

      <Flow d="M240 100 C 268 100, 262 35, 288 35" />
      <Flow d="M240 100 H288" />
      <Flow d="M240 100 C 268 100, 262 165, 288 165" />
      <Port cx={240} cy={100} />

      {outcomes.map((o) => (
        <g key={o.label}>
          <rect x={288} y={o.y} width={84} height={26} rx={6} {...box} />
          <Label x={330} y={o.y + 17}>
            {o.label}
          </Label>
        </g>
      ))}
      <Label x={10} y={188} anchor="start">
        TAGS + HANDOFF PROTOCOLS
      </Label>
    </svg>
  );
}

export function FlowDiagram({ projectId }: { projectId: string }) {
  if (projectId === "lp-sms") return <StudentLifecycle />;
  if (projectId === "lp-zoominfo") return <LeadEnrichment />;
  return <ChatRouting />;
}
