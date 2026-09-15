import { RIBBON } from '../data/portfolio'

type MarqueeProps = {
  velocity: number
}

export const Marquee = ({ velocity }: MarqueeProps) => (
  <div className="marquee" aria-hidden="true">
    <div className="marquee__track" style={{ transform: `translateX(${velocity}px)` }}>
      {RIBBON.map((label, index) => (
        <span key={`${label}-${index}`} className="marquee__item">
          {label} <span>◆</span>
        </span>
      ))}
    </div>
  </div>
)
