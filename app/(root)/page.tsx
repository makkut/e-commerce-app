"use client";
import { StoreModal } from "@/components/modals/store-modal";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const { isOpen, onOpen } = useStoreModal();
  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return (
    <div className="p-4">
      <StoreModal />
    </div>
  );
};
export default SetupPage;
