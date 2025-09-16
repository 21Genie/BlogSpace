import { User } from '@/entities/User';

export interface Comment {
    text: string,
    id: string,
    user: User
}
