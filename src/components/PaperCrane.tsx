type Point = readonly [number, number];
type Facet = readonly [Point, Point, Point];

interface Stage {
    facets: Facet[];
    shades: number[];
    rotate: number;
    y: number;
}

// Each facet keeps its identity across every stage so the sheet can be
// interpolated fold by fold. Render order (back → front):
// 0 back wing · 1 lower tail · 2 belly · 3 upper tail · 4–5 back (right/left face)
// 6–7 neck (back/front) · 8–9 head (top/bottom) · 10 front wing
const C: Point = [200, 200];
const P: Point = [200, 40];
const R: Point = [360, 200];
const Bt: Point = [200, 360];
const L: Point = [40, 200];
const TR: Point = [280, 120];
const BR: Point = [280, 280];
const BL: Point = [120, 280];
const TL: Point = [120, 120];

const CRANE = {
    wingTipL: [97, 109],
    wingBaseL: [192, 207.5], // on the back's left edge
    tailTip: [30, 296],
    tailBase: [160, 238],
    peak: [225, 176],
    backMid: [222, 239],
    backR: [250, 204], // on the back's right edge, hidden behind it
    neckBase: [282, 240],
    belly: [200, 292],
    neckFoot: [288, 290],
    neckTop: [296, 112],
    neckTopR: [308, 114],
    crown: [306, 101],
    beak: [352, 104],
    wingTipR: [370, 128],
} satisfies Record<string, Point>;

// Until the last fold the sheet works with 8 layers (back wing, belly, lower tail,
// upper tail, back, neck, head, front wing). The crane splits some of them into two
// faces, so earlier stages duplicate those layers to keep facets from popping in.
const SPLIT = [0, 2, 1, 3, 4, 4, 5, 5, 6, 6, 7];
const split = <T,>(layers: T[]): T[] => SPLIT.map((i) => layers[i]);

// Square and bird bases share the same layout: T is the closed point, B the open corners.
// The small vertical offsets keep the stacked layers' edges visible.
const base = (T: Point, left: Point, right: Point, B: Point): Facet[] => {
    const o = (p: Point, dy: number): Point => [p[0], p[1] + dy];
    return split([
        [o(T, 3), o(B, 3), o(left, 3)],
        [o(T, 3), o(B, 3), o(right, 3)],
        [o(T, 2), o(left, 2), o(B, 2)],
        [o(T, 1), o(B, 1), o(left, 1)],
        [o(T, 2), o(right, 2), o(B, 2)],
        [o(T, 1), o(right, 1), o(B, 1)],
        [T, B, right],
        [T, left, B],
    ]);
};

const BASE_SHADES = split([0.26, 0.26, 0.2, 0.14, 0.2, 0.14, 0.06, 0]);

const STAGES: Stage[] = [
    // Blank sheet
    {
        facets: split<Facet>([
            [C, P, TR],
            [C, Bt, BL],
            [C, BL, L],
            [C, L, TL],
            [C, BR, Bt],
            [C, TR, R],
            [C, R, BR],
            [C, TL, P],
        ]),
        shades: split([0, 0, 0, 0, 0, 0, 0, 0]),
        rotate: 45,
        y: 0,
    },
    // Folded along the diagonal
    {
        facets: split<Facet>([
            [C, Bt, BR],
            [C, Bt, BL],
            [C, BL, L],
            [C, L, BL],
            [C, BR, Bt],
            [C, BR, R],
            [C, R, BR],
            [C, BL, Bt],
        ]),
        shades: split([0.18, 0, 0, 0.18, 0, 0.18, 0, 0.18]),
        rotate: 0,
        y: -80,
    },
    // Square base
    {
        facets: base([200, 90], [95, 195], [305, 195], [200, 300]),
        shades: BASE_SHADES,
        rotate: 0,
        y: 0,
    },
    // Bird base
    {
        facets: base([200, 50], [160, 215], [240, 215], [200, 350]),
        shades: BASE_SHADES,
        rotate: 0,
        y: 0,
    },
    // Narrowed, neck and tail raised
    {
        facets: split<Facet>([
            [[206, 60], [218, 236], [190, 232]],
            [[200, 232], [200, 300], [214, 236]],
            [[200, 290], [214, 236], [70, 260]],
            [[186, 236], [70, 260], [214, 236]],
            [[200, 212], [200, 236], [215, 232]],
            [[214, 236], [200, 292], [320, 110]],
            [[320, 110], [324, 108], [330, 108]],
            [[200, 55], [184, 232], [200, 222]],
        ]),
        shades: split([0.25, 0.28, 0.25, 0.08, 0.1, 0.1, 0.15, 0]),
        rotate: 0,
        y: 0,
    },
    // Crane, traced from the Alta Mente Psi logo. Neighbouring faces share their
    // vertices so the paper reads as one continuous piece.
    {
        facets: [
            [CRANE.wingTipR, CRANE.neckBase, CRANE.backR],
            [CRANE.belly, CRANE.neckBase, CRANE.tailTip],
            [CRANE.neckBase, CRANE.belly, CRANE.neckFoot],
            [CRANE.tailBase, CRANE.tailTip, CRANE.neckBase],
            [CRANE.peak, CRANE.backMid, CRANE.neckBase],
            [CRANE.peak, CRANE.tailBase, CRANE.backMid],
            [CRANE.neckBase, CRANE.neckFoot, CRANE.neckTop],
            [CRANE.neckTop, CRANE.neckFoot, CRANE.neckTopR],
            [CRANE.neckTop, CRANE.crown, CRANE.beak],
            [CRANE.neckTop, CRANE.beak, CRANE.neckTopR],
            [CRANE.wingTipL, CRANE.tailBase, CRANE.wingBaseL],
        ],
        shades: [0.24, 0.18, 0.32, 0.04, 0.16, 0.02, 0.2, 0.07, 0.03, 0.14, 0],
        rotate: 0,
        y: 0,
    },
];

const FOLD_STAGES = STAGES.length;

const PAPER = [251, 252, 253];
const SHADOW = [172, 192, 210];

const clamp = (n: number) => Math.min(1, Math.max(0, n));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
// Each fold settles while its section is being read instead of drifting the whole time.
const ease = (t: number) => {
    const x = clamp((t - 0.1) / 0.75);
    return x * x * (3 - 2 * x);
};

const fill = (shade: number) => `rgb(${PAPER.map((c, i) => Math.round(lerp(c, SHADOW[i], shade))).join(" ")})`;

interface PaperCraneProps {
    /** 0 = blank sheet, FOLD_STAGES - 1 = finished crane */
    progress: number;
}

const PaperCrane = ({ progress }: PaperCraneProps) => {
    const value = Math.min(Math.max(progress, 0), FOLD_STAGES - 1);
    const index = Math.min(Math.floor(value), FOLD_STAGES - 2);
    const raw = value - index;
    const t = ease(raw);
    const from = STAGES[index];
    const to = STAGES[index + 1];

    const rotate = lerp(from.rotate, to.rotate, t);
    const y = lerp(from.y, to.y, t);
    // The untouched sheet shows only its outline; facet edges appear as soon as it starts folding.
    const edges = index === 0 ? t : 1;
    const creases = index === 0 ? 0.55 * (1 - t) : 0;
    const done = value >= FOLD_STAGES - 1.001;

    return (
        <svg viewBox="0 0 400 400" className={`paper-crane ${done ? "is-done" : ""}`} aria-hidden="true">
            <g transform={`translate(0 ${y}) rotate(${rotate} 200 200)`}>
                {from.facets.map((facet, i) => (
                    <polygon
                        key={i}
                        points={facet.map((p, v) => `${lerp(p[0], to.facets[i][v][0], t)},${lerp(p[1], to.facets[i][v][1], t)}`).join(" ")}
                        fill={fill(lerp(from.shades[i], to.shades[i], t))}
                        strokeOpacity={edges}
                    />
                ))}
                {edges < 1 && <polygon className="paper-crane__outline" points={[P, R, Bt, L].join(" ")} opacity={1 - edges} />}
                {creases > 0 && (
                    <g className="paper-crane__creases" opacity={creases}>
                        <line x1={P[0]} y1={P[1]} x2={Bt[0]} y2={Bt[1]} />
                        <line x1={L[0]} y1={L[1]} x2={R[0]} y2={R[1]} />
                        <line x1={TL[0]} y1={TL[1]} x2={BR[0]} y2={BR[1]} />
                        <line x1={TR[0]} y1={TR[1]} x2={BL[0]} y2={BL[1]} />
                    </g>
                )}
            </g>
        </svg>
    );
};

export default PaperCrane;
