import getConfig from "./configManager";

const config = getConfig();

const callContentDeliveryApi = async (url: string) => {
    let items;

    try{
        const headers = new Headers();
        headers.set('api-key', config.apiKey);
        headers.set('preview', config.previewEnabled);
        const response = await fetch(url, {
            method: 'GET',
            headers: headers});
        items = response.json();
    } catch(e){
        console.log(e);
    }
    return items;
}

const addExpand = (url: string, expand: any) => {
    if(expand)
        return `${url}expand=property:${expand}&`;
    return url;
}

const addFilter = (url: string, filter: any) => {
    if(filter)
        return `${url}filter:property:${filter}&`;
    return url;
}

export async function getItems(expand = null,
                                filter = null,
                                skip = 0,
                                take = 10
    ) {
    
    let url = `${config.domain}/umbraco/delivery/api/v1/content/?`;
    url = addExpand(url, expand);
    url = addFilter(url, filter);

    console.log(url);
    return callContentDeliveryApi(url);
}

export async function getItem(pathOrId: string, 
    expand = null
) {

    let url = `${config.domain}/umbraco/delivery/api/v1/content/item/${pathOrId}?`;
    url = addExpand(url, expand);
    console.log(url, config.apiKey, config.previewEnabled);
    return callContentDeliveryApi(url);
}