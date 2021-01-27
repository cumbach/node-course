require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('600fa17fd1bb6584ae435c9b', { age: 1 }).then(user => {
//   console.log(user);
//   return User.countDocuments({ age: 1 })
// }).then(result => {
//   console.log(result);
// }).catch(e => {
//   console.log(e);
// })

const updateAgeAndCount = async(id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
}

updateAgeAndCount('600f809b6574096e6c8745e9', 2).then(count => {
  console.log(count);
}).catch(e => {
  console.log(e);
})
