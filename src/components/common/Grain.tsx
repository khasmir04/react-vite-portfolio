const GrainEffect = () => {
  return (
    <svg
      viewBox='0 0 400 400'
      xmlns='http://www.w3.org/2000/svg'
      className='fixed inset-0 z-0 h-full w-auto opacity-40 mix-blend-soft-light '
      style={{ pointerEvents: 'none' }}
    >
      <filter id='noiseFilter'>
        <feTurbulence
          type='fractalNoise'
          baseFrequency='10'
          numOctaves='9'
          stitchTiles='stitch'
        />
      </filter>

      <rect
        width='100%'
        height='100%'
        filter='url(#noiseFilter)'
      />
    </svg>
  )
}

export default GrainEffect
