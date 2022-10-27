import styled from "styled-components";

export const PlayListAllSongsWrapper = styled.div`
  padding: 20px 30px;
  // background: pink;
  // border: 1px solid;

  .top-header-wrapper{
    .top-header{
      display: flex;
      // justify-content: space-around;
      align-items: center;

      .top-avatar{
        height: 150px;
        width: 150px;
      }

      .right-context{
        margin-left: 30px;

        .top-text {
          .title {
            font-size: 17px;
          }
  
          .text {
            font-size: 12px;
          }
        }

        .bottom-buttons {
          padding: 10px 0;
          button {
            margin: 0 5px;
          }
        }
      }
    }
  }

  .bottom-content {
    padding: 20px 0 0px 0;
    .bottom-title{
      display: flex;
      justify-content: space-between;
      align-items: center; 
      border-bottom: 5px solid red;

      .song-lists{
        font-size: 18px;
      }
    }
  }

  .ant-table-cell .table-title{
    display: flex;
    &:hover {
      .operate {
        display: block;
      }
    }
    .operate {
      display: flex;
      align-items: center;
      display: none;
      width: 82px;
  
      .btn {
        width: 17px;
        height: 17px;
        margin-left: 8px;
        cursor: pointer;
      }
  
      .play {
        background-position: -267px -268px;
      }
  
      .addto {
        position: relative;
        top: 2px;
        background-position: 0 -700px;
      }
  
      .favor {
        background-position: -297px -268px;
      }
    }
  }
`