---
permalink: /credentials/irc
description: Learn to configure credentials for the IRC node in n8n
---

# Internet Relay Chat (IRC)

You can use these credentials to authenticate the following nodes with IRC.
- [IRC](../../nodes-library/nodes/Irc/README.md)

## Prerequisites

Create a channel on an IRC network, for example [Libera.chat](https://libera.chat/) or [OFTC](https://www.oftc.net/). You could also setup [your own](https://ircv3.net/software/servers) IRC server.

You may also want to [register an account](https://libera.chat/guides/registration) for the n8n integration. You should check the account registration documentation for the network you're using with the `/ns help register` command.

## Using IRC

1. Enter the hostname of the IRC server in the ***Host*** field.
2. If the network either uses ***self-signed*** TLS certificates, does not support TLS, or uses a custom port (not 6697), check out the [***Using Custom TLS/Port Details***](#using-custom-tls-port-details) section below.
3. Enter your desired nickname in the ***Nickname*** field.
4. If you want the bot to login to an account with SASL, check out the [***Logging into an Account***](#logging-into-an-account) section below.
5. Click on the ***Save*** button to save your credentials.

```
TODO: picture/gif of the details inserted
```

## Using Custom TLS/Port Details

These credentials configure a safe, secure network setup by default. These settings will be correct for the majority of publicly-available networks out there.

However, if you're running your own network or one that doesn't conform to standard IRC configurations, you may need to change these settings.

### Disabling TLS

If you want to disable TLS (use plaintext) then disable the ***Use TLS*** field near the bottom of the node.

### Allowing Self-Signed TLS Certificates

Some servers support TLS, but don't provide signed certificates. If you want to connect to these servers, you'll need to disable the ***Force TLS Certificate Validation*** field.

### Using a Custom Port

Most servers let clients connect on port 6697 for TLS IRC, and 6667 for plaintext IRC. If you need to change this, you can do the following.

1. Confirm the ***Use TLS*** field is correctly set.
2. Enter the port number to use in the ***Port*** field.

## Using a Random Nickname

When you have a lot of IRC nodes running at once, their nicknames can conflict. By default the node will add underscores to try and find an unused nickname. This isn't perfect, but should work fine in most cases.

You can use this expression in the ***Nickname*** field to automatically select a random nickname each time the node runs (you can click on ***Add Expression*** and paste this):

```
n8n-{{Math.floor(Math.random()*1000).toString().padStart(4,'0')}}
```

## Logging into an Account

Most IRC networks let you use SASL to login to your account. For example, the Libera.Chat SASL configuration page is [here](https://libera.chat/guides/sasl).

To configure SASL, you can do the following.

1. Change the ***Account Login*** field to SASL PLAIN.
2. Enter your account name in the **Account Name** field.
3. Enter your account password in the **Account Password** field.
4. Confirm the ***Only connect if SASL is successful*** field is correctly set. When set, the IRC node will fail if it can't login to your account.

```
TODO: picture of the SASL details inserted
```
