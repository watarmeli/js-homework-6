// Пиши код ниже этой строки
const getFriends = (users) => {

    return allFriends = users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);
  
};
// Пиши код выше этой строки