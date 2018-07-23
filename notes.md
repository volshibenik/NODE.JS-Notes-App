###Log

1.  Process instead of document
2.  to run smth -> node _app name_ node index.js .js is optional
3.  process.argv - contains arguments, supplied after launched app name
4.  npm module nodemon to live reload
5.  fs is built-in module to work with file system, f.ex.

```javascript
const fs = require("fs");
fs.writeFileSync("noteBook.json", JSON.stringify(notes));
```

6.  yargs - nmp module to work with arguments
