---
translated: true
sidebar_position: 6
---
# Change the Default FiveM Key

This documentation will guide you through the steps to modify an existing Pterodactyl Egg and add a default FiveM key. The goal is to allow users to select the FiveM option when creating a game server, while having a preconfigured default key for a better user experience.

**Step 1: Access the Pterodactyl control panel**

Log in to your Pterodactyl control panel using your administrator credentials.

**Step 2: Select the Egg to modify**

Navigate to the "Eggs" section in the left menu and select the Egg you want to modify to add the default FiveM key.

![Step 1](/img/tutorial/step.png)

**Step 3: Modify the variables**

On the Egg configuration page, look for the "Variables" section which contains the configurable options for this Egg.

**Step 4: Modify the FiveM key variable**
Find the FiveM Licence environment variable where you can modify the default value like this

![Step 4](/img/tutorial/step2.png)

**Step 5: Save the changes**

Once you have added the FiveM key variable, click the "Save Egg" button to save the changes made to the Egg.

**Step 6: Verification**

After saving the changes, make sure to verify if the FiveM key is correctly added by default when creating a new server with this Egg. When users select the Egg, the FiveM key variable should be pre-filled with the default value you specified.

Also make sure the key works correctly with the FiveM server when in use.

That's it! You have now successfully added a default FiveM key to your Pterodactyl Egg, providing a better experience for users when creating FiveM game servers with CLIENTXCMS.
