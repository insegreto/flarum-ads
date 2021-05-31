<?php

namespace Flagrow\Ads;

use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Extend;

return [
    (new Extend\Frontend('admin'))
        ->css(__DIR__ . '/resources/less/admin.less')
        ->js(__DIR__.'/js/dist/admin.js'),
    (new Extend\Frontend('forum'))
        ->css(__DIR__ . '/resources/less/forum.less')
        ->js(__DIR__.'/js/dist/forum.js')
        ->content(Listeners\AddAdsenseJs::class),
    new Extend\Locales(__DIR__.'/resources/locale'),

    // (new Extend\Event())
    //     ->subscribe(Listeners\LoadSettingsFromDatabase::class),
    (new Extend\Settings)
        ->serializeToForum('flagrow.ads.under-header', 'flagrow.ads.under-header')
        ->serializeToForum('flagrow.ads.between-posts', 'flagrow.ads.between-posts')
        ->serializeToForum('flagrow.ads.under-nav-items', 'flagrow.ads.under-nav-items')
        ->serializeToForum('flagrow.ads.between-n-posts', 'flagrow.ads.between-n-posts')
        ->serializeToForum('flagrow.ads.start-from-post', 'flagrow.ads.start-from-post')
        ->serializeToForum('flagrow.ads.start-from-post', 'flagrow.ads.start-from-post')
        ->serializeToForum('flagrow.ads.between-n-posts', 'flagrow.ads.between-n-posts'),
];
