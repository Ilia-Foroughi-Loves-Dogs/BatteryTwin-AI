import type { LucideIcon } from 'lucide-react'
interface MetricCardProps { title: string; value: string; unit?: string; detail: string; icon: LucideIcon; color: string; progress?: number }
export function MetricCard({ title, value, unit, detail, icon: Icon, color, progress }: MetricCardProps) {
  return <article className="panel metric"><div className="metric-heading"><span>{title}</span><Icon size={17} style={{ color }} /></div><div className="metric-value">{value}<span>{unit}</span></div><div className="metric-bottom"><span>{detail}</span>{progress !== undefined ? <div className="mini-track"><i style={{ width: `${progress}%`, background: color }} /></div> : <span className="metric-dot" style={{ background: color }} />}</div></article>
}
