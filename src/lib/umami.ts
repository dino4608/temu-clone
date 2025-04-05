import umami from '@umami/node';

umami.init({
    websiteId: '39944d0e-aa9a-4d85-9da1-7efe9ed01796',
    hostUrl: 'https://cloud.umami.is', // URL to your Umami instance
});

export const umamiTrackCheckoutSuccessEvent = async (payload: {
    [key: string]: string | number | Date
}) => {
    await umami.track('checkout_success', payload);
}