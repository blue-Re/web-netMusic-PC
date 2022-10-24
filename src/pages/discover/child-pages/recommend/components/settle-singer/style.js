import styled from 'styled-components';

export const SettleSingerWrapper = styled.div`
  // height: 300px;
  padding: 20px;
  // background-color: pink;
  
  .top-info{
    display: flex;
    justify-content: space-between ;
    border-bottom: 1px solid ;

    .settle-singers {
      font-weight: bold;
    }

    .find-all {
      text-decoration: none;
    }
  }

  .avatar{
    height: 62px;
    width: 62px;

    &:hover {
      cursor: pointer;
    }
  }

  .footer-button {
    text-align: center;
  }
`