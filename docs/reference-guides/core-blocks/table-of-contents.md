# Table of Contents

**Name:** `core/table-of-contents`  
**Category:** design  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Summarize your post with a list of headings. Add HTML anchors to Heading blocks to link them here.

**Keywords:** `document outline`, `summary`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `headings` | `array` | `[]` | — |
| `onlyIncludeCurrentPage` | `boolean` | `false` | — |
| `maxLevel` | `number` | — | — |
| `ordered` | `boolean` | `true` | — |

## Supports

- **anchor**: `true`
- **ariaLabel**: `true`
- **html**: `false`
- **color**:
  - text: `true`
  - background: `true`
  - gradients: `true`
  - link: `true`
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
export default function save( {
	attributes: { headings = [], ordered = true },
} ) {
	if ( headings.length === 0 ) {
		return null;
	}
	const ListTag = ordered ? 'ol' : 'ul';
	return (
		<nav { ...useBlockProps.save() }>
			<ListTag>
				<TableOfContentsList
					nestedHeadingList={ linearToNestedHeadingList( headings ) }
					ordered={ ordered }
				/>
			</ListTag>
		</nav>
	);
}
```

</details>

**Example post content:**

```html
<!-- wp:table-of-contents {"headings":[]} /-->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/table-of-contents/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/table-of-contents/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/table-of-contents/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/table-of-contents/index.php)
