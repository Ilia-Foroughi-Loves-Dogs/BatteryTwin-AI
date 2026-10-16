# BatteryTwin AI — Phase 1

A React + TypeScript + Vite battery digital twin interface with Tailwind CSS, Recharts, and Lucide icons.

## Run locally

```sh
npm install
npm run dev
```

`npm run build` type-checks the application and produces the production bundle in `dist/`. `npm run preview` serves that bundle.

## Included

- Responsive dark dashboard with sidebar navigation.
- CSS battery visualization placeholder, expandable preview, and four KPI cards.
- Charging/discharging controls with current (A), capacity (Ah), initial SOC (%), ambient temperature (°C), and duration (min).
- Start/resume, pause, reset, and restart demo playback; each run takes 30 real seconds.
- Four interactive Recharts panels with full demo trajectories, units, and tooltips.
- CSV export of explicitly labeled demo data.
- Session-only configuration snapshots for comparison, default settings reset, and a help guide.

## Demo limitations

All charts, KPI values, and battery fill values are **illustrative demo data**, not physical predictions. The curves are deliberately simple UI fixtures. Capacity is recorded as a configuration input but does not affect demo curves. There is no electrochemical, thermal, aging, or battery-health model. Battery Health explains the future scope instead of presenting invented health scores. The battery illustration is a CSS placeholder for a future 3D model.

Changing an input resets playback. Controls are locked while playback runs; pause before editing. Charts show the complete demo timeline while KPI cards follow playback. Positive current indicates charging and negative current discharging. Configuration and comparison snapshots are not persisted after page reload.

## Structure

- `src/App.tsx`: workspace navigation and playback state.
- `src/components/`: typed controls, KPI cards, and reusable telemetry panels.
- `src/lib/demo.ts`: shared interfaces, illustrative fixtures, and time formatting.
- `src/index.css`, `src/App.css`: Tailwind entry point and responsive visual styling.
