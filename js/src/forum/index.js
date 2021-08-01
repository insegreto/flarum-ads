import app from 'flarum/app';
import { extend } from 'flarum/common/extend';
import Page from 'flarum/common/components/Page';
import addAdUnderHeader from './addAdUnderHeader';
import addAdUnderNavItems from './addAdUnderNavItems';
import addAdBetweenPosts from './addAdBetweenPosts';
import addAdsenseCompat from './addAdsenseCompat';
import AdPostType from './components/AdPostType';

app.initializers.add('flagrow-ads', app => {
    app.postComponents.ad = AdPostType;

    addAdUnderHeader();
    addAdUnderNavItems();
    addAdBetweenPosts();
    addAdsenseCompat();

    extend(Page.prototype, 'oninit', function () {
        if (!GLOBAL_nativery) {
            return;
        }

        GLOBAL_nativery.firstLoad = undefined;

        $('script[src="//cdn.nativery.com/widget/js/nat.js"]').remove();
        $('head style:first-child').remove();

        var nat = document.createElement('script'); nat.type = 'text/javascript'; nat.async = true;
        nat.src = '//cdn.nativery.com/widget/js/nat.js';
        var nats = document.getElementsByTagName('script')[0]; nats.parentNode.insertBefore(nat, nats);
    });
});
