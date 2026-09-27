"use client"

import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div className="mx-auto w-full max-w-sm">
          <h1 className="font-medium">Hello Apps Web!</h1>
          <Button onClick={() => addUser()}>Add</Button>
          {JSON.stringify(users, null, 2)}
        </div>
      </div>
    </div>
  )
}
