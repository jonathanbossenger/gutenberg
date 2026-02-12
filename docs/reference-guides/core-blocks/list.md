# List

**Name:** `core/list`  
**Category:** text  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> An organized collection of items displayed in a specific order.

**Keywords:** `bullet list`, `ordered list`, `numbered list`

## Block Relationships

**Allowed inner blocks:**
- `core/list-item`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `ordered` | `boolean` | `false` | Role: `content` |
| `values` | `string` | `""` | Source: `html`. Selector: `ol,ul`. Role: `content` |
| `type` | `string` | — | — |
| `start` | `number` | — | — |
| `reversed` | `boolean` | — | — |
| `placeholder` | `string` | — | — |

## Supports

- **anchor**: `true`
- **html**: `false`
- **__experimentalBorder**:
  - color: `true`
  - radius: `true`
  - style: `true`
  - width: `true`
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
- **color**:
  - gradients: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **spacing**:
  - margin: `true`
  - padding: `true`
  - _DefaultControls_ (experimental): `{"margin":false,"padding":false}`
- **__unstablePasteTextInline**: `true`
- **__experimentalOnMerge**: `true`
- **__experimentalSlashInserter**: `true`
- **interactivity**:
  - clientNavigation: `true`
- **listView**: `true`

## CSS Selectors

- **border**: `.wp-block-list:not(.wp-block-list .wp-block-list)`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const { ordered, type, reversed, start } = attributes;
	const TagName = ordered ? 'ol' : 'ul';
	return (
		<TagName
			{ ...useBlockProps.save( {
				reversed,
				start,
				style: {
					listStyleType:
						ordered && type !== 'decimal' ? type : undefined,
				},
			} ) }
		>
			<InnerBlocks.Content />
		</TagName>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>List item</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/list/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/list/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/list/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/list/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/list/deprecated.js)
