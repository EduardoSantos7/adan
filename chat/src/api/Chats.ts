type Chats = {
    [key: string]: Chat
}

let chats: Chats = {
    'a': {
        id: 'a',
        creation_date: new Date(),
        messages: ['m1', 'm2', 'm3'],
        participants: ['1', '2'],
        last_connection: {
            '1': new Date(),
            '2': new Date("10/19/2020"),
        }
    },
    'b': {
        id: 'b',
        creation_date: new Date(),
        messages: ['m4', 'm5', 'm6'],
        participants: ['1', '3'],
        last_connection: {
            '1': new Date(),
            '3': new Date('01/10/2020'),
        }
    },
    'c': {
        id: 'c',
        creation_date: new Date(),
        messages: [],
        participants: [],
        last_connection: {
            
        }
    },

}

export const getOtherParticipants = (chat_id: any, current_user: any) => {
    return chats[chat_id].participants.filter((participant:any) => participant !== current_user)
}

export const getChat = (chat_id: any) => {
    return chats[chat_id]
}