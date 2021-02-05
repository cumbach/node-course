const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//
//   } else {
//     next();
//   }
// })

// app.use((req, res, next) => {
//   res.status(503).send('Server under maintenance');
// })


app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
})

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
  // const task = await Task.findById('6018d74e310b416255567ba4');
  // await task.populate('owner').execPopulate();
  // console.log(task.owner);

  const user = await User.findById('6018d4ff396bd160efc4c0fd');
  await user.populate('tasks').execPopulate();
  console.log(user.tasks);
}

// main();
