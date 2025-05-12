import type { SteamTag } from "@/features/sell/model/items.type";

export function getRarityTag(tags: SteamTag[]): {
    name: string;
    color?: string;
} {
    // Первичный поиск по категории
    const tag = tags.find((t) => t.category === "Rarity") ||
        // fallback: по локализованному названию
        tags.find((t) => t.localized_category_name === "Редкость") ||
        // fallback: по internal_name
        tags.find((t) =>
            t.internal_name.startsWith("Rarity_")
        ) || // иначе — пустой объект
        { localized_tag_name: "", color: undefined };

    return {
        name: tag.localized_tag_name,
        color: tag.color,
    };
}
