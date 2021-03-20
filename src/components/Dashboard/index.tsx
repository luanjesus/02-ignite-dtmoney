import { Container } from "./styles";
import { Summary } from "../Summary/index"
import { TransactionTable } from "../TransactionsTable/index";

export function Dashboard() {
    return(
        <Container>
            <Summary/>            
            <TransactionTable />
        </Container>
    );
} 