# Paragraph

**Name:** `core/paragraph`  
**Category:** text  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Start with the basic building block of all narrative.

**Keywords:** `text`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `content` | `rich-text` | — | Source: `rich-text`. Selector: `p`. Role: `content` |
| `dropCap` | `boolean` | `false` | — |
| `placeholder` | `string` | — | — |
| `direction` | `string` | — | Enum: `ltr`, `rtl` |

## Supports

- **align**: `"wide"`, `"full"`
- **splitting**: `true`
- **anchor**: `true`
- **className**: `false`
- **__experimentalBorder**:
  - color: `true`
  - radius: `true`
  - style: `true`
  - width: `true`
- **color**:
  - gradients: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **spacing**:
  - margin: `true`
  - padding: `true`
  - _DefaultControls_ (experimental): `{"margin":false,"padding":false}`
- **typography**:
  - fontSize: `true`
  - lineHeight: `true`
  - textAlign: `true`
  - _FontFamily_ (experimental): `true`
  - _TextDecoration_ (experimental): `true`
  - _FontStyle_ (experimental): `true`
  - _FontWeight_ (experimental): `true`
  - _LetterSpacing_ (experimental): `true`
  - _TextTransform_ (experimental): `true`
  - _WritingMode_ (experimental): `true`
  - fitText: `true`
  - _DefaultControls_ (experimental): `{"fontSize":true}`
- **__experimentalSelector**: `"p"`
- **__unstablePasteTextInline**: `true`
- **interactivity**:
  - clientNavigation: `true`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const { content, dropCap, direction, style } = attributes;
	const textAlign = style?.typography?.textAlign;
	const className = clsx( {
		'has-drop-cap':
			textAlign === ( isRTL() ? 'left' : 'right' ) ||
			textAlign === 'center'
				? false
				: dropCap,
	} );

	return (
		<p { ...useBlockProps.save( { className, dir: direction } ) }>
			<RichText.Content value={ content } />
		</p>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:paragraph -->
<p class="wp-block-paragraph">Your paragraph text here.</p>
<!-- /wp:paragraph -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/paragraph/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/paragraph/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/paragraph/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/paragraph/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/paragraph/deprecated.js)
