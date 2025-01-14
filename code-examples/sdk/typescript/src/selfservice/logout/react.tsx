import { Configuration, FrontendApi } from "@ory/client"

const ory = new FrontendApi(
  new Configuration({
    basePath: "http://localhost:4000", // Use your local Ory Tunnel URL
    baseOptions: {
      withCredentials: true,
    },
  }),
)

export function Logout() {
  const handleLogout = async () => {
    try {
      // Create a "logout flow" in Ory Identities
      const { data: flow } = await ory.createBrowserLogoutFlow()
      // Use the recieved token to "update" the flow and thus perform the logout
      await ory.updateLogoutFlow({
        token: flow.logout_token,
      })
    } catch (error) {
      // The user could not be logged out
      // This typically happens if the token does not match the session,
      // or is otherwise malformed or missing
    }

    // Logout was succesful
  }

  return <button onClick={handleLogout}>Logout</button>
}
