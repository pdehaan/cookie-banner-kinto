# COOKIE-BANNER-KINTO

Simple script to fetch the current supported domains from either GitHub or Remote Settings/Kinto.

## USAGE
```sh
npx -p pdehaan/cookie-banner-kinto gh # Fetch from GitHub
npx -p pdehaan/cookie-banner-kinto rs # Fetch from RemoteSettings
```

### OUTPUT
```json
["aliexpress.com","amazon.de","askubuntu.com","azure.microsoft.com","bbc.co.uk","bbc.com","bing.com","bitly.com","bundesregierung.de","cloudflare.com","cnn.com","dhl.com","digicert.com","dropbox.com","ebay.com","ebay.de","etsy.com","europa.eu","facebook.com","fastly.com","flickr.com","forbes.com","getpocket.com","google-analytics.com","google.co.in","google.com","google.com.hk","google.de","google.fr","gravatar.com","indeed.com","instagram.com","issuu.com","linkedin.com","mail.ru","microsoft.com","msn.com","mydealz.de","netflix.com","nytimes.com","opera.com","paypal.com","privacy-mgmt.com","reddit.com","serverfault.com","skype.com","soundcloud.com","sourceforge.net","spotify.com","stackexchange.com","stackoverflow.com","tiktok.com","tumblr.com","twitch.tv","twitter.com","vimeo.com","web.de","webex.com","weebly.com","whatsapp.com","wordpress.com","yahoo.com","yandex.com","yandex.ru","youtube.com"]
```

If you want the results pretty-printed, you can set a `PRETTY=1` or `PRETTY=true` environment variable:

<kbd>PRETTY=true npx -p pdehaan/cookie-banner-kinto rs</kbd>

```js
[
  "aliexpress.com",
  "amazon.de",
  "askubuntu.com",
  "azure.microsoft.com",
  ...
]
```
