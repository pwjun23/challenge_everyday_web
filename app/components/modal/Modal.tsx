import React from 'react';

interface ModalProps {
  isOpen: boolean; // 모달을 열고 닫는 상태
  onClose: () => void; // 모달 닫기 함수 (ESC, 오버레이 클릭 등)
  children: React.ReactNode; // 모달 내부에 렌더링될 콘텐츠
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center"
      onClick={onClose} // 오버레이 클릭 시 모달 닫기
    >
      <div
        className="relative p-8 bg-white w-96 max-w-lg mx-auto rounded-md shadow-lg"
        onClick={e => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록 이벤트 전파 중단
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;