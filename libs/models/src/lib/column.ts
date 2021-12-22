export class ColumnModel {
    /** List of options */
    key: string;
    order: number;
    propertyType: any;
    canSort: boolean;
    header: string;

    constructor(options: Partial<ColumnModel> = {}) {
        this.key = options.key as string;
        this.order = options.order || 0;
        this.propertyType = options.propertyType;
        this.canSort = options.canSort || false;
        this.header = options.header || options.key as string;;
    }
}
