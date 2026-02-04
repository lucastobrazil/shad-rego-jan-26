import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/vitality/ui/input-otp";
import type { Demo } from "../types";

export const inputOtpDemo: Demo = {
  id: "input-otp",
  title: "Input OTP",
  description:
    "Accessible one-time password component with copy paste functionality.",
  componentName: "input-otp",
  isOfficial: false,
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
};
