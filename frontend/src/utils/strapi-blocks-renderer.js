function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function renderLeaf(leaf) {
  let text = escapeHtml(leaf.text || "");

  if (leaf.bold) text = `<strong>${text}</strong>`;
  if (leaf.italic) text = `<em>${text}</em>`;
  if (leaf.underline) text = `<u>${text}</u>`;
  if (leaf.code) text = `<code>${text}</code>`;

  return text;
}

function renderChildren(nodes) {
  return nodes.map(renderLeaf).join("");
}

export default function renderBlocks(blocks) {
  return blocks
    .map((block) => {
      switch (block.type) {
        case "paragraph":
          return `<p class="min-h-2">${renderChildren(block.children)}</p>`;

        case "heading":
          const level = block.level || 2;
          return `<h${level}>${renderChildren(block.children)}</h${level}>`;

        case "quote":
          return `<blockquote>${renderChildren(block.children)}</blockquote>`;

        case "list": {
          const tag = block.format === "ordered" ? "ol" : "ul";
          const listStyle = block.format === "ordered" ? "list-decimal" : "list-disc";
          const items = block.children.map((item) => `<li>${renderChildren(item.children || [])}</li>`).join("");
          return `<${tag} class="list-outside ${listStyle} flex flex-col gap-1">${items}</${tag}>`;
        }

        case "code": {
          const codeText = block.children.map((c) => escapeHtml(c.text || "")).join("");
          return `<pre><code>${codeText}</code></pre>`;
        }

        default:
          return `<div>${renderChildren(block.children)}</div>`;
      }
    })
    .join("\n");
}
