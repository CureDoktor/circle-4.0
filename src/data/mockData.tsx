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
      <img
        src="/icons/admin-nav/Dashboard.svg"
        alt="Dashboard"
        width="24"
        height="24"
      />
    ),
    activeIcon: (
      <img
        src="/icons/admin-nav/Dashboard-filled.svg"
        alt="Dashboard"
        width="24"
        height="24"
      />
    ),
    subItems: [],
  },
  {
    id: 'audience',
    title: 'Audience',
    icon: (
      <img
        src="/icons/admin-nav/Audience.svg"
        alt="Audience"
        width="24"
        height="24"
      />
    ),
    activeIcon: (
      <img
        src="/icons/admin-nav/Audience-filled.svg"
        alt="Audience"
        width="24"
        height="24"
      />
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
      <img
        src="/icons/admin-nav/Content.svg"
        alt="Content"
        width="24"
        height="24"
      />
    ),
    activeIcon: (
      <img
        src="/icons/admin-nav/Content-filled.svg"
        alt="Content"
        width="24"
        height="24"
      />
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
      <img
        src="/icons/admin-nav/Marketing.svg"
        alt="Marketing"
        width="24"
        height="24"
      />
    ),
    activeIcon: (
      <img
        src="/icons/admin-nav/Marketing-filled.svg"
        alt="Marketing"
        width="24"
        height="24"
      />
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
      <img
        src="/icons/admin-nav/AI.svg"
        alt="AI Agents"
        width="24"
        height="24"
      />
    ),
    activeIcon: (
      <img
        src="/icons/admin-nav/AI-filled.svg"
        alt="AI Agents"
        width="24"
        height="24"
      />
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
      <img
        src="/icons/admin-icons/AI-inbox.svg"
        alt="AI Inbox"
        width="24"
        height="24"
      />
    ),
    activeIcon: (
      <img
        src="/icons/admin-icons/AI-inbox-filled.svg"
        alt="AI Inbox"
        width="24"
        height="24"
      />
    ),
    subItems: [],
  },
  {
    id: 'workflows',
    title: 'Workflows',
    icon: (
      <img
        src="/icons/admin-nav/Workflows.svg"
        alt="Workflows"
        width="24"
        height="24"
      />
    ),
    activeIcon: (
      <img
        src="/icons/admin-nav/Workflows-filled.svg"
        alt="Workflows"
        width="24"
        height="24"
      />
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
      <img
        src="/icons/admin-nav/Analytics.svg"
        alt="Analytics"
        width="24"
        height="24"
      />
    ),
    activeIcon: (
      <img
        src="/icons/admin-nav/Analytics-filled.svg"
        alt="Analytics"
        width="24"
        height="24"
      />
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
      <img
        src="/icons/admin-nav/Paywalls.svg"
        alt="Paywalls"
        width="24"
        height="24"
      />
    ),
    activeIcon: (
      <img
        src="/icons/admin-nav/Paywalls-filled.svg"
        alt="Paywalls"
        width="24"
        height="24"
      />
    ),
    subItems: [
      { id: 'paywalls', title: 'Paywalls' },
      { id: 'subscription-groups', title: 'Subscription groups' },
      { id: 'transactions', title: 'Transactions' },
      { id: 'subscriptions', title: 'Subscriptions' },
      { id: 'coupons', title: 'Coupons' },
      { id: 'taxes', title: 'Taxes' },
      { id: 'export-logs', title: 'Export logs' },
      { id: 'paywalls-settings', title: 'Settings' },
    ],
  },
  {
    id: 'affiliates',
    title: 'Affiliates',
    icon: (
      <img
        src="/icons/admin-nav/Afiliates.svg"
        alt="Affiliates"
        width="24"
        height="24"
      />
    ),
    activeIcon: (
      <img
        src="/icons/admin-nav/Afiliates-filled.svg"
        alt="Affiliates"
        width="24"
        height="24"
      />
    ),
    subItems: [
      { id: 'affiliates', title: 'Affiliates' },
      { id: 'commissions', title: 'Commissions' },
      { id: 'affiliates-settings', title: 'Settings' },
    ],
  },
  {
    id: 'site',
    title: 'Site',
    icon: (
      <img
        src="/icons/admin-nav/Pagebuilder.svg"
        alt="Site"
        width="24"
        height="24"
      />
    ),
    activeIcon: (
      <img
        src="/icons/admin-nav/Pagebuilder-filled.svg"
        alt="Site"
        width="24"
        height="24"
      />
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
      <img
        src="/icons/admin-nav/Plusapp.svg"
        alt="Branded app"
        width="24"
        height="24"
      />
    ),
    activeIcon: (
      <img
        src="/icons/admin-nav/Plusapp-filled.svg"
        alt="Branded app"
        width="24"
        height="24"
      />
    ),
    subItems: [],
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: (
      <img
        src="/icons/admin-icons/settings.svg"
        alt="Settings"
        width="24"
        height="24"
      />
    ),
    activeIcon: (
      <img
        src="/icons/admin-icons/settings-filled.svg"
        alt="Settings"
        width="24"
        height="24"
      />
    ),
    subItems: [
      { id: 'general', title: 'General' },
      { id: 'custom-domain', title: 'Custom domain' },
      { id: 'community-ai', title: 'Community AI' },
      { id: 'mobile-app', title: 'Mobile app' },
      { id: 'weekly-digest', title: 'Weekly digest' },
      { id: 'embed', title: 'Embed' },
      { id: 'single-sign-on', title: 'Single sign-on' },
      { id: 'messaging', title: 'Messaging' },
      { id: 'legal', title: 'Legal' },
    ],
  },
];
