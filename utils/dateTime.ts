export const convertTime = (time: string) => {
  let date = new Date(time);

  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export const checkStatus = (time: string) => {
  let currentDate = new Date();
  let lastActive = new Date(time) as Date;

  const oneMonthInMilliseconds = 90 * 24 * 60 * 60 * 1000;
  if (
    currentDate.getTime() < lastActive.getTime() &&
    lastActive.getTime() - currentDate.getTime() < oneMonthInMilliseconds
  ) {
    return "active";
  } else if (currentDate >= lastActive) {
    return "blacklisted";
  } else {
    return "inactive";
  }
};
