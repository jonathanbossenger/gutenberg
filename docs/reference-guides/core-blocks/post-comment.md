# Comment (deprecated)

**Name:** `core/post-comment`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> This block is deprecated. Please use the Comments block instead.

## Block Relationships

**Allowed inner blocks:**
- `core/avatar`
- `core/comment-author-name`
- `core/comment-content`
- `core/comment-date`
- `core/comment-edit-link`
- `core/comment-reply-link`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `commentId` | `number` | — | — |

## Supports

- **html**: `false`
- **inserter**: `false`
- **interactivity**:
  - clientNavigation: `true`

## Context

**Provides Context:**

- `commentId` → attribute `commentId`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save() {
	const blockProps = useBlockProps.save();
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );
	return <div { ...innerBlocksProps } />;
}
```

</details>

**Example post content:**

```html
<!-- wp:post-comment -->
<div class="wp-block-post-comment"><!-- wp:comment-author-name /-->
<!-- wp:comment-date /-->
<!-- wp:comment-content /--></div>
<!-- /wp:post-comment -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-comment/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-comment/save.js)
- [edit.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-comment/edit.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/post-comment/index.php)
