type CreateRoomParams = {
    host_id: number;
    room_name: string;
}



export default function create() {
    async function createRoom(data: CreateRoomParams): Promise<any> {
        const { host_id, room_name } = data;
        const response = await fetch('http://localhost:3001/rooms/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                host_id: host_id,
                room_name: room_name
            }),
        
        });

        if(response.ok) {
            const responseBody = await response.json();
            console.log(responseBody);
            return true;
        } else {
            throw new Error('Error creating room');
        }
    }

    return {
        createRoom,
    }
}