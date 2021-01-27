require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('600f7d3c82beb26caa3d8cde').then(task => {
//   console.log(task);
//   return Task.countDocuments({ completed: false });
// }).then(result => {
//   console.log(result);
// }).catch(e => {
//   console.log(error);
// })

const deleteTaskAndCount = async(id)  => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
}

deleteTaskAndCount('600f8399a4f3266fad933a7c').then(count => {
  console.log(count);
}).catch(e => {
  console.log(e);
})
