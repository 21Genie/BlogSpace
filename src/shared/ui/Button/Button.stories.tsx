import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'shared/lib/theme/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: 'Text',
    size: ButtonSize.M,
    theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    size: ButtonSize.L,
    theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Text',
    size: ButtonSize.XL,
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    square: true,
    theme: ButtonTheme.BACKGROUND,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    square: true,
    size: ButtonSize.M,
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    square: true,
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    square: true,
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
