export async function getUsers() {
    const response = await fetch('http://localhost:3001/users/all');
    if(response.ok) {
        const responseBody = await response.json();
        console.log(responseBody);
        return responseBody;
    }
}