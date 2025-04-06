import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import EmailStep from '../Steps/EmailStep';
import OtpStep from '../Steps/OtpStep';

const ForgotPasswordCard = () => {
  const [step, setStep] = useState<'email' | 'otp'>('email');

  return (
    <Card className="w-[400px] h-[250px] relative overflow-hidden p-3">
      <CardContent>

        {/* step 1 verify email*/}

          {step === 'email' && (
            <motion.div
              key="email"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <EmailStep onVerified={() => setStep('otp')} />
            </motion.div>
          )}

          {/* step 2 Eter otp */}

          {step === 'otp' && (
            <motion.div
              key="otp"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <OtpStep />
            </motion.div>
          )}

          {/* step3 new Password */}



      </CardContent>
    </Card>
  );
};

export default ForgotPasswordCard;