import type { Spark } from '../types'

const FAR_PARALLAX = 0.06
const NEAR_PARALLAX = 0.16

type BackdropProps = {
  scrollY: number
  cursor: { x: number; y: number }
  sparks: Spark[]
}

export const Backdrop = ({ scrollY, cursor, sparks }: BackdropProps) => (
  <>
    <div
      className="stars stars--far"
      style={{ transform: `translate3d(0, ${-scrollY * FAR_PARALLAX}px, 0)` }}
    />
    <div
      className="stars stars--near"
      style={{ transform: `translate3d(0, ${-scrollY * NEAR_PARALLAX}px, 0)` }}
    />

    <div className="aurora-wrap">
      <div className="aurora" />
    </div>

    <div className="cursor-glow" style={{ left: cursor.x, top: cursor.y }} />

    {sparks.map((spark) => (
      <div
        key={spark.id}
        className="spark"
        style={{ left: spark.x, top: spark.y, transform: `rotate(${spark.angle}deg)` }}
      >
        <span />
      </div>
    ))}
  </>
)
