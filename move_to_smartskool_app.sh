#!/bin/bash

# Create the parent directory
mkdir -p c:/Users/USER/Desktop/sites/2025/smartskool/smartskool-app

# Move directories into the parent directory
mv c:/Users/USER/Desktop/sites/2025/smartskool/my-education-app c:/Users/USER/Desktop/sites/2025/smartskool/smartskool-app/
mv c:/Users/USER/Desktop/sites/2025/smartskool/frontend c:/Users/USER/Desktop/sites/2025/smartskool/smartskool-app/
mv c:/Users/USER/Desktop/sites/2025/smartskool/backend c:/Users/USER/Desktop/sites/2025/smartskool/smartskool-app/
mv c:/Users/USER/Desktop/sites/2025/smartskool/db c:/Users/USER/Desktop/sites/2025/smartskool/smartskool-app/

echo "Files moved to smartskool-app successfully."
