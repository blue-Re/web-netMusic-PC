import styled from 'styled-components';

export const HotAnchorWrapper = styled.div`
  padding: 10px 20px;
  // background: pink;

  .top-info{
    font-weight: bold;
    border-bottom: 1px solid gray;
  }

  .avatar{
    height: 40px;
    width: 40px;

    &:hover {
      cursor: pointer;
    }
  }

  .ant-list-item-meta-description{
    font-size: 12px;
  }
`