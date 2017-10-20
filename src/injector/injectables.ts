import MemoryStore from '../stores/memoryStore/MemoryStore';

const injectables = { store: new MemoryStore() };

export default injectables;