(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{370:function(e,t,o){"use strict";o.r(t);var r=o(7),a=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"supporting-1-17-and-beyond"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supporting-1-17-and-beyond"}},[e._v("#")]),e._v(" Supporting 1.17 and beyond")]),e._v(" "),t("p",[e._v("After many days and nights spent working on a temporary solution (and trust me, this is definitely temporary), we've gotten something done: support for 1.17 is here. With backporting work done by artdeell and Java 17 ported by DuyKhanhTran, 1.17 is usable and playable with gl4es. This also applies with 1.17.1 and 1.18 experimental snapshots.")]),e._v(" "),t("p",[e._v("Here's how to get it to work. You need to have a "),t("strong",[e._v("GitHub account")]),e._v(" in order to download the builds and JRE. "),t("s",[e._v("Regardless of your platform, you'll need to download "),t("a",{attrs:{href:"https://cdn.discordapp.com/attachments/724164160761626624/860864619350065162/assets-v0.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("this resource pack"),t("OutboundLink")],1),e._v(".")]),e._v(" The resource pack seems to be no longer required as it is automated in newer builds. This is artdeell's patch for 1.17 on gl4es.")]),e._v(" "),t("h2",{attrs:{id:"known-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known issues")]),e._v(" "),t("ul",[t("li",[e._v("[Android only] Crosshair icon and Block outline don't render.")]),e._v(" "),t("li",[e._v("You can tell us in "),t("a",{attrs:{href:"https://discord.gg/6RpEJda",target:"_blank",rel:"noopener noreferrer"}},[e._v("our Discord server"),t("OutboundLink")],1),e._v(" or open an issue if you found one.")]),e._v(" "),t("li",[e._v("UPDATE: "),t("s",[e._v("32-bit platforms (ARMv7 and i386) are currently broken for various reasons. We are looking for a solution.")]),e._v(" We finally found a gold bar under the sea! Although this "),t("a",{attrs:{href:"https://www.mediafire.com/file/v0xcufgzwgga0jy/jre17-arm-20210914-termux.tar.xz/file",target:"_blank",rel:"noopener noreferrer"}},[e._v("JRE17"),t("OutboundLink")],1),e._v(" is not initially made for PojavLauncher, it works magically. Now you can use this JRE17 build to play 1.17.1 until we stabilize it and bring it to PojavLauncher. (Very soon.)")])]),e._v(" "),t("h2",{attrs:{id:"platform-specific-instruction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#platform-specific-instruction"}},[e._v("#")]),e._v(" Platform-specific instruction")]),e._v(" "),t("h3",{attrs:{id:"android"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android"}},[e._v("#")]),e._v(" Android:")]),e._v(" "),t("ul",[t("li",[e._v("Download latest build: "),t("a",{attrs:{href:"https://github.com/PojavLauncherTeam/PojavLauncher/actions?query=branch%3Av3_openjdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("Download JRE17: "),t("a",{attrs:{href:"https://github.com/PojavLauncherTeam/android-openjdk-build-multiarch/releases/tag/jre17-ec28559",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(". You need to download the artifact that matches your device architecture: "),t("code",[e._v("jre17-<architecture>")]),e._v(", don’t pick jdk17 or debuginfo.")]),e._v(" "),t("li",[e._v("When you install the APK, it will be displayed as second app if you have one installed before.")]),e._v(" "),t("li",[e._v("Go to launcher settings.")]),e._v(" "),t("li",[e._v("Choose Manage runtime -> Add new. Pick the downloaded JRE17 runtime there.")]),e._v(" "),t("li",[e._v("Switch renderer to gl4es 1.1.5 - OpenGL ES 3.")]),e._v(" "),t("li",[t("s",[e._v("On 32-bit, you need to add "),t("code",[e._v("-Xss1m")]),e._v(" to JVM arguments, otherwise Java will crash.")])]),e._v(" "),t("li",[e._v("Now launch Minecraft 1.17 and enjoy!")])]),e._v(" "),t("h3",{attrs:{id:"ios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ios"}},[e._v("#")]),e._v(" iOS:")]),e._v(" "),t("ul",[t("li",[e._v("Install package "),t("code",[e._v("openjdk-16-jre")]),e._v(" or "),t("code",[e._v("openjdk-17-jre")]),e._v(" (if you have Procursus bootstrap)")]),e._v(" "),t("li",[e._v("Get latest build from the "),t("a",{attrs:{href:"https://github.com/PojavLauncherTeam/PojavLauncher_iOS/actions?query=branch%3Amain",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"https://repo.doregon.gq",target:"_blank",rel:"noopener noreferrer"}},[e._v("Doregon's Repo"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("After install, go into PojavLauncher, sign in and choose the more icon to enter Preferences.")]),e._v(" "),t("li",[e._v("Change Java version to 16 or 17, then restart the launcher in order to take effect. For 1.18 snapshots, Java 17 is recommended as Java 16 seems to cause a weird problem.")]),e._v(" "),t("li",[e._v("Change Renderer to "),t("code",[e._v("tinygl4angle")]),e._v(".")]),e._v(" "),t("li",[e._v("Now launch Minecraft 1.17 and enjoy!")]),e._v(" "),t("li",[e._v("Since iOS uses "),t("code",[e._v("tinygl4angle")]),e._v(" renderer which supports (most?) GLSL 1.50 functionally, this can also be applied to 21w37a+.")])]),e._v(" "),t("h2",{attrs:{id:"note-for-minecraft-21w37a-on-android-thanks-to-notahero04"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#note-for-minecraft-21w37a-on-android-thanks-to-notahero04"}},[e._v("#")]),e._v(" Note for Minecraft 21w37a+ on Android (thanks to "),t("a",{attrs:{href:"https://github.com/NotAHero04",target:"_blank",rel:"noopener noreferrer"}},[e._v("@NotAHero04"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("ul",[t("li",[e._v("Since 21w37a, Mojang bumped the resource pack version to 8, which rendered the current assets-v0 patch unusable. "),t("a",{attrs:{href:"https://cdn.discordapp.com/attachments/724163890803638277/923349783589056522/assets-v0.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("This"),t("OutboundLink")],1),e._v(" is the patch for those versions. Simply replace it to the existing assets-v0, and you’re good to go!")]),e._v(" "),t("li",[e._v("A small note: When the popup about 1.17 appears, tap "),t("strong",[e._v("Play Anyway")]),e._v(". Tapping OK "),t("strong",[e._v("will overwrite the patch")]),e._v(".")]),e._v(" "),t("li",[e._v("Another small note: 1.17.1 or below will simply not work with this patch. "),t("s",[e._v("I recommend using per-version config feature with it.")]),e._v(" If you still want to play 1.17.1 or below, keep the original assets-v0 and follow this instruction:")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Download the new assets-v0 on the PojavLauncher Discord server, or "),t("a",{attrs:{href:"https://cdn.discordapp.com/attachments/724163890803638277/923349783589056522/assets-v0.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("here."),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Give it another name then move it to /sdcard/Android/data/net.kdt.pojavlaunch[.debug]/files/.minecraft/resourcepacks (on Android 10 or later) or /sdcard/games/PojavLauncher/.minecraft/resourcepacks (on Android 9 or below).")])]),e._v(" "),t("li",[t("p",[e._v('Modify the options.txt file.\nWith the file names above, change the resourcePacks key to:\nresourcePacks:["assets-v0.zip","'),t("code",[e._v("new_patch_name")]),e._v('.zip"].')])]),e._v(" "),t("li",[t("p",[e._v("Now enjoy your game. Be sure to choose Play Anyway when the popup shows.")])])]),e._v(" "),t("p",[e._v("Until we get a more permenant solution to fix 1.17 and newer, this is what we have. It's not perfect, but it works. We hope to see a version of gl4es that translates OpenGL 3 to OpenGL ES, or continue to work on Zink as a backup method if all else fails.*")]),e._v(" "),t("h2",{attrs:{id:"does-optifine-or-sodium-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#does-optifine-or-sodium-works"}},[e._v("#")]),e._v(" Does OptiFine or Sodium works?")]),e._v(" "),t("h3",{attrs:{id:"optifine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optifine"}},[e._v("#")]),e._v(" OptiFine")]),e._v(" "),t("ul",[t("li",[t("p",[t("s",[e._v("OptiFine seems to not working on Android, as the patch resource pack gets ignored.")]),e._v(" However, it works by putting patched shader files into the client.")]),e._v(" "),t("ul",[t("li",[e._v("Download "),t("a",{attrs:{href:"https://cdn.discordapp.com/attachments/724163890803638277/922043517860212736/Pojav117AssetsPatcher.jar",target:"_blank",rel:"noopener noreferrer"}},[e._v("this patcher"),t("OutboundLink")],1),e._v(". Since OptiFine preloads some shader files, the "),t("code",[e._v("assets-v0")]),e._v(" resource pack trick could not be applied.")]),e._v(" "),t("li",[e._v("Navigate to Options -> Launch a mod installer (the first option). Pick the downloaded patcher.")]),e._v(" "),t("li",[e._v("Select the installed OptiFine version that you want to patch.")]),e._v(" "),t("li",[e._v('Press "OK" to start the patch process.')]),e._v(" "),t("li",[e._v('The alert "Patched '),t("code",[e._v("version")]),e._v('" will be displayed once the patching process finished, otherwise, an alert will display with some error description. Report this to us if this happens.')]),e._v(" "),t("li",[e._v('Now go back to the launcher and press Play. When an alert displays about "install additional resources”, press “Play anyway”.')]),e._v(" "),t("li",[e._v("Enjoy OptiFine moment.")])]),e._v(" "),t("p",[t("strong",[e._v("Known issue:")]),e._v(" Render Regions crashes the game.")])]),e._v(" "),t("li",[t("p",[e._v("OptiFine works on iOS. Render Regions works.")])])]),e._v(" "),t("h3",{attrs:{id:"sodium"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sodium"}},[e._v("#")]),e._v(" Sodium")]),e._v(" "),t("ul",[t("li",[e._v("Sodium is currently not working on both platforms.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);