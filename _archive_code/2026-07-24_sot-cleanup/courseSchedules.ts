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
    id: 'akupresura-zg-okt-2026',
    courseName: 'Akupresura & Trigger Point Terapija',
    startDate: '2026-10-09T09:00:00+02:00',
    endDate: '2026-10-11T17:00:00+02:00',
    location: 'Poliklinika Body Balance, Frane Kesterčaneka 2b',
    city: 'Zagreb',
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
