# Custom HTML

**Name:** `core/html`  
**Category:** widgets  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Add custom HTML code and preview it as you edit.

**Keywords:** `embed`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `content` | `string` | — | Source: `raw`. Role: `content` |

## Supports

- **customClassName**: `false`
- **className**: `false`
- **html**: `false`
- **interactivity**:
  - clientNavigation: `true`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	return <RawHTML>{ attributes.content }</RawHTML>;
}
```

</details>

**Example post content:**

```html
<!-- wp:html -->
<div>Custom HTML content</div>
<!-- /wp:html -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/html/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/html/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/html/edit.js)
