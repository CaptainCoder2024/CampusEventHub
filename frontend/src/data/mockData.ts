export interface CampusEvent {
  id: string;
  title: string;
  organization: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  spotsAvailable: number;
  totalSpots: number;
  image: string;
  isSignedUp?: boolean;
  registrationStatus?: 'pending' | 'confirmed' | 'cancelled';
  contributionConfirmed?: boolean;
}


export interface Post {
  id: string;
  eventId: string;
  eventTitle: string;
  author: string;
  authorAvatar: string;
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
}

export interface Notification {
  id: string;
  type: 'signup' | 'reminder' | 'update' | 'message';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  bio: string;
  activityPoints: number; // Điểm hoạt động / giờ tham gia
  eventsAttended: number;
  joinedDate: string;
}

export const campusEvents: CampusEvent[] = [
  {
    id: '1',
    title: 'AI & Machine Learning Campus Workshop',
    organization: 'Faculty of Information Technology',
    date: '2026-10-15',
    time: '8:30 AM - 11:30 AM',
    location: 'Auditorium Hall A, Building E3',
    description: 'Explore the latest advances in Generative AI, LLMs, and real-world system integrations with tech lead mentors.',
    category: 'Academic & Tech',
    spotsAvailable: 45,
    totalSpots: 100,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1080&q=80',
    isSignedUp: false
  },
  {
    id: '2',
    title: 'Inter-University Esports Championship',
    organization: 'Campus Gaming & Esports Club',
    date: '2026-10-18',
    time: '1:00 PM - 6:00 PM',
    location: 'Multi-purpose Student Gymnasium',
    description: 'Annual competitive tournament featuring Arena of Valor and League of Legends. Open for all student teams.',
    category: 'Sports & Esports',
    spotsAvailable: 8,
    totalSpots: 32,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1080&q=80',
    isSignedUp: true,
    contributionConfirmed: true
  },
  {
    id: '3',
    title: 'Startup Pitch & Student Innovation Forum',
    organization: 'Youth Entrepreneurship Network',
    date: '2026-10-22',
    time: '2:00 PM - 5:30 PM',
    location: 'Co-working Innovation Space, 3rd Floor',
    description: 'Listen to campus founders pitch creative tech ventures and connect with venture capital investors.',
    category: 'Career & Business',
    spotsAvailable: 15,
    totalSpots: 60,
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1080&q=80',
    isSignedUp: true,
    contributionConfirmed: false
  },
  {
    id: '4',
    title: 'Green Campus Tree Planting & Zero-Waste Drive',
    organization: 'Campus Green Initiative Club',
    date: '2026-10-25',
    time: '8:00 AM - 12:00 PM',
    location: 'Central University Botanical Square',
    description: 'Promote sustainable university practices, waste segregation, and campus reforestation.',
    category: 'Environment',
    spotsAvailable: 20,
    totalSpots: 50,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1080&q=80',
    isSignedUp: false
  },
  {
    id: '5',
    title: 'Career Fair & Tech Mentorship Day',
    organization: 'University Career Support Center',
    date: '2026-10-28',
    time: '9:00 AM - 4:00 PM',
    location: 'Student Convention Hall',
    description: 'Meet recruiters from leading tech corporations, review CVs, and participate in mock technical interviews.',
    category: 'Career & Business',
    spotsAvailable: 60,
    totalSpots: 200,
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1080&q=80',
    isSignedUp: false
  },
  {
    id: '6',
    title: 'Annual Acoustic Music Night & Club Showcase',
    organization: 'Student Arts & Music Society',
    date: '2026-11-02',
    time: '6:30 PM - 9:30 PM',
    location: 'Outdoor University Amphitheater',
    description: 'An evening of live band performances, cultural performances, and freshers club recruitment.',
    category: 'Cultural & Arts',
    spotsAvailable: 30,
    totalSpots: 150,
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1080&q=80',
    isSignedUp: true,
    contributionConfirmed: true
  }
];

export const posts: Post[] = [
  {
    id: 'p1',
    eventId: '1',
    eventTitle: 'AI & Machine Learning Campus Workshop',
    author: 'Duc Thang',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thang',
    content: 'The hands-on session on LangGraph and RAG architectures was super insightful! Huge thanks to the IT Faculty organizers! 💻🚀',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1080&q=80',
    timestamp: '2 hours ago',
    likes: 42,
    comments: 8
  },
  {
    id: 'p2',
    eventId: '2',
    eventTitle: 'Inter-University Esports Championship',
    author: 'Minh Quan',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Quan',
    content: 'Incredible matches in the quarterfinals today! The live atmosphere at the gymnasium was electric. Ready for finals! 🎮🔥',
    timestamp: '5 hours ago',
    likes: 56,
    comments: 15
  },
  {
    id: 'p3',
    eventId: '4',
    eventTitle: 'Green Campus Tree Planting & Zero-Waste Drive',
    author: 'Thanh Mai',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mai',
    content: 'We planted over 100 new trees around the campus grounds this morning. Proud to contribute to a greener university environment! 🌿',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1080&q=80',
    timestamp: '1 day ago',
    likes: 67,
    comments: 18
  }
];

export const notifications: Notification[] = [
  {
    id: 'n1',
    type: 'reminder',
    title: 'Event Reminder',
    message: 'AI & Machine Learning Campus Workshop starts tomorrow at 8:30 AM in Auditorium Hall A.',
    timestamp: '1 hour ago',
    read: false
  },
  {
    id: 'n2',
    type: 'signup',
    title: 'Registration Confirmed',
    message: 'Your registration for the Inter-University Esports Championship is confirmed.',
    timestamp: '3 hours ago',
    read: false
  },
  {
    id: 'n3',
    type: 'update',
    title: 'Venue Update',
    message: 'The room for the Startup Pitch Forum has moved to Innovation Space, 3rd Floor.',
    timestamp: '1 day ago',
    read: true
  },
  {
    id: 'n4',
    type: 'reminder',
    title: 'Activity Milestone',
    message: 'Congratulations! You have completed 18 campus event participations this semester! 🎉',
    timestamp: '2 days ago',
    read: true
  }
];

export const userProfile: UserProfile = {
  name: 'Pham Tuan Viet',
  email: 'viet.campus@university.edu.vn',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Viet',
  bio: 'Senior IT undergraduate passionate about software engineering, AI agents, and organizing student technology workshops.',
  activityPoints: 85,
  eventsAttended: 14,
  joinedDate: 'September 2023'
};

export interface ManagedEvent {
  id: string;
  title: string;
  organization: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  totalSpots: number;
  image: string;
  status: 'active' | 'completed' | 'cancelled';
}

export interface EventParticipant {
  id: string;
  eventId: string;
  name: string;
  email: string;
  avatar: string;
  activityPoints: number;
  eventsAttended: number;
  status: 'pending' | 'confirmed' | 'rejected';
  appliedDate: string;
  contributionConfirmed: boolean;
}

export const managedEvents: ManagedEvent[] = [
  {
    id: 'm1',
    title: 'AI & Machine Learning Campus Workshop',
    organization: 'Faculty of Information Technology',
    date: '2026-10-15',
    time: '8:30 AM - 11:30 AM',
    location: 'Auditorium Hall A, Building E3',
    description: 'Technical workshop introducing neural architectures and applied AI.',
    category: 'Academic & Tech',
    totalSpots: 100,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1080&q=80',
    status: 'active'
  },
  {
    id: 'm2',
    title: 'Inter-University Esports Championship',
    organization: 'Campus Gaming Club',
    date: '2026-10-18',
    time: '1:00 PM - 6:00 PM',
    location: 'Multi-purpose Gymnasium',
    description: 'Championship esports tournament for student gaming divisions.',
    category: 'Sports & Esports',
    totalSpots: 32,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1080&q=80',
    status: 'active'
  }
];

export interface PendingManagerRequest {
  id: string;
  name: string;
  email: string;
  avatar: string;
  organization: string;
  reason: string;
  requestDate: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  accountType: 'user' | 'manager';
  activityPoints: number;
  eventsAttended: number;
  joinedDate: string;
  bio: string;
}

export interface AdminEvent {
  id: string;
  title: string;
  organization: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  totalSpots: number;
  image: string;
  status: 'active' | 'completed' | 'cancelled';
  createdBy: string;
}

export const pendingManagerRequests: PendingManagerRequest[] = [
  {
    id: 'pmr1',
    name: 'Hoang Nam',
    email: 'nam.hoang@studentunion.edu.vn',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nam',
    organization: 'University Youth Union',
    reason: 'President of Student Union applying to organize campus-wide sports and cultural festivals.',
    requestDate: '2 days ago'
  },
  {
    id: 'pmr2',
    name: 'Bao Linh',
    email: 'linh.bao@techclub.edu.vn',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Linh',
    organization: 'Campus IT & Robotics Club',
    reason: 'Lead organizer requesting manager privileges to host coding hackathons and technical seminars.',
    requestDate: '4 days ago'
  }
];

export const allUsers: User[] = [
  {
    id: 'u1',
    name: 'Pham Tuan Viet',
    email: 'viet.campus@university.edu.vn',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Viet',
    accountType: 'user',
    activityPoints: 85,
    eventsAttended: 14,
    joinedDate: 'September 2023',
    bio: 'Senior IT student and active event participant.'
  },
  {
    id: 'u2',
    name: 'Event Organizer',
    email: 'organizer@university.edu.vn',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Organizer',
    accountType: 'manager',
    activityPoints: 0,
    eventsAttended: 0,
    joinedDate: 'October 2023',
    bio: 'Campus Club Lead and Event Coordinator.'
  }
];

export const pendingEvents: AdminEvent[] = [
  {
    id: 'pe1',
    title: 'University Career Fair 2026',
    organization: 'Student Support Center',
    date: '2026-11-10',
    time: '8:00 AM - 4:00 PM',
    location: 'Main University Plaza',
    description: 'Annual corporate recruitment fair connecting undergraduates with top hiring companies.',
    category: 'Career & Business',
    totalSpots: 200,
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1080&q=80',
    status: 'active',
    createdBy: 'organizer@university.edu.vn'
  }
];

export const allEvents: AdminEvent[] = [
  {
    id: 'ae1',
    title: 'AI & Machine Learning Campus Workshop',
    organization: 'Faculty of Information Technology',
    date: '2026-10-15',
    time: '8:30 AM - 11:30 AM',
    location: 'Auditorium Hall A, Building E3',
    description: 'Technical workshop introducing neural architectures and applied AI.',
    category: 'Academic & Tech',
    totalSpots: 100,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1080&q=80',
    status: 'active',
    createdBy: 'organizer@university.edu.vn'
  }
];

export const eventParticipants: EventParticipant[] = [
  {
    id: 'v1',
    eventId: 'm1',
    name: 'Nguyen Van Thang',
    email: 'vanthang@gmail.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thang',
    activityPoints: 45,
    eventsAttended: 8,
    status: 'confirmed',
    appliedDate: '2 days ago',
    contributionConfirmed: true
  },
  {
    id: 'v2',
    eventId: 'm1',
    name: 'Pham Ngoc',
    email: 'phamngoc@gmail.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ngoc',
    activityPoints: 20,
    eventsAttended: 3,
    status: 'pending',
    appliedDate: '1 day ago',
    contributionConfirmed: false
  }
];