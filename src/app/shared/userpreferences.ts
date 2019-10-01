export class UserPreferences {

    public static hideBanner: boolean = false;
    public static openFilesInNewTab: boolean = false;

    constructor() {
        // UserPreferences.hideBanner = false;
        // UserPreferences .openFilesInNewTab = false;
    }

    // Change Preferences -----------------------------------------
    public static toggleBanner() {
        this.hideBanner = !this.hideBanner;
    }

    public static toggleOpenFilesInNewTab() {
        this.openFilesInNewTab = !this.openFilesInNewTab;
    }

    // Get Preferences --------------------------------------------
    public static getPrefBanner() {
        return this.hideBanner;
    }

    public static getPrefFilesInNewTab() {
        return this.openFilesInNewTab;
    }
}