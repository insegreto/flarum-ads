import app from "flarum/app";
import AdsPage from "./components/AdsPage";

app.initializers.add('insegreto/ads', () => {
    app.extensionData
        .for("insegreto-ads")
        .registerPage(AdsPage);
});
