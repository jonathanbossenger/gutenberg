# Preformatted

**Name:** `core/preformatted`  
**Category:** text  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Add text that respects your spacing and tabs, and also allows styling.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `content` | `rich-text` | — | Source: `rich-text`. Selector: `pre`. Role: `content` |

## Supports

- **anchor**: `true`
- **color**:
  - gradients: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **spacing**:
  - padding: `true`
  - margin: `true`
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
- **interactivity**:
  - clientNavigation: `true`
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`
  - _DefaultControls_ (experimental): `{"radius":true,"color":true,"width":true,"style":true}`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const { content } = attributes;

	return (
		<pre { ...useBlockProps.save() }>
			<RichText.Content value={ content } />
		</pre>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:preformatted -->
<pre class="wp-block-preformatted">Preformatted text here.</pre>
<!-- /wp:preformatted -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/preformatted/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/preformatted/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/preformatted/edit.js)
