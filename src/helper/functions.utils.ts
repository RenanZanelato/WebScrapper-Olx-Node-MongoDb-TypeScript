export function formatDefaultValue(modelData: any, defaultFormat: string = '???')
{
    return typeof modelData == 'undefined' || modelData.length == 0 ? defaultFormat : modelData.toString();
}