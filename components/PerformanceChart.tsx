import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { useTranslation } from '../hooks/useTranslation';

export const PerformanceChart: React.FC = () => {
  const { t } = useTranslation();

  const data = [
    { subject: t('about.chart_data.websites'),   value: 95 },
    { subject: t('about.chart_data.ai'),         value: 85 },
    { subject: t('about.chart_data.automation'), value: 80 },
    { subject: t('about.chart_data.tools'),      value: 75 },
    { subject: t('about.chart_data.strategy'),   value: 95 },
    { subject: t('about.chart_data.data'),       value: 70 },
  ];

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
            name={t('navbar.links.expertise')}
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
