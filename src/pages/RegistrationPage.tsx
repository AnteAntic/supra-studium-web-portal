import { useEffect } from 'react';

export default function RegistrationPage() {
  useEffect(() => {
    // Redirect to external form immediately
    window.location.href = 'https://tally.so/r/wA5kvD';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg">Preusmjeravamo vas na formu za prijavu...</p>
      </div>
    </div>
  );
}