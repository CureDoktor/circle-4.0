import React from 'react';
import SidebarToggle from './ui/sidebar-toggle';

interface PlaceholderPageProps {
  title: string;
  description: string;
  onToggleSidebar: () => void;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({
  title,
  description,
  onToggleSidebar,
}) => {
  return (
    <div className="bg-white h-full rounded-2xl shadow-lg">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-6">
          <SidebarToggle onToggle={onToggleSidebar} />
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default PlaceholderPage;
