# Spacer

**Name:** `core/spacer`  
**Category:** design  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Add white space between blocks and customize its height.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `height` | `string` | `"100px"` | — |
| `width` | `string` | — | — |

## Supports

- **anchor**: `true`
- **spacing**:
  - margin: `["top","bottom"]`
  - _DefaultControls_ (experimental): `{"margin":true}`
- **interactivity**:
  - clientNavigation: `true`

## Context

**Uses Context:**

- `orientation`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const { height, width, style } = attributes;
	const { layout: { selfStretch } = {} } = style || {};
	// If selfStretch is set to 'fill' or 'fit', don't set default height.
	const finalHeight =
		selfStretch === 'fill' || selfStretch === 'fit' ? undefined : height;
	return (
		<div
			{ ...useBlockProps.save( {
				style: {
					height: getSpacingPresetCssVar( finalHeight ),
					width: getSpacingPresetCssVar( width ),
				},
				'aria-hidden': true,
			} ) }
		/>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:spacer -->
<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/spacer/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/spacer/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/spacer/edit.js)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/spacer/deprecated.js)
