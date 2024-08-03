import { Button, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { Invoice } from "../../../../hooks/useInvoices";
import CreateDebitNotePage, { CreateDebitNoteValues } from "./CreateDebitNotePage";

export default function CreateDebitNoteModal({ initialValues, invoice }: { invoice: Invoice, initialValues?: CreateDebitNoteValues }) {

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
                        <CreateDebitNotePage
                            onCompleted={() => onClose()}
                            initialValues={initialValues} invoice={invoice} />
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Button leftIcon={<Icon as={MdAdd} />} size={'sm'} colorScheme="secondary" onClick={() => onOpen()}>Crear ND</Button>
        </>
    )
}