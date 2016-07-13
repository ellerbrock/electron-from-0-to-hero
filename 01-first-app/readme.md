# 01 - first Electron App [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/) [![Gitter Chat](https://badges.gitter.im/frapsoft/frapsoft.svg)](https://gitter.im/frapsoft/frapsoft/)  


![electron-from-0-to-hero](https://github.frapsoft.com/top/awesome-electron.png)

After you finished this chapter you will get nothing more like on the screenshot.
Looks very ugly and boring, but hidden in the background a giant is waiting for us!

I saved your time and prepared the basic setup we need to get started.
Initialialized an npm package, created the dotfiles, linter and beautify configs and the licence stuff ...
Don't worry about all that, just clone it and run it. After finishing this starter app im sure you will have your own Skeleton project 
prepared for your needs.

Ok, clone the repository to your local disc and run inside the folder `npm update && npm upgrade --save && npm start`.
This will install the dependencies and start the application.

When everything went alright you should get a result looking like this:

![electron - first app](https://github.frapsoft.com/top/electron-app-from-0-hero/01-first-app.png)

Copy this line of code `require('devtron').install()` and past it insite the Console from the Developer Tools from the Browser.
This will install a Debugging Tool called [Devtron](http://electron.atom.io/devtron/) you are now able to lunch from inside your Browser.

Congratulations, you have now Node.js running inside your Browser and can play to execute some node code directly with the Console in the Developer Tools.
We have a basic app structure and all the config und compile options are setup so far to let us coding ...

By executing `npm start` we create the main process in which our app lives and another process we called BrowserWindow to load a HTML
file localy via file:// protocol from your disc.

By default Chromium runs each window in its own process, which means for us that right now we can't exchange informations between those two windows.
This we will change in the next Chapter by implementing two npm modules called [ipc](https://github.com/electron/electron/blob/master/docs/api/ipc-main.md) 
and [remote](https://github.com/electron/electron/blob/master/docs/api/remote.md). 

After the setup in lesson 02 you will learn how to exchange information between diffrent processes and windows inside the application.

### Contact / Social Media

*Get the latest News about Web Development, Open Source, Tooling, Server & Security*

[![Twitter](https://github.frapsoft.com/social/twitter.png)](https://twitter.com/frapsoft/)[![Facebook](https://github.frapsoft.com/social/facebook.png)](https://www.facebook.com/frapsoft/)[![Google+](https://github.frapsoft.com/social/google-plus.png)](https://plus.google.com/116540931335841862774)[![Gitter](https://github.frapsoft.com/social/gitter.png)](https://gitter.im/frapsoft/frapsoft/)[![Github](https://github.frapsoft.com/social/github.png)](https://github.com/ellerbrock/)

### Development by

Developer / Author: [Maik Ellerbrock](https://github.com/ellerbrock/)  
Company: [Frapsoft](https://github.com/frapsoft/)

### License 

Copyright (c) 2016 [Maik Ellerbrock](https://github.com/ellerbrock/)  

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit-125x28.png?v=102)](https://opensource.org/licenses/mit-license.php)  

