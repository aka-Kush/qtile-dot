#!/usr/bin/bash

# change wall dir
# change kitty theme
# change current_theme in layout
# change bar
# change rofi theme

# change gtk and icon using lxappearance
mv /home/kush/.config/gtk-3.0/settings.ini /home/kush/.config/gtk-3.0/settings.ini.gruvbox
mv /home/kush/.config/gtk-3.0/settings.ini.catppuccin /home/kush/.config/gtk-3.0/settings.ini


# change discord theme
echo '{"Catppuccin Mocha": true,"system24 (gruvbox material)": false}' > /home/kush/.config/BetterDiscord/data/stable/themes.json
# change spicetify theme
