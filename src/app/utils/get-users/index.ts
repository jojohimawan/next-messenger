export default async function getUsers() {
    const response = await fetch('http:localhost:3001/users/all');
    const users = await response.json();
    
    return users;
}