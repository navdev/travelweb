
export default function getConfig () 
{
    //disable https cert validation

    process.env.NODE_TLS_REJECT_UNAUTHORIZED="0";

    const apiKey: string = process.env.UMBRACO_API_KEY as string;
    const domain: string = process.env.UMBRACO_DOMAIN as string;
    const previewEnabled: string =process.env.UMBRACO_PREVIEW_ENABLED as string;

    return {
        apiKey,
        domain,
        previewEnabled
    }
}