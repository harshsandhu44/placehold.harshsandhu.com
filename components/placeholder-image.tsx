type Props = {
  width: number;
  height: number;
  bg: string;
  fg: string;
};

export function PlaceholderImage({ width, height, bg, fg }: Props) {
  const size = Math.max(24, Math.floor(Math.min(width, height) * 0.1));

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: bg,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"
          stroke={fg}
          stroke-width="2"
        />
        <path
          d="M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
          stroke={fg}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="m4 20 2.874-3.592A1.966 1.966 0 0 1 9.5 16a1.966 1.966 0 0 0 2.626-.408l1.6-1.999a2 2 0 0 1 2.841-.287L21 17"
          stroke={fg}
          stroke-width="2"
        />
      </svg>
    </div>
  );
}
