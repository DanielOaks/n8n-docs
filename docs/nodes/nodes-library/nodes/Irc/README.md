---
permalink: /nodes/n8n-nodes-base.irc
description: Learn how to use the IRC node in n8n
---

# Internet Relay Chat (IRC)

IRC is a messaging protocol that's been in use for over 25 years, with many clients and servers available.

::: tip 🔑 Credentials
You can find authentication information for this node [here](../../../credentials/Irc/README.md).
:::

## Basic Operations

- Send messages to an IRC Channel

## Example Usage

This workflow lets you send messages to an IRC channel. This example workflow uses the following two nodes.
- [Start](../../core-nodes/Start/README.md)
- [IRC]()

The final workflow should look like the following image.
```
TODO: screenshot of workflow.
```

### 1. Start node

The start node exists by default when you create a new workflow.

### 2. IRC node

1. First of all, you'll have to enter credentials for the IRC node (including the network details, nickname, and optionally account name). You can find out how to do that [here](../../../credentials/Irc/README.md).
2. Enter the channel name into the ***Channel Name*** field.
3. Enter your message in the ***Text*** field.
4. By default the n8n bot will join the channel. If you channel is configured correctly (with a command like `/mode #mychannel -n` to disable the No External Messages mode), you can disable the ***Join Channel*** field.
5. If your channel has a key configured to restrict joining, enter it into the ***Channel Key*** field.
6. Select the message type from the ***Message Type*** dropdown. Privmsg or Emote are recommended because Notices can display badly in some clients.
7. The ***Output Raw Logs*** field is useful with the ***Continue On Fail*** setting, to debug IRC protocol issues. For normal use, you can leave this field disabled.
8. Click on ***Execute Node*** to run the workflow.

```
TODO: picture of the IRC node configured correctly.
```


<!-- ## Further Reading

<FurtherReadingBlog /> -->
