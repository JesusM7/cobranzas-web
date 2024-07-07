import { Button, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import CreateCreditNotePage, { CreateCreditNoteValues } from "./CreateCreditNotePage";

export default function CreateCreditNoteModal({ initialValues }: { initialValues?: CreateCreditNoteValues }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => {
                onClose()
            }}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear una nota de crédito</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <CreateCreditNotePage initialValues={initialValues}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Button leftIcon={<Icon as={MdAdd} />} size={'sm'} colorScheme="secondary" onClick={() => onOpen()}>Crear NC</Button>
        </>
    )
}