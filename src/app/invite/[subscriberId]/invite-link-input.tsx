"use client"

import { Copy, Link } from "lucide-react"
import { IconButton } from "@/components/iconButton"
import { InputField, InputIcon, InputRoot } from "@/components/input"

interface InputLinkProps{
  inviteLink: string
}

export function InviteLinkInput({inviteLink}:InputLinkProps) {
  function copyInviteLink(){
    navigator.clipboard.writeText(inviteLink)
  }
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField 
        readOnly 
        defaultValue={inviteLink}
      />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
