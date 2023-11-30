type DeleteChatParams = {
    id: number;
}

export default function deleteDb() {
    
    async function deleteChat(data: DeleteChatParams): Promise<any> {
        const { id } = data;
        const response = await fetch(`http://localhost:3001/messages/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
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
        deleteChat
    }
}