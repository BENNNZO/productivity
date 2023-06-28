import os
import time

from pynput.keyboard import Key, Controller
keyboard = Controller()

# os.system("start spotify:artist:4MCBfE4596Uoi2O4DtmEMz") # open spotify
# os.system("code D:\\Code\\Projects") # open vscode
# os.system('start C:\\"Program Files"\\Google\\Chrome\\Application\\chrome.exe --profile-directory="Profile 3"') # open chrome
# time.sleep(5)
# Controller().tap(Key.media_play_pause)

commands = [
    'win min process spotify.exe',
    'win move ititle "Google Chrome" 2000 0 0 0',
    'win max ititle "Google Chrome"',
    # 'win min ititle "Google Chrome"',
]

for command in commands:
    os.system(f"cd workspacer && nircmd.exe {command}")
    print(command)

# os.system("cd workspacer && nircmd.exe win close alltopnodesktop")