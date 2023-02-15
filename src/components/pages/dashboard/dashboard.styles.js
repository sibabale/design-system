import styled from "styled-components";
import colors from "../../../theme/colors";

export const SectionOne = styled.section`
  display: flex;
  height: 350px;
  margin-top: 20px;
  justify-content: space-between;
`;

export const SectionTwo = styled.section`
  width: 100%;
`;

export const ChartSection = styled.div`
  width: 76%;
  margin-right: 30px;
`;

export const Transactions = styled.div`
  height: 90%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const ChartSettings = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const DownloadButton = styled.div`
  margin-left: 20px;
`;

export const Transaction = styled.div`
  display: flex;
  padding: 20px 0;
  align-items: top;
  justify-content: space-between;
`;

export const TransactionIndividual = styled.p`
  font-weight: bold;
  margin-left: 15px;
`;
export const TransactionPrice = styled.p`
  color: ${colors.base["tertiary-300"]};
  margin-left: 15px;
`;

export const TransactionCopy = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
`;

export const ProductRow = styled.div`
  margin: 10px 0;
  display: grid;
  align-items: center;
  grid-column-gap: 40px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  h6 {
    font-weight: bold;
  }
`;

export const ProductTable = styled.div`
  margin-top: 100px;
`;
export const ProductImage = styled.img`
  width: 79px;
  height: 89px;
  padding: 10px 20px;
  background-color: ${colors.base["tertiary-200"]};
`;

export const Line = styled.hr`
  border: 1px solid ${colors.base["tertiary-200"]};
`;
