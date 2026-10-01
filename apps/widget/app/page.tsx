"use client"

import { useVapi } from "@/modules/hooks/use-vapi"
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  const {
    isSpeaking,
    isConnecting,
    isConnected,
    transcript,
    startCall,
    endCall,
  } = useVapi()
  return (
    <div className="flex min-h-svh p-6">
      <Button onClick={() => startCall()}>Start call</Button>
      <Button onClick={() => endCall()} variant="destructive">
        End call
      </Button>
      <p>isConnected: {`${isConnected}`}</p>
      <p>isConnecting: {`${isConnecting}`}</p>
      <p>isSpeaking: {`${isSpeaking}`}</p>
      <p>{JSON.stringify(transcript, null, 2)}</p>
    </div>
  )
}
