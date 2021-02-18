// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
  return [...users].filter(user => user.gender === gender).reduce((total, user) => total + user.balance, 0);
};
// Пиши код выше этой строки