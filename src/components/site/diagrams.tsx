/**
 * Hand-drawn concept diagrams for each project. These explain the idea —
 * they are not screenshots or photos of the real builds, and are labelled as such.
 */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Label({
  x,
  y,
  children,
  anchor = "start",
}: {
  x: number;
  y: number;
  children: string;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      className="fill-muted-foreground font-mono"
      fontSize={10.5}
      letterSpacing="0.04em"
    >
      {children}
    </text>
  );
}

export function GestureCarDiagram({ className }: { className?: string | undefined }) {
  return (
    <svg
      viewBox="0 0 560 340"
      role="img"
      aria-label="Concept diagram: a hand gesture is read, sent as a wireless signal, and drives the car's motors."
      className={className}
    >
      {/* 1 — hand */}
      <g className="text-foreground">
        <rect x="62" y="98" width="15" height="62" rx="7.5" {...stroke} />
        <rect x="81" y="88" width="15" height="72" rx="7.5" {...stroke} />
        <rect x="100" y="92" width="15" height="68" rx="7.5" {...stroke} />
        <rect x="119" y="106" width="14" height="54" rx="7" {...stroke} />
        <rect
          x="34"
          y="166"
          width="15"
          height="50"
          rx="7.5"
          transform="rotate(-38 41 191)"
          {...stroke}
        />
        <rect
          x="58"
          y="148"
          width="78"
          height="84"
          rx="16"
          className="fill-background"
          stroke="currentColor"
          strokeWidth={1.25}
        />
        <path d="M70 205 q28 10 54 0" {...stroke} strokeDasharray="2 4" />
      </g>
      {/* tilt arcs */}
      <g className="text-faint">
        <path d="M40 80 a62 62 0 0 1 112 0" {...stroke} strokeDasharray="3 5" />
        <path d="M146 72 l6 8 -10 2" {...stroke} />
      </g>
      <Label x={97} y={262} anchor="middle">
        gesture
      </Label>

      {/* 2 — signal */}
      <g className="text-faint">
        <line x1="175" y1="188" x2="345" y2="188" {...stroke} strokeDasharray="4 6" />
      </g>
      <g className="text-foreground">
        <path d="M252 172 q8 16 0 32" {...stroke} />
        <path d="M262 164 q14 24 0 48" {...stroke} />
        <path d="M272 156 q20 32 0 64" {...stroke} />
      </g>
      <Label x={262} y={262} anchor="middle">
        signal
      </Label>

      {/* 3 — car, top-down */}
      <g className="text-foreground">
        <rect x="384" y="112" width="84" height="158" rx="16" {...stroke} />
        <rect x="371" y="128" width="12" height="34" rx="2" {...stroke} />
        <rect x="469" y="128" width="12" height="34" rx="2" {...stroke} />
        <rect x="371" y="222" width="12" height="34" rx="2" {...stroke} />
        <rect x="469" y="222" width="12" height="34" rx="2" {...stroke} />
        <path d="M396 168 q30 -16 60 0" {...stroke} />
        <path d="M396 236 h60" {...stroke} />
        <line
          x1="383"
          y1="145"
          x2="469"
          y2="145"
          {...stroke}
          strokeDasharray="2 4"
          className="text-faint"
        />
        <line
          x1="383"
          y1="239"
          x2="469"
          y2="239"
          {...stroke}
          strokeDasharray="2 4"
          className="text-faint"
        />
      </g>
      <g className="text-accent">
        <line x1="426" y1="100" x2="426" y2="54" {...stroke} strokeWidth={1.5} />
        <path d="M418 63 l8 -9 8 9" {...stroke} strokeWidth={1.5} />
      </g>
      <Label x={426} y={298} anchor="middle">
        drive
      </Label>

      {/* legend */}
      <line
        x1="34"
        y1="318"
        x2="526"
        y2="318"
        className="text-border"
        stroke="currentColor"
        strokeWidth={1}
      />
      <Label x={34} y={334}>
        ↑ forward ↓ back ← left → right
      </Label>
    </svg>
  );
}

export function PortalDiagram({ className }: { className?: string | undefined }) {
  const rows = [76, 150, 224];
  return (
    <svg
      viewBox="0 0 560 340"
      role="img"
      aria-label="Concept diagram: a job portal page with a filter column and a list of catering job listings, each with an apply action."
      className={className}
    >
      {/* window */}
      <g className="text-foreground">
        <rect x="30" y="24" width="500" height="278" rx="2" {...stroke} />
        <line x1="30" y1="52" x2="530" y2="52" {...stroke} />
      </g>
      <g className="text-faint">
        <rect x="42" y="34" width="8" height="8" {...stroke} />
        <rect x="56" y="34" width="8" height="8" {...stroke} />
        <rect x="160" y="33" width="240" height="11" rx="1" {...stroke} />
      </g>

      {/* filters */}
      <g className="text-faint">
        <line x1="166" y1="52" x2="166" y2="302" {...stroke} />
        {[86, 112, 138].map((y) => (
          <g key={y}>
            <rect x="48" y={y - 7} width="9" height="9" {...stroke} />
            <line x1="66" y1={y - 2.5} x2={y === 112 ? 128 : 142} y2={y - 2.5} {...stroke} />
          </g>
        ))}
      </g>
      <rect x="49.5" y="80.5" width="6" height="6" className="fill-accent" />
      <Label x={48} y={72}>
        filter
      </Label>

      {/* listings */}
      {rows.map((y, i) => (
        <g key={y}>
          <rect
            x="184"
            y={y}
            width="328"
            height="60"
            rx="1"
            {...stroke}
            className={i === 0 ? "text-foreground" : "text-faint"}
          />
          <g className={i === 0 ? "text-foreground" : "text-faint"}>
            <rect x="198" y={y + 14} width="32" height="32" rx="1" {...stroke} />
            <path
              d={`M206 ${y + 36} h16 M207 ${y + 36} q7 -16 14 0 M214 ${y + 21} v-2`}
              {...stroke}
            />
            <line
              x1="244"
              y1={y + 22}
              x2={i === 1 ? 360 : 392}
              y2={y + 22}
              {...stroke}
              strokeWidth={2}
            />
            <line x1="244" y1={y + 38} x2="320" y2={y + 38} {...stroke} />
          </g>
          {i === 0 ? (
            <rect x="436" y={y + 20} width="62" height="20" rx="1" className="fill-accent" />
          ) : (
            <rect
              x="436"
              y={y + 20}
              width="62"
              height="20"
              rx="1"
              {...stroke}
              className="text-faint"
            />
          )}
        </g>
      ))}
      <Label x={184} y={70}>
        listings
      </Label>
      <Label x={498} y={70} anchor="end">
        apply
      </Label>

      <line
        x1="30"
        y1="318"
        x2="530"
        y2="318"
        className="text-border"
        stroke="currentColor"
        strokeWidth={1}
      />
      <Label x={30} y={334}>
        browse → choose a job → apply
      </Label>
    </svg>
  );
}

const diagrams: Record<string, (p: { className?: string | undefined }) => React.JSX.Element> = {
  "gesture-controlled-iot-rc-car": GestureCarDiagram,
  "student-catering-jobs-website": PortalDiagram,
};

export function ProjectDiagram({
  slug,
  className,
}: {
  slug: string;
  className?: string | undefined;
}) {
  const D = diagrams[slug];
  return D ? <D className={className} /> : null;
}