type CreateRoomParams = {
    host_id: number;
    room_name: string;
}

type CreateChatParams = {
    room_id: number;
    sender_id: number;
    pesan: string;
    is_deleted: boolean;
}

type JoinRoomParams = {
    room_id: number;
    member_id: number;
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

    async function createChat(data: CreateChatParams): Promise<any> {
        const { room_id, sender_id, pesan, is_deleted } = data;
        const response = await fetch('http://localhost:3001/messages/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                room_id: room_id,
                sender_id: sender_id,
                pesan: pesan,
                is_deleted: is_deleted
            }),
        
        });

        if(response.ok) {
            const responseBody = await response.json();
            console.log(responseBody);
            return true;
        } else {
            throw new Error('Error creating chat');
        }
    }

    async function joinRoom(data: JoinRoomParams): Promise<any> {
        const { room_id, member_id } = data;
        const response = await fetch('http://localhost:3001/rooms/enroll', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                room_id: room_id,
                member_id: member_id
            }),
        
        });

        if(response.ok) {
            const responseBody = await response.json();
            console.log(responseBody);
            return true;
        } else {
            throw new Error('Error joining room');
        }
    }

    return {
        createRoom,
        createChat,
        joinRoom
    }
}