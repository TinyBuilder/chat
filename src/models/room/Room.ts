import Model from '../Model';

export type RoomData = {
  id: string;
  users: string[];
};

export default class Room extends Model {
  readonly data: RoomData;

  constructor(roomData: RoomData = { id: '', users: [] }) {
    super();
    console.log(`Creating room ${roomData.id}: ${roomData.users}.`);
    this.data = roomData;
  }

  update(newData: { users: string[] }) {
    console.log(`Updating room ${this.data.id}.`);
    return new Room({ id: this.data.id, users: this.data.users.concat(newData.users) });
  }

  save() {
    if (this.data.id === '') return this;
    console.log(`Saving room ${this.data.id}.`);
    this.store.write({ key: this.data.id, value: this.data.users });
    return this;
  }

  static load(id: string) {
    console.log(`Loading room ${id}.`)
    return new Room({ id, users: new Room().store.read(id) });
  }
}
