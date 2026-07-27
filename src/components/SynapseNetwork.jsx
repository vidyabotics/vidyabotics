// Signature visual: a synapse/circuit node network with signal pulses
// traveling along the connections — literalizes "Synaptic" + "Code".
const nodes = [
  { id: "n1", x: 60, y: 90 },
  { id: "n2", x: 220, y: 40 },
  { id: "n3", x: 380, y: 120 },
  { id: "n4", x: 150, y: 220 },
  { id: "n5", x: 340, y: 260 },
  { id: "n6", x: 520, y: 60 },
  { id: "n7", x: 560, y: 220 },
  { id: "n8", x: 460, y: 340 },
  { id: "n9", x: 240, y: 340 },
  { id: "n10", x: 40, y: 300 },
];

const edges = [
  ["n1", "n2"],
  ["n2", "n3"],
  ["n1", "n4"],
  ["n4", "n5"],
  ["n3", "n5"],
  ["n3", "n6"],
  ["n6", "n7"],
  ["n7", "n8"],
  ["n5", "n8"],
  ["n5", "n9"],
  ["n4", "n9"],
  ["n9", "n10"],
  ["n4", "n10"],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

export default function SynapseNetwork({ className = "" }) {
  return (
    <svg
      viewBox="0 0 600 400"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="edgeFade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4361EE" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#06D6A0" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {edges.map(([a, b], i) => {
        const p1 = byId[a];
        const p2 = byId[b];
        return (
          <line
            key={`edge-${i}`}
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}
            stroke="url(#edgeFade)"
            strokeWidth="1.5"
          />
        );
      })}

      {edges.map(([a, b], i) => {
        const p1 = byId[a];
        const p2 = byId[b];
        return (
          <circle key={`pulse-${i}`} r="3" fill="#06D6A0">
            <animateMotion
              dur={`${3 + (i % 5)}s`}
              repeatCount="indefinite"
              begin={`${i * 0.4}s`}
              path={`M${p1.x},${p1.y} L${p2.x},${p2.y}`}
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur={`${3 + (i % 5)}s`}
              repeatCount="indefinite"
              begin={`${i * 0.4}s`}
            />
          </circle>
        );
      })}

      {nodes.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="10" fill="#131A3A" stroke="#4361EE" strokeWidth="1.5" opacity="0.6" />
          <circle cx={n.x} cy={n.y} r="3.5" fill="#7C93FF" />
        </g>
      ))}
    </svg>
  );
}
