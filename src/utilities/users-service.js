import * as usersAPI from './users-api';

export async function logIn(userData) {
    try {
        // Delegate the network request code to the users-api.js API module
        // which will ultimately return a JSON Web Token (JWT)
        const token = await usersAPI.logIn(userData);
        // Baby step by returning whatever is sent back by the server
        return token;
    } catch {
        throw new Error('Invalid Log In in users-service.js logIn');
    }
}