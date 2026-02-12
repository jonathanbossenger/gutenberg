# Heading

**Name:** `core/heading`  
**Category:** text  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Introduce new sections and organize content to help visitors (and search engines) understand the structure of your content.

**Keywords:** `title`, `subtitle`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `content` | `rich-text` | — | Source: `rich-text`. Selector: `h1,h2,h3,h4,h5,h6`. Role: `content` |
| `level` | `number` | `2` | — |
| `levelOptions` | `array` | — | — |
| `placeholder` | `string` | — | — |

## Supports

- **align**: `"wide"`, `"full"`
- **anchor**: `true`
- **className**: `true`
- **splitting**: `true`
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
  - _FontStyle_ (experimental): `true`
  - _FontWeight_ (experimental): `true`
  - _LetterSpacing_ (experimental): `true`
  - _TextTransform_ (experimental): `true`
  - _TextDecoration_ (experimental): `true`
  - _WritingMode_ (experimental): `true`
  - fitText: `true`
  - _DefaultControls_ (experimental): `{"fontSize":true}`
- **__unstablePasteTextInline**: `true`
- **__experimentalSlashInserter**: `true`
- **interactivity**:
  - clientNavigation: `true`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes } ) {
	const { content, level } = attributes;
	const TagName = 'h' + level;

	return (
		<TagName { ...useBlockProps.save() }>
			<RichText.Content value={ content } />
		</TagName>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Your heading text</h2>
<!-- /wp:heading -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/heading/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/heading/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/heading/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/heading/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/heading/deprecated.js)
- [variations.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/heading/variations.js)
