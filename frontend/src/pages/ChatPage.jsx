import { useAuthStore } from '../store/useAuthStore'; 
// adjust the path depending on where your store file is

function ChatPage() {
  const { authUser, isoloading, login } = useAuthStore();
  return (
    <div>ChatPage</div>
  )
}

export default ChatPage