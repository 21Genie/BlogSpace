import { CounterSchema } from 'entities/Counter/index';
import { UserSchema } from 'entities/User';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema
}
