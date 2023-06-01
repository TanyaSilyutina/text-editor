import { openDB } from 'idb';

let db;

const initdb = async () => {
    db = openDB('jate', 1, {
        upgrade(db) {
            if (db.objectStoreNames.contains('jate')) {
                console.log('jate database already exists');
                return;
            }
            db.createObjectStore('jate', {keyPath: 'id', autoIncrement: true});
            console.log('jate database created');
        },
    });
    console.log(db);
}

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
    return (await db).put('jate', {content: content});
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
    return (await db).get('jate', 'content');
}

initdb();
