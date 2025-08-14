import React from 'react';
import { TrendingUp, Zap, Target } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'default' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  };

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 36,
    xl: 48
  };

  const variantClasses = {
    default: 'text-blue-600',
    white: 'text-white',
    dark: 'text-gray-900'
  };

  const accentClasses = {
    default: {
      orange: 'text-orange-500',
      purple: 'text-purple-500'
    },
    white: {
      orange: 'text-orange-200',
      purple: 'text-purple-200'
    },
    dark: {
      orange: 'text-orange-600',
      purple: 'text-purple-600'
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/* Icon Group */}
      <div className="relative flex items-center">
        <div className="relative">
          <TrendingUp 
            size={iconSizes[size]} 
            className={`${variantClasses[variant]} drop-shadow-sm`}
          />
          <Zap 
            size={iconSizes[size] * 0.4} 
            className={`absolute -top-1 -right-1 ${accentClasses[variant].orange} animate-pulse`}
          />
        </div>
        <Target 
          size={iconSizes[size] * 0.8} 
          className={`${accentClasses[variant].purple} -ml-2 rotate-12 drop-shadow-sm`}
        />
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <h1 className={`${sizeClasses[size]} font-bold ${variantClasses[variant]} tracking-tight leading-none`}>
          DigiBoost
        </h1>
        <p className={`text-xs ${accentClasses[variant].purple} font-medium tracking-widest uppercase mt-0.5 opacity-80`}>
          Marketing Pro
        </p>
      </div>
    </div>
  );
};

export default Logo;