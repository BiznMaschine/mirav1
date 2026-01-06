/**
 * Mock Data for UX Prototype
 * 
 * All data is hardcoded for prototype purposes.
 * No real API calls or data persistence.
 */

// Types
export interface Reseller {
  id: string;
  name: string;
  email: string;
  rank: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
  segment: 'Novice' | 'Active' | 'Growth' | 'Ambassador';
  referralCode: string;
  joinDate: string;
  networkSize: number;
  teamSize: number;
  earnings: {
    thisMonth: number;
    lastMonth: number;
    total: number;
    available: number;
  };
  impact: {
    foodKg: number;
    neuterings: number;
    animalsHelped: number;
  };
  streak: {
    current: number;
    longest: number;
  };
  badges: string[];
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  orders: number;
  subscriptions: number;
  totalSpent: number;
  impact: {
    foodKg: number;
    neuterings: number;
    animalsHelped: number;
  };
  streak: {
    current: number;
    longest: number;
  };
  level: number;
  levelName?: string;
  paws: number;
  pawsToNextLevel: number;
  badges: string[];
  rewardsAvailable?: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'dog' | 'cat' | 'treat';
  skus: SKU[];
  imageUrl?: string;
}

export interface SKU {
  id: string;
  weight: number;
  price: number;
  impactMultiplier: number; // kg donated per kg purchased
}

export interface Order {
  id: string;
  customerId: string;
  resellerId?: string;
  date: string;
  status: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'completed';
  items: OrderItem[];
  total: number;
  impact: {
    foodKg: number;
    neuterings: number;
  };
}

export interface OrderItem {
  productId: string;
  skuId: string;
  quantity: number;
  price: number;
}

export interface Commission {
  id: string;
  resellerId: string;
  orderId: string;
  date: string;
  amount: number;
  level: 1 | 2 | 3 | 4;
  type: 'unilevel' | 'rank-bonus';
  status: 'pending' | 'paid';
}

export interface NetworkNode {
  id: string;
  name: string;
  rank: string;
  joinDate: string;
  personalVolume: number;
  teamVolume: number;
  directReports: number;
  children?: NetworkNode[];
}

export interface LeaderboardEntry {
  rank: number;
  resellerId: string;
  name: string;
  earnings: number;
  teamSize: number;
  rankBadge: string;
}

// VETO Integration Types
export interface Shelter {
  id: string;
  name: string;
  country: string;
  city: string;
  focus: string[];
  monthlyNeedKg: number;
  currentAnimalCount: { dogs: number; cats: number };
  storyKey: string; // Translation key for the story
  urgencyLevel: 'NORMAL' | 'URGENT' | 'EMERGENCY';
  heroImageUrl?: string;
}

export interface Campaign {
  id: string;
  name: string;
  type: 'EMERGENCY' | 'SEASONAL' | 'THEMATIC' | 'ONGOING';
  goalKg: number;
  currentKg: number;
  impactMultiplier: number;
  endDate?: string;
  urgencyStatement: string;
  urgencyStatementKey?: string; // Translation key for urgency statement
  urgencyStatementLink?: string; // Optional link URL
  status: 'UPCOMING' | 'ACTIVE' | 'COMPLETED';
  targetShelterIds: string[];
}

export interface VerificationEvidence {
  id: string;
  shelterId: string;
  date: string;
  kgVerified: number;
  photoUrls: string[];
  status: 'APPROVED' | 'PENDING';
}

// Mock Resellers
export const mockResellers: Reseller[] = [
  {
    id: 'res-001',
    name: 'Maria Schmidt',
    email: 'maria@example.com',
    rank: 'Gold',
    segment: 'Growth',
    referralCode: 'MARIA2024',
    joinDate: '2024-09-15',
    networkSize: 23,
    teamSize: 15,
    earnings: {
      thisMonth: 1247.50,
      lastMonth: 1108.20,
      total: 8450.30,
      available: 890.00,
    },
    impact: {
      foodKg: 1850,
      neuterings: 12,
      animalsHelped: 370,
    },
    streak: {
      current: 7,
      longest: 14,
    },
    badges: ['First Sale', 'Team Builder', 'Gold Rank', '7-Day Streak'],
  },
  {
    id: 'res-002',
    name: 'Anna K.',
    email: 'anna@example.com',
    rank: 'Platinum',
    segment: 'Ambassador',
    referralCode: 'ANNA2024',
    joinDate: '2024-08-01',
    networkSize: 45,
    teamSize: 32,
    earnings: {
      thisMonth: 3240.00,
      lastMonth: 2890.50,
      total: 15200.00,
      available: 2500.00,
    },
    impact: {
      foodKg: 4200,
      neuterings: 28,
      animalsHelped: 840,
    },
    streak: {
      current: 21,
      longest: 30,
    },
    badges: ['First Sale', 'Team Builder', 'Platinum Rank', '30-Day Streak', 'Top Performer'],
  },
  {
    id: 'res-003',
    name: 'Thomas M.',
    email: 'thomas@example.com',
    rank: 'Gold',
    segment: 'Growth',
    referralCode: 'THOMAS2024',
    joinDate: '2024-08-20',
    networkSize: 38,
    teamSize: 28,
    earnings: {
      thisMonth: 2890.00,
      lastMonth: 2650.00,
      total: 11200.00,
      available: 2100.00,
    },
    impact: {
      foodKg: 3600,
      neuterings: 24,
      animalsHelped: 720,
    },
    streak: {
      current: 12,
      longest: 18,
    },
    badges: ['First Sale', 'Team Builder', 'Gold Rank', '12-Day Streak'],
  },
];

// Current user (Maria)
export const currentReseller = mockResellers[0];

// Mock Customers
export const mockCustomers: Customer[] = [
  {
    id: 'cust-001',
    name: 'Thomas Weber',
    email: 'thomas.weber@example.com',
    joinDate: '2024-10-15',
    orders: 3,
    subscriptions: 2,
    totalSpent: 149.97,
    impact: {
      foodKg: 18.5,
      neuterings: 0.9,
      animalsHelped: 37,
    },
    streak: {
      current: 5,
      longest: 12,
    },
    level: 3,
    levelName: 'Animal Friend',
    paws: 1250,
    pawsToNextLevel: 1500,
    badges: ['First Purchase', 'Loyal Customer', '5-Day Streak', 'Impact Hero'],
    rewardsAvailable: 2,
  },
  {
    id: 'cust-002',
    name: 'Sarah Müller',
    email: 'sarah.m@example.com',
    joinDate: '2024-11-01',
    orders: 1,
    subscriptions: 1,
    totalSpent: 49.99,
    impact: {
      foodKg: 2.5,
      neuterings: 0.125,
      animalsHelped: 5,
    },
    streak: {
      current: 2,
      longest: 3,
    },
    level: 1,
    badges: ['First Purchase'],
  },
];

// Current customer (Thomas)
export const currentCustomer = mockCustomers[0];

// Customer Leaderboard
export interface CustomerLeaderboardEntry {
  rank: number;
  customerId: string;
  name: string;
  impact: number; // Total impact score (foodKg + neuterings * 10 + animalsHelped)
  orders: number;
  level: number;
}

export const mockCustomerLeaderboard: CustomerLeaderboardEntry[] = [
  { rank: 1, customerId: 'cust-001', name: 'Thomas W. (You)', impact: 65.4, orders: 3, level: 3 },
  { rank: 2, customerId: 'cust-003', name: 'Michael K.', impact: 45.2, orders: 5, level: 4 },
  { rank: 3, customerId: 'cust-004', name: 'Lisa S.', impact: 38.7, orders: 4, level: 3 },
  { rank: 4, customerId: 'cust-005', name: 'David M.', impact: 32.1, orders: 3, level: 2 },
  { rank: 5, customerId: 'cust-002', name: 'Sarah M.', impact: 12.6, orders: 1, level: 1 },
];

// Mock Products
export const mockProducts: Product[] = [
  {
    id: 'prod-001',
    name: 'Premium Dog Food',
    description: 'High-quality nutrition for adult dogs. Made with natural ingredients.',
    category: 'dog',
    skus: [
      { id: 'sku-001', weight: 4, price: 29.99, impactMultiplier: 0.5 },
      { id: 'sku-002', weight: 6, price: 39.99, impactMultiplier: 0.5 },
      { id: 'sku-003', weight: 12, price: 69.99, impactMultiplier: 0.5 },
      { id: 'sku-004', weight: 18, price: 99.99, impactMultiplier: 0.5 },
    ],
  },
  {
    id: 'prod-002',
    name: 'Organic Cat Food',
    description: 'Premium organic cat food with all essential nutrients.',
    category: 'cat',
    skus: [
      { id: 'sku-005', weight: 2, price: 24.99, impactMultiplier: 0.5 },
      { id: 'sku-006', weight: 5, price: 49.99, impactMultiplier: 0.5 },
      { id: 'sku-007', weight: 10, price: 89.99, impactMultiplier: 0.5 },
    ],
  },
  {
    id: 'prod-003',
    name: 'Puppy Starter Pack',
    description: 'Perfect nutrition for growing puppies.',
    category: 'dog',
    skus: [
      { id: 'sku-008', weight: 3, price: 29.99, impactMultiplier: 0.5 },
      { id: 'sku-009', weight: 6, price: 49.99, impactMultiplier: 0.5 },
    ],
  },
];

// Mock Orders
export const mockOrders: Order[] = [
  {
    id: 'ord-001',
    customerId: 'cust-001',
    resellerId: 'res-001',
    date: '2024-12-18',
    status: 'completed',
    items: [
      { productId: 'prod-001', skuId: 'sku-003', quantity: 1, price: 69.99 },
    ],
    total: 69.99,
    impact: {
      foodKg: 6,
      neuterings: 0.3,
    },
  },
  {
    id: 'ord-002',
    customerId: 'cust-002',
    resellerId: 'res-001',
    date: '2024-12-17',
    status: 'delivered',
    items: [
      { productId: 'prod-002', skuId: 'sku-006', quantity: 1, price: 49.99 },
    ],
    total: 49.99,
    impact: {
      foodKg: 2.5,
      neuterings: 0.125,
    },
  },
];

// Mock Commissions
export const mockCommissions: Commission[] = [
  {
    id: 'comm-001',
    resellerId: 'res-001',
    orderId: 'ord-001',
    date: '2024-12-18',
    amount: 12.50,
    level: 1,
    type: 'unilevel',
    status: 'paid',
  },
  {
    id: 'comm-002',
    resellerId: 'res-001',
    orderId: 'ord-002',
    date: '2024-12-17',
    amount: 8.30,
    level: 2,
    type: 'unilevel',
    status: 'paid',
  },
];

// Mock Network Tree
export const mockNetworkTree: NetworkNode = {
  id: 'res-001',
  name: 'Maria Schmidt (You)',
  rank: 'Gold',
  joinDate: '2024-09-15',
  personalVolume: 2500,
  teamVolume: 15000,
  directReports: 5,
  children: [
    {
      id: 'res-004',
      name: 'Klaus H.',
      rank: 'Silver',
      joinDate: '2024-10-01',
      personalVolume: 800,
      teamVolume: 2000,
      directReports: 3,
      children: [
        {
          id: 'res-005',
          name: 'Sophie B.',
          rank: 'Bronze',
          joinDate: '2024-10-15',
          personalVolume: 400,
          teamVolume: 0,
          directReports: 0,
        },
      ],
    },
    {
      id: 'res-006',
      name: 'Peter W.',
      rank: 'Bronze',
      joinDate: '2024-10-05',
      personalVolume: 600,
      teamVolume: 0,
      directReports: 0,
    },
  ],
};

// Mock Leaderboard
export const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, resellerId: 'res-002', name: 'Anna K.', earnings: 3240, teamSize: 45, rankBadge: 'Platinum' },
  { rank: 2, resellerId: 'res-003', name: 'Thomas M.', earnings: 2890, teamSize: 38, rankBadge: 'Gold' },
  { rank: 3, resellerId: 'res-001', name: 'Maria S. (You)', earnings: 1247, teamSize: 23, rankBadge: 'Gold' },
  { rank: 4, resellerId: 'res-007', name: 'Klaus H.', earnings: 1120, teamSize: 18, rankBadge: 'Silver' },
  { rank: 5, resellerId: 'res-008', name: 'Sophie B.', earnings: 980, teamSize: 12, rankBadge: 'Silver' },
];

// Mock Platform Metrics (Admin)
export const mockPlatformMetrics = {
  totalResellers: 1234,
  totalCustomers: 5678,
  totalOrders: 8901,
  totalRevenue: 234567,
  totalImpact: {
    foodKg: 12345,
    neuterings: 82,
    animalsHelped: 2469,
  },
};

// Mock Commission Configuration
export const mockCommissionConfig = {
  unilevel: {
    level1: 10,
    level2: 5,
    level3: 3,
    level4: 2,
  },
  effectiveDate: '2025-12-01',
};

// Mock Audit Log
export const mockAuditLog = [
  {
    id: 'audit-001',
    timestamp: '2024-12-18T10:30:00Z',
    actor: 'Admin User',
    action: 'commission_config_updated',
    entityType: 'CommissionConfig',
    entityId: 'config-001',
    summary: 'Updated Level 1 rate from 8% to 10%',
  },
  {
    id: 'audit-002',
    timestamp: '2024-12-18T09:15:00Z',
    actor: 'Admin User',
    action: 'user_activated',
    entityType: 'User',
    entityId: 'res-009',
    summary: 'Activated reseller account',
  },
];

// VETO Integration Mock Data
export const mockShelters: Shelter[] = [
  {
    id: 'SHL-001',
    name: 'Tierheim Sevilla',
    country: 'Spain',
    city: 'Sevilla',
    focus: ['Galgos', 'hunting dogs'],
    monthlyNeedKg: 500,
    currentAnimalCount: { dogs: 127, cats: 0 },
    storyKey: 'veto.shelter.stories.tierheimSevilla',
    urgencyLevel: 'URGENT',
  },
  {
    id: 'SHL-002',
    name: 'Antalya Rescue',
    country: 'Turkey',
    city: 'Antalya',
    focus: ['Street dogs at risk'],
    monthlyNeedKg: 800,
    currentAnimalCount: { dogs: 473, cats: 73 },
    storyKey: 'veto.shelter.stories.antalyaRescue',
    urgencyLevel: 'EMERGENCY',
  },
  {
    id: 'SHL-003',
    name: 'Târgu Jiu Refuge',
    country: 'Romania',
    city: 'Târgu Jiu',
    focus: ['Killing station rescue'],
    monthlyNeedKg: 350,
    currentAnimalCount: { dogs: 89, cats: 0 },
    storyKey: 'veto.shelter.stories.targuJiuRefuge',
    urgencyLevel: 'URGENT',
  },
  {
    id: 'SHL-004',
    name: 'Marrakech Animal Aid',
    country: 'Morocco',
    city: 'Marrakech',
    focus: ['Street dogs'],
    monthlyNeedKg: 400,
    currentAnimalCount: { dogs: 156, cats: 0 },
    storyKey: 'veto.shelter.stories.marrakechAnimalAid',
    urgencyLevel: 'EMERGENCY',
  },
  {
    id: 'SHL-005',
    name: 'Giurgiu Street Cats',
    country: 'Romania',
    city: 'Giurgiu',
    focus: ['Colony management'],
    monthlyNeedKg: 120,
    currentAnimalCount: { dogs: 0, cats: 200 },
    storyKey: 'veto.shelter.stories.giurgiuStreetCats',
    urgencyLevel: 'NORMAL',
  },
];

export const mockCampaigns: Campaign[] = [
  {
    id: 'CMP-001',
    name: 'Kein Mord für den Fußball',
    type: 'EMERGENCY',
    goalKg: 2000,
    currentKg: 1250,
    impactMultiplier: 2.0,
    endDate: '2025-01-15',
    urgencyStatement: '3 million street dogs targeted before FIFA World Cup 2030',
    urgencyStatementKey: 'veto.campaign.morocco.urgencyStatement',
    urgencyStatementLink: 'https://www.veto-tierschutz.de/marokko-strassenhunde/',
    status: 'ACTIVE',
    targetShelterIds: ['SHL-004'],
  },
  {
    id: 'CMP-002',
    name: 'Türkei Notfall',
    type: 'EMERGENCY',
    goalKg: 1500,
    currentKg: 890,
    impactMultiplier: 2.0,
    endDate: '2025-01-01',
    urgencyStatement: 'Mass culling law threatening 4 million dogs nationwide',
    status: 'ACTIVE',
    targetShelterIds: ['SHL-002'],
  },
  {
    id: 'CMP-003',
    name: 'Galgo Winter Appeal',
    type: 'SEASONAL',
    goalKg: 1000,
    currentKg: 523,
    impactMultiplier: 1.5,
    endDate: '2025-02-15',
    urgencyStatement: 'Galgo hunting dogs abandoned after hunting season',
    status: 'ACTIVE',
    targetShelterIds: ['SHL-001'],
  },
  {
    id: 'CMP-004',
    name: 'Kastrationsoffensive',
    type: 'THEMATIC',
    goalKg: 600, // 50 ops * 12 kg per neutering
    currentKg: 312,
    impactMultiplier: 1.0,
    endDate: '2025-03-15',
    urgencyStatement: 'Neutering programmes to address root causes of overpopulation',
    status: 'ACTIVE',
    targetShelterIds: ['SHL-001', 'SHL-003', 'SHL-005'],
  },
  {
    id: 'CMP-005',
    name: 'Straßenkatzen Winter',
    type: 'SEASONAL',
    goalKg: 300,
    currentKg: 156,
    impactMultiplier: 1.5,
    endDate: '2025-01-30',
    urgencyStatement: 'Street cat colony management and feeding during winter months',
    status: 'ACTIVE',
    targetShelterIds: ['SHL-005'],
  },
];

export const mockVerifications: VerificationEvidence[] = [
  {
    id: 'VER-001',
    shelterId: 'SHL-001',
    date: '2024-12-20',
    kgVerified: 127,
    photoUrls: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg'],
    status: 'APPROVED',
  },
  {
    id: 'VER-002',
    shelterId: 'SHL-002',
    date: '2024-12-18',
    kgVerified: 312,
    photoUrls: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg', 'photo6.jpg'],
    status: 'APPROVED',
  },
  {
    id: 'VER-003',
    shelterId: 'SHL-003',
    date: '2024-12-15',
    kgVerified: 89,
    photoUrls: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'],
    status: 'APPROVED',
  },
  {
    id: 'VER-004',
    shelterId: 'SHL-004',
    date: '2024-12-22',
    kgVerified: 156,
    photoUrls: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg'],
    status: 'PENDING',
  },
];

// Assign shelters to current users
export const currentResellerShelter = mockShelters[0]; // Tierheim Sevilla
export const currentCustomerShelter = mockShelters[0]; // Tierheim Sevilla

// Get first active campaign
export const activeCampaign = mockCampaigns.find(c => c.status === 'ACTIVE') || mockCampaigns[0];
