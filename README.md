# markdown-it-include

This extension adds the [markdown-it-include](https://www.npmjs.com/package/markdown-it-include) plugin to VS Code's [built-in Markdown preview](https://code.visualstudio.com/api/extension-guides/markdown-extension).

To use it, open a folder or a single-folder workspace. Then a Markdown file within that folder can include the contents of other files in or beneath that folder.

## Example

### MasterDoc.md
```
# The Master Document
This is going to include content from other documents.

!!!include(Part1.md)!!!

**THE END**
```

### Part1.md
```
## Part 1
Included from another file.
```
