interface Props {
  from?: string
  to?: string
  flip?: boolean
  className?: string
}

export default function WaveDivider({
  from = '#14532D',
  to = '#F7EDE2',
  flip = false,
  className = '',
}: Props) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none ${className}`}
      style={{ background: from, marginBottom: '-1px' }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full"
        style={{
          height: '70px',
          transform: flip ? 'scaleX(-1)' : undefined,
          display: 'block',
        }}
      >
        <path
          d="M0,32 C180,80 360,0 540,40 C720,80 900,10 1080,45 C1260,80 1380,20 1440,32 L1440,80 L0,80 Z"
          fill={to}
        />
      </svg>
    </div>
  )
}
