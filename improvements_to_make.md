# Improvements to make
* padding right on overflow isn't working

* scrollbar behavior isn't exactly the same as chatgpt, see /Users/azakaria/Code/copy-container/src/CopyContainer.scratch.css. I tried to use a webkit scrollbar pseudo class to keep the scrollbar visible when content overflows, but it wasn't working (despite applying the same rules as chatgpt, i looked in devtools)

* loading dist and not dist styles must be problematic, I think that's why highlightjs seems to be loading twice, and after my own stylesheet. it loads first and last