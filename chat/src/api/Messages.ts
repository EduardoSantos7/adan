import { Message } from "models/Message";

type Messages = {
    [key: string]: Message
}

let messages: Messages = {
    'm1': {
        id: 'm1',
        content: "Hola, cómo te va?",
        author_id: "1",
        reactions: [""],
        creation_date: new Date(),
    },
    'm2': {
        id: 'm2',
        content: "Bien y tu?",
        author_id: "2",
        reactions: [""],
        creation_date: new Date(),
    },
    'm3': {
        id: 'm3',
        content: "yo muy bien igual gracias.yo muy bien igual gracias...",
        author_id: "1",
        reactions: [""],
        creation_date: new Date(),
    },
    'm4': {
        id: 'm4',
        content: "Hola, cómo te va?",
        author_id: "1",
        reactions: [""],
        creation_date: new Date(),
    },
    'm5': {
        id: 'm5',
        content: "bien bien",
        author_id: "3",
        reactions: [""],
        creation_date: new Date(),
    },
    'm6': {
        id: 'm6',
        content: "Oh ok",
        author_id: "1",
        reactions: [""],
        creation_date: new Date(),
    },
}

export const getLastMessageInChat = (message_id: any) => {
    return messages[message_id]
}
