import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

function isRuleSetRule(rule: any): rule is RuleSetRule {
    return rule && typeof rule === 'object' && 'test' in rule;
}

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        buildLocales: '',
        locales: '',
    };

    config?.resolve?.modules?.push(paths.src);
    config?.resolve?.extensions?.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign
    if (config.module) {
        // @ts-ignore
        config.module.rules = config?.module?.rules?.map(
            (rule: RuleSetRule | false | '' | 0 | '...' | null | undefined) => {
                if (isRuleSetRule(rule) && /svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }
                return rule;
            },
        );
    }

    config?.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config?.module?.rules?.push(buildCssLoader(true));

    config?.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
