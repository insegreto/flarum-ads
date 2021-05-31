import app from "flarum/app";
import AdsPage from "./components/AdsPage";

app.initializers.add('malago/ads', () => {
    app.extensionData
        .for("malago-ads")
        .registerPage(AdsPage);
});
