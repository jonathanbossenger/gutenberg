# Comments Pagination

**Name:** `core/comments-pagination`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Displays a paginated navigation to next/previous set of comments, when applicable.

## Block Relationships

**Parent blocks (direct):**
- `core/comments`

**Allowed inner blocks:**
- `core/comments-pagination-previous`
- `core/comments-pagination-numbers`
- `core/comments-pagination-next`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `paginationArrow` | `string` | `"none"` | — |

## Supports

- **anchor**: `true`
- **align**: `true`
- **reusable**: `false`
- **html**: `false`
- **color**:
  - gradients: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true,"link":true}`
- **layout**:
  - allowSwitching: `false`
  - allowInheriting: `false`
  - default: `{"type":"flex"}`
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

## Context

**Provides Context:**

- `comments/paginationArrow` → attribute `paginationArrow`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save() {
	return <InnerBlocks.Content />;
}
```

</details>

**Example post content:**

```html
<!-- wp:comments-pagination -->
<div class="wp-block-comments-pagination"><!-- wp:comments-pagination-previous /-->
<!-- wp:comments-pagination-numbers /-->
<!-- wp:comments-pagination-next /--></div>
<!-- /wp:comments-pagination -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comments-pagination/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comments-pagination/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comments-pagination/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comments-pagination/index.php)
