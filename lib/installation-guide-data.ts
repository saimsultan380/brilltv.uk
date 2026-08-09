import { supportConfig } from "@/lib/site";

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type GuideSectionData = {
  id: string;
  label: string;
  title: string;
  blocks: GuideBlock[];
};

export type TroubleshootingTopic = {
  id: string;
  title: string;
  blocks: GuideBlock[];
};

export function formatGuideText(text: string) {
  return text
    .replaceAll("{{email}}", supportConfig.email)
    .replaceAll("{{whatsapp}}", supportConfig.whatsappUrl)
    .replaceAll("{{code}}", supportConfig.downloaderCode);
}

export const beforeYouBeginSection: GuideSectionData = {
  id: "before-you-begin",
  label: "Before You Begin",
  title: "Before You Begin",
  blocks: [
    { type: "p", text: "You will normally need:" },
    {
      type: "ul",
      items: [
        "An active trial or subscription",
        "Your username and password",
        "The complete server address supplied with your account",
        "A stable internet connection",
        "Enough free storage to install or update the app",
        "Permission to install apps on the device",
      ],
    },
    {
      type: "p",
      text: "Keep your account details private. Support may ask for your username or an error screenshot, but never post your password publicly.",
    },
  ],
};

export const firestickSection: GuideSectionData = {
  id: "firestick",
  label: "Firestick",
  title: "Firestick and Fire TV Setup with the Dedicated App",
  blocks: [
    { type: "h3", text: "Step 1: Install Downloader" },
    {
      type: "p",
      text: "From the Fire TV home screen, select Find or the search icon. Search for Downloader, choose the recognised orange Downloader application and install it.",
    },
    { type: "h3", text: "Step 2: Allow Installation When Required" },
    {
      type: "p",
      text: "Open the Fire TV settings and find the installation permission for Downloader. Allow it to install the supplied app. Menu names differ between Fire OS versions, so ask support if you cannot find the option.",
    },
    { type: "h3", text: "Step 3: Enter the Downloader Code" },
    {
      type: "p",
      text: "Open Downloader and enter:",
    },
    {
      type: "p",
      text: "Downloader code: {{code}}",
    },
    {
      type: "p",
      text: "Check that the displayed download belongs to Telvis. Do not install files from unrelated search results or unverified messages.",
    },
    { type: "h3", text: "Step 4: Download and Install" },
    {
      type: "p",
      text: "Start the download, wait for it to finish and select Install. Once installation completes, open the app. You can delete the downloaded installation file afterwards to recover storage.",
    },
    { type: "h3", text: "Step 5: Sign In" },
    {
      type: "p",
      text: "Enter the username, password and any server information from your welcome message. Credentials are case-sensitive. Avoid adding spaces before or after a field.",
    },
    { type: "h3", text: "Step 6: Allow the First Load to Finish" },
    {
      type: "p",
      text: "The first sign-in may take longer while live, movie, series and EPG data load. Keep the app open until the update finishes.",
    },
  ],
};

export const installationDeviceTabs: GuideSectionData[] = [
  firestickSection,
  {
    id: "android-tv",
    label: "Android TV",
    title: "Android TV, Google TV and Android Box Setup",
    blocks: [
      {
        type: "p",
        text: "If the dedicated app is available through a recognised app store on your device, install it there. Otherwise, use Downloader and the same verified code shown above.",
      },
      {
        type: "ol",
        items: [
          "Open the device’s app store and search for Downloader if required.",
          "Install and open Downloader.",
          "Enter {{code}}.",
          "Check that the displayed download is correct.",
          "Install and open the dedicated app.",
          "Enter the supplied account details.",
          "Wait for categories and EPG data to load.",
        ],
      },
      {
        type: "p",
        text: "If Android shows App not installed, check storage, restart the device and try again. An older version of the same app may need removing, but first save any account details you still use.",
      },
    ],
  },
  {
    id: "smart-tv",
    label: "Smart TV",
    title: "Smart TV Setup with Xtream Codes",
    blocks: [
      {
        type: "p",
        text: "Samsung, LG and many other Smart TVs use a compatible player from the television’s official app store.",
      },
      {
        type: "p",
        text: "Recommended Smart TV apps: CR7 Player, IBO Player, SmartOne (Smart One) and HOT IPTV, which may appear as Hot Player in some stores. App availability depends on the television model, operating system and country.",
      },
      {
        type: "p",
        text: "These are media-player apps. They do not include channels, movies, series or a Telvis subscription by themselves.",
      },
      {
        type: "ol",
        items: [
          "Open Samsung Apps, the LG Content Store or your television’s official app store.",
          "Search for one of the recommended apps using its exact name.",
          "Check the app name, icon and developer before installing it.",
          "Open the app and choose Add User, Add Playlist or Xtream Codes API where available.",
          "Enter a playlist name, such as Telvis or Home TV.",
          "Enter the username, password and complete server address from your welcome message.",
          "Save the profile and allow the live, movie, series and EPG categories to load.",
        ],
      },
      {
        type: "p",
        text: "Some Smart TV players show a Device ID, Device Key or MAC address instead of a login form. Follow the player’s official activation instructions or ask Telvis support to guide you. The player developer may charge a separate activation or licence fee after its trial. That fee is separate from the IPTV UK subscription unless your order clearly says it is included.",
      },
      { type: "h3", text: "Samsung TV" },
      {
        type: "p",
        text: "Open Apps from the Samsung home screen and search for CR7 Player, IBO Player, SmartOne or HOT Player. Install whichever compatible option appears for your model, then follow the Xtream Codes or device-activation method shown above.",
      },
      { type: "h3", text: "LG webOS TV" },
      {
        type: "p",
        text: "Open the LG Content Store and search for the same recommended players. Install an available option, open it and add the supplied account details. Older webOS models may offer fewer apps.",
      },
      { type: "h3", text: "Sony, Philips, TCL and Hisense TVs" },
      {
        type: "p",
        text: "First check which operating system the television uses. Android TV and Google TV models should follow the Android TV instructions above. VIDAA and other systems must use a compatible player available in their own official store.",
      },
    ],
  },
  {
    id: "ios",
    label: "iOS",
    title: "iPhone, iPad and Apple TV Setup",
    blocks: [
      { type: "h3", text: "iPhone and iPad Setup" },
      { type: "p", text: "Recommended apps: iPlayTV AIO or IBO Player Pro." },
      {
        type: "ol",
        items: [
          "Open the Apple App Store.",
          "Search for iPlayTV AIO or IBO Player Pro and check the developer before installing.",
          "Open the player and select Add User or Add Playlist.",
          "Choose Xtream Codes API where available.",
          "Enter Telvis as the account or playlist name.",
          "Add the supplied username, password and server address.",
          "Save the profile and wait for the categories to appear.",
        ],
      },
      {
        type: "p",
        text: "If the app closes during the first load, reopen it, check for an update and load the live categories before the larger on-demand library.",
      },
      { type: "h3", text: "Apple TV Setup" },
      { type: "p", text: "Recommended app: IBO Player Pro." },
      {
        type: "ol",
        items: [
          "Open the App Store on Apple TV.",
          "Search for IBO Player Pro and install the correct app.",
          "Open it and choose the Xtream Codes login option where available.",
          "Enter Telvis, your username, password and complete server address.",
          "Save the profile and wait for the categories and EPG to load.",
        ],
      },
      {
        type: "p",
        text: "Use the Apple TV keyboard on your iPhone where available to reduce typing mistakes. If the app displays a Device ID or Device Key, follow its official activation method or ask support for guidance.",
      },
    ],
  },
  {
    id: "android-mobile",
    label: "Android Mobile",
    title: "Android Phone and Tablet Setup",
    blocks: [
      {
        type: "p",
        text: "Android phones and tablets can use the dedicated app or a compatible player.",
      },
      { type: "h3", text: "Dedicated App" },
      {
        type: "p",
        text: "Download only from the verified location supplied by this website or support. Install the app, enter your login and permit the initial catalogue update to finish.",
      },
      { type: "h3", text: "Compatible Player" },
      {
        type: "p",
        text: "Install the chosen player from Google Play, select Xtream Codes login and add the username, password and server address from your account message.",
      },
    ],
  },
  {
    id: "windows",
    label: "Windows",
    title: "Windows Setup",
    blocks: [
      { type: "p", text: "Recommended apps: IBO Player or Smarters Expert." },
      {
        type: "ol",
        items: [
          "Open the Microsoft Store or the player developer’s verified website.",
          "Search for IBO Player or Smarters Expert.",
          "Check the developer and install the correct Windows version.",
          "Open the app and select Xtream Codes Login or Add User.",
          "Enter Telvis as the profile name.",
          "Add the supplied username, password and complete server address.",
          "Save the account and allow the EPG and catalogue to update.",
        ],
      },
    ],
  },
  {
    id: "mac",
    label: "Mac",
    title: "Mac Setup",
    blocks: [
      {
        type: "p",
        text: "IBO Player Pro can be used on compatible Macs where the app is available. Check the Mac App Store and the app’s current system requirements before installing.",
      },
      {
        type: "ol",
        items: [
          "Install the compatible player from the Mac App Store or its verified developer website.",
          "Open the app and choose Xtream Codes or Add Playlist.",
          "Add the username, password and server address from your welcome message.",
          "Save the profile and wait for the first update to finish.",
        ],
      },
      {
        type: "p",
        text: "Avoid modified players from unofficial websites. Unknown installation files can create privacy and security risks.",
      },
    ],
  },
  {
    id: "roku",
    label: "Roku",
    title: "Roku Setup",
    blocks: [
      { type: "p", text: "Player availability on Roku varies by country and model." },
      {
        type: "ol",
        items: [
          "Open the Roku Channel Store.",
          "Search for a compatible player confirmed by Telvis support.",
          "Install the app and follow its on-screen playlist or device-linking method.",
          "Add only the account details supplied in your welcome message.",
        ],
      },
      {
        type: "p",
        text: "If a suitable player is unavailable, use screen mirroring from a supported phone or connect a Firestick, Chromecast with Google TV or Android TV box through HDMI.",
      },
    ],
  },
  {
    id: "chromecast",
    label: "Chromecast",
    title: "Chromecast Setup",
    blocks: [
      { type: "h3", text: "Chromecast with Google TV" },
      {
        type: "p",
        text: "Follow the Android TV setup above. Install the dedicated app or a compatible player, then sign in with the supplied details.",
      },
      { type: "h3", text: "Classic Chromecast" },
      {
        type: "ol",
        items: [
          "Connect the Chromecast and phone or tablet to the same Wi-Fi network.",
          "Open a supported mobile player that includes a Cast button.",
          "Start the required listing and select the Chromecast device.",
          "Keep the mobile app open while testing playback.",
        ],
      },
      {
        type: "p",
        text: "Casting support depends on the mobile player. Ask support to confirm the best option for your phone and Chromecast model.",
      },
    ],
  },
  {
    id: "xbox",
    label: "Xbox",
    title: "Xbox Setup",
    blocks: [
      {
        type: "ol",
        items: [
          "Open the Microsoft Store on the Xbox.",
          "Search for a compatible media player recommended by support.",
          "Install the app and check whether it accepts Xtream Codes or the supplied playlist format.",
          "Add the account details and allow the categories to load.",
        ],
      },
      {
        type: "p",
        text: "Do not enter your login into an unknown browser website. If a suitable Xbox app is unavailable, connect a supported streaming stick or TV box through HDMI.",
      },
    ],
  },
  {
    id: "tv-box",
    label: "TV/Set-Top Box",
    title: "TV Box and Set-Top Box Setup",
    blocks: [
      {
        type: "p",
        text: "Most Android-based boxes follow the Android TV method:",
      },
      {
        type: "ol",
        items: [
          "Open Google Play or install Downloader from a recognised source.",
          "Install the dedicated app using the verified Telvis code, or choose a compatible player.",
          "Enter the supplied login details.",
          "Allow the categories and EPG to load before navigating away.",
        ],
      },
      {
        type: "p",
        text: "Check the operating system first. A MAG box or portal-based decoder uses the separate method below.",
      },
    ],
  },
  {
    id: "mag-portal",
    label: "MAG & Portal",
    title: "MAG and Portal-Based Decoder Setup",
    blocks: [
      {
        type: "ol",
        items: [
          "Open Settings, System Settings or Servers on the device.",
          "Find Portals and enter the portal name Telvis.",
          "Enter the portal address supplied specifically for the device.",
          "Confirm the device MAC address privately with support if account linking is required.",
          "Save the settings and restart the device.",
        ],
      },
      {
        type: "p",
        text: "Do not post the portal address, MAC address or account details publicly. Portal information must be supplied or confirmed by Telvis support before this setup method can work.",
      },
    ],
  },
  {
    id: "kodi",
    label: "Kodi",
    title: "Kodi Setup",
    blocks: [
      {
        type: "p",
        text: "Kodi setup normally requires an M3U playlist and, where available, a separate EPG address. Ask support whether those formats are enabled for your account before starting.",
      },
      {
        type: "ol",
        items: [
          "Open Kodi and select Add-ons.",
          "Open My Add-ons, then PVR Clients.",
          "Select PVR Simple Client and choose Configure.",
          "Add the M3U playlist address supplied for your account.",
          "Add the EPG address where one has been supplied.",
          "Enable the client and restart Kodi.",
        ],
      },
      {
        type: "p",
        text: "If your account provides only Xtream Codes and no M3U address, use another supported player instead of converting or exposing your login on an unknown website.",
      },
    ],
  },
];

export const xtreamCodesSection: GuideSectionData = {
  id: "xtream-codes",
  label: "Xtream Codes Login",
  title: "How to Enter Xtream Codes Correctly",
  blocks: [
    { type: "p", text: "The login normally contains three essential fields:" },
    {
      type: "ul",
      items: [
        "Username: unique to the account and case-sensitive",
        "Password: unique to the account and case-sensitive",
        "Server address: include the complete http:// or https:// prefix and any port number supplied",
      ],
    },
    {
      type: "p",
      text: "Common mistakes include confusing O with zero, missing a symbol, adding a space or leaving out the port number. Copy and paste where practical.",
    },
  ],
};

export const refreshEpgSection: GuideSectionData = {
  id: "refresh-epg",
  label: "Refresh the EPG",
  title: "Refresh the EPG",
  blocks: [
    { type: "p", text: "If live channels load but the programme guide is blank:" },
    {
      type: "ol",
      items: [
        "Open the player settings.",
        "Find EPG, TV Guide or Refresh Data.",
        "Clear old EPG data if the player provides that option.",
        "Start a fresh EPG update.",
        "Keep the app open until the process finishes.",
      ],
    },
    {
      type: "p",
      text: "EPG is available only where guide data is supplied. Information can occasionally be delayed or incomplete.",
    },
  ],
};

export const troubleshootingTopics: TroubleshootingTopic[] = [
  {
    id: "invalid-login",
    title: "Login Says Invalid or Expired",
    blocks: [
      {
        type: "ul",
        items: [
          "Check that the trial or subscription is active.",
          "Re-enter all fields without extra spaces.",
          "Confirm the server address is complete.",
          "Check capital letters and similar-looking characters.",
          "Send support the exact error message.",
        ],
      },
    ],
  },
  {
    id: "channels-not-loading",
    title: "Channels Do Not Load",
    blocks: [
      {
        type: "ul",
        items: [
          "Test another category.",
          "Restart the app and device.",
          "Reboot the router.",
          "Disable a separate VPN temporarily if the included routing conflicts with it.",
          "Refresh the playlist or account inside the player.",
        ],
      },
    ],
  },
  {
    id: "one-channel",
    title: "One Channel Is Not Working",
    blocks: [
      {
        type: "p",
        text: "Test several unrelated listings. If most work, report the affected one instead of reinstalling everything. Include its category, name, time and your device.",
      },
    ],
  },
  {
    id: "buffering",
    title: "Playback Buffers",
    blocks: [
      {
        type: "ul",
        items: [
          "Run an internet speed test on the same device.",
          "Move closer to the router or use Ethernet.",
          "Pause downloads, cloud backups and game updates.",
          "Close unused apps.",
          "Restart the router and streaming device.",
          "Try a lower-quality or alternative source where available.",
        ],
      },
    ],
  },
  {
    id: "app-freezes",
    title: "App Freezes or Closes",
    blocks: [
      {
        type: "ul",
        items: [
          "Clear the player cache without clearing saved data first.",
          "Check available storage.",
          "Install the latest approved version.",
          "Restart the device.",
          "If necessary, reinstall after saving any other account details you need.",
        ],
      },
    ],
  },
  {
    id: "sound-no-picture",
    title: "Sound but No Picture",
    blocks: [
      {
        type: "p",
        text: "If the player allows it, switch the video decoder between hardware and software mode. Restart the listing. Older devices may not support every video format.",
      },
    ],
  },
  {
    id: "picture-no-sound",
    title: "Picture but No Sound",
    blocks: [
      {
        type: "p",
        text: "Check mute and volume, choose another audio track where available and test a second listing. Report the source if the problem affects only one listing.",
      },
    ],
  },
  {
    id: "catch-up-missing",
    title: "Catch-Up Is Missing",
    blocks: [
      {
        type: "p",
        text: "Catch-Up works only on selected listings. Look for a clock, replay or archive icon. If no icon appears, that listing may not support it.",
      },
    ],
  },
  {
    id: "support-info",
    title: "Information to Send Support",
    blocks: [
      {
        type: "ul",
        items: [
          "Order reference or account username",
          "Device brand and model",
          "App or player name",
          "Whether the problem affects live TV, EPG, Catch-Up or on-demand content",
          "Exact error wording",
          "When the issue began",
          "Whether other channels or devices work",
          "A screenshot that does not expose your full password",
        ],
      },
    ],
  },
];

export const installationGuideDefaultId = "firestick";
