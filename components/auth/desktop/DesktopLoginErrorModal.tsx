import Image from "next/image";

type LoginErrorModalProps = {
  onClose: () => void;
};

function DesktopLoginErrorModal({ onClose }: LoginErrorModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-111 bg-white rounded-lg p-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image src="/cross.png" alt="tick" width={140} height={140} />
          <p className="font-medium text-3xl text-error">Oops.</p>
          <p className="font-light text-lg text-gray-700">
            Unfortunately, there was a problem during creating your account. try
            again later.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DesktopLoginErrorModal;
