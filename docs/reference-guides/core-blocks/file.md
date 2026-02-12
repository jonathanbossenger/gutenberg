# File

**Name:** `core/file`  
**Category:** media  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Add a link to a downloadable file.

**Keywords:** `document`, `pdf`, `download`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `id` | `number` | — | — |
| `blob` | `string` | — | Role: `local` |
| `href` | `string` | — | Role: `content` |
| `fileId` | `string` | — | Source: `attribute`. Selector: `a:not([download])`. HTML attribute: `id` |
| `fileName` | `rich-text` | — | Source: `rich-text`. Selector: `a:not([download])`. Role: `content` |
| `textLinkHref` | `string` | — | Source: `attribute`. Selector: `a:not([download])`. HTML attribute: `href`. Role: `content` |
| `textLinkTarget` | `string` | — | Source: `attribute`. Selector: `a:not([download])`. HTML attribute: `target` |
| `showDownloadButton` | `boolean` | `true` | — |
| `downloadButtonText` | `rich-text` | — | Source: `rich-text`. Selector: `a[download]`. Role: `content` |
| `displayPreview` | `boolean` | — | — |
| `previewHeight` | `number` | `600` | — |

## Supports

- **anchor**: `true`
- **align**: `true`
- **spacing**:
  - margin: `true`
  - padding: `true`
- **color**:
  - gradients: `true`
  - link: `true`
  - text: `false`
  - _DefaultControls_ (experimental): `{"background":true,"link":true}`
- **__experimentalBorder**:
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`
  - _DefaultControls_ (experimental): `{"radius":true,"color":true,"width":true,"style":true}`
- **interactivity**: `true`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const {
		href,
		fileId,
		fileName,
		textLinkHref,
		textLinkTarget,
		showDownloadButton,
		downloadButtonText,
		displayPreview,
		previewHeight,
	} = attributes;

	const pdfEmbedLabel = RichText.isEmpty( fileName )
		? 'PDF embed'
		: // To do: use toPlainText, but we need ensure it's RichTextData. See
		  // https://github.com/WordPress/gutenberg/pull/56710.
		  fileName.toString();

	const hasFilename = ! RichText.isEmpty( fileName );

	// Only output an `aria-describedby` when the element it's referring to is
	// actually rendered.
	const describedById = hasFilename ? fileId : undefined;

	return (
		href && (
			<div { ...useBlockProps.save() }>
				{ displayPreview && (
					<>
						<object
							className="wp-block-file__embed"
							data={ href }
							type="application/pdf"
							style={ {
								width: '100%',
								height: `${ previewHeight }px`,
							} }
							aria-label={ pdfEmbedLabel }
						/>
					</>
				) }
				{ hasFilename && (
					<a
						id={ describedById }
						href={ textLinkHref }
						target={ textLinkTarget }
						rel={
							textLinkTarget ? 'noreferrer noopener' : undefined
						}
					>
						<RichText.Content value={ fileName } />
					</a>
				) }
				{ showDownloadButton && (
					<a
						href={ href }
						className={ clsx(
							'wp-block-file__button',
							__experimentalGetElementClassName( 'button' )
						) }
						download
						aria-describedby={ describedById }
					>
						<RichText.Content value={ downloadButtonText } />
					</a>
				) }
			</div>
		)
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:file {"id":123,"href":"https://example.com/file.pdf"} -->
<div class="wp-block-file"><a href="https://example.com/file.pdf">File name</a><a href="https://example.com/file.pdf" class="wp-block-file__button wp-element-button" download>Download</a></div>
<!-- /wp:file -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/file/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/file/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/file/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/file/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/file/deprecated.js)
