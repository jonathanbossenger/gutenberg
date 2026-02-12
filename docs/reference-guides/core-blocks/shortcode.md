# Shortcode

**Name:** `core/shortcode`  
**Category:** widgets  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Insert additional custom elements with a WordPress shortcode.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `text` | `string` | — | Source: `raw`. Role: `content` |

## Supports

- **className**: `false`
- **customClassName**: `false`
- **html**: `false`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	return <RawHTML>{ attributes.text }</RawHTML>;
}
```

</details>

**Example post content:**

```html
<!-- wp:shortcode -->
[gallery ids="1,2,3"]
<!-- /wp:shortcode -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/shortcode/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/shortcode/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/shortcode/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/shortcode/index.php)
