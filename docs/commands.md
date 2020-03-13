# 🤖 Commands

## Anywhere on the inbox server
`n!logs <user> <page>` Lists previous modmail logs with the specified user. If there are a lot of logs, they will be paginated. In this case, you can specify the page number to view as the second argument.  
`n!block <user> <time>` Blocks the specified user from using modmail. If a time is specified, the block is temporary.  
`n!unblock <user> <time>` Unblocks the specified user from using modmail. If a time is specified, the user will be scheduled to be unblocked after that time.  
`n!is_blocked <user>` Checks whether the user is blocked and for how long  
`n!s <shortcut> <text>` Adds a snippet (a canned response). Supports {1}, {2}, etc. for arguments. See below for how to use it.  
`n!edit_snippet <shortcut> <text>` Edits an existing snippet (alias `!es`)  
`n!delete_snippet <shortcut>` Deletes the specified snippet (alias `!ds`)  
`n!snippets` Lists all available snippets  
`n!version` Print the version of the bot you're running  
`n!newthread <user>` Opens a new thread with the specified user  

## Inside a modmail thread
`n!reply <text>` Sends a reply to the user in the format "(Role) User: text" (alias `!r`)  
`n!anonreply <text>` Sends an anonymous reply to the user in the format "Role: text" (alias `!ar`)  
`n!close <time>` Closes the modmail thread. If a time is specified, the thread is scheduled to be closed later. Scheduled closing is cancelled if a message is sent to or received from the user.  
`n!logs <page>` Lists previous modmail logs with this user. If there are a lot of logs, they will be paginated. In this case, you can specify the page number to view as an argument.  
`n!block <time>` Blocks the user from using modmail. If a time is specified, the block is temporary.  
`n!unblock <time>` Unblocks the user from using modmail. If a time is specified, the user will be scheduled to be unblocked after that time.  
`n!!shortcut` Reply with a snippet. Replace `shortcut` with the snippet's actual shortcut.  
`n!!!shortcut` Reply with a snippet anonymously. Replace `shortcut` with the snippet's actual shortcut.  
`n!move <category>` If `allowMove` is enabled, moves the thread channel to the specified category  
`n!loglink` Shows the link to the current thread's log  
`n!suspend` Suspend a thread. The thread will act as closed and not receive any messages until unsuspended.  
`n!unsuspend` Unsuspend a thread  
`n!id` Prints the user's ID  
`n!alert` Pings you when the thread gets a new reply. Use `!alert cancel` to cancel.  

To automatically reply without using !reply or !r, [enable `alwaysReply` in the config](configuration.md).
