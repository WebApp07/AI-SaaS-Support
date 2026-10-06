"use client"

import { useAtomValue } from "jotai"
import { WidgetAuthScreen } from "../screens/widget_auth-screen"
import { screenAtom } from "../../atoms/widget-atoms"

interface Props {
  organizationId: string
}

export const WidgetView = ({ organizationId }: Props) => {
  const screen = useAtomValue(screenAtom)
  const screenComponents = {
    error: <p>TODO: Error</p>,
    loading: <p>TODO: LOADING</p>,
    auth: <WidgetAuthScreen />,
    voice: <p>TODO: VOICE</p>,
    inbox: <p>TODO: INBOX</p>,
    selection: <p>TODO: SELECTION</p>,
    chat: <p>TODO: CHAT</p>,
    contact: <p>TODO: CONTACT</p>,
  }
  return (
    <main className="flex h-full min-h-screen w-full min-w-screen flex-col overflow-hidden rounded-xl border bg-muted">
      {screenComponents[screen]}
    </main>
  )
}
