---
sidebar_position: 4
---

# Firmware
Willow comes pre-flashed with ZMK firmware and a default keymap with full support for [ZMK Studio](https://zmk.dev/docs/features/studio). With the nature of a small keyboard like Node, you're likely interested in making a custom keymap for it.

# ZMK Studio
Willow supports ZMK Studio for quick and easy remapping of keys. For a list of currently supported features, check our [the ZMK documentation](https://zmk.dev/docs/features/studio). 

To access and use ZMK Studio, you can visit [zmk.studio](http://zmk.studio). If you plug the keyboard in via USB to your computer, you can edit the keymap from within your web browser. If you want to edit the keymap over bluetooth, you will need to [download the ZMK Studio application](https://github.com/zmkfirmware/zmk-studio/releases).

# Building your own firmware

If you are interested in taking advantage of ZMK features that are not currently supported by Studio, you will need to edit and compile new firmware yourself. We have created a [template repository](https://github.com/AmPi-Studio/willow-zmk-config) for Willow that you can copy to configure the keymap and additional behaviors yourself. If you are interested in setting up ZMK from scratch, [you can follow the ZMK documentation](https://zmk.dev).

# Using the template

To start customizing your firmare, begin by [visiting our template repository on GitHub](https://github.com/AmPi-Studio/willow-zmk-config), select "Use this template" at the top right of the page, then create a new repository.

![Use this template](/img/github_template_ss.png)

After copying the template repository, the firmware will be automatically built using GitHub Actions. You can edit the /config/willow.keymap file to customize your layout and add custom behaviors such as tap dances and macros. For documentation on editing your keymap, [visit the ZMK documentation](https://zmk.dev). Alternatively, you can use the [visual keymap editor by Nick Coutsos](http://nickcoutsos.github.io/keymap-editor/) which makes things very easy. Unlike ZMK Studio, Nick Coutsos's keymap editor has full support for combos, tap dances, macros, and more.

After you edit your keymap either on your own or through the keymap editor, GitHub actions will automatically begin compiling your firmware.

# Downloading the Firmware
To download your firmware, click on the "Actions" tab in your GitHub repository. 

![GitHub Actions Page](/img/node_github_actions_fw.png)

You will see your workflow run that has built your firmware, click into that to find your download.

![Firmware download button](/img/github_firmware_download.png)

The download will contain 3 items. You will find a firmware file for the left and right halves of the keyboard, and a settings reset. 

The settings reset firwmare is only needed for troubleshooting. For information on clearing keyboard bonds using the settings reset firmware, follow the steps outlined in the [ZMK documentation](https://zmk.dev/docs/troubleshooting#split-keyboard-halves-unable-to-pair)

# Flashing Firmware

To flash your downloaded firmware, first ensure the power switch is in the off position, then plug the keyboard into your computer. Once plugged in, double press the reset button located on the back right side of the keyboard- opposite the power switch.

<!-- ![Willow Reset Button](/img/node_reset_button.png) -->

After double pressing the reset button, Willow's microcontroller will emulate a storage device called "NICENANO". Drag and drop the willow-nice_nano_v2-zmk.uf2 file into the storage device. When the bootloader automatically disconnects from your computer, you will have successfully flashed the keyboard half. Follow the same steps with the right half and flash the right firmware file. 

Once flashed, you can power on and begin using your custom keymap.

When the keyboard is powered on for the first time, it will automatically enter pairing mode and Willow should be available to connect to from your computer. For more information about the bluetooth behavior and adding bluetooth switching functionality to your keymap, [check out the ZMK documentation](https://zmk.dev/docs/keymaps/behaviors/bluetooth). 