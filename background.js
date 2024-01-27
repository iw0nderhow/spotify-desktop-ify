browser.webRequest.onBeforeRequest.addListener(
  ({ url }) => {
    const [fullMatch, type, identifier] =
      url.match(
        /open\.spotify\.com\/(?:intl-[a-z]{2}\/)?(track|album|artist|playlist|concert|episode|show|user)\/([^\&\#\/\?]+)/i
      ) || [];

    return { redirectUrl: `spotify:${type}:${identifier}` };
  },
  {
    urls: ["*://open.spotify.com/track/*", "*://open.spotify.com/album/*",
  "*://open.spotify.com/artist/*", "*://open.spotify.com/playlist/*",
  "*://open.spotify.com/concert/*", "*://open.spotify.com/episode/*",
  "*://open.spotify.com/show/*", "*://open.spotify.com/user/*",
  "*://open.spotify.com/intl-*/track/*", "*://open.spotify.com/intl-*/album/*",
  "*://open.spotify.com/intl-*/artist/*", "*://open.spotify.com/intl-*/playlist/*",
  "*://open.spotify.com/intl-*/concert/*", "*://open.spotify.com/intl-*/episode/*",
  "*://open.spotify.com/intl-*/show/*", "*://open.spotify.com/intl-*/user/*"],
    types: [
      "main_frame",
      "xmlhttprequest"]
  },
  ["blocking"]
);
