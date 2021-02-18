// Пиши код ниже этой строки
const getSortedFriends = users => {
  return [...users].flatMap(user => user.friends).filter((user, index, array) => array.indexOf(user) === index).sort((a, b) => a.localeCompare(b));
};
// Пиши код выше этой строки