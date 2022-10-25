import styled from "styled-components";

export const SpecialListWrapper = styled.div`

  // padding: 0 20px;

  .special-title{
    padding: 0 20px;
    font-size: 14px;
    font-weight: bold;
    padding-top: 30px;
  }

  .special-list-item{
    padding: 0 20px;
    cursor: pointer;

    &:hover{
      background-color: rgba(0,0,0,0.1)
    }

    .all-earth-title{
      font-weight: bold;
    }
  }

  .ant-list-item-meta-description{
    font-size: 12px;
  }
`