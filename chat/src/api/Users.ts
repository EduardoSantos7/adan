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
        profile_image: "https://scontent.fpbc1-1.fna.fbcdn.net/v/t1.0-9/12592504_10205937861392689_1840704728050943129_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGJQ7hVT3jzzdil5RE9xmtOw8e2erRkHZ7Dx7Z6tGQdng4cKI2oSzTYbmnvpAbU9I0&_nc_ohc=cFMJgmPWxIEAX8tyfr8&_nc_oc=AQmjWWLjGzn1OLCwjAMGjWIniQNEhSujUslFlLZ8fzn_VYUo5B6I1Yq54Zopi2tVQE0X2Ox1nLpkUdpW16WYPL4I&_nc_ht=scontent.fpbc1-1.fna&oh=568da99925e0367fcb05781ff6ea86b4&oe=5FF40ABD"
    },
    '3': {
        profile_name: "Eduardo Luis Santos Barreto",
        id: '3',
        status: 'active',
        chats: ['f', 'g'],
        profile_image: "https://scontent.fpbc1-1.fna.fbcdn.net/v/t1.0-9/41556867_10215755713860125_6657897601762852864_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGR-zrKiSff3N3UROxwHUR4X7GUZTcFpXRfsZRlNwWldLSLtwzClP4ggeaGBiNC0Vg&_nc_ohc=BIzxmUKBbEAAX9KkOn_&_nc_ht=scontent.fpbc1-1.fna&oh=56f80e93a846da6b18df824668ba68d7&oe=5FCF016D"
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