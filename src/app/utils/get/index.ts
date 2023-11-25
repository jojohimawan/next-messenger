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

    async function getEnrolledRooms(user_id: number) {
        const response = await fetch(`http://localhost:3001/rooms/enrolled/${user_id}`);
        if(response.ok) {
            const responseBody = await response.json();
            console.log(responseBody);
            return responseBody;
        } else {
            throw new Error('Error getting enrolled rooms');
        }
    }

    async function getHostedRooms(user_id: number) {
        const response = await fetch(`http://localhost:3001/rooms/hosted/${user_id}`);
        if(response.ok) {
            const responseBody = await response.json();
            console.log(responseBody);
            return responseBody;
        } else {
            throw new Error('Error getting enrolled rooms');
        }
    }

    return {
        getUsers,
        getRooms,
        getUserRooms,
        getEnrolledRooms,
        getHostedRooms
    }
}