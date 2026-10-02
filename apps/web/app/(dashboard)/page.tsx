"use client"

import { Authenticated, Unauthenticated } from "convex/react"
import { SignInButton } from "@clerk/nextjs"

export default function Page() {
  return (
    <>
      <Authenticated>
        <div className="flex min-h-svh p-6">
          <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
            <div className="mx-auto w-full max-w-sm">
              <h1 className="font-medium">Hello Apps Web!</h1>
            </div>
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <p>Must be signed in!</p>
        <SignInButton>Sign in!</SignInButton>
      </Unauthenticated>
    </>
  )
}
