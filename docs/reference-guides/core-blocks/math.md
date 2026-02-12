# Math

**Name:** `core/math`  
**Category:** text  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Display mathematical notation using LaTeX.

**Keywords:** `equation`, `formula`, `latex`, `mathematics`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `latex` | `string` | — | Role: `content` |
| `mathML` | `string` | — | Source: `html`. Selector: `math` |

## Supports

- **anchor**: `true`
- **html**: `false`
- **__experimentalBorder**:
  - color: `true`
  - radius: `true`
  - style: `true`
  - width: `true`
- **color**:
  - gradients: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **spacing**:
  - margin: `true`
  - padding: `true`
  - _DefaultControls_ (experimental): `{"margin":false,"padding":false}`
- **typography**:
  - fontSize: `true`
  - _DefaultControls_ (experimental): `{"fontSize":true}`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const { latex, mathML } = attributes;

	if ( ! latex ) {
		return null;
	}

	return (
		<div { ...useBlockProps.save() }>
			<math
				display="block"
				dangerouslySetInnerHTML={ { __html: mathML } }
			/>
		</div>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:math -->
<div class="wp-block-math">E = mc^2</div>
<!-- /wp:math -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/math/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/math/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/math/edit.js)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/math/deprecated.js)
