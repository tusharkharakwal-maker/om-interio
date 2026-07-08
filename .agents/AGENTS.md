# Image Upload Workflow

When the user attaches an image in chat and asks to use it in the project:
1. Look for the uploaded image in the current conversation's brain directory (`C:\Users\ted\.gemini\antigravity-ide\brain\<conversation-id>`). The file will be named like `media__<timestamp>.<ext>`.
2. Determine an appropriate descriptive filename for the image (e.g., `bedroom-photo.jpg`, `team-photo.jpg`).
3. Copy the image from the brain directory to the project's `public` directory using the `run_command` tool (e.g., `cmd.exe /c "copy C:\...\media__123.jpg c:\...\public\bedroom-photo.jpg"`).
4. Proactively update the project's code to reference this new image (e.g., setting the `src` to `"/bedroom-photo.jpg"`).
5. Inform the user that you have automatically saved the image and updated the code.
