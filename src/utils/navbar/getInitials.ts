export const getInitials = (firstName: string, lastName: string): string => {
  console.log("full-name", firstName, lastName);
  return `${firstName.charAt(0).toUpperCase()}${lastName
    .charAt(0)
    .toUpperCase()}`;
};
