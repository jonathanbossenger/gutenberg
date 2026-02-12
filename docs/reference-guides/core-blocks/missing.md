# Unsupported

**Name:** `core/missing`  
**Category:** text  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Your site doesn’t include support for this block.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `originalName` | `string` | — | — |
| `originalUndelimitedContent` | `string` | — | — |
| `originalContent` | `string` | — | Source: `raw` |

## Supports

- **className**: `false`
- **customClassName**: `false`
- **inserter**: `false`
- **html**: `false`
- **lock**: `false`
- **reusable**: `false`
- **renaming**: `false`
- **visibility**: `false`
- **interactivity**:
  - clientNavigation: `true`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	// Preserve the missing block's content.
	return <RawHTML>{ attributes.originalContent }</RawHTML>;
}
```

</details>

**Example post content:**

```html
<!-- wp:missing {"originalName":"core/unknown-block"} -->
<!-- Content of unrecognized block -->
<!-- /wp:missing -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/missing/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/missing/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/missing/edit.js)
