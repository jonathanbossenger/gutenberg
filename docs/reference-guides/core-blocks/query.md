# Query Loop

**Name:** `core/query`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Hybrid (static save + server-rendered enhancements)

> An advanced block that allows displaying post types based on different query parameters and visual configurations.

**Keywords:** `posts`, `list`, `blog`, `blogs`, `custom post types`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `queryId` | `number` | — | — |
| `query` | `object` | `{"perPage":null,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true,"taxQuery":null,"parents":[],"format":[]}` | — |
| `tagName` | `string` | `"div"` | — |
| `namespace` | `string` | — | — |
| `enhancedPagination` | `boolean` | `false` | — |

## Supports

- **anchor**: `true`
- **align**: `"wide"`, `"full"`
- **html**: `false`
- **layout**: `true`
- **interactivity**: `true`
- **contentRole**: `true`

## Context

**Uses Context:**

- `templateSlug`

**Provides Context:**

- `queryId` → attribute `queryId`
- `query` → attribute `query`
- `displayLayout` → attribute `displayLayout`
- `enhancedPagination` → attribute `enhancedPagination`

## Markup

The block saves the following markup structure in post content:

<details>
<summary>Save function JSX (click to expand)</summary>

```jsx
export default function save( { attributes: { tagName: Tag = 'div' } } ) {
	const blockProps = useBlockProps.save();
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );
	return <Tag { ...innerBlocksProps } />;
}
```

</details>

**Example post content:**

```html
<!-- wp:query {"queryId":1,"query":{"perPage":10,"postType":"post","order":"desc","orderBy":"date"}} -->
<div class="wp-block-query"><!-- wp:post-template -->
<!-- wp:post-title {"isLink":true} /-->
<!-- wp:post-date /-->
<!-- wp:post-excerpt /-->
<!-- /wp:post-template -->
<!-- wp:query-pagination -->
<div class="wp-block-query-pagination"><!-- wp:query-pagination-previous /-->
<!-- wp:query-pagination-numbers /-->
<!-- wp:query-pagination-next /--></div>
<!-- /wp:query-pagination --></div>
<!-- /wp:query -->
```

> **Note:** This is a hybrid block. While it saves static markup, the server may enhance or modify the output during rendering via `index.php`.

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/query/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/query/save.js)
- [index.php](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/query/index.php)
- [deprecated.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/query/deprecated.js)
- [variations.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/query/variations.js)
