import { ConvexError, v } from "convex/values"
import { mutation, query } from "../_generated/server.js"

export const getOne = query({
  args: {
    conversationId: v.id("conversations"),
    contactSessionId: v.id("contactSessions"),
  },
  handler: async (ctx, args) => {
    const session = await ctx.db.get(args.contactSessionId)

    if (!session || session.expiresAt < Date.now()) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "invalid or expired",
      })
    }

    const conversation = await ctx.db.get(args.conversationId)
    if (!conversation) {
      throw new ConvexError({
        code: "NOT_FOUND",
        message: "conversation not found",
      })
    }

    return {
      _id: conversation._id,
      threadId: conversation.threadId,
      status: conversation.status,
    }
  },
})

export const create = mutation({
  args: {
    organizationId: v.string(),
    contactSessionId: v.id("contactSessions"),
  },
  handler: async (ctx, args) => {
    const session = await ctx.db.get(args.contactSessionId)

    if (!session || session.expiresAt < Date.now()) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "invalid or expired",
      })
    }

    const conversationId = await ctx.db.insert("conversations", {
      threadId: crypto.randomUUID(),
      organizationId: args.organizationId,
      contactSessionId: args.contactSessionId,
      status: "unresolved",
    })

    return conversationId
  },
})
