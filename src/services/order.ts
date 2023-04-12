import { openNewDB } from './storage';

export const loadOrder = async () => {
    const db = await openNewDB({ dbName: 'fancy-shop', version: 1, objectStore: 'order' });

    try {
        const selectedIds = await db.get('order', 'selectedIds');

        return selectedIds || [];
    } catch (e) {
        throw new Error('Local DB is empty');
    }
};

export const saveOrder = async (data: number[]) => {
    try {
        const db = await openNewDB({ dbName: 'fancy-shop', version: 1, objectStore: 'order' });

        await db.put('order', data, 'selectedIds');
    } catch (e) {
        throw new Error('Issue with saving to local DB');
    }
};
