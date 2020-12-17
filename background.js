browser.webRequest.onBeforeRequest.addListener(
  ({ url }) => {
    const [fullMatch, type, identifier] =
      url.match(
        /open\.spotify\.com\/(track|album|artist|playlist|concert|episode|show|user)\/([^\&\#\/\?]+)/i
      ) || [];

    return { redirectUrl: `spotify:${type}:${identifier}` };
  },
  {
    urls: ["*://open.spotify.com/track/*", "*://open.spotify.com/album/*",
  "*://open.spotify.com/artist/*", "*://open.spotify.com/playlist/*",
  "*://open.spotify.com/concert/*", "*://open.spotify.com/episode/*",
  "*://open.spotify.com/show/*", "*://open.spotify.com/user/*"],
    types: [
      "main_frame",
      "xmlhttprequest"]
  },
  ["blocking"]
);
