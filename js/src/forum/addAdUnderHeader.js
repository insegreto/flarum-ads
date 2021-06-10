import { extend } from 'flarum/extend'
import HeaderPrimary from 'flarum/components/HeaderPrimary'
import IndexPage from 'flarum/components/IndexPage'

export default function () {
    extend(IndexPage.prototype, 'view', (component) => {
        
        if (document.getElementsByClassName('Flagrow-Ads-under-header').length) {
            return;
        }

        const advertisement = app.forum.attribute('flagrow.ads.under-header');
        const onlyFrontpage = app.forum.attribute('flagrow.ads.header-only-frontpage');

        if (advertisement) {

            var appElement = document.getElementsByClassName('App-content')[0];

            var adsElement = document.createElement('div');

            adsElement.className = 'Flagrow-Ads-under-header';
            adsElement.innerHTML = advertisement;

            appElement.parentNode.insertBefore(adsElement, appElement);
        }
    });

    extend(IndexPage.prototype, 'onremove', (component) => {
        var adsElement = document.getElementsByClassName('Flagrow-Ads-under-header');
        if (adsElement.length > 0) adsElement[0].remove();
        adsElement = document.getElementsByClassName('adsbygoogle');
        if(adsElement.length>0) adsElement[0].remove();
    });
}
