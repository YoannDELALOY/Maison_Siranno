import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const data = [
  { subject: 'Sites Web', value: 95 },
  { subject: 'IA & Chatbots', value: 85 },
  { subject: 'Automatisation', value: 90 },
  { subject: 'Outils Métier', value: 80 },
  { subject: 'Stratégie', value: 75 },
  { subject: 'Données', value: 70 },
];

export const PerformanceChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] font-sans text-xs">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
          <PolarGrid stroke="#2D3748" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: '#9CA3AF', fontSize: 11, fontFamily: 'Inter, sans-serif' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(15,23,42,0.9)',
              backdropFilter: 'blur(8px)',
              borderRadius: '10px',
              border: '1px solid rgba(197,160,89,0.3)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              color: '#F4E095',
            }}
            itemStyle={{ color: '#C5A059', fontWeight: 600 }}
          />
          <Radar
            name="Expertise"
            dataKey="value"
            stroke="#C5A059"
            fill="rgba(197,160,89,0.15)"
            strokeWidth={2}
            dot={{ r: 3, fill: '#C5A059', strokeWidth: 0 }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
