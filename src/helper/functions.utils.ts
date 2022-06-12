import { OlxModel } from "../models/olx.model";

export function formatDefaultValue(modelData: any, defaultFormat: string = '???') : string
{
    return typeof modelData == 'undefined' || modelData.length == 0 ? defaultFormat : modelData.toString();
}

export function olxModelToObj(olxModel: OlxModel) : object
{
    return {
        olxId: olxModel.getId(),
        createdDate: olxModel.getCreatedDate(),
        title: olxModel.getTitle(),
        imgLink: olxModel.getImgLink(),
        link: olxModel.getLink(),
        price: olxModel.getPrice(),
        locale: olxModel.getLocale(),
    };
}