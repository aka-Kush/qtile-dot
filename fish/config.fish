if status is-interactive
    # Commands to run in interactive sessions can go here
end

alias ls="lsd -l --color=always --group-directories-first"
alias lsa="lsd -la --color=always --group-directories-first"
alias up="sudo pacman -Syu"
alias in="sudo pacman -S "
alias re="sudo pacman -R "

starship init fish | source

colorscript random

#if [ -f /etc/bash.command-not-found ]; then
#    . /etc/bash.command-not-found
#fi


# Created by `pipx` on 2024-12-24 19:28:12
set PATH $PATH /home/kush/.local/bin
alias web='ddgr '

