#!/bin/bash
minimumWidth=500
minimumHeight=500
FILES="*.jpg"
for file in $FILES
do
    imageWidth=$(identify -format "%w" "$file")
    imageHeight=$(identify -format "%h" "$file")
    echo $file
    if [ "$imageWidth" != "$imageHeight" ];  then
	echo "image isn't a square aspect ratio, cropping square"
	./aspectCrop -a 1:1 "$file" "$file"
	imageWidth=$(identify -format "%w" "$file")
	imageHeight=$(identify -format "%h" "$file")
    fi
    
    if [ "$imageWidth" -gt "$minimumWidth" ] || [ "$imageHeight" -gt "$minimumHeight" ]; then
	echo "image is larger than maximium size, resizing"
        mogrify -resize ''"$minimumWidth"x"$minimumHeight"'' "$file"
    fi
done
