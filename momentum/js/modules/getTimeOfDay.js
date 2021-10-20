function getTimeOfDay(hours) {
  if (hours < 6) return "night";
  if (hours < 12) return "morning";
  if (hours < 18) return "afternoon";
  return "evening";
}

export default getTimeOfDay;
