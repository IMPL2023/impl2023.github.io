interface MemberType {
  name: string;
  type: string;
  comment: string;
  title: string;
  bg: string;
  image: string;
  mail: string;
  homepage: string;
  destination?: string;
  period?: string;
  alumniGroup?: 'Research Staff' | 'Visitors' | 'Graduate';
  role?: string;
}

export type { MemberType };
