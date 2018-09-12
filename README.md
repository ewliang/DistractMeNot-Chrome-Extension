# DistractMeNot-Chrome-Extension
A basic productivity Chrome Extension that allows users to input a list of site(s) they wish to not distract them while surfing the internet. From the URLs submitted to the plugin, it will then actively keep a lookout for the URLs. If the URLs are detected, the extension will automatically close the tab or window.

## Features
- Multiple URL blacklisting
- Automatic blacklisted URLs tab detection and removal (closing tabs)
- Data persists on next browser window session

## Why I Made This
I made it because I find myself wasting time on some sites sometimes on a daily basis, and I wanted a free, lightweight tool to automatically close the windows for me whenever I visit those sites (e.g. Discord, Agar.io, etc.) without having to permanently block those sites via parental control tools. I'm confident enough to have enough self discipline where I won't need a lock mechanism on this plugin so I kept it simple.

## Author
**Eric Liang**
- Website: [https://www.eric-liang.com](https://www.eric-liang.com)
- Github: [https://www.github.com/ewliang](https://www.github.com/ewliang)

## Repository
- Github [https://github.com/ewliang/DistractMeNot-Chrome-Extension](https://github.com/ewliang/DistractMeNot-Chrome-Extension)
- Clone Link [https://github.com/ewliang/DistractMeNot-Chrome-Extension.git](https://github.com/ewliang/DistractMeNot-Chrome-Extension.git)

## Requirements
- Google Chrome Browser

## How to Use DistractMeNot Chrome Extension As An End User
1. Install it.
2. Click on the DistractMeNot logo located on your browser.
3. Enter 1 URL at a time into the input box while pressing [Enter] after each entry or clicking the "Add" button.
4. Once you make a new tab or make updates to any tabs, the program will start running.
5. The next time you restart your browser, any URLs entered from the previous session will be automatically loaded in since they're stored in your browser's localStorage.
6. Just keep on browsing productively as usual! If you want more URLs to blacklist, just repeat Step 3.

## How to Use DistractMeNot As A Chrome Extension Developer
1. Make a clone of this project, unzipped.
2. Open Chrome Browser
3. In a new or blank tab, type in "chrome://extensions/" (without the quotes of course) and click [Enter].
4. At the top right corner of the page, **enable** "Developer Mode"
5. Click the button on the page that says "Load Unpacked"
6. Navigate to your unzipped project folder and select that and hit OK.
7. You are now ready to start working on the extension! Just make sure you reload after each change you make to see the changes take place.

## License
MIT License
Please refer to License.md for more details.
