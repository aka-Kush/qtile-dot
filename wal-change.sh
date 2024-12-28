#! /bin/sh

DIR="/home/$USER/Pictures/catppuccin"
WAL="$(ls $DIR/*.{png,jpg} 2>/dev/null | shuf -n1)"
cat $WAL > /home/$USER/.config/wall.png
feh --bg-scale /home/$USER/.config/wall.png
