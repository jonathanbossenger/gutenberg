# Text Columns (deprecated)

**Name:** `core/text-columns`  
**Category:** design  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> This block is deprecated. Please use the Columns block instead.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `content` | `array` | `[{},{}]` | Source: `query`. Selector: `p` |
| `columns` | `number` | `2` | — |
| `width` | `string` | — | — |

## Supports

- **inserter**: `false`
- **interactivity**:
  - clientNavigation: `true`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const { width, content, columns } = attributes;
	return (
		<div
			{ ...useBlockProps.save( {
				className: `align${ width } columns-${ columns }`,
			} ) }
		>
			{ Array.from( { length: columns } ).map( ( _, index ) => (
				<div className="wp-block-column" key={ `column-${ index }` }>
					<RichText.Content
						tagName="p"
						value={ content?.[ index ]?.children }
					/>
				</div>
			) ) }
		</div>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:text-columns {"columns":2} -->
<div class="wp-block-text-columns alignundefined columns-2"><div class="wp-block-column"><p>Column 1</p></div><div class="wp-block-column"><p>Column 2</p></div></div>
<!-- /wp:text-columns -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/text-columns/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/text-columns/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/text-columns/edit.js)
