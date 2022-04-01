#!/bin/bash

source ./utils/shellScripting/constants/colours.sh
source ./utils/shellScripting/constants/constants.sh
source ./utils/shellScripting/funcs/helpers.sh
source ./utils/shellScripting/funcs/client.sh
source ./utils/shellScripting/funcs/api.sh

cat << EOF
This script runs to help you develop your application much faster.
EOF

showMenuBar

run() {
    local selected
    local isRunning=0
    while [[ isRunning -eq 0 ]]
    do
        read -p "Choose an option (0 to show menubar): " selected
        [ $selected == Q ] && exit 0
        if [[ ${OPTIONS[*]} =~ $selected ]]
        then
            [ $selected == 0 ] && showMenuBar
            [ $selected == 1 ] && echo "1"
            [ $selected == 2 ] && echo "2"
            [ $selected == 3 ] && echo "3"
        else
            run
        fi
    done
    return 0
}

run