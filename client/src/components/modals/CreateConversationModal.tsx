import React, { createRef, Dispatch, FC, SetStateAction, useEffect } from 'react';
import { OverlayStyle } from '../../utils/styles';
import { CreateConversationForm } from '../forms';
import { ModalContainer, ModalContentBody, ModalHeader } from './index';
import { MdClose } from 'react-icons/md'

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>
}

export const CreateConversationModal: FC<Props> = ({ setShowModal }) => {
  const ref = createRef<HTMLDivElement>()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && setShowModal(false)
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setShowModal])

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { current } = ref
    if (current === e.target) {
      console.log('Close Modal')
      setShowModal(false)
    }
  }

  return <OverlayStyle ref={ref} onClick={handleOverlayClick}>
    <ModalContainer>
      <ModalHeader>
        <h2>Create a Conversation</h2>
        <MdClose size={32} cursor='pointer' onClick={() => setShowModal(false )}/>
      </ModalHeader>
      <ModalContentBody>
        <CreateConversationForm/>
      </ModalContentBody>
    </ModalContainer>
  </OverlayStyle>
};

