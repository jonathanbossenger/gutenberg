# Classic

**Name:** `core/freeform`  
**Category:** text  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Use the classic WordPress editor.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `content` | `string` | — | Source: `raw` |

## Supports

- **className**: `false`
- **customClassName**: `false`
- **lock**: `false`
- **reusable**: `false`
- **renaming**: `false`
- **visibility**: `false`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const { content } = attributes;

	return <RawHTML>{ content }</RawHTML>;
}
```

</details>

**Example post content:**

```html
<!-- wp:freeform -->
<p>Classic editor content</p>
<!-- /wp:freeform -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/freeform/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/freeform/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/freeform/edit.js)
