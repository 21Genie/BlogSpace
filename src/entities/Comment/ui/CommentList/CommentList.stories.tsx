import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            text: 'hello',
            id: '1',
            user: { id: '1', username: 'Вася' },
        },
        {
            text: 'hello Всем',
            id: '2',
            user: { id: '1', username: 'Юра' },
        },
    ],
};

export const IsLoading = Template.bind({});
IsLoading.args = {
    comments: [
        {
            text: 'hello',
            id: '1',
            user: { id: '1', username: 'Вася' },
        },
        {
            text: 'hello Всем',
            id: '2',
            user: { id: '1', username: 'Юра' },
        },
    ],
    isLoading: true,
};
