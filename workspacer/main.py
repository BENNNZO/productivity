import os

commands = [
    'exec show "spotify.exe"'
]

for command in commands:
    # os.system(f"cd workspacer && nircmd.exe {command}")
    os.system("start spotify:playlist:050j0rPNOXpudpr4KZNkW8")
    # os.system("cd workspacer && start spotify.vbs")

# os.system("cd workspacer && nircmd.exe win close alltopnodesktop")