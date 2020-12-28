interface Chat {
    id: string
    creation_date: Date
    messages: string[],
    participants: string[],
    last_connection: LastConnections
}

type LastConnections = {
    [key: string]: Date
}