#!/bin/sh

set -e

cd dist
# uglify
export JS_FILE=$(find -name *.js)
uglifyjs -mc -o $JS_FILE -- $JS_FILE
# post css
export CSS_FILE=$(find -name *.css)
uglifycss --ugly-comments $CSS_FILE --output $CSS_FILE
