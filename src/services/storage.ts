import { openDB } from 'idb';

export const openNewDB = async ({ dbName = '', version = 1, objectStore = '' } = {}) => {
    const db = await openDB(dbName, version, {
        async upgrade(db) {
            await db.createObjectStore(objectStore);
        },
    });

    return db;
};
