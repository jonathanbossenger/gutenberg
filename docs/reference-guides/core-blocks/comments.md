# Comments

**Name:** `core/comments`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> An advanced block that allows displaying post comments using different visual configurations.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `tagName` | `string` | `"div"` | — |
| `legacy` | `boolean` | `false` | — |

## Supports

- **anchor**: `true`
- **align**: `"wide"`, `"full"`
- **html**: `false`
- **color**:
  - gradients: `true`
  - heading: `true`
  - link: `true`
  - _DefaultControls_ (experimental): `{"background":true,"text":true,"link":true}`
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
  - radius: `true`
  - color: `true`
  - width: `true`
  - style: `true`
  - _DefaultControls_ (experimental): `{"radius":true,"color":true,"width":true,"style":true}`

## Context

**Uses Context:**

- `postId`
- `postType`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes: { tagName: Tag, legacy } } ) {
	const blockProps = useBlockProps.save();
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	// The legacy version is dynamic (i.e. PHP rendered) and doesn't allow inner
	// blocks, so nothing is saved in that case.
	return legacy ? null : <Tag { ...innerBlocksProps } />;
}
```

</details>

**Example post content:**

```html
<!-- wp:comments -->
<div class="wp-block-comments"><!-- wp:comments-title /-->
<!-- wp:comment-template -->
<!-- wp:comment-author-name /-->
<!-- wp:comment-date /-->
<!-- wp:comment-content /-->
<!-- wp:comment-reply-link /-->
<!-- /wp:comment-template -->
<!-- wp:comments-pagination /--></div>
<!-- /wp:comments -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comments/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comments/save.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comments/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comments/deprecated.js)
