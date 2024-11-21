# Generate keywords

## What is this

see the examples

## Building

`npm i`

## Usage

Example:


```terminal
$ node index.js  es
{
  lang: 'es',
  keywords: [ 'español teclado', 'Spanish keyboard', 'espagnol clavier' ]
}
```

Other examples:

```terminal
$ node index.js  eu
{
  lang: 'eu',
  keywords: [ 'euskara teklatua', 'Basque keyboard', 'basque clavier' ]
}

$ node index.js  am
{
  lang: 'am',
  keywords: [ 'አማርኛ የቁልፍ ሰሌዳ', 'Amharic keyboard', 'amharique clavier' ]
}
```

Sometimes the self-name isn't availble.

```terminal
$ node index.js ssy
Warning: Could not get self-name for ssy
{ lang: 'ssy', keywords: [ 'Saho keyboard', 'saho clavier' ] }
```


srl295@pickles:~/src/keywordizer$ node index.js  ssy
Error: ENOENT: no such file or directory, open './node_modules/cldr-annotations-full/annotations/ssy/annotations.json'
    at Object.readFileSync (node:fs:457:20)
    at read (/home/srl295/src/keywordizer/index.js:7:29)
    at getAnnotationBlob (/home/srl295/src/keywordizer/index.js:25:15)
    at getKeywordsFor (/home/srl295/src/keywordizer/index.js:33:17)
    at getKeywords (/home/srl295/src/keywordizer/index.js:43:16)
    at /home/srl295/src/keywordizer/index.js:55:49
    at Array.forEach (<anonymous>)
    at Object.<anonymous> (/home/srl295/src/keywordizer/index.js:55:6)
    at Module._compile (node:internal/modules/cjs/loader:1369:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1427:10) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: './node_modules/cldr-annotations-full/annotations/ssy/annotations.json'
}
Could not get self-name for ssy
{ lang: 'ssy', keywords: [ 'Saho keyboard', 'saho clavier' ] }
```

# License

MIT
