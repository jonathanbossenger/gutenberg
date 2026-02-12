# Comment Template

**Name:** `core/comment-template`  
**Category:** design  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> Contains the block elements used to display a comment, like the title, date, author, avatar and more.

## Block Relationships

**Parent blocks (direct):**
- `core/comments`

## Attributes

_This block has no custom attributes._

## Supports

- **anchor**: `true`
- **align**: `true`
- **html**: `false`
- **reusable**: `false`
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

## Context

**Uses Context:**

- `postId`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

export default function CommentTemplateSave() {
	return <InnerBlocks.Content />;
}
```

</details>

**Example post content:**

```html
<!-- wp:comment-template -->
<!-- wp:comment-author-avatar /-->
<!-- wp:comment-author-name /-->
<!-- wp:comment-date /-->
<!-- wp:comment-content /-->
<!-- wp:comment-reply-link /-->
<!-- /wp:comment-template -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comment-template/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comment-template/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comment-template/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/comment-template/index.php)
