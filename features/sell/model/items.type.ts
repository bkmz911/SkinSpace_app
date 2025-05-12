export interface DescriptionItem {
    appid: number;
    classid: string;
    instanceid: string;
    currency: number;
    background_color: string;
    icon_url: string;
    // Массив блоков с описаниями (html‑фрагменты, атрибуты)
    descriptions: DescriptionBlock[];
    tradable: number;
    name: string;
    name_color: string;
    type: string;
    market_name: string;
    market_hash_name: string;
    commodity: number;
    // ограничения торговли/маркетинга (встречаются не всегда)
    market_tradable_restriction?: number;
    market_marketable_restriction?: number;
    marketable: number;
    // Важный блок для возможности «Осмотреть в игре…»
    actions?: SteamAction[];
    // Аналогично — блок превью в маркете
    market_actions?: SteamAction[];
    // Список тегов (категория, локализованное имя и пр.)
    tags: SteamTag[];
}

// Описание одного HTML‑блока внутри DescriptionItem.descriptions
export interface DescriptionBlock {
    type: "html";
    value: string;
    name: string;
    color?: string;
}

// Описание действия (preview, market preview и т.п.)
export interface SteamAction {
    link: string;
    name: string;
}

// Тег предмета (качество, редкость, набор и т.п.)
export interface SteamTag {
    category: string;
    internal_name: string;
    localized_category_name: string;
    localized_tag_name: string;
    color?: string;
}

// Корневой ответ от /api/inventory
export interface InventoryResponse {
    descriptions: DescriptionItem[];
    total_inventory_count: number;
    success: number;
    rwgrsn: number;
}

// Тип для использования в коде — массив описаний
export type ItemsType = InventoryResponse["descriptions"];
