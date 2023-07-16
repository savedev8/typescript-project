type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
    return [
        cls,
        ...additional.filter(Boolean), //фильтруем по Boolean фильтру
        ...Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className)
    ]
    .join(' ');
}


classNames('remove-btn', { hovered: true, selectable: true, red: true}, ['pdg']);