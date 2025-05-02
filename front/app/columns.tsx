"use client"

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner";
import { ColumnDef } from "@tanstack/react-table"
import { useState } from "react";

const url = "http://localhost:8000/api/users";
const headers = {"Content-type": "application/json"}

export type Users = {
  id_users: string
  password_users: number
  name_users: string
  email_users: string
  created_at_users: string
}

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: "id_users",
    header: "ID",
  },
  {
    accessorKey: "password_users",
    header: "Password",
  },
  {
    accessorKey: "name_users",
    header: "Name",
  },
  {
    accessorKey: "email_users",
    header: "Email",
  },
  {
    accessorKey: "created_at_users",
    header: "Created At",
  },
  {
    id: "actions",
    header: "Actions",

    cell: ({ row }) => {
      const [loading, setLoading] = useState(false)

      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [pass, setPass] = useState("")
    
      function clearState() {
        setName("")
        setEmail("")
        setPass("")
      }

      return (
          <div className="flex justify-between">
            <Button 
              className="w-full"
              onClick={
                async () => {
                  setLoading(true)
                  await fetch(`${url}/${row.original.id_users}`, {method: "DELETE"})
                  setLoading(false)
                  window.location.reload()
                }
              } 
              variant="destructive"
            >              
              { 
                loading ? (
                  <Spinner/>
                ) :
                <p>Excluir</p>
              }
            </Button>
          </div>
      )
    }
  }
]
