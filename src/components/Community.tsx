import React, { useState } from 'react';
import CommunitySidebar from './Community/CommunitySidebar';
import CommunityContent from './Community/CommunityContent';

const Community: React.FC = () => {
  const [activeSection, setActiveSection] = useState('feed');

  return (
    <div className="h-full bg-white flex">
      <CommunitySidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <CommunityContent activeSection={activeSection} />
    </div>
  );
};

export default Community;
