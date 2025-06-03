import { mixins } from "@/GlobalThemes/mixins";
import styled from "styled-components";


export const ContainerHome = styled.div<{bgShort: string}> `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 594px;
  background-image: url(${({ bgShort }) => bgShort});
  background-repeat: no-repeat;
  background-size: cover;    // ou 'contain' se preferir
  background-position: center;

`

export const Content = styled.div`
   
  max-width: 1160px;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 56px;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }

`


export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.colors['base-title']}
  }

  > span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`