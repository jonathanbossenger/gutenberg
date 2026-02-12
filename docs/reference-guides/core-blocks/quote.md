# Quote

**Name:** `core/quote`  
**Category:** text  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Give quoted text visual emphasis. "In quoting others, we cite ourselves." — Julio Cortázar

**Keywords:** `blockquote`, `cite`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `value` | `string` | `""` | Source: `html`. Selector: `blockquote`. Role: `content` |
| `citation` | `rich-text` | — | Source: `rich-text`. Selector: `cite`. Role: `content` |
| `textAlign` | `string` | — | — |

## Supports

- **anchor**: `true`
- **align**: `"left"`, `"right"`, `"wide"`, `"full"`
- **html**: `false`
- **background**:
  - backgroundImage: `true`
  - backgroundSize: `true`
  - _DefaultControls_ (experimental): `{"backgroundImage":true}`
- **__experimentalBorder**:
  - color: `true`
  - radius: `true`
  - style: `true`
  - width: `true`
  - _DefaultControls_ (experimental): `{"color":true,"radius":true,"style":true,"width":true}`
- **dimensions**:
  - minHeight: `true`
  - _DefaultControls_ (experimental): `{"minHeight":false}`
- **__experimentalOnEnter**: `true`
- **__experimentalOnMerge**: `true`
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
  - heading: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **layout**:
  - allowEditing: `false`
- **spacing**:
  - blockGap: `true`
  - padding: `true`
  - margin: `true`
- **interactivity**:
  - clientNavigation: `true`
- **allowedBlocks**: `true`

## Block Styles

| Style Name | Label | Default |
|------------|-------|---------|
| `default` | Default | Yes |
| `plain` | Plain | No |

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const { textAlign, citation } = attributes;

	const className = clsx( {
		[ `has-text-align-${ textAlign }` ]: textAlign,
	} );

	return (
		<blockquote { ...useBlockProps.save( { className } ) }>
			<InnerBlocks.Content />
			{ ! RichText.isEmpty( citation ) && (
				<RichText.Content tagName="cite" value={ citation } />
			) }
		</blockquote>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Quote text here.</p>
<!-- /wp:paragraph --><cite>Citation</cite></blockquote>
<!-- /wp:quote -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/quote/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/quote/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/quote/edit.js)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/quote/deprecated.js)
