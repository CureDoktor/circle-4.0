import React from 'react';
import { User, AudienceData, SidebarItem } from '../types';

export interface AccessGroup {
  id: string;
  name: string;
  description: string;
  status: 'Active' | 'Archived';
  members: number;
  spaces: number;
  type: 'all' | 'active' | 'archived';
}

export interface Segment {
  id: string;
  name: string;
  people: number;
  createdBy: {
    name: string;
    avatar: string;
  };
  lastUpdated: string;
}

export interface BulkLog {
  id: string;
  action: string;
  resource: string;
  createdBy: {
    name: string;
    initials: string;
    avatar?: string;
    color: string;
  };
  status: 'Succeeded' | 'Failed' | 'In Progress';
  progress: string;
  outputCsv?: string;
  createdAt: string;
}

export interface InviteLink {
  id: string;
  name: string;
  status: 'Active' | 'Inactive';
  membersJoined: number;
  spaces: number;
  spaceGroups: number;
  tags: number;
}

export interface Tag {
  id: string;
  name: string;
  icon: string | null;
  backgroundEnabled: boolean;
  color: string | null;
  isPublic: boolean;
  displayFormat: string;
  peopleCount: number;
}

export interface ProfileField {
  id: string;
  fieldLabel: string;
  fieldType: string;
  displaysOn: string[];
  status: 'Active' | 'Archived';
}

export interface ActivityLog {
  id: string;
  name: string;
  nameInitials: string;
  nameColor: string;
  event: string;
  entityType: string;
  entityValue: string;
  performedBy: string;
  source: string;
  date: string;
}

export const mockAccessGroups: AccessGroup[] = [
  {
    id: '1',
    name: 'Test test',
    description: '-',
    status: 'Archived',
    members: 0,
    spaces: 0,
    type: 'archived',
  },
  {
    id: '2',
    name: "Ivo's access group",
    description: 'test',
    status: 'Active',
    members: 2,
    spaces: 1,
    type: 'active',
  },
  {
    id: '3',
    name: 'AGs - Tests',
    description: '-',
    status: 'Active',
    members: 86,
    spaces: 1,
    type: 'active',
  },
  {
    id: '4',
    name: 'Test 123',
    description: 'Adding a description for testing purposes!',
    status: 'Active',
    members: 13,
    spaces: 8,
    type: 'active',
  },
  {
    id: '5',
    name: 'to delete',
    description: '-',
    status: 'Active',
    members: 0,
    spaces: 0,
    type: 'active',
  },
  {
    id: '6',
    name: 'Test access group 2',
    description: '-',
    status: 'Active',
    members: 4,
    spaces: 2,
    type: 'active',
  },
  {
    id: '7',
    name: 'Test access group 4',
    description: 'Test access group 4',
    status: 'Active',
    members: 0,
    spaces: 0,
    type: 'active',
  },
  {
    id: '8',
    name: 'Marketing Team',
    description: 'Access group for marketing team members',
    status: 'Active',
    members: 15,
    spaces: 3,
    type: 'active',
  },
  {
    id: '9',
    name: 'Development Team',
    description: 'Access group for development team members',
    status: 'Active',
    members: 25,
    spaces: 5,
    type: 'active',
  },
  {
    id: '10',
    name: 'Sales Team',
    description: 'Access group for sales team members',
    status: 'Active',
    members: 12,
    spaces: 2,
    type: 'active',
  },
  {
    id: '11',
    name: 'Old Project Team',
    description: 'Archived access group for old project',
    status: 'Archived',
    members: 8,
    spaces: 1,
    type: 'archived',
  },
  {
    id: '12',
    name: 'Beta Testers',
    description: 'Access group for beta testing phase',
    status: 'Active',
    members: 45,
    spaces: 4,
    type: 'active',
  },
  {
    id: '13',
    name: 'Support Team',
    description: 'Access group for customer support team',
    status: 'Active',
    members: 18,
    spaces: 3,
    type: 'active',
  },
  {
    id: '14',
    name: 'Design Team',
    description: 'Access group for design team members',
    status: 'Active',
    members: 9,
    spaces: 2,
    type: 'active',
  },
  {
    id: '15',
    name: 'Legacy System Users',
    description: 'Archived access group for legacy system',
    status: 'Archived',
    members: 3,
    spaces: 1,
    type: 'archived',
  },
  {
    id: '16',
    name: 'Product Team',
    description: 'Access group for product team members',
    status: 'Active',
    members: 22,
    spaces: 4,
    type: 'active',
  },
  {
    id: '17',
    name: 'QA Team',
    description: 'Access group for quality assurance team',
    status: 'Active',
    members: 11,
    spaces: 2,
    type: 'active',
  },
  {
    id: '18',
    name: 'Finance Team',
    description: 'Access group for finance team members',
    status: 'Active',
    members: 7,
    spaces: 1,
    type: 'active',
  },
  {
    id: '19',
    name: 'HR Team',
    description: 'Access group for human resources team',
    status: 'Active',
    members: 6,
    spaces: 1,
    type: 'active',
  },
  {
    id: '20',
    name: 'Operations Team',
    description: 'Access group for operations team members',
    status: 'Active',
    members: 14,
    spaces: 3,
    type: 'active',
  },
  {
    id: '21',
    name: 'Research Team',
    description: 'Access group for research team members',
    status: 'Active',
    members: 16,
    spaces: 3,
    type: 'active',
  },
  {
    id: '22',
    name: 'Legal Team',
    description: 'Access group for legal team members',
    status: 'Active',
    members: 5,
    spaces: 1,
    type: 'active',
  },
  {
    id: '23',
    name: 'Security Team',
    description: 'Access group for security team members',
    status: 'Active',
    members: 8,
    spaces: 2,
    type: 'active',
  },
  {
    id: '24',
    name: 'Analytics Team',
    description: 'Access group for analytics team members',
    status: 'Active',
    members: 13,
    spaces: 2,
    type: 'active',
  },
  {
    id: '25',
    name: 'Content Team',
    description: 'Access group for content team members',
    status: 'Active',
    members: 10,
    spaces: 2,
    type: 'active',
  },
  {
    id: '26',
    name: 'Archived Project A',
    description: 'Archived access group for completed project',
    status: 'Archived',
    members: 12,
    spaces: 2,
    type: 'archived',
  },
  {
    id: '27',
    name: 'Archived Project B',
    description: 'Archived access group for completed project',
    status: 'Archived',
    members: 6,
    spaces: 1,
    type: 'archived',
  },
  {
    id: '28',
    name: 'Archived Project C',
    description: 'Archived access group for completed project',
    status: 'Archived',
    members: 9,
    spaces: 1,
    type: 'archived',
  },
  {
    id: '29',
    name: 'Archived Project D',
    description: 'Archived access group for completed project',
    status: 'Archived',
    members: 4,
    spaces: 1,
    type: 'archived',
  },
  {
    id: '30',
    name: 'Archived Project E',
    description: 'Archived access group for completed project',
    status: 'Archived',
    members: 7,
    spaces: 1,
    type: 'archived',
  },
  {
    id: '31',
    name: 'Archived Project F',
    description: 'Archived access group for completed project',
    status: 'Archived',
    members: 5,
    spaces: 1,
    type: 'archived',
  },
  {
    id: '32',
    name: 'Archived Project G',
    description: 'Archived access group for completed project',
    status: 'Archived',
    members: 3,
    spaces: 1,
    type: 'archived',
  },
  {
    id: '33',
    name: 'Archived Project H',
    description: 'Archived access group for completed project',
    status: 'Archived',
    members: 8,
    spaces: 1,
    type: 'archived',
  },
  {
    id: '34',
    name: 'Archived Project I',
    description: 'Archived access group for completed project',
    status: 'Archived',
    members: 11,
    spaces: 2,
    type: 'archived',
  },
  {
    id: '35',
    name: 'Archived Project J',
    description: 'Archived access group for completed project',
    status: 'Archived',
    members: 6,
    spaces: 1,
    type: 'archived',
  },
  {
    id: '36',
    name: 'Archived Project K',
    description: 'Archived access group for completed project',
    status: 'Archived',
    members: 9,
    spaces: 1,
    type: 'archived',
  },
  {
    id: '37',
    name: 'Archived Project L',
    description: 'Archived access group for completed project',
    status: 'Archived',
    members: 4,
    spaces: 1,
    type: 'archived',
  },
  {
    id: '38',
    name: 'Archived Project M',
    description: 'Archived access group for completed project',
    status: 'Archived',
    members: 7,
    spaces: 1,
    type: 'archived',
  },
  {
    id: '39',
    name: 'Archived Project N',
    description: 'Archived access group for completed project',
    status: 'Archived',
    members: 5,
    spaces: 1,
    type: 'archived',
  },
  {
    id: '40',
    name: 'Archived Project O',
    description: 'Archived access group for completed project',
    status: 'Archived',
    members: 3,
    spaces: 1,
    type: 'archived',
  },
  {
    id: '41',
    name: 'Archived Project P',
    description: 'Archived access group for completed project',
    status: 'Archived',
    members: 8,
    spaces: 1,
    type: 'archived',
  },
  {
    id: '42',
    name: 'Archived Project Q',
    description: 'Archived access group for completed project',
    status: 'Archived',
    members: 11,
    spaces: 2,
    type: 'archived',
  },
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Lucas Marcellus',
    email: 'lucas.marcellus@cr...',
    profileImage: '/images/avatars/1.png',
    emailMarketing: true,
    score: 42,
    role: 'Member',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jun 15 2025',
  },
  {
    id: '2',
    name: 'Sofia Valente',
    email: 'sofia.valente@artisti...',
    profileImage: '/images/avatars/2.png',
    emailMarketing: false,
    score: 17,
    role: 'Member',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jun 28 2025',
  },
  {
    id: '3',
    name: 'Nina Cortez',
    email: 'nina.cortez@innovat...',
    profileImage: '/images/avatars/3.png',
    emailMarketing: true,
    score: 58,
    role: 'Member',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 1 2025',
  },
  {
    id: '4',
    name: 'Jasper Lemoine',
    email: 'jasper.lemoine@desi...',
    profileImage: '/images/avatars/4.png',
    emailMarketing: false,
    score: 29,
    role: 'Member',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 2 2025',
  },
  {
    id: '5',
    name: "Clara D'Angelo",
    email: 'clara.dangelo@visio...',
    profileImage: '/images/avatars/5.png',
    emailMarketing: false,
    score: 73,
    role: 'Member',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 3 2025',
  },
  {
    id: '6',
    name: 'Felix Montoya',
    email: 'felix.montoya@dyna...',
    profileImage: '/images/avatars/6.png',
    emailMarketing: false,
    score: 88,
    role: 'Member',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 3 2025',
  },
  {
    id: '7',
    name: 'Isabella Torres',
    email: 'isabella.torres@ima...',
    profileImage: '/images/avatars/7.png',
    emailMarketing: false,
    score: 34,
    role: 'Member',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 3 2025',
  },
  {
    id: '8',
    name: 'Marcus Chen',
    email: 'marcus.chen@tech...',
    profileImage: '/images/avatars/8.png',
    emailMarketing: true,
    score: 95,
    role: 'Moderator',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 4 2025',
  },
  {
    id: '9',
    name: 'Emma Wilson',
    email: 'emma.wilson@creati...',
    profileImage: '/images/avatars/6.png',
    emailMarketing: true,
    score: 67,
    role: 'Admin',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 5 2025',
  },
  {
    id: '10',
    name: 'Alex Thompson',
    email: 'alex.thompson@innov...',
    profileImage: '/images/avatars/1.png',
    emailMarketing: true,
    score: 82,
    role: 'Member',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 6 2025',
  },
  {
    id: '11',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@tech...',
    profileImage: '/images/avatars/1.png',
    emailMarketing: false,
    score: 45,
    role: 'Member',
    invitationStatus: 'Invited',
    dateAdded: 'Jul 7 2025',
  },
  {
    id: '12',
    name: 'Michael Chen',
    email: 'michael.chen@data...',
    profileImage: '/images/avatars/2.png',
    emailMarketing: true,
    score: 91,
    role: 'Moderator',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 8 2025',
  },
  {
    id: '13',
    name: 'Lisa Rodriguez',
    email: 'lisa.rodriguez@mark...',
    profileImage: '/images/avatars/5.png',
    emailMarketing: true,
    score: 73,
    role: 'Member',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 9 2025',
  },
  {
    id: '14',
    name: 'David Kim',
    email: 'david.kim@product...',
    profileImage: '/images/avatars/3.png',
    emailMarketing: false,
    score: 38,
    role: 'Member',
    invitationStatus: 'Pending',
    dateAdded: 'Jul 10 2025',
  },
  {
    id: '15',
    name: 'Rachel Green',
    email: 'rachel.green@desig...',
    profileImage: '/images/avatars/2.png',
    emailMarketing: true,
    score: 87,
    role: 'Admin',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 11 2025',
  },
  {
    id: '16',
    name: 'James Wilson',
    email: 'james.wilson@engin...',
    profileImage: '/images/avatars/4.png',
    emailMarketing: false,
    score: 52,
    role: 'Member',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 12 2025',
  },
  {
    id: '17',
    name: 'Amanda Lee',
    email: 'amanda.lee@financ...',
    profileImage: '/images/avatars/7.png',
    emailMarketing: true,
    score: 95,
    role: 'Moderator',
    invitationStatus: 'Invited',
    dateAdded: 'Jul 13 2025',
  },
  {
    id: '18',
    name: 'Robert Brown',
    email: 'robert.brown@legal...',
    profileImage: '/images/avatars/8.png',
    emailMarketing: false,
    score: 41,
    role: 'Member',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 14 2025',
  },
  {
    id: '19',
    name: 'Jennifer Davis',
    email: 'jennifer.davis@hr...',
    profileImage: '/images/avatars/3.png',
    emailMarketing: true,
    score: 78,
    role: 'Member',
    invitationStatus: 'Pending',
    dateAdded: 'Jul 15 2025',
  },
  {
    id: '20',
    name: 'Christopher Miller',
    email: 'christopher.miller@sa...',
    profileImage: '/images/avatars/1.png',
    emailMarketing: true,
    score: 89,
    role: 'Admin',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 16 2025',
  },
  {
    id: '21',
    name: 'Michelle Garcia',
    email: 'michelle.garcia@ope...',
    profileImage: '/images/avatars/2.png',
    emailMarketing: false,
    score: 34,
    role: 'Member',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 17 2025',
  },
  {
    id: '22',
    name: 'Daniel Martinez',
    email: 'daniel.martinez@rese...',
    profileImage: '/images/avatars/3.png',
    emailMarketing: true,
    score: 76,
    role: 'Moderator',
    invitationStatus: 'Invited',
    dateAdded: 'Jul 18 2025',
  },
  {
    id: '23',
    name: 'Jessica Taylor',
    email: 'jessica.taylor@comm...',
    profileImage: '/images/avatars/4.png',
    emailMarketing: false,
    score: 63,
    role: 'Member',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 19 2025',
  },
  {
    id: '24',
    name: 'Kevin Anderson',
    email: 'kevin.anderson@secu...',
    profileImage: '/images/avatars/4.png',
    emailMarketing: true,
    score: 84,
    role: 'Member',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 20 2025',
  },
  {
    id: '25',
    name: 'Stephanie White',
    email: 'stephanie.white@qual...',
    profileImage: '/images/avatars/6.png',
    emailMarketing: true,
    score: 71,
    role: 'Admin',
    invitationStatus: 'Pending',
    dateAdded: 'Jul 21 2025',
  },
  {
    id: '26',
    name: 'Andrew Clark',
    email: 'andrew.clark@logis...',
    profileImage: '/images/avatars/7.png',
    emailMarketing: false,
    score: 47,
    role: 'Member',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 22 2025',
  },
  {
    id: '27',
    name: 'Nicole Lewis',
    email: 'nicole.lewis@custom...',
    profileImage: '/images/avatars/5.png',
    emailMarketing: true,
    score: 92,
    role: 'Moderator',
    invitationStatus: 'Invited',
    dateAdded: 'Jul 23 2025',
  },
  {
    id: '28',
    name: 'Ryan Hall',
    email: 'ryan.hall@develop...',
    profileImage: '/images/avatars/8.png',
    emailMarketing: true,
    score: 88,
    role: 'Member',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 24 2025',
  },
  {
    id: '29',
    name: 'Lauren Young',
    email: 'lauren.young@analyt...',
    profileImage: '/images/avatars/1.png',
    emailMarketing: false,
    score: 55,
    role: 'Member',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 25 2025',
  },
  {
    id: '30',
    name: 'Brandon King',
    email: 'brandon.king@strate...',
    profileImage: '/images/avatars/2.png',
    emailMarketing: true,
    score: 79,
    role: 'Admin',
    invitationStatus: 'Profile complete',
    dateAdded: 'Jul 26 2025',
  },
];

export const audienceData: AudienceData = {
  all: mockUsers,
  contacts: mockUsers.filter(user => user.emailMarketing),
  members: mockUsers.filter(user => user.role === 'Member'),
  invited: mockUsers.filter(user => user.invitationStatus === 'Invited'),
  moderators: mockUsers.filter(user => user.role === 'Moderator'),
};

// Data persistence functions
const STORAGE_KEY = 'circle_audience_data';

export const saveAudienceData = (data: AudienceData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    // Handle error silently
  }
};

export const loadAudienceData = (): AudienceData => {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      return parsedData;
    }
  } catch (error) {
    // Handle error silently
  }

  // Return default data if no saved data exists
  return audienceData;
};

export const resetAudienceData = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    // Handle error silently
  }
};

// Helper functions for access groups
export const getAccessGroupsByType = (
  type: 'all' | 'active' | 'archived'
): AccessGroup[] => {
  if (type === 'all') {
    return mockAccessGroups;
  } else if (type === 'active') {
    return mockAccessGroups.filter(group => group.status === 'Active');
  } else if (type === 'archived') {
    return mockAccessGroups.filter(group => group.status === 'Archived');
  }
  return mockAccessGroups;
};

export const getAccessGroupCounts = () => {
  const all = mockAccessGroups.length;
  const active = mockAccessGroups.filter(
    group => group.status === 'Active'
  ).length;
  const archived = mockAccessGroups.filter(
    group => group.status === 'Archived'
  ).length;

  return { all, active, archived };
};

export const mockSegments: Segment[] = [
  {
    id: '1',
    name: 'asgdadg',
    people: 11205,
    createdBy: {
      name: 'Mehmet Ali Izci2',
      avatar:
        'https://ui-avatars.com/api/?name=Mehmet+Ali+Izci2&background=dc2626&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Aug 06, 2025 at 11:36 AM',
  },
  {
    id: '2',
    name: "Ivo's segment",
    people: 8,
    createdBy: {
      name: 'Ivo',
      avatar:
        'https://ui-avatars.com/api/?name=Ivo&background=166534&color=fff&size=32&font-size=0.4&length=1',
    },
    lastUpdated: 'Jul 11, 2025 at 02:21 PM',
  },
  {
    id: '3',
    name: 'Workflows4',
    people: 0,
    createdBy: {
      name: 'Gaurav Singh',
      avatar:
        'https://ui-avatars.com/api/?name=Gaurav+Singh&background=7c3aed&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Jun 05, 2025 at 01:50 PM',
  },
  {
    id: '4',
    name: 'ivan+workflows5@circle.co',
    people: 1,
    createdBy: {
      name: 'Иван Бишевац',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
    },
    lastUpdated: 'Jul 28, 2025 at 12:49 PM',
  },
  {
    id: '5',
    name: 'ivan@circle.co email',
    people: 4,
    createdBy: {
      name: 'Иван Бишевац',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
    },
    lastUpdated: 'May 15, 2025 at 12:01 PM',
  },
  {
    id: '6',
    name: 'test123',
    people: 3,
    createdBy: {
      name: 'Lucas Marcellus',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
    },
    lastUpdated: 'Apr 29, 2025 at 09:47 AM',
  },
  {
    id: '7',
    name: 'With Location',
    people: 2,
    createdBy: {
      name: 'Emma Wilson',
      avatar:
        'https://ui-avatars.com/api/?name=Emma+Wilson&background=059669&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Apr 26, 2025 at 07:58 AM',
  },
  {
    id: '8',
    name: 'isAdamTemp1',
    people: 1,
    createdBy: {
      name: 'Adam Johnson',
      avatar:
        'https://ui-avatars.com/api/?name=Adam+Johnson&background=0891b2&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Mar 25, 2025 at 01:35 PM',
  },
  {
    id: '9',
    name: 'Premium Users',
    people: 156,
    createdBy: {
      name: 'Sarah Chen',
      avatar:
        'https://ui-avatars.com/api/?name=Sarah+Chen&background=be185d&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Mar 20, 2025 at 10:15 AM',
  },
  {
    id: '10',
    name: 'Active Members',
    people: 234,
    createdBy: {
      name: 'David Kim',
      avatar:
        'https://ui-avatars.com/api/?name=David+Kim&background=92400e&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Mar 18, 2025 at 03:42 PM',
  },
  {
    id: '11',
    name: 'New Signups',
    people: 89,
    createdBy: {
      name: 'Maria Garcia',
      avatar:
        'https://ui-avatars.com/api/?name=Maria+Garcia&background=1e40af&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Mar 15, 2025 at 09:30 AM',
  },
  {
    id: '12',
    name: 'Beta Testers',
    people: 45,
    createdBy: {
      name: 'Alex Thompson',
      avatar:
        'https://ui-avatars.com/api/?name=Alex+Thompson&background=7c2d12&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Mar 12, 2025 at 02:18 PM',
  },
  {
    id: '13',
    name: 'Enterprise Clients',
    people: 67,
    createdBy: {
      name: 'Lisa Wang',
      avatar:
        'https://ui-avatars.com/api/?name=Lisa+Wang&background=581c87&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Mar 10, 2025 at 11:25 AM',
  },
  {
    id: '14',
    name: 'Free Tier Users',
    people: 1234,
    createdBy: {
      name: 'Michael Brown',
      avatar:
        'https://ui-avatars.com/api/?name=Michael+Brown&background=dc2626&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Mar 08, 2025 at 04:50 PM',
  },
  {
    id: '15',
    name: 'Power Users',
    people: 78,
    createdBy: {
      name: 'Jennifer Lee',
      avatar:
        'https://ui-avatars.com/api/?name=Jennifer+Lee&background=166534&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Mar 05, 2025 at 08:15 AM',
  },
  {
    id: '16',
    name: 'Inactive Users',
    people: 456,
    createdBy: {
      name: 'Robert Davis',
      avatar:
        'https://ui-avatars.com/api/?name=Robert+Davis&background=7c3aed&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Mar 01, 2025 at 12:30 PM',
  },
  {
    id: '17',
    name: 'VIP Members',
    people: 23,
    createdBy: {
      name: 'Amanda White',
      avatar:
        'https://ui-avatars.com/api/?name=Amanda+White&background=059669&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Feb 28, 2025 at 06:45 AM',
  },
  {
    id: '18',
    name: 'Early Adopters',
    people: 34,
    createdBy: {
      name: 'Chris Martinez',
      avatar:
        'https://ui-avatars.com/api/?name=Chris+Martinez&background=0891b2&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Feb 25, 2025 at 10:20 PM',
  },
  {
    id: '19',
    name: 'Content Creators',
    people: 56,
    createdBy: {
      name: 'Rachel Green',
      avatar:
        'https://ui-avatars.com/api/?name=Rachel+Green&background=be185d&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Feb 22, 2025 at 01:15 PM',
  },
  {
    id: '20',
    name: 'Moderators',
    people: 12,
    createdBy: {
      name: 'Kevin Taylor',
      avatar:
        'https://ui-avatars.com/api/?name=Kevin+Taylor&background=92400e&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Feb 20, 2025 at 09:30 AM',
  },
  {
    id: '21',
    name: 'Admins',
    people: 8,
    createdBy: {
      name: 'Nicole Anderson',
      avatar:
        'https://ui-avatars.com/api/?name=Nicole+Anderson&background=1e40af&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Feb 18, 2025 at 03:45 PM',
  },
  {
    id: '22',
    name: 'Support Team',
    people: 15,
    createdBy: {
      name: 'Daniel Wilson',
      avatar:
        'https://ui-avatars.com/api/?name=Daniel+Wilson&background=7c2d12&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Feb 15, 2025 at 11:10 AM',
  },
  {
    id: '23',
    name: 'Marketing Team',
    people: 28,
    createdBy: {
      name: 'Sophie Turner',
      avatar:
        'https://ui-avatars.com/api/?name=Sophie+Turner&background=581c87&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Feb 12, 2025 at 07:25 AM',
  },
  {
    id: '24',
    name: 'Sales Team',
    people: 19,
    createdBy: {
      name: 'James Miller',
      avatar:
        'https://ui-avatars.com/api/?name=James+Miller&background=dc2626&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Feb 10, 2025 at 02:40 PM',
  },
  {
    id: '25',
    name: 'Development Team',
    people: 42,
    createdBy: {
      name: 'Emily Clark',
      avatar:
        'https://ui-avatars.com/api/?name=Emily+Clark&background=166534&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Feb 08, 2025 at 12:15 PM',
  },
  {
    id: '26',
    name: 'Design Team',
    people: 16,
    createdBy: {
      name: 'Ryan Johnson',
      avatar:
        'https://ui-avatars.com/api/?name=Ryan+Johnson&background=7c3aed&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Feb 05, 2025 at 08:50 AM',
  },
  {
    id: '27',
    name: 'Product Team',
    people: 31,
    createdBy: {
      name: 'Jessica Brown',
      avatar:
        'https://ui-avatars.com/api/?name=Jessica+Brown&background=059669&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Feb 02, 2025 at 04:20 PM',
  },
  {
    id: '28',
    name: 'QA Team',
    people: 14,
    createdBy: {
      name: 'Thomas Lee',
      avatar:
        'https://ui-avatars.com/api/?name=Thomas+Lee&background=0891b2&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Jan 30, 2025 at 10:35 AM',
  },
  {
    id: '29',
    name: 'Finance Team',
    people: 9,
    createdBy: {
      name: 'Ashley Davis',
      avatar:
        'https://ui-avatars.com/api/?name=Ashley+Davis&background=be185d&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Jan 28, 2025 at 01:55 PM',
  },
  {
    id: '30',
    name: 'HR Team',
    people: 7,
    createdBy: {
      name: 'Brandon Wilson',
      avatar:
        'https://ui-avatars.com/api/?name=Brandon+Wilson&background=92400e&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Jan 25, 2025 at 09:10 AM',
  },
  {
    id: '31',
    name: 'Operations Team',
    people: 22,
    createdBy: {
      name: 'Megan Taylor',
      avatar:
        'https://ui-avatars.com/api/?name=Megan+Taylor&background=1e40af&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Jan 22, 2025 at 06:30 PM',
  },
  {
    id: '32',
    name: 'Legal Team',
    people: 5,
    createdBy: {
      name: 'Andrew Garcia',
      avatar:
        'https://ui-avatars.com/api/?name=Andrew+Garcia&background=7c2d12&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Jan 20, 2025 at 11:45 AM',
  },
  {
    id: '33',
    name: 'Security Team',
    people: 11,
    createdBy: {
      name: 'Lauren Martinez',
      avatar:
        'https://ui-avatars.com/api/?name=Lauren+Martinez&background=581c87&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Jan 18, 2025 at 03:15 PM',
  },
  {
    id: '34',
    name: 'Analytics Team',
    people: 18,
    createdBy: {
      name: 'Jordan Smith',
      avatar:
        'https://ui-avatars.com/api/?name=Jordan+Smith&background=dc2626&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Jan 15, 2025 at 08:20 AM',
  },
  {
    id: '35',
    name: 'Content Team',
    people: 25,
    createdBy: {
      name: 'Samantha Johnson',
      avatar:
        'https://ui-avatars.com/api/?name=Samantha+Johnson&background=166534&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Jan 12, 2025 at 12:50 PM',
  },
  {
    id: '36',
    name: 'Research Team',
    people: 13,
    createdBy: {
      name: 'Nathan Brown',
      avatar:
        'https://ui-avatars.com/api/?name=Nathan+Brown&background=7c3aed&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Jan 10, 2025 at 05:40 AM',
  },
  {
    id: '37',
    name: 'Customer Success',
    people: 37,
    createdBy: {
      name: 'Victoria Lee',
      avatar:
        'https://ui-avatars.com/api/?name=Victoria+Lee&background=059669&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Jan 08, 2025 at 02:25 PM',
  },
  {
    id: '38',
    name: 'Partnership Team',
    people: 8,
    createdBy: {
      name: 'Caleb Davis',
      avatar:
        'https://ui-avatars.com/api/?name=Caleb+Davis&background=0891b2&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Jan 05, 2025 at 10:15 AM',
  },
  {
    id: '39',
    name: 'International Team',
    people: 29,
    createdBy: {
      name: 'Isabella Wilson',
      avatar:
        'https://ui-avatars.com/api/?name=Isabella+Wilson&background=be185d&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Jan 02, 2025 at 07:30 PM',
  },
  {
    id: '40',
    name: 'Mobile Team',
    people: 21,
    createdBy: {
      name: 'Ethan Taylor',
      avatar:
        'https://ui-avatars.com/api/?name=Ethan+Taylor&background=92400e&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Dec 30, 2024 at 01:45 PM',
  },
  {
    id: '41',
    name: 'Web Team',
    people: 33,
    createdBy: {
      name: 'Ava Garcia',
      avatar:
        'https://ui-avatars.com/api/?name=Ava+Garcia&background=1e40af&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Dec 28, 2024 at 09:20 AM',
  },
  {
    id: '42',
    name: 'Backend Team',
    people: 26,
    createdBy: {
      name: 'Liam Martinez',
      avatar:
        'https://ui-avatars.com/api/?name=Liam+Martinez&background=7c2d12&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Dec 25, 2024 at 04:10 PM',
  },
  {
    id: '43',
    name: 'Frontend Team',
    people: 19,
    createdBy: {
      name: 'Chloe Smith',
      avatar:
        'https://ui-avatars.com/api/?name=Chloe+Smith&background=581c87&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Dec 22, 2024 at 11:55 AM',
  },
  {
    id: '44',
    name: 'DevOps Team',
    people: 12,
    createdBy: {
      name: 'Mason Johnson',
      avatar:
        'https://ui-avatars.com/api/?name=Mason+Johnson&background=dc2626&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Dec 20, 2024 at 06:30 AM',
  },
  {
    id: '45',
    name: 'Data Team',
    people: 17,
    createdBy: {
      name: 'Zoe Brown',
      avatar:
        'https://ui-avatars.com/api/?name=Zoe+Brown&background=166534&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Dec 18, 2024 at 02:15 PM',
  },
  {
    id: '46',
    name: 'AI Team',
    people: 14,
    createdBy: {
      name: 'Owen Lee',
      avatar:
        'https://ui-avatars.com/api/?name=Owen+Lee&background=7c3aed&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Dec 15, 2024 at 08:45 AM',
  },
  {
    id: '47',
    name: 'UX Team',
    people: 11,
    createdBy: {
      name: 'Scarlett Davis',
      avatar:
        'https://ui-avatars.com/api/?name=Scarlett+Davis&background=059669&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Dec 12, 2024 at 12:30 PM',
  },
  {
    id: '48',
    name: 'UI Team',
    people: 9,
    createdBy: {
      name: 'Leo Wilson',
      avatar:
        'https://ui-avatars.com/api/?name=Leo+Wilson&background=0891b2&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Dec 10, 2024 at 05:20 AM',
  },
  {
    id: '49',
    name: 'Testing Team',
    people: 6,
    createdBy: {
      name: 'Luna Taylor',
      avatar:
        'https://ui-avatars.com/api/?name=Luna+Taylor&background=be185d&color=fff&size=32&font-size=0.4&length=2',
    },
    lastUpdated: 'Dec 08, 2024 at 01:40 PM',
  },
];

export const mockBulkLogs: BulkLog[] = [
  {
    id: '1',
    action: 'Add topic',
    resource: '123456789',
    createdBy: {
      name: 'Ruben Espinosa',
      initials: 'RE',
      avatar: '🐾',
      color: 'bg-brown-500',
    },
    status: 'Succeeded',
    progress: '100%',
    outputCsv: 'output.csv',
    createdAt: 'July 15, 2025',
  },
  {
    id: '2',
    action: 'Add topic',
    resource: 'Add',
    createdBy: {
      name: 'Pedro Hernandes',
      initials: 'PH',
      color: 'bg-green-500',
    },
    status: 'Succeeded',
    progress: '99%',
    outputCsv: 'output.csv',
    createdAt: 'June 18, 2024',
  },
  {
    id: '3',
    action: 'Change space',
    resource: 'pro space',
    createdBy: {
      name: 'Ruben Espinosa',
      initials: 'RE',
      avatar: '🐾',
      color: 'bg-brown-500',
    },
    status: 'Succeeded',
    progress: '99%',
    outputCsv: 'output.csv',
    createdAt: 'June 14, 2024',
  },
  {
    id: '4',
    action: 'Add topic',
    resource: '123456789',
    createdBy: {
      name: 'Ruben Espinosa',
      initials: 'RE',
      avatar: '🐾',
      color: 'bg-brown-500',
    },
    status: 'Succeeded',
    progress: '100%',
    outputCsv: 'output.csv',
    createdAt: 'June 8, 2024',
  },
  {
    id: '5',
    action: 'Add topic',
    resource: 'Product',
    createdBy: {
      name: 'Naseef my name is too big so that we can check how this name is going to be shown in post details',
      initials: 'NM',
      color: 'bg-blue-300',
    },
    status: 'Succeeded',
    progress: '100%',
    createdAt: 'June 6, 2024',
  },
];

export const mockInviteLinks: InviteLink[] = [
  {
    id: '1',
    name: 'new link',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '2',
    name: 'Chintan - Test - 1',
    status: 'Active',
    membersJoined: 1,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '3',
    name: 'Luxury travel offer',
    status: 'Active',
    membersJoined: 0,
    spaces: 7,
    spaceGroups: 1,
    tags: 0,
  },
  {
    id: '4',
    name: 'Summer promotion',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '5',
    name: 'Winter special',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '6',
    name: 'VIP access',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '7',
    name: 'Early bird discount',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '8',
    name: 'Premium membership',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '9',
    name: 'Exclusive content',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '10',
    name: 'Beta tester access',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '11',
    name: 'Founder circle',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '12',
    name: 'Launch event',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '13',
    name: 'Community builder',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '14',
    name: 'Knowledge sharing',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '15',
    name: 'Networking hub',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '16',
    name: 'Mentorship program',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '17',
    name: 'Skill development',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '18',
    name: 'Industry insights',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '19',
    name: 'Collaboration space',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '20',
    name: 'Innovation lab',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '21',
    name: 'Research group',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '22',
    name: 'Study circle',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '23',
    name: 'Discussion forum',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '24',
    name: 'Support group',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '25',
    name: 'Learning community',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '26',
    name: 'Creative workshop',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '27',
    name: 'Design thinking',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '28',
    name: 'Problem solving',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '29',
    name: 'Strategy session',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '30',
    name: 'Planning meeting',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '31',
    name: 'Review board',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '32',
    name: 'Quality assurance',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '33',
    name: 'Testing group',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '34',
    name: 'Feedback loop',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '35',
    name: 'Improvement team',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '36',
    name: 'Optimization squad',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '37',
    name: 'Performance team',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '38',
    name: 'Efficiency group',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '39',
    name: 'Productivity boost',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '40',
    name: 'Time management',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '41',
    name: 'Goal setting',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '42',
    name: 'Achievement track',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '43',
    name: 'Success metrics',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '44',
    name: 'Progress monitor',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '45',
    name: 'Milestone tracker',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '46',
    name: 'Deadline keeper',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '47',
    name: 'Schedule manager',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '48',
    name: 'Calendar sync',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '49',
    name: 'Event planner',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '50',
    name: 'Meeting organizer',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '51',
    name: 'Conference call',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '52',
    name: 'Video chat',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '53',
    name: 'Screen share',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '54',
    name: 'File exchange',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '55',
    name: 'Document share',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '56',
    name: 'Resource library',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '57',
    name: 'Knowledge base',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '58',
    name: 'Reference guide',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '59',
    name: 'Tutorial hub',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '60',
    name: 'Training center',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '61',
    name: 'Skill builder',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '62',
    name: 'Competency track',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '63',
    name: 'Expertise level',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '64',
    name: 'Mastery path',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '65',
    name: 'Proficiency test',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '66',
    name: 'Assessment tool',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '67',
    name: 'Evaluation form',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '68',
    name: 'Feedback survey',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '69',
    name: 'Rating system',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '70',
    name: 'Review process',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '71',
    name: 'Approval workflow',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '72',
    name: 'Validation check',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '73',
    name: 'Verification step',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '74',
    name: 'Authentication',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '75',
    name: 'Authorization',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '76',
    name: 'Permission set',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '77',
    name: 'Access control',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '78',
    name: 'Security group',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '79',
    name: 'Privacy settings',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '80',
    name: 'Data protection',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '81',
    name: 'Compliance check',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '82',
    name: 'Regulatory audit',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '83',
    name: 'Policy review',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '84',
    name: 'Guideline update',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '85',
    name: 'Standard practice',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '86',
    name: 'Best practice',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '87',
    name: 'Recommended way',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '88',
    name: 'Suggested approach',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '89',
    name: 'Proposed method',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '90',
    name: 'Alternative solution',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '91',
    name: 'Backup plan',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '92',
    name: 'Contingency',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '93',
    name: 'Emergency access',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
  {
    id: '94',
    name: 'Crisis response',
    status: 'Active',
    membersJoined: 0,
    spaces: 0,
    spaceGroups: 0,
    tags: 0,
  },
];

export const mockTags: Tag[] = [
  {
    id: '1',
    name: "Rene's tag",
    icon: null,
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 7,
  },
  {
    id: '2',
    name: 'DB upgrade',
    icon: null,
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 4,
  },
  {
    id: '3',
    name: 'Ivo_tag',
    icon: '😤',
    backgroundEnabled: true,
    color: '#10B981',
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 2,
  },
  {
    id: '4',
    name: 'WF MoMo tag',
    icon: null,
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 1,
  },
  {
    id: '5',
    name: 'Paid Tags',
    icon: '👨‍💻',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 21,
  },
  {
    id: '6',
    name: 'Gamification update',
    icon: null,
    backgroundEnabled: false,
    color: null,
    isPublic: false,
    displayFormat: 'Label',
    peopleCount: 6,
  },
  {
    id: '7',
    name: 'AdamTemp1',
    icon: null,
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 4,
  },
  {
    id: '8',
    name: 'can fly',
    icon: null,
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 15,
  },
  {
    id: '9',
    name: 'hero',
    icon: null,
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 4,
  },
  {
    id: '10',
    name: 'VIP member',
    icon: '👑',
    backgroundEnabled: true,
    color: '#F59E0B',
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 12,
  },
  {
    id: '11',
    name: 'Early adopter',
    icon: '🚀',
    backgroundEnabled: true,
    color: '#3B82F6',
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 8,
  },
  {
    id: '12',
    name: 'Beta tester',
    icon: '🧪',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 3,
  },
  {
    id: '13',
    name: 'Premium user',
    icon: '💎',
    backgroundEnabled: true,
    color: '#8B5CF6',
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 18,
  },
  {
    id: '14',
    name: 'Community leader',
    icon: '🌟',
    backgroundEnabled: true,
    color: '#EF4444',
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 5,
  },
  {
    id: '15',
    name: 'Content creator',
    icon: '✍️',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 9,
  },
  {
    id: '16',
    name: 'Moderator',
    icon: '🛡️',
    backgroundEnabled: true,
    color: '#059669',
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 7,
  },
  {
    id: '17',
    name: 'Founder',
    icon: '🏆',
    backgroundEnabled: true,
    color: '#DC2626',
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 2,
  },
  {
    id: '18',
    name: 'Developer',
    icon: '💻',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 11,
  },
  {
    id: '19',
    name: 'Designer',
    icon: '🎨',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 6,
  },
  {
    id: '20',
    name: 'Marketing',
    icon: '📢',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 4,
  },
  {
    id: '21',
    name: 'Sales',
    icon: '💰',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 3,
  },
  {
    id: '22',
    name: 'Support',
    icon: '🎧',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 5,
  },
  {
    id: '23',
    name: 'Product manager',
    icon: '📋',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 2,
  },
  {
    id: '24',
    name: 'Analyst',
    icon: '📊',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 3,
  },
  {
    id: '25',
    name: 'Intern',
    icon: '🎓',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 1,
  },
  {
    id: '26',
    name: 'Freelancer',
    icon: '🦄',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 8,
  },
  {
    id: '27',
    name: 'Contractor',
    icon: '📝',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 4,
  },
  {
    id: '28',
    name: 'Consultant',
    icon: '💼',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 2,
  },
  {
    id: '29',
    name: 'Advisor',
    icon: '🧠',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 1,
  },
  {
    id: '30',
    name: 'Mentor',
    icon: '👨‍🏫',
    backgroundEnabled: true,
    color: '#7C3AED',
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 3,
  },
  {
    id: '31',
    name: 'Student',
    icon: '📚',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 12,
  },
  {
    id: '32',
    name: 'Teacher',
    icon: '👩‍🏫',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 4,
  },
  {
    id: '33',
    name: 'Researcher',
    icon: '🔬',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 2,
  },
  {
    id: '34',
    name: 'Writer',
    icon: '✒️',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 6,
  },
  {
    id: '35',
    name: 'Photographer',
    icon: '📸',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 3,
  },
  {
    id: '36',
    name: 'Videographer',
    icon: '🎥',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 2,
  },
  {
    id: '37',
    name: 'Podcaster',
    icon: '🎙️',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 1,
  },
  {
    id: '38',
    name: 'Streamer',
    icon: '🎮',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 4,
  },
  {
    id: '39',
    name: 'Influencer',
    icon: '📱',
    backgroundEnabled: true,
    color: '#EC4899',
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 7,
  },
  {
    id: '40',
    name: 'Blogger',
    icon: '📝',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 5,
  },
  {
    id: '41',
    name: 'YouTuber',
    icon: '📺',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 3,
  },
  {
    id: '42',
    name: 'TikToker',
    icon: '🎵',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 2,
  },
  {
    id: '43',
    name: 'Instagrammer',
    icon: '📷',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 4,
  },
  {
    id: '44',
    name: 'Twitter user',
    icon: '🐦',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 8,
  },
  {
    id: '45',
    name: 'LinkedIn user',
    icon: '💼',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 6,
  },
  {
    id: '46',
    name: 'Facebook user',
    icon: '📘',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 9,
  },
  {
    id: '47',
    name: 'Reddit user',
    icon: '🤖',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 3,
  },
  {
    id: '48',
    name: 'Discord user',
    icon: '🎮',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 5,
  },
  {
    id: '49',
    name: 'Slack user',
    icon: '💬',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 7,
  },
  {
    id: '50',
    name: 'Zoom user',
    icon: '📹',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 4,
  },
  {
    id: '51',
    name: 'Teams user',
    icon: '👥',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 3,
  },
  {
    id: '52',
    name: 'Google user',
    icon: '🔍',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 11,
  },
  {
    id: '53',
    name: 'Apple user',
    icon: '🍎',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 6,
  },
  {
    id: '54',
    name: 'Android user',
    icon: '🤖',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 8,
  },
  {
    id: '55',
    name: 'Windows user',
    icon: '🪟',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 5,
  },
  {
    id: '56',
    name: 'Mac user',
    icon: '💻',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 7,
  },
  {
    id: '57',
    name: 'Linux user',
    icon: '🐧',
    backgroundEnabled: false,
    color: null,
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 2,
  },
  {
    id: '58',
    name: 'Gaming',
    icon: '🎮',
    backgroundEnabled: true,
    color: '#6366F1',
    isPublic: true,
    displayFormat: 'Label',
    peopleCount: 14,
  },
];

export const mockProfileFields: ProfileField[] = [
  {
    id: '1',
    fieldLabel: 'asd',
    fieldType: 'Checkbox',
    displaysOn: ['Edit profile', 'View profile', 'Sign up form'],
    status: 'Active',
  },
  {
    id: '2',
    fieldLabel: 'testing for choices',
    fieldType: 'Dropdown',
    displaysOn: [
      'Visible in profile highlights',
      'Edit profile',
      'View profile',
      'Sign up form',
    ],
    status: 'Active',
  },
  {
    id: '3',
    fieldLabel: 'Sector',
    fieldType: 'Short Text',
    displaysOn: ['Sign up form'],
    status: 'Active',
  },
  {
    id: '4',
    fieldLabel: 'Headline',
    fieldType: 'Short Text',
    displaysOn: ['View profile', 'Sign up form'],
    status: 'Active',
  },
  {
    id: '5',
    fieldLabel: 'Company',
    fieldType: 'Short Text',
    displaysOn: ['View profile', 'Sign up form'],
    status: 'Active',
  },
  {
    id: '6',
    fieldLabel: 'Birthday',
    fieldType: 'Date',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Active',
  },
  {
    id: '7',
    fieldLabel: 'Profession',
    fieldType: 'Short Text',
    displaysOn: ['View profile', 'Sign up form'],
    status: 'Active',
  },
  {
    id: '8',
    fieldLabel: 'Linkedin URL',
    fieldType: 'Link',
    displaysOn: ['View profile', 'Sign up form'],
    status: 'Active',
  },
  {
    id: '9',
    fieldLabel: 'Website',
    fieldType: 'Link',
    displaysOn: ['View profile', 'Sign up form'],
    status: 'Active',
  },
  {
    id: '10',
    fieldLabel: 'Location',
    fieldType: 'Short Text',
    displaysOn: ['View profile', 'Sign up form'],
    status: 'Active',
  },
  {
    id: '11',
    fieldLabel: 'Bio',
    fieldType: 'Long Text',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Active',
  },
  {
    id: '12',
    fieldLabel: 'Skills',
    fieldType: 'Tags',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Active',
  },
  {
    id: '13',
    fieldLabel: 'Interests',
    fieldType: 'Tags',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Active',
  },
  {
    id: '14',
    fieldLabel: 'Phone Number',
    fieldType: 'Phone',
    displaysOn: ['Edit profile', 'View profile', 'Sign up form'],
    status: 'Archived',
  },
  {
    id: '15',
    fieldLabel: 'Address',
    fieldType: 'Long Text',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Archived',
  },
  {
    id: '16',
    fieldLabel: 'Education',
    fieldType: 'Long Text',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Archived',
  },
  {
    id: '17',
    fieldLabel: 'Experience',
    fieldType: 'Long Text',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Archived',
  },
  {
    id: '18',
    fieldLabel: 'Certifications',
    fieldType: 'Tags',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Archived',
  },
  {
    id: '19',
    fieldLabel: 'Languages',
    fieldType: 'Tags',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Archived',
  },
  {
    id: '20',
    fieldLabel: 'Social Media',
    fieldType: 'Tags',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Archived',
  },
  {
    id: '21',
    fieldLabel: 'Hobbies',
    fieldType: 'Tags',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Archived',
  },
  {
    id: '22',
    fieldLabel: 'Goals',
    fieldType: 'Long Text',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Archived',
  },
  {
    id: '23',
    fieldLabel: 'Achievements',
    fieldType: 'Long Text',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Archived',
  },
  {
    id: '24',
    fieldLabel: 'References',
    fieldType: 'Long Text',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Archived',
  },
  {
    id: '25',
    fieldLabel: 'Emergency Contact',
    fieldType: 'Short Text',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Archived',
  },
  {
    id: '26',
    fieldLabel: 'Medical Info',
    fieldType: 'Long Text',
    displaysOn: ['Edit profile'],
    status: 'Archived',
  },
  {
    id: '27',
    fieldLabel: 'Dietary Restrictions',
    fieldType: 'Tags',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Archived',
  },
  {
    id: '28',
    fieldLabel: 'Accessibility Needs',
    fieldType: 'Tags',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Archived',
  },
  {
    id: '29',
    fieldLabel: 'Time Zone',
    fieldType: 'Dropdown',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Archived',
  },
  {
    id: '30',
    fieldLabel: 'Currency',
    fieldType: 'Dropdown',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Archived',
  },
  {
    id: '31',
    fieldLabel: 'Language Preference',
    fieldType: 'Dropdown',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Archived',
  },
  {
    id: '32',
    fieldLabel: 'Notification Settings',
    fieldType: 'Checkbox',
    displaysOn: ['Edit profile'],
    status: 'Archived',
  },
  {
    id: '33',
    fieldLabel: 'Privacy Settings',
    fieldType: 'Checkbox',
    displaysOn: ['Edit profile'],
    status: 'Archived',
  },
  {
    id: '34',
    fieldLabel: 'Two Factor Auth',
    fieldType: 'Checkbox',
    displaysOn: ['Edit profile'],
    status: 'Archived',
  },
  {
    id: '35',
    fieldLabel: 'API Key',
    fieldType: 'Short Text',
    displaysOn: ['Edit profile'],
    status: 'Archived',
  },
  {
    id: '36',
    fieldLabel: 'Webhook URL',
    fieldType: 'Link',
    displaysOn: ['Edit profile'],
    status: 'Archived',
  },
  {
    id: '37',
    fieldLabel: 'Integration Settings',
    fieldType: 'Long Text',
    displaysOn: ['Edit profile'],
    status: 'Archived',
  },
  {
    id: '38',
    fieldLabel: 'Custom Fields',
    fieldType: 'Tags',
    displaysOn: ['Edit profile', 'View profile'],
    status: 'Archived',
  },
  {
    id: '39',
    fieldLabel: 'Legacy Data',
    fieldType: 'Long Text',
    displaysOn: ['Edit profile'],
    status: 'Archived',
  },
  {
    id: '40',
    fieldLabel: 'Migration Notes',
    fieldType: 'Long Text',
    displaysOn: ['Edit profile'],
    status: 'Archived',
  },
  {
    id: '41',
    fieldLabel: 'Old Username',
    fieldType: 'Short Text',
    displaysOn: ['Edit profile'],
    status: 'Archived',
  },
];

export const mockActivityLogs: ActivityLog[] = [
  {
    id: '1',
    name: 'Nikola',
    nameInitials: 'N',
    nameColor: '#3B82F6',
    event: 'Joined community',
    entityType: 'None',
    entityValue: 'None',
    performedBy: 'Nikola',
    source: 'None',
    date: 'Aug 21, 2025 at 07:39 PM',
  },
  {
    id: '2',
    name: '[No name]',
    nameInitials: 'NN',
    nameColor: '#8B5CF6',
    event: 'Joined community',
    entityType: 'None',
    entityValue: 'None',
    performedBy: 'Rudy Santino',
    source: 'Invitation',
    date: 'Aug 21, 2025 at 06:55 PM',
  },
  {
    id: '3',
    name: '[No name]',
    nameInitials: 'NN',
    nameColor: '#8B5CF6',
    event: 'Added to space',
    entityType: 'Space',
    entityValue: 'Welcome checklist',
    performedBy: 'Rudy Santino',
    source: 'Invitation',
    date: 'Aug 21, 2025 at 06:55 PM',
  },
  {
    id: '4',
    name: '[No name]',
    nameInitials: 'NN',
    nameColor: '#8B5CF6',
    event: 'Added to space',
    entityType: 'Space',
    entityValue: 'Welcome checklist',
    performedBy: 'Rudy Santino',
    source: 'Invitation',
    date: 'Aug 21, 2025 at 06:55 PM',
  },
  {
    id: '5',
    name: 'Will Ferguson',
    nameInitials: 'WF',
    nameColor: '#6B7280',
    event: 'Joined space',
    entityType: 'Space',
    entityValue: 'Member space',
    performedBy: 'Will Ferguson',
    source: 'None',
    date: 'Aug 21, 2025 at 06:10 PM',
  },
  {
    id: '6',
    name: 'Trisha Donofrio',
    nameInitials: 'TD',
    nameColor: '#14B8A6',
    event: 'Joined space',
    entityType: 'Space',
    entityValue: 'EF Test Course',
    performedBy: 'Trisha Donofrio',
    source: 'None',
    date: 'Aug 21, 2025 at 05:40 PM',
  },
  {
    id: '7',
    name: 'Trisha Donofrio',
    nameInitials: 'TD',
    nameColor: '#14B8A6',
    event: 'Joined space',
    entityType: 'Space',
    entityValue: 'Module 1',
    performedBy: 'Trisha Donofrio',
    source: 'None',
    date: 'Aug 21, 2025 at 05:29 PM',
  },
  {
    id: '8',
    name: 'Ridhwana Apple Acc',
    nameInitials: 'RA',
    nameColor: '#10B981',
    event: 'Joined space',
    entityType: 'Space',
    entityValue: 'Members space',
    performedBy: 'Automated',
    source: 'Testing dynamic workflows on 2.0!',
    date: 'Aug 21, 2025 at 04:39 PM',
  },
  {
    id: '9',
    name: 'Ridhwana Apple Acc',
    nameInitials: 'RA',
    nameColor: '#10B981',
    event: 'Joined space',
    entityType: 'Space',
    entityValue: 'Members space',
    performedBy: 'Automated',
    source: 'Test dynamic workflows - 2.0',
    date: 'Aug 21, 2025 at 04:39 PM',
  },
  {
    id: '10',
    name: 'John Smith',
    nameInitials: 'JS',
    nameColor: '#F59E0B',
    event: 'Invited to community',
    entityType: 'User',
    entityValue: 'john.smith@example.com',
    performedBy: 'Admin User',
    source: 'Manual',
    date: 'Aug 21, 2025 at 04:20 PM',
  },
  {
    id: '11',
    name: 'Sarah Johnson',
    nameInitials: 'SJ',
    nameColor: '#EF4444',
    event: 'Removed from community',
    entityType: 'User',
    entityValue: 'sarah.johnson@example.com',
    performedBy: 'Admin User',
    source: 'Manual',
    date: 'Aug 21, 2025 at 04:15 PM',
  },
  {
    id: '12',
    name: 'Mike Wilson',
    nameInitials: 'MW',
    nameColor: '#8B5CF6',
    event: 'Changed role',
    entityType: 'Role',
    entityValue: 'Moderator',
    performedBy: 'Admin User',
    source: 'Manual',
    date: 'Aug 21, 2025 at 04:10 PM',
  },
  {
    id: '13',
    name: 'Lisa Brown',
    nameInitials: 'LB',
    nameColor: '#14B8A6',
    event: 'Created space',
    entityType: 'Space',
    entityValue: 'New Project Space',
    performedBy: 'Lisa Brown',
    source: 'Manual',
    date: 'Aug 21, 2025 at 04:05 PM',
  },
  {
    id: '14',
    name: 'David Lee',
    nameInitials: 'DL',
    nameColor: '#F59E0B',
    event: 'Deleted space',
    entityType: 'Space',
    entityValue: 'Old Project Space',
    performedBy: 'David Lee',
    source: 'Manual',
    date: 'Aug 21, 2025 at 04:00 PM',
  },
  {
    id: '15',
    name: 'Emma Davis',
    nameInitials: 'ED',
    nameColor: '#EF4444',
    event: 'Updated profile',
    entityType: 'Profile',
    entityValue: 'Profile information',
    performedBy: 'Emma Davis',
    source: 'Manual',
    date: 'Aug 21, 2025 at 03:55 PM',
  },
  {
    id: '16',
    name: 'Alex Chen',
    nameInitials: 'AC',
    nameColor: '#3B82F6',
    event: 'Uploaded file',
    entityType: 'File',
    entityValue: 'document.pdf',
    performedBy: 'Alex Chen',
    source: 'Manual',
    date: 'Aug 21, 2025 at 03:50 PM',
  },
  {
    id: '17',
    name: 'Maria Garcia',
    nameInitials: 'MG',
    nameColor: '#8B5CF6',
    event: 'Sent message',
    entityType: 'Message',
    entityValue: 'Hello everyone!',
    performedBy: 'Maria Garcia',
    source: 'Manual',
    date: 'Aug 21, 2025 at 03:45 PM',
  },
  {
    id: '18',
    name: 'Tom Anderson',
    nameInitials: 'TA',
    nameColor: '#10B981',
    event: 'Created post',
    entityType: 'Post',
    entityValue: 'New announcement',
    performedBy: 'Tom Anderson',
    source: 'Manual',
    date: 'Aug 21, 2025 at 03:40 PM',
  },
  {
    id: '19',
    name: 'Rachel Green',
    nameInitials: 'RG',
    nameColor: '#F59E0B',
    event: 'Liked post',
    entityType: 'Post',
    entityValue: 'Community update',
    performedBy: 'Rachel Green',
    source: 'Manual',
    date: 'Aug 21, 2025 at 03:35 PM',
  },
  {
    id: '20',
    name: 'Chris Martin',
    nameInitials: 'CM',
    nameColor: '#EF4444',
    event: 'Commented on post',
    entityType: 'Comment',
    entityValue: 'Great post!',
    performedBy: 'Chris Martin',
    source: 'Manual',
    date: 'Aug 21, 2025 at 03:30 PM',
  },
  {
    id: '21',
    name: 'Jessica White',
    nameInitials: 'JW',
    nameColor: '#14B8A6',
    event: 'Shared post',
    entityType: 'Post',
    entityValue: 'Important announcement',
    performedBy: 'Jessica White',
    source: 'Manual',
    date: 'Aug 21, 2025 at 03:25 PM',
  },
  {
    id: '22',
    name: 'Kevin Black',
    nameInitials: 'KB',
    nameColor: '#3B82F6',
    event: 'Bookmarked post',
    entityType: 'Post',
    entityValue: 'Useful resource',
    performedBy: 'Kevin Black',
    source: 'Manual',
    date: 'Aug 21, 2025 at 03:20 PM',
  },
  {
    id: '23',
    name: 'Amanda Taylor',
    nameInitials: 'AT',
    nameColor: '#8B5CF6',
    event: 'Followed user',
    entityType: 'User',
    entityValue: 'John Smith',
    performedBy: 'Amanda Taylor',
    source: 'Manual',
    date: 'Aug 21, 2025 at 03:15 PM',
  },
  {
    id: '24',
    name: 'Ryan Miller',
    nameInitials: 'RM',
    nameColor: '#10B981',
    event: 'Unfollowed user',
    entityType: 'User',
    entityValue: 'Sarah Johnson',
    performedBy: 'Ryan Miller',
    source: 'Manual',
    date: 'Aug 21, 2025 at 03:10 PM',
  },
  {
    id: '25',
    name: 'Sophie Wilson',
    nameInitials: 'SW',
    nameColor: '#F59E0B',
    event: 'Blocked user',
    entityType: 'User',
    entityValue: 'Spam User',
    performedBy: 'Sophie Wilson',
    source: 'Manual',
    date: 'Aug 21, 2025 at 03:05 PM',
  },
  {
    id: '26',
    name: 'Daniel Brown',
    nameInitials: 'DB',
    nameColor: '#EF4444',
    event: 'Reported user',
    entityType: 'User',
    entityValue: 'Inappropriate User',
    performedBy: 'Daniel Brown',
    source: 'Manual',
    date: 'Aug 21, 2025 at 03:00 PM',
  },
  {
    id: '27',
    name: 'Olivia Davis',
    nameInitials: 'OD',
    nameColor: '#14B8A6',
    event: 'Muted user',
    entityType: 'User',
    entityValue: 'Noisy User',
    performedBy: 'Olivia Davis',
    source: 'Manual',
    date: 'Aug 21, 2025 at 02:55 PM',
  },
  {
    id: '28',
    name: 'James Johnson',
    nameInitials: 'JJ',
    nameColor: '#3B82F6',
    event: 'Unmuted user',
    entityType: 'User',
    entityValue: 'Reformed User',
    performedBy: 'James Johnson',
    source: 'Manual',
    date: 'Aug 21, 2025 at 02:50 PM',
  },
  {
    id: '29',
    name: 'Emily Chen',
    nameInitials: 'EC',
    nameColor: '#8B5CF6',
    event: 'Created event',
    entityType: 'Event',
    entityValue: 'Community Meetup',
    performedBy: 'Emily Chen',
    source: 'Manual',
    date: 'Aug 21, 2025 at 02:45 PM',
  },
  {
    id: '30',
    name: 'Michael Lee',
    nameInitials: 'ML',
    nameColor: '#10B981',
    event: 'Joined event',
    entityType: 'Event',
    entityValue: 'Community Meetup',
    performedBy: 'Michael Lee',
    source: 'Manual',
    date: 'Aug 21, 2025 at 02:40 PM',
  },
  {
    id: '31',
    name: 'Jennifer Wang',
    nameInitials: 'JW',
    nameColor: '#F59E0B',
    event: 'Left event',
    entityType: 'Event',
    entityValue: 'Old Event',
    performedBy: 'Jennifer Wang',
    source: 'Manual',
    date: 'Aug 21, 2025 at 02:35 PM',
  },
  {
    id: '32',
    name: 'Robert Kim',
    nameInitials: 'RK',
    nameColor: '#EF4444',
    event: 'Created poll',
    entityType: 'Poll',
    entityValue: 'Community Survey',
    performedBy: 'Robert Kim',
    source: 'Manual',
    date: 'Aug 21, 2025 at 02:30 PM',
  },
  {
    id: '33',
    name: 'Laura Martinez',
    nameInitials: 'LM',
    nameColor: '#14B8A6',
    event: 'Voted in poll',
    entityType: 'Poll',
    entityValue: 'Community Survey',
    performedBy: 'Laura Martinez',
    source: 'Manual',
    date: 'Aug 21, 2025 at 02:25 PM',
  },
  {
    id: '34',
    name: 'Steven Thompson',
    nameInitials: 'ST',
    nameColor: '#3B82F6',
    event: 'Created group',
    entityType: 'Group',
    entityValue: 'Study Group',
    performedBy: 'Steven Thompson',
    source: 'Manual',
    date: 'Aug 21, 2025 at 02:20 PM',
  },
  {
    id: '35',
    name: 'Nicole Anderson',
    nameInitials: 'NA',
    nameColor: '#8B5CF6',
    event: 'Joined group',
    entityType: 'Group',
    entityValue: 'Study Group',
    performedBy: 'Nicole Anderson',
    source: 'Manual',
    date: 'Aug 21, 2025 at 02:15 PM',
  },
  {
    id: '36',
    name: 'Andrew Clark',
    nameInitials: 'AC',
    nameColor: '#10B981',
    event: 'Left group',
    entityType: 'Group',
    entityValue: 'Old Group',
    performedBy: 'Andrew Clark',
    source: 'Manual',
    date: 'Aug 21, 2025 at 02:10 PM',
  },
  {
    id: '37',
    name: 'Melissa Rodriguez',
    nameInitials: 'MR',
    nameColor: '#F59E0B',
    event: 'Created channel',
    entityType: 'Channel',
    entityValue: '#general',
    performedBy: 'Melissa Rodriguez',
    source: 'Manual',
    date: 'Aug 21, 2025 at 02:05 PM',
  },
  {
    id: '38',
    name: 'Brian Wilson',
    nameInitials: 'BW',
    nameColor: '#EF4444',
    event: 'Joined channel',
    entityType: 'Channel',
    entityValue: '#general',
    performedBy: 'Brian Wilson',
    source: 'Manual',
    date: 'Aug 21, 2025 at 02:00 PM',
  },
  {
    id: '39',
    name: 'Ashley Moore',
    nameInitials: 'AM',
    nameColor: '#14B8A6',
    event: 'Left channel',
    entityType: 'Channel',
    entityValue: '#old-channel',
    performedBy: 'Ashley Moore',
    source: 'Manual',
    date: 'Aug 21, 2025 at 01:55 PM',
  },
  {
    id: '40',
    name: 'Christopher Hall',
    nameInitials: 'CH',
    nameColor: '#3B82F6',
    event: 'Created tag',
    entityType: 'Tag',
    entityValue: 'Important',
    performedBy: 'Christopher Hall',
    source: 'Manual',
    date: 'Aug 21, 2025 at 01:50 PM',
  },
  {
    id: '41',
    name: 'Samantha Lewis',
    nameInitials: 'SL',
    nameColor: '#8B5CF6',
    event: 'Applied tag',
    entityType: 'Tag',
    entityValue: 'Important',
    performedBy: 'Samantha Lewis',
    source: 'Manual',
    date: 'Aug 21, 2025 at 01:45 PM',
  },
  {
    id: '42',
    name: 'Matthew Turner',
    nameInitials: 'MT',
    nameColor: '#10B981',
    event: 'Removed tag',
    entityType: 'Tag',
    entityValue: 'Old Tag',
    performedBy: 'Matthew Turner',
    source: 'Manual',
    date: 'Aug 21, 2025 at 01:40 PM',
  },
];

export const sidebarItems: SidebarItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99984 3.04163C6.15686 3.04163 3.0415 6.15698 3.0415 9.99996C3.0415 13.8429 6.15686 16.9583 9.99984 16.9583C13.8428 16.9583 16.9582 13.8429 16.9582 9.99996C16.9582 6.15698 13.8428 3.04163 9.99984 3.04163ZM1.5415 9.99996C1.5415 5.32855 5.32843 1.54163 9.99984 1.54163C14.6712 1.54163 18.4582 5.32855 18.4582 9.99996C18.4582 14.6713 14.6712 18.4583 9.99984 18.4583C5.32843 18.4583 1.5415 14.6713 1.5415 9.99996ZM12.0157 6.55157C12.8865 6.31409 13.6858 7.11309 13.4482 7.9841C13.4482 7.98411 13.4482 7.98411 13.4482 7.98411L12.5154 11.4045L12.5154 11.4046C12.3678 11.9454 11.9453 12.368 11.4045 12.5155L11.4044 12.5155L7.98399 13.4484C7.98399 13.4484 7.98398 13.4484 7.98398 13.4484C7.11297 13.6859 6.31397 12.8867 6.55145 12.0158L6.55146 12.0158L7.4843 8.59538C7.48431 8.59538 7.48431 8.59537 7.48431 8.59537C7.63182 8.0545 8.05438 7.63194 8.59525 7.48443C8.59525 7.48443 8.59525 7.48443 8.59526 7.48443L12.0157 6.55158L12.0157 6.55157ZM11.8476 8.1522L8.98993 8.93157L8.98992 8.93158C8.96146 8.93934 8.93921 8.96159 8.93145 8.99004L8.93145 8.99005L8.15207 11.8477L11.0097 11.0684C11.0382 11.0606 11.0605 11.0383 11.0683 11.0098L11.8476 8.1522Z"
          fill="currentColor"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.5415 9.99996C1.5415 5.32855 5.32843 1.54163 9.99984 1.54163C14.6712 1.54163 18.4582 5.32855 18.4582 9.99996C18.4582 14.6713 14.6712 18.4583 9.99984 18.4583C5.32843 18.4583 1.5415 14.6713 1.5415 9.99996ZM12.0157 6.55157C12.8865 6.31409 13.6858 7.11309 13.4482 7.9841L12.5154 11.4045C12.3679 11.9454 11.9453 12.368 11.4045 12.5155L7.98399 13.4484C7.11298 13.6859 6.31397 12.8867 6.55145 12.0158L7.4843 8.59538C7.63181 8.05451 8.05438 7.63194 8.59525 7.48443L12.0157 6.55157ZM11.8476 8.1522L8.98993 8.93157C8.96147 8.93933 8.93921 8.96159 8.93145 8.99004L8.15207 11.8477L11.0097 11.0684C11.0382 11.0606 11.0605 11.0383 11.0683 11.0098L11.8476 8.1522Z"
          fill="#191B1F"
        />
      </svg>
    ),
    subItems: [],
  },
  {
    id: 'audience',
    title: 'Audience',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.70668 2.04175C6.51007 2.04175 5.54001 3.0118 5.54001 4.20841C5.54001 5.40503 6.51007 6.37508 7.70668 6.37508C8.90334 6.37508 9.87338 5.40503 9.87338 4.20841C9.87338 3.0118 8.90334 2.04175 7.70668 2.04175ZM4.04001 4.20841C4.04001 2.18337 5.68164 0.541748 7.70668 0.541748C9.73176 0.541748 11.3734 2.18336 11.3734 4.20841C11.3734 6.23347 9.73176 7.87508 7.70668 7.87508C5.68164 7.87508 4.04001 6.23346 4.04001 4.20841ZM11.7484 1.29175C11.7484 0.877534 12.0842 0.541748 12.4984 0.541748C14.5234 0.541748 16.165 2.18337 16.165 4.20841C16.165 6.23346 14.5234 7.87508 12.4984 7.87508C12.0842 7.87508 11.7484 7.53929 11.7484 7.12508C11.7484 6.71087 12.0842 6.37508 12.4984 6.37508C13.695 6.37508 14.665 5.40503 14.665 4.20841C14.665 3.0118 13.695 2.04175 12.4984 2.04175C12.0842 2.04175 11.7484 1.70596 11.7484 1.29175ZM7.70668 10.3751C4.86065 10.3751 2.50721 12.1827 1.80104 14.4327C1.75079 14.5928 1.7868 14.7305 1.8988 14.8539C2.02276 14.9905 2.23981 15.099 2.49835 15.0991C2.49832 15.0991 2.49837 15.0991 2.49835 15.0991H12.915C13.1735 15.0991 13.3906 14.9906 13.5145 14.854C13.6265 14.7305 13.6626 14.5928 13.6123 14.4327C12.9061 12.1827 10.5527 10.3751 7.70668 10.3751ZM0.369872 13.9835C1.2842 11.0703 4.24586 8.87508 7.70668 8.87508C11.1675 8.87508 14.1291 11.0703 15.0435 13.9835C15.2689 14.7016 15.0587 15.3844 14.6254 15.8619C14.2042 16.3262 13.577 16.5991 12.915 16.5991H2.49835C1.83644 16.599 1.20918 16.3261 0.78792 15.8619C0.354675 15.3844 0.14448 14.7016 0.369872 13.9835ZM14.4998 10.007C14.6381 9.61656 15.0667 9.41215 15.4571 9.55045C17.5593 10.2951 19.1906 11.9941 19.8302 14.008C20.0582 14.7258 19.8496 15.4092 19.4167 15.8874C18.9959 16.3522 18.3686 16.6251 17.7067 16.6251H17.29C16.8758 16.6251 16.54 16.2893 16.54 15.8751C16.54 15.4609 16.8758 15.1251 17.29 15.1251H17.7067C17.9652 15.1251 18.1816 15.0166 18.3047 14.8807C18.4157 14.7581 18.4512 14.6216 18.4006 14.462C17.9058 12.9042 16.6239 11.5551 14.9563 10.9644C14.5659 10.8261 14.3615 10.3974 14.4998 10.007Z"
          fill="currentColor"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.9152 5.83333C2.9152 3.99238 4.40759 2.5 6.24854 2.5C8.08949 2.5 9.58183 3.99238 9.58183 5.83333C9.58183 7.67428 8.08949 9.16667 6.24854 9.16667C4.40759 9.16667 2.9152 7.67428 2.9152 5.83333Z"
          fill="#191B1F"
        />
        <path
          d="M13.0753 14.6308C12.6779 13.1177 11.9737 11.8591 11.0678 10.8998C11.9647 10.3053 12.9848 10 14.0222 10C16.4859 10 18.8521 11.7217 19.6995 14.9484C20.0708 16.3622 18.8777 17.5 17.5912 17.5H12.4432C13.0625 16.7757 13.3772 15.7802 13.0753 14.6308Z"
          fill="#191B1F"
        />
        <path
          d="M13.7485 2.5C11.9076 2.5 10.4152 3.99238 10.4152 5.83333C10.4152 7.67428 11.9076 9.16667 13.7485 9.16667C15.5895 9.16667 17.0818 7.67428 17.0818 5.83333C17.0818 3.99238 15.5895 2.5 13.7485 2.5Z"
          fill="#191B1F"
        />
        <path
          d="M6.1889 10C8.65258 10 11.0187 11.7217 11.8662 14.9484C12.2375 16.3622 11.0442 17.5 9.75775 17.5H2.62005C1.33354 17.5 0.140338 16.3622 0.511658 14.9484C1.35914 11.7217 3.72524 10 6.1889 10Z"
          fill="#191B1F"
        />
      </svg>
    ),
    subItems: [
      { id: 'manage-audience', title: 'Manage audience', active: true },
      { id: 'access-groups', title: 'Access groups' },
      { id: 'segments', title: 'Segments' },
      { id: 'bulk-logs', title: 'Bulk logs' },
      { id: 'invite-links', title: 'Invite links' },
      { id: 'onboarding', title: 'Onboarding' },
      { id: 'tags', title: 'Tags' },
      { id: 'profile-fields', title: 'Profile fields' },
      { id: 'gamification', title: 'Gamification' },
      { id: 'activity-logs', title: 'Activity logs' },
    ],
  },
  {
    id: 'content',
    title: 'Content',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.20825 3.95841C3.20825 2.62373 4.29023 1.54175 5.62492 1.54175H14.3749C15.7096 1.54175 16.7916 2.62373 16.7916 3.95841V16.0417C16.7916 17.3765 15.7096 18.4584 14.3749 18.4584H5.62492C4.29024 18.4584 3.20825 17.3765 3.20825 16.0417V3.95841ZM5.62492 3.04175C5.11866 3.04175 4.70825 3.45215 4.70825 3.95841V16.0417C4.70825 16.548 5.11865 16.9584 5.62492 16.9584H14.3749C14.8812 16.9584 15.2916 16.548 15.2916 16.0417V3.95841C15.2916 3.45215 14.8812 3.04175 14.3749 3.04175H5.62492ZM6.54159 5.62508C6.54159 5.21087 6.87737 4.87508 7.29158 4.87508H12.7083C13.1225 4.87508 13.4583 5.21087 13.4583 5.62508C13.4583 6.0393 13.1225 6.37508 12.7083 6.37508H7.29158C6.87737 6.37508 6.54159 6.0393 6.54159 5.62508ZM6.54159 8.95842C6.54159 8.5442 6.87737 8.20842 7.29158 8.20842H12.7083C13.1225 8.20842 13.4583 8.5442 13.4583 8.95842C13.4583 9.37263 13.1225 9.70842 12.7083 9.70842H7.29158C6.87737 9.70842 6.54159 9.37263 6.54159 8.95842ZM6.54159 12.2917C6.54159 11.8775 6.87737 11.5417 7.29158 11.5417H9.37492C9.78913 11.5417 10.1249 11.8775 10.1249 12.2917C10.1249 12.706 9.78913 13.0417 9.37492 13.0417H7.29158C6.87737 13.0417 6.54159 12.706 6.54159 12.2917Z"
          fill="#717680"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.3335 3.95829C3.3335 2.69264 4.35951 1.66663 5.62516 1.66663H14.3752C15.6408 1.66663 16.6668 2.69264 16.6668 3.95829V16.0416C16.6668 17.3073 15.6408 18.3333 14.3752 18.3333H5.62516C4.35951 18.3333 3.3335 17.3073 3.3335 16.0416V3.95829ZM7.29183 4.99996C6.94665 4.99996 6.66683 5.27978 6.66683 5.62496C6.66683 5.97013 6.94665 6.24996 7.29183 6.24996H12.7085C13.0537 6.24996 13.3335 5.97013 13.3335 5.62496C13.3335 5.27978 13.0537 4.99996 12.7085 4.99996H7.29183ZM7.29183 8.33329C6.94665 8.33329 6.66683 8.61313 6.66683 8.95829C6.66683 9.30346 6.94665 9.58329 7.29183 9.58329H12.7085C13.0537 9.58329 13.3335 9.30346 13.3335 8.95829C13.3335 8.61313 13.0537 8.33329 12.7085 8.33329H7.29183ZM7.29183 11.6666C6.94665 11.6666 6.66683 11.9465 6.66683 12.2916C6.66683 12.6368 6.94665 12.9166 7.29183 12.9166H9.37516C9.72033 12.9166 10.0002 12.6368 10.0002 12.2916C10.0002 11.9465 9.72033 11.6666 9.37516 11.6666H7.29183Z"
          fill="#191B1F"
        />
      </svg>
    ),
    subItems: [
      { id: 'posts', title: 'Posts' },
      { id: 'pages', title: 'Pages' },
      { id: 'spaces', title: 'Spaces' },
      { id: 'topics', title: 'Topics' },
      { id: 'moderation', title: 'Moderation' },
      { id: 'media-manager', title: 'Media manager' },
      { id: 'live', title: 'Live' },
      { id: 'bulk-logs', title: 'Bulk logs' },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.50885 1.74973C1.50696 1.75655 1.50396 1.77019 1.51439 1.79849L3.52282 7.24994H5.70819C6.1224 7.24994 6.45819 7.58573 6.45819 7.99994C6.45819 8.41416 6.1224 8.74994 5.70819 8.74994H3.52282L1.51439 14.2014C1.50396 14.2297 1.50696 14.2433 1.50885 14.2502C1.51192 14.2613 1.52029 14.2774 1.53702 14.2923C1.55375 14.3073 1.57064 14.3139 1.58202 14.3157C1.589 14.3168 1.60287 14.3183 1.62984 14.3048L14.0904 8.07446C14.1126 8.06333 14.1209 8.05251 14.1253 8.04492C14.1314 8.0347 14.1365 8.01917 14.1365 7.99994C14.1365 7.98072 14.1314 7.96518 14.1253 7.95497C14.1209 7.94737 14.1127 7.93658 14.0904 7.92545L1.62985 1.69514C1.62985 1.69514 1.62985 1.69514 1.62985 1.69514C1.60288 1.68166 1.58899 1.68313 1.582 1.68425C1.57062 1.68608 1.55373 1.69261 1.537 1.70758C1.52028 1.72256 1.51192 1.73862 1.50885 1.74973ZM2.20057 7.99994L0.106873 2.31705C0.106873 2.31705 0.106873 2.31705 0.106873 2.31705C-0.389073 0.970917 1.01755 -0.288052 2.30066 0.353497L14.7612 6.58377C15.9282 7.16723 15.9282 8.83262 14.7612 9.4161C14.7612 9.4161 14.7612 9.41609 14.7612 9.4161L2.30067 15.6464C1.01747 16.288 -0.38904 15.0289 0.106872 13.6828L2.20057 7.99994Z"
          fill="currentColor"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.22431 4.27409C1.76752 3.03424 3.06309 1.87465 4.24492 2.46556L16.7055 8.69588C17.7803 9.23329 17.7803 10.7671 16.7055 11.3046L4.24492 17.5349C3.06308 18.1258 1.76752 16.9662 2.22431 15.7263L4.10373 10.625H7.70835C8.05352 10.625 8.33334 10.3452 8.33334 10C8.33334 9.65488 8.05352 9.37504 7.70835 9.37504H4.10361L2.22431 4.27409Z"
          fill="#191B1F"
        />
      </svg>
    ),
    subItems: [
      { id: 'overview', title: 'Overview', active: true },
      { id: 'broadcasts', title: 'Broadcasts' },
      { id: 'forms', title: 'Forms' },
      { id: 'settings', title: 'Settings' },
    ],
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 1.2002C10.3091 1.2002 10.582 1.40314 10.6709 1.69922C11.3245 3.87748 12.1774 5.4489 13.3643 6.63574C14.5511 7.82259 16.1225 8.67551 18.3008 9.3291C18.5969 9.41796 18.7998 9.69093 18.7998 10C18.7998 10.3091 18.5969 10.582 18.3008 10.6709L18.2969 10.6719L17.5156 10.9229L17.5117 10.9248C15.735 11.5422 14.4026 12.326 13.3643 13.3643L13.3623 13.3662L13.1484 13.5869L13.1455 13.5908C12.0739 14.7468 11.2877 16.2513 10.6758 18.2852L10.625 18.4131C10.508 18.6469 10.268 18.7998 10 18.7998C9.69093 18.7998 9.41796 18.5969 9.3291 18.3008C8.71646 16.259 7.92887 14.7498 6.85449 13.5908L6.85156 13.5869L6.6377 13.3662L6.63574 13.3643L6.4375 13.1729C5.42912 12.2288 4.15401 11.5036 2.48828 10.9248V10.9238L2.48438 10.9229L1.70312 10.6719L1.69922 10.6709L1.59277 10.6289C1.35554 10.5129 1.2002 10.2704 1.2002 10C1.2002 9.69093 1.40314 9.41796 1.69922 9.3291C3.87748 8.67551 5.4489 7.82259 6.63574 6.63574C7.82259 5.4489 8.67551 3.87748 9.3291 1.69922C9.41796 1.40314 9.69093 1.2002 10 1.2002ZM9.82031 4.69238C9.2568 5.8616 8.57126 6.86234 7.7168 7.7168C6.86234 8.57126 5.8616 9.2568 4.69238 9.82031L4.31836 10L4.69238 10.1797C5.86159 10.7432 6.86233 11.4287 7.7168 12.2832C8.57103 13.1375 9.25691 14.1379 9.82031 15.3066L10 15.6807L10.1797 15.3066C10.7431 14.1379 11.4289 13.1375 12.2832 12.2832C13.1375 11.4289 14.1379 10.7431 15.3066 10.1797L15.6807 10L15.3066 9.82031C14.1379 9.25691 13.1375 8.57103 12.2832 7.7168C11.4287 6.86233 10.7432 5.86159 10.1797 4.69238L10 4.31836L9.82031 4.69238Z"
          fill="currentColor"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.6138 2.17468C10.5577 1.8799 10.2999 1.66663 9.99984 1.66663C9.69975 1.66663 9.442 1.8799 9.38584 2.17468C8.98684 4.26957 8.19958 5.86425 7.03185 7.03198C5.86413 8.1997 4.26945 8.98696 2.17456 9.38596C1.87978 9.44212 1.6665 9.69987 1.6665 9.99996C1.6665 10.3 1.87978 10.5578 2.17456 10.614C4.26945 11.013 5.86413 11.8002 7.03185 12.968C8.19958 14.1357 8.98684 15.7304 9.38584 17.8252C9.442 18.12 9.69975 18.3333 9.99984 18.3333C10.2999 18.3333 10.5577 18.12 10.6138 17.8252C11.0128 15.7304 11.8001 14.1357 12.9678 12.968C14.1356 11.8002 15.7303 11.013 17.8251 10.614C18.1199 10.5578 18.3332 10.3 18.3332 9.99996C18.3332 9.69987 18.1199 9.44212 17.8251 9.38596C15.7303 8.98696 14.1356 8.1997 12.9678 7.03198C11.8001 5.86425 11.0128 4.26957 10.6138 2.17468Z"
          fill="#191B1F"
        />
      </svg>
    ),
    subItems: [
      { id: 'knowledge', title: 'Knowledge' },
      { id: 'agents', title: 'Agents' },
    ],
  },
  {
    id: 'ai-inbox',
    title: 'AI Inbox',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.791 4.99902C15.791 4.5619 15.4371 4.20721 15 4.20703H5C4.56276 4.20704 4.20801 4.5618 4.20801 4.99902V14.999L4.21191 15.0801C4.25264 15.4791 4.59023 15.79 5 15.79H15C15.437 15.7899 15.7908 15.436 15.791 14.999V4.99902ZM17.541 14.999C17.5408 16.4025 16.4035 17.5399 15 17.54H5C3.68407 17.54 2.60094 16.5404 2.4707 15.2588L2.45801 14.999V4.99902C2.45801 3.59529 3.59629 2.45704 5 2.45703H15C16.4036 2.45721 17.541 3.59542 17.541 4.99902V14.999Z"
          fill="currentColor"
        />
        <path
          d="M6.77148 9.95703C7.17073 9.95703 7.51962 10.2276 7.61914 10.6143C7.8922 11.6746 8.85587 12.457 10 12.457C11.1441 12.457 12.1077 11.6746 12.3809 10.6143C12.4804 10.2276 12.8293 9.95703 13.2285 9.95703H17.125V11.707H13.8467C13.1917 13.1796 11.7167 14.207 10 14.207C8.28327 14.207 6.80828 13.1796 6.15332 11.707H2.875V9.95703H6.77148Z"
          fill="currentColor"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.85436 4.57983C4.24652 3.81466 5.03399 3.33337 5.8938 3.33337H14.1065C14.9663 3.33337 15.7538 3.81466 16.146 4.57983L18.9146 9.98204C19.0803 10.3055 19.1668 10.6638 19.1668 11.0273V14.375C19.1668 15.6407 18.1408 16.6667 16.8752 16.6667H3.12516C1.85951 16.6667 0.833496 15.6407 0.833496 14.375V11.0273C0.833496 10.6638 0.919954 10.3055 1.08573 9.98204L3.85436 4.57983ZM17.9168 11.25H13.8107C13.4872 11.25 13.1821 11.4004 12.9849 11.6569L12.7043 12.0217C12.2706 12.586 11.5992 12.9167 10.8875 12.9167H9.11283C8.40108 12.9167 7.72974 12.586 7.29596 12.0217L7.01544 11.6569C6.81826 11.4004 6.51311 11.25 6.1896 11.25H2.0835V14.375C2.0835 14.9504 2.54986 15.4167 3.12516 15.4167H16.8752C17.4505 15.4167 17.9168 14.9504 17.9168 14.375V11.25Z"
          fill="#191B1F"
        />
      </svg>
    ),
    subItems: [],
  },
  {
    id: 'workflows',
    title: 'Workflows',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.1597 1.39438C12.3361 0.109732 14.3662 1.37563 13.8291 2.97791L11.9332 8.63293C11.9332 8.63294 11.9332 8.63294 11.9332 8.63295C11.9112 8.69882 11.9617 8.75402 12.0133 8.75402H16.0383C17.4222 8.75402 18.1285 10.3956 17.2145 11.411L8.94632 20.5957C7.78703 21.8836 5.75291 20.654 6.25899 19.0494M6.259 19.0494L8.06726 13.3158C8.06727 13.3158 8.06728 13.3158 8.06728 13.3158C8.08789 13.2503 8.03778 13.1964 7.98665 13.1964H3.96166C2.57129 13.1964 1.86772 11.5416 2.79456 10.5294L2.79458 10.5293L11.1597 1.39439L11.1597 1.39438M12.2659 2.40741C12.2839 2.38775 12.2962 2.38076 12.3005 2.3786L12.2659 2.40741ZM12.2659 2.40742L3.90085 11.5423C3.90084 11.5423 3.90083 11.5424 3.90083 11.5424C3.88125 11.5638 3.8772 11.5789 3.87574 11.5892C3.87375 11.6032 3.87537 11.6228 3.88451 11.6438C3.89366 11.6648 3.9064 11.6782 3.91632 11.6851C3.92301 11.6897 3.93463 11.6964 3.96166 11.6964H7.98665C9.06548 11.6964 9.81902 12.7482 9.49784 13.7669L9.49782 13.7669L7.68953 19.5006L7.68953 19.5006C7.68139 19.5264 7.68119 19.5416 7.6815 19.5479C7.68182 19.5545 7.6831 19.5593 7.68507 19.5639C7.68969 19.5746 7.70301 19.5937 7.72966 19.6091C7.75634 19.6245 7.77778 19.6257 7.78626 19.6247C7.7897 19.6242 7.79296 19.6234 7.79744 19.6211C7.80172 19.6188 7.81382 19.6118 7.83146 19.5922L7.83147 19.5921L16.0996 10.4074L16.6571 10.9092L16.0996 10.4074C16.1189 10.386 16.1229 10.3709 16.1243 10.3605C16.1262 10.3465 16.1245 10.327 16.1153 10.3062C16.1062 10.2854 16.0935 10.2721 16.0835 10.2652C16.0767 10.2606 16.0651 10.254 16.0383 10.254H12.0133C10.9224 10.254 10.1678 9.18013 10.511 8.15617L10.511 8.15616L12.4069 2.50113C12.4156 2.47518 12.416 2.45991 12.4158 2.4536C12.4156 2.44703 12.4144 2.44227 12.4125 2.43767C12.4081 2.42692 12.395 2.40754 12.3682 2.39159C12.3415 2.37562 12.3199 2.37426 12.3115 2.37517C12.3081 2.37554 12.3049 2.37633 12.3005 2.3786"
          fill="currentColor"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.711 1.94414C14.2067 0.46664 12.3345 -0.695121 11.2523 0.485802L2.88718 9.61425C2.03255 10.5469 2.6822 12.0701 3.96208 12.0701H7.98708C8.12385 12.0701 8.2326 12.2072 8.18691 12.3519L6.37862 18.0815C5.91161 19.5613 7.78743 20.6893 8.85383 19.5056L17.122 10.3273C17.9648 9.39183 17.3127 7.88077 16.0387 7.88077H12.0138C11.8755 7.88077 11.7663 7.74073 11.8152 7.59516L13.711 1.94414Z"
          fill="#191B1F"
        />
      </svg>
    ),
    subItems: [
      { id: 'all-workflows', title: 'All workflows' },
      { id: 'history', title: 'History' },
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.54167 3.875C8.49565 3.875 8.45833 3.91231 8.45833 3.95833V16.125H11.5417V3.95833C11.5417 3.9123 11.5044 3.875 11.4583 3.875H8.54167ZM13.0417 6.54167V3.95833C13.0417 3.0839 12.3328 2.375 11.4583 2.375H8.54167C7.66722 2.375 6.95833 3.08389 6.95833 3.95833V10.7083H3.95833C3.0839 10.7083 2.375 11.4172 2.375 12.2917V16.0417C2.375 16.9161 3.0839 17.625 3.95833 17.625H16.4583C17.1026 17.625 17.625 17.1026 17.625 16.4583V8.125C17.625 7.25056 16.9161 6.54167 16.0417 6.54167H13.0417ZM13.0417 8.04167V16.125H16.125V8.125C16.125 8.07897 16.0877 8.04167 16.0417 8.04167H13.0417ZM6.95833 12.2083H3.95833C3.9123 12.2083 3.875 12.2456 3.875 12.2917V16.0417C3.875 16.0877 3.9123 16.125 3.95833 16.125H6.95833V12.2083Z"
          fill="currentColor"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.16667 2.50085C8.47633 2.50085 7.91667 3.0605 7.91667 3.75085V16.2509C7.91667 16.9412 8.47633 17.5009 9.16667 17.5009H10.8333C11.5237 17.5009 12.0833 16.9412 12.0833 16.2509V3.75085C12.0833 3.0605 11.5237 2.50085 10.8333 2.50085H9.16667Z"
          fill="#191B1F"
        />
        <path
          d="M3.75 10.8342C3.05964 10.8342 2.5 11.3938 2.5 12.0842V16.2509C2.5 16.9412 3.05964 17.5009 3.75 17.5009H5.41667C6.10702 17.5009 6.66667 16.9412 6.66667 16.2509V12.0842C6.66667 11.3938 6.10702 10.8342 5.41667 10.8342H3.75Z"
          fill="#191B1F"
        />
        <path
          d="M13.3333 7.91752C13.3333 7.22716 13.893 6.66752 14.5833 6.66752H16.25C16.9403 6.66752 17.5 7.22716 17.5 7.91752V16.2509C17.5 16.9412 16.9403 17.5009 16.25 17.5009H14.5833C13.893 17.5009 13.3333 16.9412 13.3333 16.2509V7.91752Z"
          fill="#191B1F"
        />
      </svg>
    ),
    subItems: [
      { id: 'dashboard', title: 'Dashboard' },
      { id: 'reports', title: 'Reports' },
      { id: 'insights', title: 'Insights' },
    ],
  },
  {
    id: 'paywalls',
    title: 'Paywalls',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99984 3.04163C6.15686 3.04163 3.0415 6.15698 3.0415 9.99996C3.0415 13.8429 6.15686 16.9583 9.99984 16.9583C13.8428 16.9583 16.9582 13.8429 16.9582 9.99996C16.9582 6.15698 13.8428 3.04163 9.99984 3.04163ZM1.5415 9.99996C1.5415 5.32855 5.32843 1.54163 9.99984 1.54163C14.6712 1.54163 18.4582 5.32855 18.4582 9.99996C18.4582 14.6713 14.6712 18.4583 9.99984 18.4583C5.32843 18.4583 1.5415 14.6713 1.5415 9.99996ZM9.99984 4.53931C10.4141 4.53931 10.7498 4.8751 10.7498 5.28931V5.90739C11.4499 6.06601 12.0674 6.44488 12.4623 6.99104C12.7051 7.32669 12.6297 7.79555 12.2941 8.03826C11.9584 8.28098 11.4896 8.20565 11.2468 7.87C11.0378 7.58096 10.5884 7.32403 9.99984 7.32403H9.76192C8.96015 7.32403 8.60864 7.81747 8.60864 8.09667V8.16203C8.60864 8.38477 8.77328 8.70154 9.23447 8.88602L9.23447 8.88602L11.3223 9.72118C12.2061 10.0747 12.891 10.8576 12.891 11.8379C12.891 13.0644 11.8814 13.8988 10.7498 14.1183V14.7106C10.7498 15.1248 10.4141 15.4606 9.99984 15.4606C9.58562 15.4606 9.24984 15.1248 9.24984 14.7106V14.0925C8.54973 13.9339 7.93228 13.555 7.53734 13.0089C7.29462 12.6732 7.36995 12.2044 7.7056 11.9616C8.04125 11.7189 8.51011 11.7942 8.75283 12.1299C8.96185 12.4189 9.41124 12.6759 9.99984 12.6759H10.156C11.0029 12.6759 11.391 12.1532 11.391 11.8379C11.391 11.6151 11.2264 11.2984 10.7652 11.1139L10.7652 11.1139L8.67738 10.2787C8.67737 10.2787 8.67737 10.2787 8.67737 10.2787C7.79358 9.92521 7.10864 9.14232 7.10864 8.16203V8.09667C7.10864 6.87828 8.12929 6.06181 9.24984 5.86831V5.28931C9.24984 4.8751 9.58562 4.53931 9.99984 4.53931Z"
          fill="currentColor"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.6665 10.0001C1.6665 5.39771 5.39746 1.66675 9.99984 1.66675C14.6022 1.66675 18.3332 5.39771 18.3332 10.0001C18.3332 14.6024 14.6022 18.3334 9.99984 18.3334C5.39746 18.3334 1.6665 14.6024 1.6665 10.0001ZM9.99984 4.66443C10.345 4.66443 10.6248 4.94426 10.6248 5.28943V6.00891C11.3388 6.14747 11.968 6.52089 12.3611 7.06441C12.5633 7.34413 12.5005 7.73485 12.2208 7.93711C11.9411 8.13936 11.5503 8.07657 11.3481 7.79686C11.1123 7.47069 10.6224 7.19916 9.99984 7.19916H9.76192C8.91859 7.19916 8.48367 7.72397 8.48367 8.09679V8.16216C8.48367 8.448 8.69167 8.80366 9.188 9.00225L11.2758 9.83733C12.1245 10.1767 12.766 10.9209 12.766 11.838C12.766 13.0212 11.7557 13.8352 10.6248 14.0139V14.7107C10.6248 15.0559 10.345 15.3357 9.99984 15.3357C9.65467 15.3357 9.37484 15.0559 9.37484 14.7107V13.9912C8.66092 13.8527 8.03164 13.4792 7.63862 12.9357C7.43636 12.656 7.49915 12.2653 7.77887 12.0631C8.05859 11.8608 8.44934 11.9236 8.65159 12.2033C8.88742 12.5295 9.37725 12.801 9.99984 12.801H10.156C11.0445 12.801 11.516 12.2469 11.516 11.838C11.516 11.5522 11.308 11.1965 10.8117 10.9979L8.72384 10.1628C7.87521 9.82341 7.23364 9.07925 7.23364 8.16216V8.09679C7.23364 6.92227 8.25546 6.12648 9.37484 5.97532V5.28943C9.37484 4.94426 9.65467 4.66443 9.99984 4.66443Z"
          fill="#191B1F"
        />
      </svg>
    ),
    subItems: [
      { id: 'paywalls', title: 'Paywalls' },
      { id: 'subscription-groups', title: 'Subscription groups' },
      { id: 'transactions', title: 'Transactions' },
      { id: 'subscriptions', title: 'Subscriptions' },
      { id: 'coupons', title: 'Coupons' },
      { id: 'taxes', title: 'Taxes' },
      { id: 'export-logs', title: 'Export logs' },
      { id: 'settings', title: 'Settings' },
    ],
  },
  {
    id: 'affiliates',
    title: 'Affiliates',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.927 3.764C14.1594 3.42107 14.6257 3.33141 14.9686 3.56374C16.6434 4.69839 17.9357 6.423 18.5015 8.53482C18.6456 9.07249 18.7366 9.61265 18.7772 10.1493C18.8084 10.5624 18.499 10.9225 18.0859 10.9538C17.6729 10.9851 17.3127 10.6756 17.2815 10.2625C17.2478 9.81847 17.1725 9.37039 17.0527 8.92305C16.5833 7.17152 15.514 5.74503 14.1273 4.80558C13.7844 4.57325 13.6947 4.10692 13.927 3.764ZM6.15683 3.84742C6.39763 4.18445 6.31962 4.65287 5.98259 4.89366C4.22022 6.15282 3.10883 8.17151 2.99106 10.3575C2.96878 10.7711 2.61542 11.0883 2.2018 11.066C1.78819 11.0438 1.47095 10.6904 1.49324 10.2768C1.63546 7.63676 2.97619 5.19812 5.11058 3.67317C5.44761 3.43237 5.91604 3.51038 6.15683 3.84742ZM14.2714 17.6158C14.4518 17.9886 14.2958 18.4371 13.9229 18.6175C13.4406 18.851 12.93 19.042 12.3949 19.1854C10.4156 19.7157 8.40986 19.5106 6.66833 18.7376C6.28973 18.5696 6.11904 18.1264 6.28708 17.7478C6.45512 17.3692 6.89826 17.1986 7.27685 17.3666C8.71704 18.0058 10.3714 18.1747 12.0067 17.7365C12.4502 17.6176 12.8721 17.4597 13.2696 17.2673C13.6424 17.0869 14.0909 17.2429 14.2714 17.6158Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5866 2.50158C10.5152 2.23485 10.241 2.07656 9.97428 2.14803C9.70754 2.2195 9.54925 2.49367 9.62072 2.7604C9.69219 3.02713 9.96636 3.18542 10.2331 3.11395C10.4998 3.04248 10.6581 2.76831 10.5866 2.50158ZM9.58605 0.699138C10.653 0.413254 11.7497 1.04642 12.0355 2.11335C12.3214 3.18028 11.6883 4.27696 10.6213 4.56284C9.55439 4.84872 8.45772 4.21556 8.17183 3.14863C7.88595 2.0817 8.51911 0.985022 9.58605 0.699138Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.2535 14.5015C17.182 14.2348 16.9078 14.0765 16.6411 14.1479C16.3744 14.2194 16.2161 14.4936 16.2875 14.7603C16.359 15.027 16.6332 15.1853 16.8999 15.1139C17.1666 15.0424 17.3249 14.7682 17.2535 14.5015ZM16.2529 12.6991C17.3198 12.4132 18.4165 13.0463 18.7023 14.1133C18.9882 15.1802 18.3551 16.2769 17.2881 16.5628C16.2212 16.8486 15.1245 16.2155 14.8386 15.1485C14.5528 14.0816 15.1859 12.9849 16.2529 12.6991Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.48346 14.771C3.41199 14.5043 3.13782 14.346 2.87109 14.4175C2.60435 14.4889 2.44606 14.7631 2.51753 15.0298C2.589 15.2966 2.86317 15.4549 3.12991 15.3834C3.39664 15.3119 3.55493 15.0378 3.48346 14.771ZM2.48286 12.9686C3.54979 12.6827 4.64646 13.3159 4.93235 14.3828C5.21823 15.4497 4.58507 16.5464 3.51813 16.8323C2.4512 17.1182 1.35453 16.485 1.06864 15.4181C0.782761 14.3511 1.41593 13.2545 2.48286 12.9686Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99985 6.08353C10.4141 6.08353 10.7499 6.41932 10.7499 6.83353V7.29908C11.4107 7.44136 12.0026 7.77172 12.3914 8.26058C12.6493 8.58474 12.5956 9.05656 12.2714 9.31442C11.9472 9.57228 11.4754 9.51853 11.2175 9.19436C11.0289 8.95716 10.594 8.7199 9.99985 8.7199H9.76836C9.39828 8.7199 9.0937 8.83006 8.90003 8.97092C8.70561 9.11231 8.6665 9.24386 8.6665 9.31669V9.37451C8.6665 9.48493 8.76839 9.75433 9.24045 9.92599L11.2719 10.6647C11.2719 10.6647 11.2719 10.6647 11.2719 10.6647C12.1085 10.9689 12.8332 11.6722 12.8332 12.6259C12.8332 13.3128 12.4488 13.8691 11.9586 14.2256C11.6157 14.475 11.1995 14.6467 10.7499 14.7276V15.1669C10.7499 15.5811 10.4141 15.9169 9.99985 15.9169C9.58564 15.9169 9.24985 15.5811 9.24985 15.1669V14.7013C8.58904 14.559 7.99712 14.2286 7.60827 13.7398C7.35041 13.4156 7.40415 12.9438 7.72832 12.6859C8.05248 12.4281 8.5243 12.4818 8.78216 12.806C8.97086 13.0432 9.40571 13.2805 9.99985 13.2805H10.1518C10.5439 13.2805 10.8683 13.1638 11.0764 13.0125C11.2852 12.8607 11.3332 12.7147 11.3332 12.6259C11.3332 12.5154 11.2313 12.246 10.7593 12.0744L8.72783 11.3357C8.72783 11.3357 8.72784 11.3357 8.72783 11.3357C7.89125 11.0315 7.1665 10.3282 7.1665 9.37451V9.31669C7.1665 8.64572 7.54194 8.10387 8.01777 7.75781C8.36593 7.5046 8.79137 7.33426 9.24985 7.26086V6.83353C9.24985 6.41932 9.58564 6.08353 9.99985 6.08353Z"
          fill="currentColor"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.927 3.76387C14.1594 3.42095 14.6257 3.33129 14.9686 3.56362C16.6434 4.69827 17.9357 6.42288 18.5015 8.53469C18.6456 9.07237 18.7366 9.61252 18.7772 10.1492C18.8084 10.5622 18.499 10.9224 18.0859 10.9537C17.6729 10.9849 17.3127 10.6755 17.2815 10.2624C17.2478 9.81835 17.1725 9.37027 17.0527 8.92292C16.5833 7.1714 15.514 5.74491 14.1273 4.80546C13.7844 4.57313 13.6947 4.1068 13.927 3.76387ZM6.15683 3.84729C6.39763 4.18432 6.31962 4.65275 5.98259 4.89354C4.22022 6.15269 3.10883 8.17138 2.99106 10.3574C2.96878 10.771 2.61542 11.0882 2.2018 11.0659C1.78819 11.0436 1.47095 10.6903 1.49324 10.2767C1.63546 7.63664 2.97619 5.198 5.11058 3.67305C5.44761 3.43225 5.91604 3.51026 6.15683 3.84729ZM14.2714 17.6156C14.4518 17.9885 14.2958 18.437 13.9229 18.6174C13.4406 18.8508 12.93 19.0419 12.3949 19.1853C10.4156 19.7156 8.40986 19.5105 6.66833 18.7375C6.28973 18.5695 6.11904 18.1263 6.28708 17.7477C6.45512 17.3691 6.89826 17.1984 7.27685 17.3665C8.71704 18.0057 10.3714 18.1745 12.0067 17.7364C12.4502 17.6175 12.8721 17.4595 13.2696 17.2672C13.6424 17.0868 14.0909 17.2428 14.2714 17.6156Z"
          fill="#191B1F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5866 2.50146C10.5152 2.23472 10.241 2.07643 9.97428 2.1479C9.70754 2.21938 9.54925 2.49354 9.62072 2.76028C9.69219 3.02701 9.96636 3.1853 10.2331 3.11383C10.4998 3.04236 10.6581 2.76819 10.5866 2.50146ZM9.58605 0.699016C10.653 0.413132 11.7497 1.0463 12.0355 2.11323C12.3214 3.18016 11.6883 4.27684 10.6213 4.56272C9.55439 4.8486 8.45772 4.21544 8.17183 3.14851C7.88595 2.08157 8.51911 0.984899 9.58605 0.699016Z"
          fill="#191B1F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.2535 14.5014C17.182 14.2346 16.9078 14.0763 16.6411 14.1478C16.3744 14.2193 16.2161 14.4935 16.2875 14.7602C16.359 15.0269 16.6332 15.1852 16.8999 15.1137C17.1666 15.0423 17.3249 14.7681 17.2535 14.5014ZM16.2529 12.6989C17.3198 12.413 18.4165 13.0462 18.7023 14.1131C18.9882 15.1801 18.3551 16.2767 17.2881 16.5626C16.2212 16.8485 15.1245 16.2154 14.8386 15.1484C14.5528 14.0815 15.1859 12.9848 16.2529 12.6989Z"
          fill="#191B1F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.48346 14.7709C3.41199 14.5042 3.13782 14.3459 2.87109 14.4173C2.60435 14.4888 2.44606 14.763 2.51753 15.0297C2.589 15.2965 2.86317 15.4547 3.12991 15.3833C3.39664 15.3118 3.55493 15.0376 3.48346 14.7709ZM2.48286 12.9685C3.54979 12.6826 4.64646 13.3157 4.93235 14.3827C5.21823 15.4496 4.58507 16.5463 3.51813 16.8322C2.4512 17.118 1.35453 16.4849 1.06864 15.418C0.782761 14.351 1.41593 13.2543 2.48286 12.9685Z"
          fill="#191B1F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99985 6.08341C10.4141 6.08341 10.7499 6.4192 10.7499 6.83341V7.29896C11.4107 7.44124 12.0026 7.7716 12.3914 8.26046C12.6493 8.58462 12.5956 9.05644 12.2714 9.3143C11.9472 9.57216 11.4754 9.51841 11.2175 9.19424C11.0289 8.95704 10.594 8.71977 9.99985 8.71977H9.76836C9.39828 8.71977 9.0937 8.82994 8.90003 8.97079C8.70561 9.11218 8.6665 9.24373 8.6665 9.31657V9.37439C8.6665 9.48481 8.76839 9.75421 9.24045 9.92586L11.2719 10.6646C11.2719 10.6646 11.2719 10.6646 11.2719 10.6646C12.1085 10.9688 12.8332 11.6721 12.8332 12.6257C12.8332 13.3127 12.4488 13.869 11.9586 14.2255C11.6157 14.4749 11.1995 14.6466 10.7499 14.7274V15.1667C10.7499 15.581 10.4141 15.9167 9.99985 15.9167C9.58564 15.9167 9.24985 15.581 9.24985 15.1667V14.7012C8.58904 14.5589 7.99712 14.2285 7.60827 13.7397C7.35041 13.4155 7.40415 12.9437 7.72832 12.6858C8.05248 12.428 8.5243 12.4817 8.78216 12.8059C8.97086 13.0431 9.40571 13.2804 9.99985 13.2804H10.1518C10.5439 13.2804 10.8683 13.1637 11.0764 13.0124C11.2852 12.8605 11.3332 12.7145 11.3332 12.6257C11.3332 12.5153 11.2313 12.2459 10.7593 12.0743L8.72783 11.3356C8.72783 11.3356 8.72784 11.3356 8.72783 11.3356C7.89125 11.0313 7.1665 10.3281 7.1665 9.37439V9.31657C7.1665 8.64559 7.54194 8.10375 8.01777 7.75769C8.36593 7.50448 8.79137 7.33414 9.24985 7.26073V6.83341C9.24985 6.4192 9.58564 6.08341 9.99985 6.08341Z"
          fill="#191B1F"
        />
      </svg>
    ),
    subItems: [
      { id: 'affiliates', title: 'Affiliates' },
      { id: 'commissions', title: 'Commissions' },
      { id: 'settings', title: 'Settings' },
    ],
  },
  {
    id: 'site',
    title: 'Site',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.95817 4.70837C3.45191 4.70837 3.0415 5.11878 3.0415 5.62504V12.7084C3.0415 13.2147 3.4519 13.625 3.95817 13.625H16.0415C16.5478 13.625 16.9582 13.2147 16.9582 12.7084V5.62504C16.9582 5.11877 16.5478 4.70837 16.0415 4.70837H3.95817ZM1.5415 5.62504C1.5415 4.29035 2.62348 3.20837 3.95817 3.20837H16.0415C17.3762 3.20837 18.4582 4.29036 18.4582 5.62504V12.7084C18.4582 14.0431 17.3762 15.125 16.0415 15.125H13.4582V16.875C13.4582 17.2893 13.1224 17.625 12.7082 17.625H7.2915C6.87729 17.625 6.5415 17.2893 6.5415 16.875V15.125H3.95817C2.62349 15.125 1.5415 14.0431 1.5415 12.7084V5.62504ZM8.0415 15.125V16.125H11.9582V15.125H8.0415Z"
          fill="currentColor"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.6665 5.62492C1.6665 4.35927 2.69252 3.33325 3.95817 3.33325H16.0415C17.3072 3.33325 18.3332 4.35927 18.3332 5.62492V12.7083C18.3332 13.9739 17.3072 14.9999 16.0415 14.9999H13.3332V16.8749C13.3332 17.2201 13.0533 17.4999 12.7082 17.4999H7.2915C6.94633 17.4999 6.6665 17.2201 6.6665 16.8749V14.9999H3.95817C2.69252 14.9999 1.6665 13.9739 1.6665 12.7083V5.62492ZM7.9165 14.9999V16.2499H12.0832V14.9999H7.9165Z"
          fill="#191B1F"
        />
      </svg>
    ),
    subItems: [
      { id: 'navigation', title: 'Navigation' },
      { id: 'seo', title: 'SEO' },
      { id: 'redirects', title: 'Redirects' },
      { id: 'defaults', title: 'Defaults' },
      { id: 'code-snippets', title: 'Code snippets' },
    ],
  },

  {
    id: 'branded-app',
    title: 'Branded app',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.0415 3.12504C4.0415 1.79035 5.12348 0.708374 6.45817 0.708374H13.5415C14.8762 0.708374 15.9582 1.79036 15.9582 3.12504V16.875C15.9582 18.2098 14.8762 19.2917 13.5415 19.2917H6.45817C5.12349 19.2917 4.0415 18.2098 4.0415 16.875V3.12504ZM6.45817 2.20837C5.95191 2.20837 5.5415 2.61878 5.5415 3.12504V16.875C5.5415 17.3813 5.9519 17.7917 6.45817 17.7917H13.5415C14.0478 17.7917 14.4582 17.3813 14.4582 16.875V3.12504C14.4582 2.61877 14.0478 2.20837 13.5415 2.20837H6.45817ZM8.20817 3.54171C8.20817 3.12749 8.54396 2.79171 8.95817 2.79171H11.0415C11.4557 2.79171 11.7915 3.12749 11.7915 3.54171C11.7915 3.95592 11.4557 4.29171 11.0415 4.29171H8.95817C8.54396 4.29171 8.20817 3.95592 8.20817 3.54171Z"
          fill="currentColor"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.45817 19.1666C5.19252 19.1666 4.1665 18.1406 4.1665 16.8749V3.12492C4.1665 1.85927 5.19252 0.833252 6.45817 0.833252H13.5415C14.8072 0.833252 15.8332 1.85927 15.8332 3.12492V16.8749C15.8332 18.1406 14.8072 19.1666 13.5415 19.1666H6.45817ZM8.95817 2.90825C8.613 2.90825 8.33317 3.18808 8.33317 3.53325C8.33317 3.87843 8.613 4.15825 8.95817 4.15825H11.0415C11.3867 4.15825 11.6665 3.87843 11.6665 3.53325C11.6665 3.18808 11.3867 2.90825 11.0415 2.90825H8.95817Z"
          fill="#191B1F"
        />
      </svg>
    ),
    subItems: [],
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.20997 2.708C8.60897 2.10952 9.28062 1.75 10 1.75C10.7194 1.75 11.391 2.10952 11.79 2.708L12.2523 3.40135C12.4534 3.70302 12.8202 3.84869 13.1735 3.76717L13.7438 3.63558C13.7438 3.63559 13.7438 3.63558 13.7438 3.63558C14.4779 3.46617 15.2476 3.6869 15.7803 4.21968C16.3131 4.75243 16.5339 5.52207 16.3645 6.25623L16.2328 6.82648C16.1513 7.17968 16.297 7.54655 16.5986 7.7477C16.5986 7.74769 16.5986 7.74771 16.5986 7.7477L17.292 8.20995C17.8904 8.60895 18.25 9.28064 18.25 10C18.25 10.7194 17.8905 11.391 17.2921 11.79L16.5987 12.2523C16.5986 12.2523 16.5987 12.2522 16.5987 12.2523C16.297 12.4534 16.1513 12.8203 16.2328 13.1734C16.2328 13.1734 16.2328 13.1735 16.2328 13.1734L16.3644 13.7437C16.5338 14.4778 16.3131 15.2476 15.7803 15.7803C15.2476 16.3131 14.478 16.5339 13.7438 16.3645L13.1735 16.2328C13.1735 16.2328 13.1736 16.2328 13.1735 16.2328C12.8203 16.1513 12.4534 16.297 12.2523 16.5986C12.2523 16.5986 12.2523 16.5986 12.2523 16.5986L11.79 17.292C11.391 17.8904 10.7194 18.25 10 18.25C9.28064 18.25 8.60899 17.8905 8.20998 17.2921L7.74774 16.5986C7.74772 16.5986 7.74775 16.5987 7.74774 16.5986C7.54661 16.297 7.17976 16.1513 6.82658 16.2328C6.82654 16.2328 6.82661 16.2328 6.82658 16.2328L6.25637 16.3644C5.5222 16.5338 4.75243 16.3131 4.21968 15.7803C3.6869 15.2476 3.46616 14.4779 3.63558 13.7438C3.63558 13.7438 3.63558 13.7438 3.63558 13.7438L3.76717 13.1735C3.84869 12.8203 3.70302 12.4534 3.40135 12.2523L2.70801 11.79C2.10953 11.391 1.75 10.7194 1.75 10C1.75 9.28062 2.10952 8.60897 2.708 8.20997C2.708 8.20997 2.70801 8.20997 2.708 8.20997L3.40134 7.74772C3.70301 7.54661 3.84869 7.17975 3.76717 6.82648L3.63558 6.25627C3.46616 5.5221 3.68689 4.75245 4.21967 4.21967C4.75245 3.68689 5.52211 3.46616 6.25626 3.63558C6.25626 3.63558 6.25627 3.63558 6.25626 3.63558L6.82648 3.76716C7.17974 3.84869 7.5466 3.70302 7.74771 3.40136L8.20997 2.708C8.20997 2.708 8.20997 2.70801 8.20997 2.708ZM10 3.25C9.78221 3.25 9.57887 3.35882 9.45803 3.54007L8.99579 4.23341C8.44858 5.05421 7.45042 5.45057 6.4892 5.22875C6.4892 5.22875 6.48921 5.22875 6.4892 5.22875L5.91899 5.09717C5.68876 5.04404 5.4474 5.11326 5.28033 5.28033C5.11326 5.4474 5.04404 5.68875 5.09717 5.91898L5.22875 6.48919C5.22875 6.48918 5.22875 6.48919 5.22875 6.48919C5.45057 7.45041 5.05421 8.44858 4.23341 8.99579L3.54008 9.45803C3.35883 9.57886 3.25 9.78221 3.25 10C3.25 10.2178 3.35882 10.4211 3.54007 10.542L4.23342 11.0042C5.05421 11.5514 5.45057 12.5496 5.22876 13.5108L5.09717 14.0811C5.04405 14.3112 5.11325 14.5526 5.28032 14.7197C5.44738 14.8867 5.68869 14.956 5.91888 14.9029C5.91884 14.9029 5.91893 14.9029 5.91888 14.9029L6.48909 14.7712C7.45036 14.5494 8.44858 14.9459 8.99576 15.7665L9.45802 16.4599C9.45801 16.4599 9.45803 16.46 9.45802 16.4599C9.57885 16.6411 9.78222 16.75 10 16.75C10.2178 16.75 10.4211 16.6412 10.542 16.46C10.5419 16.46 10.542 16.46 10.542 16.46L11.0042 15.7666C11.5514 14.9459 12.5495 14.5494 13.5108 14.7712L14.081 14.9029C14.081 14.9029 14.0811 14.9029 14.081 14.9029C14.3112 14.9559 14.5526 14.8867 14.7197 14.7197C14.8867 14.5526 14.956 14.3113 14.9029 14.0811C14.9029 14.0811 14.9029 14.0812 14.9029 14.0811L14.7712 13.5109C14.5494 12.5496 14.9459 11.5514 15.7665 11.0042L16.4599 10.542C16.4599 10.542 16.46 10.542 16.4599 10.542C16.6411 10.4211 16.75 10.2178 16.75 10C16.75 9.78222 16.6412 9.57888 16.46 9.45805C16.46 9.45804 16.46 9.45806 16.46 9.45805L15.7666 8.9958C14.9459 8.44862 14.5494 7.45046 14.7712 6.4892L14.9029 5.91902C14.9029 5.91906 14.9029 5.91897 14.9029 5.91902C14.9559 5.68884 14.8867 5.44738 14.7197 5.28032C14.5526 5.11325 14.3113 5.04404 14.0811 5.09717L13.5108 5.22875C13.5108 5.22875 13.5108 5.22875 13.5108 5.22875C12.5496 5.45057 11.5514 5.05421 11.0042 4.23342L10.542 3.54007C10.4211 3.35883 10.2178 3.25 10 3.25ZM6.75 10C6.75 8.20504 8.20504 6.75 10 6.75C11.795 6.75 13.25 8.20504 13.25 10C13.25 11.795 11.795 13.25 10 13.25C8.20504 13.25 6.75 11.795 6.75 10ZM10 8.25C9.03346 8.25 8.25 9.03346 8.25 10C8.25 10.9665 9.03346 11.75 10 11.75C10.9665 11.75 11.75 10.9665 11.75 10C11.75 9.03346 10.9665 8.25 10 8.25Z"
          fill="currentColor"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.28139 2.58637C8.66442 2.0118 9.30925 1.66669 9.99984 1.66669C10.6904 1.66669 11.3353 2.0118 11.7183 2.58637L12.1933 3.29898C12.4337 3.6595 12.8721 3.83358 13.2943 3.73615L13.8803 3.60091C14.5859 3.43809 15.3256 3.65023 15.8376 4.16225C16.3497 4.67427 16.5618 5.41394 16.3989 6.1195L16.2637 6.70555C16.1663 7.12775 16.3403 7.56616 16.7009 7.8065L17.4135 8.28157C17.9881 8.6646 18.3332 9.30944 18.3332 10C18.3332 10.6906 17.9881 11.3354 17.4135 11.7184L16.7009 12.1935C16.3403 12.4339 16.1663 12.8723 16.2637 13.2945L16.3989 13.8805C16.5618 14.5861 16.3497 15.3258 15.8376 15.8378C15.3256 16.3499 14.5859 16.5619 13.8803 16.3991L13.2943 16.2639C12.8721 16.1664 12.4337 16.3405 12.1933 16.7011L11.7183 17.4137C11.3353 17.9883 10.6904 18.3334 9.99984 18.3334C9.30925 18.3334 8.66442 17.9883 8.28139 17.4137L7.80632 16.7011C7.56598 16.3405 7.12756 16.1664 6.70537 16.2639L6.11932 16.3991C5.41375 16.5619 4.67409 16.3499 4.16206 15.8378C3.65005 15.3258 3.4379 14.5861 3.60073 13.8805L3.73597 13.2945C3.8334 12.8723 3.65931 12.4339 3.2988 12.1935L2.58619 11.7184C2.01162 11.3354 1.6665 10.6906 1.6665 10C1.6665 9.30944 2.01162 8.6646 2.58619 8.28157L3.2988 7.8065C3.65931 7.56616 3.8334 7.12775 3.73597 6.70555L3.60073 6.1195C3.4379 5.41395 3.65004 4.67427 4.16206 4.16225C4.67409 3.65022 5.41375 3.43809 6.11932 3.60091L6.70537 3.73615C7.12756 3.83358 7.56598 3.6595 7.80632 3.29898L8.28139 2.58637ZM7.39567 10C7.39567 8.56177 8.56159 7.39585 9.99984 7.39585C11.4381 7.39585 12.604 8.56177 12.604 10C12.604 11.4383 11.4381 12.6042 9.99984 12.6042C8.56159 12.6042 7.39567 11.4383 7.39567 10Z"
          fill="#191B1F"
        />
      </svg>
    ),
    subItems: [
      { id: 'general', title: 'General' },
      { id: 'security', title: 'Security' },
      { id: 'notifications', title: 'Notifications' },
    ],
  },
];
