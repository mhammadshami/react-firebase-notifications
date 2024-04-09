import { useEffect } from 'react'
import { generateToken , messaging} from './notifications/firebase';
import { onMessage } from 'firebase/messaging';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  useEffect(()=>{
    generateToken();
    onMessage(messaging, (payload) => {
      toast(payload.notification.body);
    })
  }, []);

  return (
    <div>
      app
      <Toaster />
    </div>
  )
}

export default App