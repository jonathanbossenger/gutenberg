# Pullquote (deprecated)

**Name:** `core/pullquote`  
**Category:** text  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> This block is deprecated. Please use the Quote block instead.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `value` | `rich-text` | — | Source: `rich-text`. Selector: `p`. Role: `content` |
| `citation` | `rich-text` | — | Source: `rich-text`. Selector: `cite`. Role: `content` |
| `textAlign` | `string` | — | — |

## Supports

- **anchor**: `true`
- **align**: `"left"`, `"right"`, `"wide"`, `"full"`
- **background**:
  - backgroundImage: `true`
  - backgroundSize: `true`
  - _DefaultControls_ (experimental): `{"backgroundImage":true}`
- **color**:
  - gradients: `true`
  - background: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **dimensions**:
  - minHeight: `true`
  - _DefaultControls_ (experimental): `{"minHeight":false}`
- **inserter**: `false`
- **spacing**:
  - margin: `true`
  - padding: `true`
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
- **__experimentalBorder**:
  - color: `true`
  - radius: `true`
  - style: `true`
  - width: `true`
  - _DefaultControls_ (experimental): `{"color":true,"radius":true,"style":true,"width":true}`
- **__experimentalStyle**:
  - typography: `{"fontSize":"1.5em","lineHeight":"1.6"}`
- **interactivity**:
  - clientNavigation: `true`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const { textAlign, citation, value } = attributes;
	const shouldShowCitation = ! RichText.isEmpty( citation );

	return (
		<figure
			{ ...useBlockProps.save( {
				className: clsx( {
					[ `has-text-align-${ textAlign }` ]: textAlign,
				} ),
			} ) }
		>
			<blockquote>
				<RichText.Content tagName="p" value={ value } />
				{ shouldShowCitation && (
					<RichText.Content tagName="cite" value={ citation } />
				) }
			</blockquote>
		</figure>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:pullquote -->
<figure class="wp-block-pullquote"><blockquote><p>Pullquote text.</p><cite>Citation</cite></blockquote></figure>
<!-- /wp:pullquote -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/pullquote/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/pullquote/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/pullquote/edit.js)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/pullquote/deprecated.js)
