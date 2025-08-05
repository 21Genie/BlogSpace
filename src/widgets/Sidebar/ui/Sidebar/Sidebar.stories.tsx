import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/lib/theme/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    loginForm: { username: 'admin', password: '123' },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd' },
}), ThemeDecorator(Theme.DARK)];
