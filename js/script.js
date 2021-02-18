// Пиши код ниже этой строки
const getNamesSortedByFriendCount = users => {
    return [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
};
// Пиши код выше этой строки