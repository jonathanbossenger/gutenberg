# Title

**Name:** `core/post-title`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Dynamic (server-rendered)

> Displays the title of a post, page, or any other content-type.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `textAlign` | `string` | — | — |
| `level` | `number` | `2` | — |
| `levelOptions` | `array` | — | — |
| `isLink` | `boolean` | `false` | Role: `content` |
| `rel` | `string` | `""` | HTML attribute: `rel`. Role: `content` |
| `linkTarget` | `string` | `"_self"` | Role: `content` |

## Supports

- **anchor**: `true`
- **align**: `"wide"`, `"full"`
- **html**: `false`
- **color**:
  - gradients: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true,"link":true}`
- **spacing**:
  - margin: `true`
  - padding: `true`
- **typography**:
  - fontSize: `true`
  - lineHeight: `true`
  - _FontFamily_ (experimental): `true`
  - _FontWeight_ (experimental): `true`
  - _FontStyle_ (experimental): `true`
  - _TextTransform_ (experimental): `true`
  - _TextDecoration_ (experimental): `true`
  - _LetterSpacing_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"fontSize":true}`
- **interactivity**:
  - clientNavigation: `true`
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`
  - _DefaultControls_ (experimental): `{"radius":true,"color":true,"width":true,"style":true}`

## Context

**Uses Context:**

- `postId`
- `postType`
- `queryId`

## Markup

This is a **dynamic block** — it does not save HTML markup in post content. The front-end rendering is handled entirely by the server via PHP.

**Render function:** `render_block_core_post_title()`

In post content, this block is stored as a block comment with JSON attributes:

```html
<!-- wp:post-title {"level":1,"isLink":true} /-->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-title/block.json)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-title/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-title/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-title/deprecated.js)
