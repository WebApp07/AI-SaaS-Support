import { atom } from "jotai"
import { atomFamily } from "jotai-family"
import { WidgetScreen } from "../types"
import { atomWithStorage } from "jotai/vanilla/utils"
import { Id } from "@workspace/backend_generated/dataModel"

// Basic widget state atoms
export const screenAtom = atom<WidgetScreen>("loading")
export const organizationIdAtom = atom<string | null>(null)

// Organization-scoped contact session atoms
export const contactSessionIdAtomFamily = atomFamily((organizationId: string) =>
  atomWithStorage<Id<"contactSessions"> | null>(
    `CONTACT_SESSION_KEY${organizationId}`,
    null
  )
)

export const errorMessageAtom = atom<string | null>(null)
export const loadingMessageAtom = atom<string | null>(null)
export const conversationIdAtom = atom<Id<"conversations"> | null>(null)
