#!/bin/sh

set -e

if [[ `git status --porcelain` ]]; then	
  echo "un-commited changes detected!"
  exit 1
fi

