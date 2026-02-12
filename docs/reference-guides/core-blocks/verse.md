# Verse

**Name:** `core/verse`  
**Category:** text  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Insert poetry. Use special spacing formats. Or quote song lyrics.

**Keywords:** `poetry`, `poem`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `content` | `rich-text` | — | Source: `rich-text`. Selector: `pre`. Role: `content` |
| `textAlign` | `string` | — | — |

## Supports

- **anchor**: `true`
- **background**:
  - backgroundImage: `true`
  - backgroundSize: `true`
  - _DefaultControls_ (experimental): `{"backgroundImage":true}`
- **color**:
  - gradients: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **dimensions**:
  - minHeight: `true`
  - _DefaultControls_ (experimental): `{"minHeight":false}`
- **typography**:
  - fontSize: `true`
  - _FontFamily_ (experimental): `true`
  - lineHeight: `true`
  - _FontStyle_ (experimental): `true`
  - _FontWeight_ (experimental): `true`
  - _LetterSpacing_ (experimental): `true`
  - _TextTransform_ (experimental): `true`
  - _TextDecoration_ (experimental): `true`
  - _WritingMode_ (experimental): `true`
  - _DefaultControls_ (experimental): `{"fontSize":true}`
- **spacing**:
  - margin: `true`
  - padding: `true`
  - _DefaultControls_ (experimental): `{"margin":false,"padding":false}`
- **__experimentalBorder**:
  - radius: `true`
  - width: `true`
  - color: `true`
  - style: `true`
- **interactivity**:
  - clientNavigation: `true`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const { textAlign, content } = attributes;

	const className = clsx( {
		[ `has-text-align-${ textAlign }` ]: textAlign,
	} );

	return (
		<pre { ...useBlockProps.save( { className } ) }>
			<RichText.Content value={ content } />
		</pre>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:verse -->
<pre class="wp-block-verse">Verse text here.</pre>
<!-- /wp:verse -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/verse/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/verse/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/verse/edit.js)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/verse/deprecated.js)
