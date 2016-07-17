# 03 - local storage [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/) [![Gitter Chat](https://badges.gitter.im/frapsoft/frapsoft.svg)](https://gitter.im/frapsoft/frapsoft/)

![electron-from-0-to-hero](https://github.frapsoft.com/top/awesome-electron.png)

in this chapter added local storage to the application via the npm module `electron-json-storage`.<br>
nice and easy setup and works very well.<br>
i save the date the application was first time started and log the user, hostname, platform on each new visit. i don't work further on this, its working and shows the how to use it.

few code examples:

reset the storage:

```
resetStorage()

function resetStorage() {
  storage.clear(function(error) {
    if(error) throw error
  })
  console.log('storage cleared sucessful ...')
}
```

write to storage:

```
function firstStart() {
  storage.set('init', {
    date: moment().format('LL')
  }, function(err) {
    if(err) throw err
  })
}
```

read from storage:

```
let info = storage.get('init', function(err, data) {
  if(err) {
    firstStart()
    dumpHtml('The Application started first time!')
  } else {
    storage.set('log', {
      date: moment().format('LL')
    }, function(err) {
      if(err) throw err
    })
    dumpHtml('active browser session ...')
  }
})
```

whats really convenience since this chapter that i updated my npm script to auto reload the app on file change. i was not sure whats the right way to do that with electron. first played with some npm modules adding to the script, not to well working for my quick tests. then i found out that [nodemon](https://github.com/remy/nodemon) provides the option to execute external programs. no its almost to easy, kinda boring :)

`"start": "nodemon --exec electron --debug ./src/index.js"` in the package.json for happy code reloading.

jupp play with the app or whatever, i keep going to looking for some cool feature i later can add to my app ...

by the way, my code formatting looks pretty wired, and all the linting settings and stuff not really setup yet. just switched to atom beta and add lots of new features. for those also using atom for development, i'm publishing on this repro as well at the moment: [Atom for Web Developer](https://github.com/ellerbrock/atom-for-webdeveloper)

**install:** `npm update && npm upgrade --save`

**run:** `npm start`

![electron-photon](https://github.frapsoft.com/screenshots/electron-local-storage.png)
### Contact / Social Media

*Get the latest News about Web Development, Open Source, Tooling, Server & Security*

[![Twitter](https://github.frapsoft.com/social/twitter.png)](https://twitter.com/frapsoft/)[![Facebook](https://github.frapsoft.com/social/facebook.png)](https://www.facebook.com/frapsoft/)[![Google+](https://github.frapsoft.com/social/google-plus.png)](https://plus.google.com/116540931335841862774)[![Gitter](https://github.frapsoft.com/social/gitter.png)](https://gitter.im/frapsoft/frapsoft/)[![Github](https://github.frapsoft.com/social/github.png)](https://github.com/ellerbrock/)

### Development by

Developer / Author: [Maik Ellerbrock](https://github.com/ellerbrock/)  
Company: [Frapsoft](https://github.com/frapsoft/)

### License 

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />

This work by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/ellerbrock/" property="cc:attributionName" rel="cc:attributionURL">Maik Ellerbrock</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.