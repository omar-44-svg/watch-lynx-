import React from 'react';
import { Step } from '../../types';
import * as LucideIcons from 'lucide-react';

interface StepCardProps {
  step: Step;
}

const StepCard: React.FC<StepCardProps> = ({ step }) => {
  const IconComponent = (LucideIcons as Record<string, React.FC<{ size?: number; className?: string }>>)[
    step.icon.charAt(0).toUpperCase() + step.icon.slice(1).replace(/-([a-z])/g, g => g[1].toUpperCase())
  ];

  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
        {IconComponent && <IconComponent size={24} className="text-blue-900" />}
      </div>
      <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center mb-4">
        <span className="font-semibold">{step.id}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
      <p className="text-gray-600">{step.description}</p>
    </div>
  );
};

export default StepCard;