export const isSunday = (): boolean => {
  const today = new Date();
  return today.getDay() === 0; // Sunday is 0
};

export const getCurrentDayName = (): string => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  return days[today.getDay()];
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};