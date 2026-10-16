export interface SimulationConfig {
  mode: 'discharge' | 'charge'
  current: number
  capacity: number
  initialSoc: number
  ambient: number
  duration: number
}
export interface DemoPoint { time: number; voltage: number; temperature: number; soc: number; current: number }
export const defaultConfig: SimulationConfig = { mode: 'discharge', current: 2, capacity: 3.2, initialSoc: 80, ambient: 25, duration: 60 }
// Deliberately illustrative UI curves. These equations are not a battery model.
export function createDemoData(config: SimulationConfig): DemoPoint[] {
  return Array.from({ length: 61 }, (_, i) => {
    const fraction = i / 60
    const soc = Math.max(0, Math.min(100, config.initialSoc + (config.mode === 'charge' ? 1 : -1) * fraction * 52))
    return { time: fraction * config.duration, soc, voltage: 3.2 + soc / 100 * 0.95 - Math.sin(fraction * Math.PI) * 0.08, temperature: config.ambient + (1 - Math.exp(-fraction * 3)) * 8, current: config.current * (config.mode === 'charge' ? 1 : -1) }
  })
}
export function formatTime(minutes: number) {
  const seconds = Math.round(minutes * 60)
  return `${Math.floor(seconds / 3600).toString().padStart(2, '0')}:${Math.floor(seconds % 3600 / 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`
}
