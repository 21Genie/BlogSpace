import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarImg from '@/shared/assets/tests/admin.jpg';
import { Country } from '../../../../entities/Country';
import { Currency } from '../../../../entities/Currency';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/LoginForm',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Armenia,
        lastname: 'Test',
        first: 'Test',
        city: 'Test',
        currency: Currency.RUB,
        avatar: AvatarImg,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
