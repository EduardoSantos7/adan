export interface Message {
    id: string
    content: string
    author_id: string
    reactions: [string]
    creation_date: Date
}