import { Button, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import CreateCharges, { CreateCharge } from "./CreateCharge";
import { MdAdd } from "react-icons/md";

export default function CreateChargesModal({ initialValues, invoiceNumber }: { invoiceNumber: number, initialValues?: CreateCharge }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => {
                onClose()
            }}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear un abono</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <CreateCharges invoiceNumber={invoiceNumber} initialValues={initialValues} />
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Button leftIcon={<Icon as={MdAdd} />} size={'sm'} colorScheme="secondary" onClick={() => onOpen()}>Crear abono</Button>
        </>
    )
}