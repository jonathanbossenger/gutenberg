# Embed

**Name:** `core/embed`  
**Category:** embed  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> Add a block that displays content pulled from other sites, like Twitter or YouTube.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `url` | `string` | — | Role: `content` |
| `caption` | `rich-text` | — | Source: `rich-text`. Selector: `figcaption`. Role: `content` |
| `type` | `string` | — | Role: `content` |
| `providerNameSlug` | `string` | — | Role: `content` |
| `allowResponsive` | `boolean` | `true` | — |
| `responsive` | `boolean` | `false` | Role: `content` |
| `previewable` | `boolean` | `true` | Role: `content` |

## Supports

- **anchor**: `true`
- **align**: `true`
- **spacing**:
  - margin: `true`
- **interactivity**:
  - clientNavigation: `true`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const { url, caption, type, providerNameSlug } = attributes;

	if ( ! url ) {
		return null;
	}

	const className = clsx( 'wp-block-embed', {
		[ `is-type-${ type }` ]: type,
		[ `is-provider-${ providerNameSlug }` ]: providerNameSlug,
		[ `wp-block-embed-${ providerNameSlug }` ]: providerNameSlug,
	} );

	return (
		<figure { ...useBlockProps.save( { className } ) }>
			<div className="wp-block-embed__wrapper">
				{ `\n${ url }\n` /* URL needs to be on its own line. */ }
			</div>
			{ ! RichText.isEmpty( caption ) && (
				<RichText.Content
					className={ __experimentalGetElementClassName( 'caption' ) }
					tagName="figcaption"
					value={ caption }
				/>
			) }
		</figure>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:embed {"url":"https://example.com/video","type":"video","providerNameSlug":"youtube"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://example.com/video
</div></figure>
<!-- /wp:embed -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/embed/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/embed/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/embed/edit.js)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/embed/deprecated.js)
- [variations.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/embed/variations.js)
