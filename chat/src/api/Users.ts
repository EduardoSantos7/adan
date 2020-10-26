import { getLastMessageInChat } from "./Messages";
import { getChat, getOtherParticipants } from "./Chats";


type users = {
    [key: string]: User
}

const users: users = {
    '1': {
        profile_name: "Eduardo Luis Santos",
        id: '1',
        status: 'active',
        chats: ['a', 'b'],
        profile_image: "https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/57612568_10218857818333991_4682404239798960128_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeEJLyHn5-dvBM8JI8i4SrSo2BudxjhWIxHYG53GOFYjEe0f59V-xVitOeHz0hd3EQg&_nc_ohc=_qWFI1-NTD4AX91IzPX&_nc_ht=scontent-qro1-1.xx&oh=d4f4b0acb9654009cfcab7355dd2cf96&oe=5FA3BED4"
    },
    '2': {
        profile_name: "Sarith",
        id: '2',
        status: 'active',
        chats: ['d', 'e'],
        profile_image: "https://scontent.fpbc1-1.fna.fbcdn.net/v/t1.0-9/12592504_10205937861392689_1840704728050943129_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_eui2=AeGJQ7hVT3jzzdil5RE9xmtOw8e2erRkHZ7Dx7Z6tGQdng4cKI2oSzTYbmnvpAbU9I0&_nc_ohc=ePoP6LSl2c4AX-4iwpT&_nc_oc=AQmlbKDzbMWGKmep9ZDmTmMMPw0WSL6EJ6hKb4OD1fzONj-W6d0wblaKlAq1MUznmTIGkKxHssP308p1v4nqdbCS&_nc_ht=scontent.fpbc1-1.fna&oh=4f33dcca64cad4f2bbf8e1c911b3d1e5&oe=5FA4F0BD"
    },
    '3': {
        profile_name: "Eduardo Luis Santos Barreto",
        id: '3',
        status: 'active',
        chats: ['f', 'g'],
        profile_image: "https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/41556867_10215755713860125_6657897601762852864_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeGR-zrKiSff3N3UROxwHUR4X7GUZTcFpXRfsZRlNwWldLSLtwzClP4ggeaGBiNC0Vg&_nc_ohc=YjB68r3gP04AX-0J7wR&_nc_ht=scontent-qro1-1.xx&oh=adb55cb3ffd49c0e868e814eb4221253&oe=5FA7746D"
    }
}

export const getChats = (id: any) => {
    let chat_ids = users[id].chats;
    let chats_info: any[] = []
    
    chat_ids.forEach((chat_id:any) => {
        // Bring id of other user(s)
        let otherUserId = getOtherParticipants(chat_id, id)[0];
        let otherUser = users[otherUserId];
        let chat = getChat(chat_id)

        let chatInfo = {
            profile_name: otherUser.profile_name,
            id: otherUser.id,
            status: otherUser.status,
            profile_image: otherUser.profile_image,
            last_message: getLastMessageInChat(chat.messages[chat.messages.length - 1]),
            last_connection: chat.last_connection,
        }

        chats_info.push(chatInfo)
    })
    return JSON.stringify(chats_info)
};