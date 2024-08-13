let height = 800;
let yLabels = [
    "Decentralized",
    "Centralized"
];
let xLabels = [
    "Ads",
    "No ads"
];
let decentralized = [
    "Bastyon",
    "Bluesky",
    "BookWyrm",
    "diaspora*",
    "Frendica",
    "Damus",
    "Funkwhale",
    "Mastodon",
    "GNU Social",
    "HubZilla",
    "Lemmy",
    "Lotide",
    "Nostr",
    "Mobilizon",
    "Pixelfed",
    "Yup"
];
let centralized = [
    "Facebook",
    "Instagram",
    "Twitter",
    "TikTok",
    "Snapchat",
    "YouTube",
    "Airchat",
    "Beehaw",
    "BitChute",
    "Brighteon",
    "Counter Social",
    "Lemon8",
    "Line",
    "Minds",
    "Odysee",
    "Rumble",
    "WeAre8"
];
let ads = [
    "Facebook",
    "Instagram",
    "Twitter",
    "TikTok",
    "Snapchat",
    "YouTube",
    "Bastyon",
    "BitChute",
    "Line",
    "Minds",
    "Odysee",
    "Rumble",
    "WeAre8"
];
let noAds = [
    "Airchat",
    "Beehaw",
    "Bluesky",
    "BookWorm",
    "CounterSocial",
    "Damus",
    "Diaspora",
    "Friendica",
    "Funkwhale",
    "GNU Social",
    "Hubzilla",
    "Lemmy",
    "Lemon8",
    "Lotide",
    "Mastodon",
    "Mobilizon",
    "Nostr",
    "Yup"
];
let y1x1 = getQuadrant(decentralized, ads);
let y2x1 = getQuadrant(centralized, ads);
let y1x2 = getQuadrant(decentralized, noAds);
let y2x2 = getQuadrant(centralized, noAds);
function setup() {
    createCanvas(windowWidth, height);
// let y1x1 = getQuadrant(decentralized,ads);
// let y2x1 = getQuadrant(centralized,ads);
// let y1x2 = getQuadrant(decentralized, noAds);
// let y2x2 = getQuadrant(centralized, noAds);
}
function getQuadrant(x, y) {
    let quadrant = [];
    for(let i = 0; i < y.length; i++)if (x.includes(y[i])) quadrant.push(y[i]);
    return quadrant;
}
function draw() {
    //axes lines
    //line width
    textFont("Lexend Deca");
    fill("black");
    background(255);
    // color(0);
    line(windowWidth / 2, height * (1 / 8), windowWidth / 2, height - height * (1 / 8));
    line(windowWidth / 5, height / 2, windowWidth - windowWidth / 5, height / 2);
    //main title
    textSize(25);
    fill(0, 0, 200);
    text("Trends Explorer", windowWidth / 2 - 90, 50);
    //titles
    fill("black");
    textSize(18);
    text(yLabels[0], windowWidth / 2 - 60, 90);
    text(yLabels[1], windowWidth / 2 - 50, height - 60);
    text(xLabels[0], windowWidth / 7, height / 2 + 5);
    text(xLabels[1], windowWidth - windowWidth / 5.5, height / 2 + 5);
    //add text to quadrants
    fill(0, 0, 200);
    //top left, y1x1 
    for(let i = 0; i < y1x1.length; i++)text(y1x1[i], windowWidth / 4, 150);
    //top right, y1x2
    for(let i = 0; i < y1x2.length; i++){
        if (i < 6) text(y1x2[i], windowWidth / 2 + 50, 150 + i * 40);
        if (i >= 6) text(y1x2[i], windowWidth / 2 + 200, 150 + (i - 6) * 40);
    }
    //bottom left, y2x1
    for(let i = 0; i < y2x1.length; i++){
        if (i < 6) text(y2x1[i], windowWidth / 4, height / 1.75 + 40 * i);
        if (i >= 6) text(y2x1[i], windowWidth / 4 + 150, height / 1.75 + 40 * (i - 6));
    }
    //bottom right, y2,x2
    for(let i = 0; i < y2x2.length; i++){
        if (i < 6) text(y2x2[i], windowWidth / 2 + 50, height / 1.75 + 40 * i);
        if (i >= 6) text(y2x2[i], windowWidth / 2 + 150, height / 1.75 + 40 * (i - 6));
    }
}

//# sourceMappingURL=index.21c0dd79.js.map
