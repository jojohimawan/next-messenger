type authParams = {
    name: string;
    password: string;
}

export default function auth() {
    async function login(data: authParams): Promise<any> {
        const { name, password } = data;
        const response = await fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                password: password
            }),
        
        });

        if(response.ok) {
            const responseBody = await response.json();
            console.log(responseBody);
            return responseBody;
        } else {
            throw new Error('Error logging in');
        }
    }

    async function register(data: authParams): Promise<any> {
        const { name, password } = data;
        const response = await fetch('http://localhost:3001/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                password: password
            }),
        
        });

        if(response.ok) {
            const responseBody = await response.json();
            console.log(responseBody);
            return true;
        } else {
            throw new Error('Error registering');
        }
    }

    return {
        login,
        register
    }
}