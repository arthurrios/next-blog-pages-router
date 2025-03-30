type UserListProps = {
  id: number
  name: string
}

async function fetchUsers(): Promise<UserListProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
      ])
    }, 2000)
  })
}

async function UserList() {
  const userList = await fetchUsers()
  console.log('server', userList)

  return (
    <div className="mt-20 text-white">
      {userList.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default function UserListPage() {
  return (
    <div>
      <h1>Users</h1>
      <UserList />
    </div>
  )
}
