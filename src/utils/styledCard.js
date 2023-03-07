import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const StyledCard = styled(Card)`
${({ theme }) => `
cursor: pointer;
transition: ${theme.transitions.create(["transform"], {
duration: theme.transitions.duration.standard,
})};
&:hover {
transform: scale(1.1);
}
`}
`;