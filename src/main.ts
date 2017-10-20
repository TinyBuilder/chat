import Room from './models/room/Room';

new Room({ id: 'a', users: ['b', 'c'] })
  .save()
  .update({ users: ['d'] })
  .save();

const room = Room.load('a');
console.log(room);
