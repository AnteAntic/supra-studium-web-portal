export interface CourseDate {
  id: string;
  courseName: string;
  startDate: string; // ISO format
  endDate: string;
  location: string;
  city: string;
  earlyBirdDeadline?: string; // ISO format
}

export const akupresuraSchedule: CourseDate[] = [
  {
    id: 'akupresura-zg-nov-2025',
    courseName: 'Akupresura & Trigger Point Terapija',
    startDate: '2025-11-14T09:00:00+01:00',
    endDate: '2025-11-16T17:00:00+01:00',
    location: 'Poliklinika Medical Body Balance, ul. Frane Kesterčaneka 2b',
    city: 'Zagreb',
    earlyBirdDeadline: '2025-09-20T23:59:59+01:00'
  },
  {
    id: 'akupresura-sbrod-2026',
    courseName: 'Akupresura & Trigger Point Terapija',
    startDate: '2026-03-13T09:00:00+01:00',
    endDate: '2026-03-15T17:00:00+01:00',
    location: 'TBA',
    city: 'Slavonski Brod',
    earlyBirdDeadline: '2026-01-15T23:59:59+01:00'
  },
  {
    id: 'akupresura-zg-mar-2026',
    courseName: 'Akupresura & Trigger Point Terapija',
    startDate: '2026-03-27T09:00:00+01:00',
    endDate: '2026-03-29T17:00:00+01:00',
    location: 'Poliklinika Medical Body Balance, ul. Frane Kesterčaneka 2b',
    city: 'Zagreb',
    earlyBirdDeadline: '2026-02-01T23:59:59+01:00'
  }
];

export const getNextCourseDate = (schedule: CourseDate[]): CourseDate | null => {
  const now = new Date();
  
  // Filter future dates and sort by startDate
  const futureDates = schedule
    .filter(course => new Date(course.startDate) > now)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  
  return futureDates.length > 0 ? futureDates[0] : null;
};
