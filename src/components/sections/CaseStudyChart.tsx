'use client';

import { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { etudeDeCas } from '@/lib/content';

const series = [
  { key: 'hchp', label: 'Contrat actuel', color: '#6B7280' },
  { key: 'spot', label: 'Bloc + Spot seul', color: '#9CA3AF' },
  { key: 'hchpAlt', label: 'Contrat actuel + Altileo', color: '#0E7C8C' },
  { key: 'spotAlt', label: 'Bloc + Spot + Altileo', color: '#00A4B4' },
];

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ dataKey: string; value: number }>;
  label?: string;
}) {
  if (!active || !payload || payload.length === 0) return null;
  return (
    <div className="bg-[#181818] border border-[#333] rounded-lg p-3 shadow-lg">
      <div className="text-white font-medium text-sm mb-2">{label}</div>
      {series.map((s) => {
        const point = payload.find((p) => p.dataKey === s.key);
        if (!point) return null;
        return (
          <div key={s.key} className="flex items-center justify-between gap-4 text-xs py-0.5">
            <span className="flex items-center gap-1.5 text-muted-dark">
              <span
                className="w-2 h-2 rounded-sm inline-block"
                style={{ backgroundColor: s.color }}
              />
              {s.label}
            </span>
            <span className="num text-white font-medium">{point.value} €</span>
          </div>
        );
      })}
    </div>
  );
}

export function CaseStudyChart() {
  const [hidden, setHidden] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setHidden((h) => ({ ...h, [key]: !h[key] }));

  return (
    <div>
      {/* Légende interactive */}
      <div className="flex flex-wrap gap-3 mb-6">
        {series.map((s) => (
          <button
            key={s.key}
            type="button"
            onClick={() => toggle(s.key)}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
              hidden[s.key]
                ? 'border-[#333] text-muted-dark opacity-50'
                : 'border-[#333] text-white'
            }`}
            aria-pressed={!hidden[s.key]}
          >
            <span
              className="w-2.5 h-2.5 rounded-sm inline-block"
              style={{ backgroundColor: s.color }}
            />
            {s.label}
          </button>
        ))}
      </div>

      <div className="h-[420px] w-full" role="img" aria-label="Comparaison mensuelle de la facture électrique selon quatre scénarios, en euros HT, sur 12 mois réels (prix Spot France 2025/2026)">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={etudeDeCas.monthly}
            margin={{ top: 8, right: 8, bottom: 8, left: 0 }}
            barGap={2}
            barCategoryGap="18%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" vertical={false} />
            <XAxis
              dataKey="mois"
              stroke="#999999"
              tick={{ fill: '#999999', fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: '#333' }}
            />
            <YAxis
              stroke="#999999"
              tick={{ fill: '#999999', fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              width={44}
              tickFormatter={(v) => `${v} €`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
            {series.map((s) =>
              hidden[s.key] ? null : (
                <Bar
                  key={s.key}
                  dataKey={s.key}
                  fill={s.color}
                  radius={[2, 2, 0, 0]}
                  isAnimationActive={false}
                />
              ),
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-xs text-muted-dark">
        Facture mensuelle en euros HT · référence 12 mois réels (prix Spot France 2025/2026) · 1 chambre froide négative. Cliquez sur la légende pour filtrer les scénarios.
      </p>
    </div>
  );
}
