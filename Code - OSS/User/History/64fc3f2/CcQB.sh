#!/usr/bin/bash

# change wall dir
# change kitty theme
# change current_theme in layout
# change bar

# change rofi theme
sed -i 's/@theme "gruvbox-material"/@theme "catppuccin-mocha"/' /home/kush/.config/rofi/config.rasi

# change gtk and icon using lxappearance
mv /home/kush/.config/gtk-3.0/settings.ini /home/kush/.config/gtk-3.0/settings.ini.gruvbox
mv /home/kush/.config/gtk-3.0/settings.ini.catppuccin /home/kush/.config/gtk-3.0/settings.ini

# change discord theme
echo '{"Catppuccin Mocha": true,"system24 (gruvbox material)": false}' > /home/kush/.config/BetterDiscord/data/stable/themes.json

# change spicetify theme
spicetify config current_theme catppuccin
spicetify config color_scheme frappe
spicetify config inject_css 1 inject_theme_js 1 replace_colors 1 overwrite_assets 1
spicetify apply