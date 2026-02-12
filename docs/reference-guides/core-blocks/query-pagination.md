# Pagination

**Name:** `core/query-pagination`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Displays a paginated navigation to next/previous set of posts, when applicable.

## Block Relationships

**Ancestor blocks:**
- `core/query`

**Allowed inner blocks:**
- `core/query-pagination-previous`
- `core/query-pagination-numbers`
- `core/query-pagination-next`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `paginationArrow` | `string` | `"none"` | — |
| `showLabel` | `boolean` | `true` | — |

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

**Uses Context:**

- `queryId`
- `query`

**Provides Context:**

- `paginationArrow` → attribute `paginationArrow`
- `showLabel` → attribute `showLabel`

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
<!-- wp:query-pagination -->
<div class="wp-block-query-pagination"><!-- wp:query-pagination-previous /-->
<!-- wp:query-pagination-numbers /-->
<!-- wp:query-pagination-next /--></div>
<!-- /wp:query-pagination -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/query-pagination/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/query-pagination/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/query-pagination/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/query-pagination/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/query-pagination/deprecated.js)
