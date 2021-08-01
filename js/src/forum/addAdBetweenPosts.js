import { extend } from 'flarum/extend';
import app from 'flarum/app';
import PostStream from 'flarum/components/PostStream';

export default function() {
    extend(PostStream.prototype, 'view', function(component) {
        const advertisement = app.forum.attribute('flagrow.ads.between-posts');

        if (advertisement && component.children.length) {
            const advertisements = advertisement.split(',').map(Function.prototype.call, String.prototype.trim);
            const start = Number(app.forum.attribute('flagrow.ads.start-from-post'));
            const between = Number(app.forum.attribute('flagrow.ads.between-n-posts'));
            // We need to copy all comments first, otherwise -there is no way to detect and jump the last comment
            const commentPosts = component.children.filter(post => post.attrs['data-type'] === 'comment');
            console.log('ADS', advertisements);
            // Insert an inside every n comment
            commentPosts.forEach((post, i) => {
                const postNum = post.attrs['data-number'];
                const ad = advertisements.shift();
                console.log(`AD ${i}`, ad);
                if (!ad) {
                    return;
                }

                if (postNum === start || ((postNum - start) % between) === 0) {
                    post.children.push(
                        m('div.Flagrow-Ads-fake-poststream-item',
                            m('article.Post.EventPost',
                                m('div.Flagrow-Ads-between-posts.EventPost-info', m.trust(ad))
                            )
                        )
                    );
                }
            });
        }
    });

    extend(PostStream.prototype, 'oncreate', evalAdsJs);
    extend(PostStream.prototype, 'onupdate', evalAdsJs);
}

function evalAdsJs() {
    this.$('.Flagrow-Ads-between-posts script').each(function () {
        if (!$(this).data('executed')) {
            eval.call(window, $(this).text());
            $(this).data('executed', true);
        }
    });
}
