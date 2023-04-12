import { openNewDB } from './storage';

export const loadSettings = async () => {
    const db = await openNewDB({ dbName: 'main-app', version: 1, objectStore: 'user' });

    try {
        const settings = await db.get('user', 'settings');

        return settings || {};
    } catch (e) {
        throw new Error('Local DB is empty');
    }
};

export const saveSettings = async (data: {}) => {
    try {
        const db = await openNewDB({ dbName: 'main-app', version: 1, objectStore: 'user' });

        await db.put('user', data, 'settings');
    } catch (e) {
        throw new Error('Issue with saving to local DB');
    }
};
