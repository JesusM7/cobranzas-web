import { Tag } from "@chakra-ui/react";

export default function InvoicePendingAmount({ amount, charged }: { amount: number, charged: number }) {

    const getColor = () => {
        const percentage = (charged / amount) * 100;
        if (percentage === 100) {
            return 'teal';
        } else if (percentage > 50) {
            return 'yellow';
        }
        return 'red';
    }

    return <Tag colorScheme={getColor()}>{amount - charged} USD</Tag>
}