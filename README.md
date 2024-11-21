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

# License

MIT
