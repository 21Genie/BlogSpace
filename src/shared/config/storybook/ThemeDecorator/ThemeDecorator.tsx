import { Story } from '@storybook/react';
import { Theme } from '@/shared/lib/theme/ThemeContext';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
