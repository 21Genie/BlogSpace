export type Mods = Record<string, boolean | string | undefined>

export const classNames = (
    cls: string | undefined,
    additional: Array<string | undefined> = [],
    mods: Mods = {},
): string => [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className),
]
    .join(' ');
