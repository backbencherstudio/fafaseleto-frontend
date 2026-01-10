import { CustomButton } from "@/components/reuseable/CustomButton";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-11 min-h-[calc(100vh-300px)] px-4">
      {/* Responsive image */}
      <div className="relative w-full max-w-[435px] aspect-[435/271]">
        <Image
          src="/success-payment.svg"
          alt="success-img"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="flex flex-col items-center gap-[30px]">
        <p className="max-w-[431px] text-[color:var(--1,#0D1B2A)] text-center text-xl md:text-3xl font-semibold leading-[normal]">
          Votre paiement a été effectué avec succès.
        </p>

        <CustomButton>Accéder au tableau de bord</CustomButton>
      </div>
    </div>
  );
}
