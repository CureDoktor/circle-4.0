import React from 'react';
import ContentContainer from '../ContentContainer';

interface MessagingProps {
  onToggleSidebar: () => void;
}

const Messaging: React.FC<MessagingProps> = ({ onToggleSidebar }) => {
  return (
    <ContentContainer title="Messaging" onToggleSidebar={onToggleSidebar}>
      <div className="overflow-auto">
        <div className="max-w-3xl mx-auto py-6 px-6">
          <div className="space-y-6">
            <p>Messaging settings content will be provided by user.</p>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Messaging;
