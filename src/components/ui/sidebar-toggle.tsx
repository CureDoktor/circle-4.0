import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Button } from './button';

interface SidebarToggleProps {
  onToggle: () => void;
  className?: string;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({
  onToggle,
  className = '',
}) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onToggle}
      className={`p-2 hover:bg-gray-100 ${className}`}
      title="Toggle sidebar"
    >
      <ChevronLeft className="w-4 h-4" />
    </Button>
  );
};

export default SidebarToggle;
