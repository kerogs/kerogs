# [yt-dlp](https://github.com/yt-dlp/yt-dlp/tree/master)
all the commands I've already used with yt-dlp. Just helps me remember

## YT download step
yt-dlp normally automatically downloads the best quality. However, sometimes this doesn't work, so you need to make a command to indicate the best quality to use.
1. Check best version
```sh
.\yt-dlp_x86.exe -F "url"
```
2. download ()
```sh
.\yt-dlp_x86.exe -f [ID] "url"
```

## Tiktok
- will download the poor quality mp4 file. Why is this? Because some videos don't work when downloaded in good quality.
- All downloaded videos will be stored in a file named downloaded.txt
- all videos will go into the ``tiktok`` folder

### Customisation
- replace ``/@useraccount`` with the required user
#### With watermark (without the ending one)
```sh
.\yt-dlp_x86.exe -f "worst[ext=mp4]" --download-archive downloaded.txt -o "tiktok/%(upload_date)s - %(id)s.%(ext)s" "https://www.tiktok.com/@useraccount"
```