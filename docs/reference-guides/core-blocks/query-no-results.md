# No Results

**Name:** `core/query-no-results`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Contains the block elements used to render content when no query results are found.

## Block Relationships

**Ancestor blocks:**
- `core/query`

## Attributes

_This block has no custom attributes._

## Supports

- **anchor**: `true`
- **align**: `true`
- **reusable**: `false`
- **html**: `false`
- **color**:
  - gradients: `true`
  - link: `true`
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
<!-- wp:query-no-results -->
<!-- wp:paragraph -->
<p>No posts found.</p>
<!-- /wp:paragraph -->
<!-- /wp:query-no-results -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/query-no-results/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/query-no-results/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/query-no-results/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/query-no-results/index.php)
