export default function get() {
    async function getUsers() {
        const response = await fetch('http://localhost:3001/users/all');
        if(response.ok) {
            const responseBody = await response.json();
            console.log(responseBody);
            return responseBody;
        } else {
            throw new Error('Error getting users');
        }
    }

    async function getRooms() {
        const response = await fetch('http://localhost:3001/rooms/all');
        if(response.ok) {
            const responseBody = await response.json();
            console.log(responseBody);
            return responseBody;
        } else {
            throw new Error('Error getting roooms');
        }
    }

    async function getUserRooms() {
        const response = await fetch('http://localhost:3001/rooms/all');
        if(response.ok) {
            const responseBody = await response.json();
            console.log(responseBody);
            return responseBody;
        } else {
            throw new Error('Error getting user rooms');
        }
    }

    return {
        getUsers,
        getRooms,
        getUserRooms,
    }
}