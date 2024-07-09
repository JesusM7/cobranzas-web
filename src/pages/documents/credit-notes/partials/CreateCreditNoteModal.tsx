import { Button, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import CreateCreditNotePage, { CreateCreditNoteValues } from "./CreateCreditNotePage";
import { Invoice } from "../../../../hooks/useInvoices";

export default function CreateCreditNoteModal({ initialValues, invoice }: { invoice: Invoice, initialValues?: CreateCreditNoteValues }) {

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
                        <CreateCreditNotePage initialValues={initialValues} invoice={invoice} />
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Button leftIcon={<Icon as={MdAdd} />} size={'sm'} colorScheme="secondary" onClick={() => onOpen()}>Crear NC</Button>
        </>
    )
}