# Code

**Name:** `core/code`  
**Category:** text  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Display code snippets that respect your spacing and tabs.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `content` | `rich-text` | — | Source: `rich-text`. Selector: `code`. Role: `content` |

## Supports

- **align**: `"wide"`
- **anchor**: `true`
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
- **spacing**:
  - margin: `["top","bottom"]`
  - padding: `true`
  - _DefaultControls_ (experimental): `{"margin":false,"padding":false}`
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`
  - _DefaultControls_ (experimental): `{"width":true,"color":true}`
- **color**:
  - text: `true`
  - background: `true`
  - gradients: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true}`
- **interactivity**:
  - clientNavigation: `true`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	return (
		<pre { ...useBlockProps.save() }>
			<RichText.Content
				tagName="code"
				// To do: `escape` encodes characters in shortcodes and URLs to
				// prevent embedding in PHP. Ideally checks for the code block,
				// or pre/code tags, should be made on the PHP side?
				value={ escape(
					typeof attributes.content === 'string'
						? attributes.content
						: attributes.content.toHTMLString( {
								preserveWhiteSpace: true,
						  } )
				) }
			/>
		</pre>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:code -->
<pre class="wp-block-code"><code>your_code_here();</code></pre>
<!-- /wp:code -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/code/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/code/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/code/edit.js)
