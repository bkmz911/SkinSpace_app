export interface Photo {
    value: string;
}

// 2) Тип для поля `_json` 
export interface SteamJson {
    avatar: string;
    avatarmedium: string;
    avatarfull: string;
    avatarhash: string;
    communityvisibilitystate: number;
    profilestate: number;
    personaname: string;
    profileurl: string;
    steamid: string;
    personastate: number;
    personastateflags: number;
    primaryclanid: string;
    timecreated: number;
}

// 3) Корневой тип ответа
export interface SteamProfile {
    displayName: string;
    id: string;
    provider: "steam";
    photos: Photo[];
    _json: SteamJson;
}
