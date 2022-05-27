export const convertKeyTabToName = (key: string) => {
  switch (key) {
    case "allNews":
      return "All";
    case "myFaves":
      return "My Faves";
    default:
      return "";
  }
};
