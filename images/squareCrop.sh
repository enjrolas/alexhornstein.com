#!/bin/bash

FILES="*.jpg"
for file in $FILES
do
    echo $file
    ./aspectCrop -a 1:1 "$file" "$file"
done
