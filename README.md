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

## TODO

1. A great addition would be to leverage metadata to be smart about which
other languages to use:  i.e. French for languages spoken in Francophonie Africa.

2. Should pull in the whole ISO-639 names even where CLDR falls short, that would get at least en/fr.

## License

MIT
