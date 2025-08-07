'use client';

import React, { useState } from 'react';

import Modal from '@/app/components/modal/Modal';

const PrivacyConsentModalContent = ({ onAgree }: { onAgree: () => void }) => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-gray-700">개인정보 수집 및 이용 동의</h2>
      <div className="bg-gray-100 p-4 h-40 overflow-y-auto mb-4 text-sm text-gray-700">
        <p>
          본 서비스는 원활한 회원가입을 위해 다음과 같은 개인정보를 수집 및 이용합니다.
        </p>
        <p>- 수집 항목: 이메일, 비밀번호</p>
        <p>- 이용 목적: 회원 식별, 서비스 제공 및 상담</p>
        <p>... (약관 내용)</p>
        <p>
          본 서비스는 원활한 회원가입을 위해 다음과 같은 개인정보를 수집 및 이용합니다.
        </p>
        <p>- 수집 항목: 이메일, 비밀번호</p>
        <p>- 이용 목적: 회원 식별, 서비스 제공 및 상담</p>
        <p>... (약관 내용)</p>
        <p>
          본 서비스는 원활한 회원가입을 위해 다음과 같은 개인정보를 수집 및 이용합니다.
        </p>
        <p>- 수집 항목: 이메일, 비밀번호</p>
        <p>- 이용 목적: 회원 식별, 서비스 제공 및 상담</p>
        <p>... (약관 내용)</p>
        <p>
          본 서비스는 원활한 회원가입을 위해 다음과 같은 개인정보를 수집 및 이용합니다.
        </p>
        <p>- 수집 항목: 이메일, 비밀번호</p>
        <p>- 이용 목적: 회원 식별, 서비스 제공 및 상담</p>
        <p>... (약관 내용)</p>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="privacy-check"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="privacy-check" className="text-sm text-gray-700">위 약관에 동의합니다.</label>
      </div>
      <button
        onClick={onAgree}
        disabled={!agreed}
        className={`w-full py-2 rounded-md transition ${
          agreed ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        동의하고 계속하기
      </button>
    </div>
  );
};
type ModalPrivacyProps = {
  showModal: boolean;
  onAgree?: () => void; 
  onCancel?: () => void;
}

export default function ModalPrivacy({
  showModal,
  onAgree = () => {}, 
  onCancel = () => {},
}:ModalPrivacyProps) {
  

  return (
    <Modal isOpen={showModal} onClose={() =>onCancel()}>
        <PrivacyConsentModalContent onAgree={onAgree} />
    </Modal>
  );
}