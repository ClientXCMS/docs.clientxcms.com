---
sidebar_position: 3
translated: true
---

# SocialAuth+

The SocialAuth+ extension makes it easy to connect with OAuth2 for the following platforms: [Google](#google), [Discord](#discord), [GitHub](#github) and [Facebook](#facebook).
> Make it easier for your potential customers to access your platform with SocialAuth+. This solution uses OAuth+ technology for fast and secure login. Your users can register and log in with one click via their accounts, without worrying about losing their password. Simplify their user experience and increase your conversion rate with this advanced authentication extension.


## Configuration in ClientXCMS

The **SocialAuth+** extension is available __for free__, and can be enabled from the "Customization" tab of your ClientXCMS site administration area.

### Enabling the Extension

To enable the SocialAuth+ extension for free, proceed as follows:
1. Log in to the ClientXCMS administration area.
2. Click on the "Settings" button on the navigation bar at the top.
2. In the "Customization" section, click on the "Extensions" page.
3. Search for the "Social Auth+" extension in the list of available extensions.
4. Click on the "Enable" button below it to set it up for free.

### Configuring OAuth Credentials on ClientXCMS

Once the SocialAuth+ extension is enabled from your ClientXCMS administration area, re-access the "Settings" tab.

![Image: SocialAuth+ Tab](/img/next_gen/extensions/addons/socialauth/SA+_extension.png)

On this page, you can manage the different authentication methods depending on the platforms you want to integrate. To configure one, click on the "Configure" button below the platform logo or on the purple settings gear at the top.
![Image: SocialAuth+ Config](/img/next_gen/extensions/addons/socialauth/SA+_page.png)

## OAuth2 Configuration Example

Here is what the OAuth configuration of an authentication platform on ClientXCMS looks like, you just need to have the **Client ID** and **Client Secret** generated and provided by the platform. Follow the rest of this documentation to learn how to proceed depending on the platforms to [obtain these famous OAuth2 authentication keys](#obtaining-oauth2-authentication-keys):
![Image: OAuth Configuration Page Example](/img/next_gen/extensions/addons/socialauth/SA+_exemple_config.png)

## Redirect URI
Make sure to copy the (unique) **Redirect URL** given by ClientXCMS. **For EACH platform, the redirect URL will be different**. It is important because it redirects the user to your site after authentication on the target platform, to finalize the authentication. It ensures that the user can log in if they already have an account on your site, or register if they don't have an account yet.
It is generally formatted like this: ``https://your.domain.com/auth/<platform_name>/callback`` where ``<platform_name>`` corresponds to one of these values:
- google
- discord
- facebook
- github

## Obtaining OAuth2 Authentication Keys

To use this extension, you must obtain OAuth2 authentication keys for each platform you want to support.

## Here is how to proceed for each platform:

### Google

**1.** Go to the [Google developer console](https://console.cloud.google.com/) and log in to your Google account.

**2.** Create a new project by clicking on the "**Select a project**" button.
![Image: Google Config - "Select project" button](/img/next_gen/extensions/addons/socialauth/SA+_Google1.png)

**3.** Give your project a name and follow the configuration steps.

**4.** Once your project is created, click on the quick access shortcut "**APIs & Services**"
![Image: Google Config - Quick access shortcut "APIs & Services"](/img/next_gen/extensions/addons/socialauth/SA+_Google2.png)

**5.** Access the "**OAuth consent screen**" section in the left column.

![Image: Google Config - "OAuth consent screen" section](/img/next_gen/extensions/addons/socialauth/SA+_Google3.png)

**6.** Select the "**External**" option, then click on the "**Create**" button.
![Image: Google Config - "External" consent button](/img/next_gen/extensions/addons/socialauth/SA+_Google4.png)

**7.** Manage the OAuth consent access levels for the application. Click on the "**Add or Remove Scopes**" button

![Image: Google Config - Consent access levels](/img/next_gen/extensions/addons/socialauth/SA+_Google5.png)


Select all fields and click on the blue "**Update**" button below.
![Image: Google Config - Consent access level fields](/img/next_gen/extensions/addons/socialauth/SA+_Google6.png)
![](/img/next_gen/extensions/addons/socialauth/SA+_Google7.png)

**8.** Fill in the required information for OAuth consent, make sure to define the authorized domain as your ClientXCMS site domain (top-level domain, no subdomain required, the domain will suffice)
![Image: Google Config - "Authorized domains"](/img/next_gen/extensions/addons/socialauth/SA+_Google8.png)

**9.** Access the "**Credentials**" section in the left column.

![Image: Google Config - "Credentials" section](/img/next_gen/extensions/addons/socialauth/SA+_Google9.png)

**10.** Click on "**Create Credentials**" and choose "OAuth client ID".
![Image: Google Config - "OAuth client ID" button](/img/next_gen/extensions/addons/socialauth/SA+_Google10.png)

**11.** Select the appropriate application type (here: **Web Application**) and set the name of your application
![Image: Google Config - Application types](/img/next_gen/extensions/addons/socialauth/SA+_Google11.png)

**12.** Below, in "Authorized redirect URIs", click on the "**Add URI**" button and set the [redirect URI given by ClientXCMS in the configuration page](#redirect-uri) in the "__URI 1__" field, then click on the blue "**Create**" button.
![Image: Google Config - Redirect URI Google](/img/next_gen/extensions/addons/socialauth/SA+_Google12.png)

**13.** Once you have created the OAuth application, you will get the necessary OAuth2 authentication keys.
![Google Config - API Send](/img/next_gen/extensions/addons/socialauth/SA+_Google13.png)

**14.** Insert them in the [platform OAuth configuration](#oauth2-configuration-example) on ClientXCMS.

### Discord

**1.** Go to the [Discord developer portal](https://discord.com/developers/applications) and log in to your Discord account.

**2.** Click on the blue "New Application" button at the top right to create a new application.
![Image: Discord Config - New Application](/img/next_gen/extensions/addons/socialauth/SA+_Discord1.png)

**3.** Give your application a name, check to approve Discord's terms of service and developer policies. Then click on the "Create" button at the bottom right to save the new application.
![Image: Discord Config - Create Application](/img/next_gen/extensions/addons/socialauth/SA+_Discord2.png)

**4.** Go to the "**OAuth2**" section in the left navigation menu.

![Image: Discord Config - Navigation Menu "OAuth2"](/img/next_gen/extensions/addons/socialauth/SA+_Discord3.png)
![Image: Discord Config - OAuth2 Interface"](/img/next_gen/extensions/addons/socialauth/SA+_Discord4.png)

**5.** Reveal the "**Client Secret**" by clicking on the blue "**Reset Secret**" button, if you have enabled 2FA (Two-Factor Authentication) on your Discord account, use your 6-digit code generation app to confirm the action.
![Image: Discord Config - Reveal Client Secret"](/img/next_gen/extensions/addons/socialauth/SA+_Discord5.png)

**6.** Below, in "**Redirects**", click on the "**Add Redirect**" button to add the redirect URI and set the [redirect URI given by ClientXCMS in the configuration page](#redirect-uri) in the "__URI 1__" field, then click on the blue "**Create**" button.
![Image: Discord Config - Redirect URI Discord](/img/next_gen/extensions/addons/socialauth/SA+_Discord6.png)

**7.** Click on the "**Save Changes**" button at the bottom to save the changes. Copy the "Client ID" and "Client Secret" keys.
![Discord Config - API Send](/img/next_gen/extensions/addons/socialauth/SA+_Discord7.png)

**8.** Insert them in the [platform OAuth configuration](#oauth2-configuration-example) on ClientXCMS.

### GitHub

**1.** Log in to your [GitHub](https://github.com/login) account.

**2.** Access your profile "[**Settings**](https://github.com/settings/profile)" page.

**3.** In the left menu, click on "[**Developer settings**](

https://github.com/settings/apps)".

![Image: GitHub Config - "Developer Settings"](/img/next_gen/extensions/addons/socialauth/SA+_Github1.png)

**4.** Click on the "[**New GitHub App**](https://github.com/settings/apps/new)" button to register a new application.
![Image: GitHub Config - "New GitHub App"](/img/next_gen/extensions/addons/socialauth/SA+_Github2.png)

**5.** Fill in the basic information for your application.
![Image: GitHub Config - Basic information](/img/next_gen/extensions/addons/socialauth/SA+_Github3.png)

**6.** Below, in the "**Callback URL**" field, set the [redirect URI given by ClientXCMS in the configuration page](#redirect-uri) and check the "**Request user authorization (OAuth) during installation**" option to request OAuth2 usage during installation.
![Image: GitHub Config - Redirect URI GitHub](/img/next_gen/extensions/addons/socialauth/SA+_Github4.png)

**7.** Further below, uncheck the "Active" box in the "**Webhook**" section, because for our use, we won't need it. By unchecking this box, the "**Webhook URL**" field will become optional and not required. Also for the "**Permissions**" section, it will be unnecessary to grant permissions. GitHub already provides all the information that ClientXCMS needs to create the account or log in. Adding required privileges for your application may deter some users from registering on your site.

![Image: GitHub Config - Disable Webhook and other settings](/img/next_gen/extensions/addons/socialauth/SA+_Github5.png)
![Image: GitHub Config - Permissions](/img/next_gen/extensions/addons/socialauth/SA+_Github6.png)

**8.** At the very end of the GitHub application creation form, make sure to select "**Any account**" to allow all accounts to install your application, which will allow your users to authenticate with GitHub. Then save the application with the green button below "**Create GitHub App**".
![Image: GitHub Config - Who can install this application](/img/next_gen/extensions/addons/socialauth/SA+_Github7.png)

**9.** Find Client ID and Secret ID

Here is the management page for your OAuth2 application to which you were automatically redirected after creating the GitHub application.

![Image: GitHub Config - Application management page](/img/next_gen/extensions/addons/socialauth/SA+_Github8.png)
-  **Client Secret:** You can find the **Client Secret** in the "**Client secrets**" section of the GitHub application management page. Click on the "Generate a client secret" button to generate a **Secret ID** key.
![Image: GitHub Config - "Client secrets" section](/img/next_gen/extensions/addons/socialauth/SA+_Github9.png)
- **Client ID:** You can easily find the **Client ID** at the top of the application management page, in the "**About**" section.
![Image: GitHub Config - "About" section Client ID](/img/next_gen/extensions/addons/socialauth/SA+_Github10.png)

**10.** You will then have the "Client ID" and "Client Secret" keys for your application that you must specify in the [platform OAuth configuration](#oauth2-configuration-example) on ClientXCMS.
![Image: GitHub Config - API Send](/img/next_gen/extensions/addons/socialauth/SA+_Github11.png)

### Facebook

**1.** Go to the [Facebook developer portal](https://developers.facebook.com/async/registration/) and log in or sign up to create a Meta developer account. Enter your personal information.

**2.** Create a new application by clicking on the green button at the top right "[**Create an app**](https://developers.facebook.com/apps/creation/)".
![Image: Facebook Config - "Create an app" button](/img/next_gen/extensions/addons/socialauth/SA+_Facebook1.png)

**3.** Select the "**Allow users to log in with their Facebook account**" option, then click on the blue "**Next**" button below.
![Image: Facebook Config - "Allow users to log in with their Facebook account" option](/img/next_gen/extensions/addons/socialauth/SA+_Facebook2.png)

**4.** Specify the application-related information, such as its name and contact email. Click on the green "**Create an application**" button below to save the application.
![Image: Facebook Config - Application-related information](/img/next_gen/extensions/addons/socialauth/SA+_Facebook3.png)

**5.** Once the application is created, you will be automatically redirected to the application management panel.
![Image: Facebook Config - Application management panel](/img/next_gen/extensions/addons/socialauth/SA+_Facebook4.png)

**6.** In the "**Products**" section of your application dashboard, select "Facebook Login" and configure the required settings using the "**Configure**" button.
![Image: Facebook Config - "Products" page](/img/next_gen/extensions/addons/socialauth/SA+_Facebook5.png)
In the small dropdown menu of the "**Configure**" button, select "**Settings**".
![Image: Facebook Config - Facebook Login Settings dropdown menu"](/img/next_gen/extensions/addons/socialauth/SA+_Facebook6.png)

**7.** In the "**Valid OAuth Redirect URIs**" section, specify the value of the [redirect URI given by ClientXCMS in the configuration page](#redirect-uri), then click on the blue "**Save Changes**" button at the bottom right.

![Image: Facebook Config - Redirect URI Facebook](/img/next_gen/extensions/addons/socialauth/SA+_Facebook7.png)

**9.** In the application panel navigation menu, go to "**Settings**" then to the "**Basic**" subcategory. On the first line, you will find the application identifier (**Client ID**) and the secret key (**Secret ID**), click on the "**Show**" button to copy the generated key.
![Image: Facebook Config - API Send](/img/next_gen/extensions/addons/socialauth/SA+_Facebook8.png)
You will then have the "Client ID" and "Client Secret" keys for your application that you must specify in the [platform OAuth configuration](#oauth2-configuration-example) on ClientXCMS.

**10.** Publish the application to make it public: In the Facebook application management panel menu, in the "**Publish**" category, click on the "**Go live**" button to launch the OAuth2 application in production mode so that it can be used by your users.

![Image: Facebook Config - Publish the application](/img/next_gen/extensions/addons/socialauth/SA+_Facebook9.png)

## Error 403 Problem

To fix this problem, go to your Plesk management panel, then Web Application Firewall. In the firewall mode change to "Detection only". It should initially be at "On".
![Image: ModSecurity Apache - "Detection only"](/img/next_gen/extensions/addons/socialauth/SA+_error403.png)

Re-test the connection via Google.


## Congratulations
You have now configured the SocialAuth+ extension with OAuth2 authentication keys. Your customers will now be able to log in and register more easily, faster, and securely on your client area!
