# Catalogue images

Keep each category's images under `src/assets/images/<category-id>/`.

```text
cutesy-girls/
  cover/
    01-main.jpg
    02-detail.jpg
  fern/
    01-main.jpg
    02-side.jpg
    03-back.jpg
    04-detail.jpg
```

- The category folder should match the category `id`.
- Each product folder should match the product `id`.
- Prefix filenames with `01`, `02`, and so on to control gallery order.
- `01-main` becomes the product's primary image.
- Galleries use at most four images.

Load a folder in its category data file with:

```ts
const fernImages = getImageSet("cutesy-girls/fern");

{
  id: "fern",
  image: fernImages[0],
  images: fernImages.slice(1),
}
```

New category data belongs in `src/data/categories/` and must be added to the
`CATEGORY_DATA` list in `src/data/index.ts`.
