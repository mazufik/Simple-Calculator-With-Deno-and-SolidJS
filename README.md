# Simple Calculator Apps With Vite + Deno + Solid

## Clone This Repo

```
$ git clone https://github.com/mazufik/Simple-Calcolatur-With-Deno-and-SolidJS.git
```

## Running

You need to have Deno v1.28.0 or later installed to run this repo.

Start a dev server:

```
$ deno task dev
```

open your browser apps and access

```
http://localhost:5173
```

## Deploy

Build production assets:

```
$ deno task build
```

## Notes

- You need to use `.mjs` or `.mts` extension for the `vite.config.[ext]` file.

## Papercuts

Currently there's a "papercut" for Deno users:

- peer dependencies need to be referenced in `vite.config.js` - in this example
  it is only `solid-js` package that needs to be referenced
