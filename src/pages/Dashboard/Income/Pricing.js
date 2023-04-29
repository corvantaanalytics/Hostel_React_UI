import { API } from 'lib/api';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function PricingPage() {
  const [user, setUser] = useState(null);
  const getU = async () => {
    try {
      let u = await API.getUserInfo();
      // console.log({u})
      setUser(u)
    } catch (e) {
      // alert('Error fetching user, login to continue');
      // toast.error('Could not find user for subscription page. Ensure you are logged in before proceeding');
    }
  }

  useEffect(() => {
    getU();
  }, [])

  if (!user) {
    return null;
  }


  // Paste the stripe-pricing-table snippet in your React component
  return (
    <stripe-pricing-table
      pricing-table-id="prctbl_1Movi5CVNbKiXQCxrGQaDx8N"
      publishable-key="pk_test_urcWnrkfwv1oBOrZe4Y7cXBk00v1aP7D2i"
      client-reference-id={user ? user.id : 35}
      customer-email={user ? user.email : ''}
    >
    </stripe-pricing-table>
  );
}

export default PricingPage;