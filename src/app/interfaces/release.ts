export interface Release {
    url: string;
    name: string;
    version: string;
    downloadCount: number;
}

export interface Asset {
    download_count: number;
}

export interface GithubRelease {
    html_url: string;
    name: string;
    tag_name: string;
    assets: Asset[];
}
