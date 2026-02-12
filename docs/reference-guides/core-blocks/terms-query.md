# Terms Query

**Name:** `core/terms-query`  
**Category:** theme  
**API Version:** 3  
**Block Type:** Static (saved in post content)

> An advanced block that allows displaying taxonomy terms based on different query parameters and visual configurations.

**Keywords:** `terms`, `taxonomy`, `categories`, `tags`, `list`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `termQuery` | `object` | `{"perPage":10,"taxonomy":"category","order":"asc","orderBy":"name","include":[],"hideEmpty":true,"showNested":false,"inherit":false}` | — |
| `tagName` | `string` | `"div"` | — |

## Supports

- **anchor**: `true`
- **align**: `"wide"`, `"full"`
- **html**: `false`
- **layout**: `true`
- **interactivity**: `true`

## Context

**Uses Context:**

- `templateSlug`

**Provides Context:**

- `termQuery` → attribute `termQuery`

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
<!-- wp:terms-query {"taxonomy":"category"} -->
<div class="wp-block-terms-query"><!-- wp:term-template -->
<!-- wp:term-name /-->
<!-- wp:term-description /-->
<!-- wp:term-count /-->
<!-- /wp:term-template --></div>
<!-- /wp:terms-query -->
```

## Source

- [block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/terms-query/block.json)
- [save.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/terms-query/save.js)
- [variations.js](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/terms-query/variations.js)
